function toggleTheme() {
  document.body.classList.toggle("dark")
  saveThemePreference()
}
function isDOMLoaded(){
  return document.readyState == 'complete'
 }

function setThemeIcon() {
  if (!isDOMLoaded()) {
    return
  }
  if (isDarkTheme()) {
    document.getElementById('icon-light').style.display = 'none'
    document.getElementById('icon-dark').style.display = 'block'
  } else {
    document.getElementById('icon-light').style.display = 'block'
    document.getElementById('icon-dark').style.display = 'none'
  }
}

function setDarkTheme() {
  document.body.classList.add('dark')
  saveThemePreference()
}

function setLightTheme() {
  document.body.classList.remove('dark')
  saveThemePreference()
}

function isDarkTheme() {
  return document.body.classList.contains('dark')
}

function saveThemePreference() {
  isDarkTheme() ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
}

function onClassChange(node, callback) {
  let lastClassString = node.classList.toString()

  const mutationObserver = new MutationObserver((mutationList) => {
    for (const item of mutationList) {
      if (item.attributeName === "class") {
        const classString = node.classList.toString()
        if (classString !== lastClassString) {
          callback(mutationObserver)
          lastClassString = classString
          break
        }
      }
    }
  })

  mutationObserver.observe(node, { attributes: true })

  return mutationObserver
}

onClassChange(document.body, (observer) => {
  setThemeIcon()
})

function detectColorScheme() {
  setThemeIcon()

  switch (localStorage.getItem('theme')) {
    case 'dark':
      setDarkTheme()  
      break;
    case 'light':
      setLightTheme()
      break;
    default:
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkTheme() // User prefers dark mode
      } else {
        setLightTheme() // User prefers light mode
      }
  }
}

function onBodyLoad() {
  document.getElementById('currentYear').innerHTML = new Date().getFullYear()
  setThemeIcon()
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectColorScheme)

detectColorScheme()