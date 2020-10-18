if (!String.prototype.format) { String.prototype.format = function() {var args = arguments;return this.replace(/{(\d+)}/g, function(match, number) { return typeof args[number] != 'undefined' ? args[number] : match;});};}

$(function() {
  if (window.location.hash.substr(1) === 'search') {
    openSearchDialog()
  }

  $('a[href$="#search"]').on('click', function (event) {
    openSearchDialog()
  })

  $('.search-dismiss').on('click', function (event) {
    closeSearchDialog()
  })

  $('form[name="search-form"]').submit(function (event) {
    event.preventDefault()
  })

  $('.search-input').keyup(function (e) {
    if (e.keyCode === 27) $('.search-dismiss').click()
  })

  function openSearchDialog () {
    $('html, body').css({ 'overflow': 'hidden', 'height': '100%' })
    $('.search-overlay').show()
    $('.search-input').focus()
  }

  function closeSearchDialog () {
    $('html, body').css({ 'overflow': 'auto', 'height': '100%'})
    $('.search-overlay').hide()
  }

  var searchIndex = lunr(function () {
    this.field('tags', {boost: 10})
    this.field('title')
    this.field('content')
    this.field('date')
    this.ref('url')
  })
  var searchData = []

  $.getJSON('/assets/data/search.json', function (data) {
    searchData = data
    $.each(data, function (key, val) {
      if(val) {
        searchIndex.add(val)
      }
    })
  })
  .fail(function(jqXHR, status, error) {
    if (status === 'parsererror') {
      console.log("search.json is not a valid json")
    } else {
      console.log(error)
    }
  })

  $('.search-input').on('input', function (event) {
    searchByQuery($(this).val())
  })

  function searchByQuery(query) {
    var keywords = splitQueryInToWords(query)
    var searchStatistics = getSearchStatisticsByWords(keywords)
    var searchResults = findSearchItemsByStatistics(searchData, searchStatistics)
    renderSearchResults(searchResults)
  }

  function getSearchStatisticsByWords(keywords) {
    var searchResults = []
    for (var i = keywords.length - 1; i >= 0; i--) {
      searchResults = searchResults.concat(searchIndex.search(keywords[i]))
    }
    return searchResults
  }

  function findSearchItemsByStatistics (searchJsonData, searchStatistics) {
    var foundResults = []
    for (var i = searchStatistics.length - 1; i >= 0; i--) {
      foundResults = foundResults.concat($.grep(searchJsonData, function (element, index) {
        return ( searchStatistics[i].ref === element.url)
      }))
    }
    return foundResults
  }

  function splitQueryInToWords (query) {
    return query.split(/\s+/)
  }

  function renderSearchResults (searchResults) {
    $('.search-results-list').empty()
    $('.search-null').hide()

    if(searchResults.length > 0){
      for (var i = searchResults.length - 1; i >= 0; i--) {
        $('.search-results-list').append(createSearchItem(searchResults[i]))
      }
    }
    else {
      var searchQuery = $('.search-input').val()
      if(!searchQuery) {
        $('.search-null').text("Let's find what you are looking for...")
      }
      else {
        $('.search-null').text('No results available for {0}'.format(searchQuery))
      }
      $('.search-null').show()
    }
  }

  function createSearchItem (data) {
    var template = '\
    <li class="search-result-wrapper"> \
        <article class="search-result"> \
            <a href="{0}" title="View">\
                <h1 class="search-result-title">{1}</h1>\
                <div class="search-result-subtitle">{2}</div>\
            </a>\
        </article>\
    </li>'.format(data.url, data.title, data.excerpt)
    return template
  }

  /********* Contact Form *********/
  var loaded = Date.now()

  $('#btn-submit').click(function (e) {
    $('#signclick').val('ctrl-' + Math.random().toString(36).substr(2, 5) + '-ctrl')
  })

  function renderMessages (messages) {
    var list = ''
    $.each(messages, function(index, value){
      list = list + '<br><small>' + value + '</small>'
    })
    return list
  }

  $('#contact-form').validate({
    rules: {
      message: {
        required: true
      },
      replyto: {
        required: true,
        email: true
      },
      fullname: {
        required: true
      }
    },
    submitHandler: function(form) {
      $form = $(form)
      $('#signtime').val(Date.now() - loaded)
      var action = $form.attr('action')
      var formarray = $form.serializeArray()
      var json = {}
      jQuery.each(formarray, function() {
        json[this.name] = this.value || ''
      })
      $.post(action, json, function(response, status) {
        if (status === 'success' && response.success) {
          swal({
            title: 'Thank you!',
            content: {
              element: 'div',
              attributes: {
                innerHTML: '<p>Your message has been successfully sent.</p><p>I appreciate that you’ve taken the time to write me. I’ll get back to you as soon as possible.</p>',
              }
            },
            icon: 'success',
          })
          $form.trigger('reset')
        } else {
          swal({
            title: 'Oops...',
            content: {
              element: 'p',
              attributes: {
                innerHTML: 'Something went wrong! Possible reason(s): ' + renderMessages(response.messages),
              }
            },
            icon: 'error',
          })
        }
      })
    }
  })
})
