---
layout: page
title: Posts
permalink: /posts/
categories: page
---
<ul class="p-changelog">
    {% for post in site.posts %}
    <li class="p-changelog-item is-unread is-visible">
        <div class="p-changelog-item-line"></div>
        <div class="p-changelog-item-bullet"></div>
        <p class="p-changelog-item-date">{{ post.date | date: "%b %-d, %Y" }}</p>
        <p class="p-changelog-item-description"><a href="{{post.url}}" title="Go to: {{post.title}}">{{post.title}}</a></p>
    </li>
    {% endfor%}
</ul>
<style type="text/css">
.p-changelog {
    position: relative;
    max-width: 600px;
    padding-left: 120px;
    margin: 80px auto 0 auto;
    font-size: 18px
}
.p-changelog .p-changelog-item {
    position: relative;
    padding: 0 25px 120px 25px;
    margin: 0;
    list-style: none;
    z-index: 2;
    border-radius: 4px
}
.p-changelog .p-changelog-item p {
    margin: 0
}

.p-changelog .p-changelog-item a {
    
}
.p-changelog .p-changelog-item-line {
    position: absolute;
    top: 0;
    left: -8px;
    width: 2px;
    bottom: 0;
    background-color: #222
}
.p-changelog .p-changelog-item:first-child .p-changelog-item-line {
    top: 13px
}
.p-changelog .p-changelog-item:last-child .p-changelog-item-line {
    height: 13px
}
.p-changelog .p-changelog-item-bullet {
    position: absolute;
    top: 3px;
    left: -20px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: #fff;
    border: 3px solid #1756a9;
    -webkit-transform: scale(0.4);
    -ms-transform: scale(0.4);
    transform: scale(0.4);
    -webkit-transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.15s !important;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.15s !important
}
.p-changelog .p-changelog-item.is-visible .p-changelog-item-bullet {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
}
.p-changelog .p-changelog-item-date {
    position: absolute;
    right: 100%;
    white-space: nowrap;
    padding-right: 45px;
    color: #bbb;
    opacity: 0;
    -webkit-transform: translateX(40px);
    -ms-transform: translateX(40px);
    transform: translateX(40px);
    -webkit-transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.15s !important;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.15s !important
}
.p-changelog .p-changelog-item-description {
    opacity: 0;
    -webkit-transform: translateX(-40px);
    -ms-transform: translateX(-40px);
    transform: translateX(-40px);
    -webkit-transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.15s !important;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.15s !important;
    word-break: break-word
}
.p-changelog .p-changelog-item.is-visible .p-changelog-item-date,
.p-changelog .p-changelog-item.is-visible .p-changelog-item-description {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
}
.p-changelog .p-changelog-item.is-unread .p-changelog-item-date:before {
    display: inline-block;
    position: relative;
    top: -1px;
    padding: 2px 6px;
    margin-right: 10px;
    border-radius: 2px;
    font-size: 12px;
    text-transform: uppercase;
    border: 1px solid #ccc;
    color: #ccc
}
.p-changelog .p-changelog-item.is-unread .p-changelog-item-bullet {
    border-color: #2a7ae2;
}
.p-changelog .p-changelog-item.is-unread .p-changelog-item-line {
    background-color: #2a7ae2;
}
@media screen and (max-width: 750px) {
    .p-changelog {
        padding-left: 45px
    }
    .p-changelog .p-changelog-item-date {
        position: static;
        -webkit-transform: translateX(-40px);
        -ms-transform: translateX(-40px);
        transform: translateX(-40px)
    }
    .p-changelog .p-changelog-item.is-unread .p-changelog-item-date:before {
        display: none
    }
}
</style>

<script>
    (function() {
        function updateVisibleListItems( event, firstRun ) {
            var top = 0,
                bottom = window.innerHeight - 100;
            [].slice.call( document.querySelectorAll( '.p-changelog-item' ) ).forEach( function( element, i ) {
                var rect = element.getBoundingClientRect();
                if( rect.bottom >= top && rect.top <= bottom ) {
                    if( firstRun === true ) {
                        setTimeout( function() {
                            this.classList.add( 'is-visible' );
                        }.bind( element ), i * 100 );
                    }
                    else {
                        element.classList.add( 'is-visible' );
                    }
                }
                else {
                    element.classList.remove( 'is-visible' );
                }
            });
        }
        // Highlight an item as unread if the ?debug flag is present
        if( /debug/i.test( window.location.search ) ) {
            var changelogItems = [].slice.call( document.querySelectorAll( '.p-changelog-item' ) );
            if( changelogItems.length ) {
                changelogItems[0].classList.add( 'is-unread' );
            }
        }
        window.addEventListener( 'resize', updateVisibleListItems );
        window.addEventListener( 'scroll', updateVisibleListItems );
        updateVisibleListItems( null, true );
    })();
</script>