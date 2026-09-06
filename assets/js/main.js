const menuButton = document.querySelector('[data-menu-button]')
const menu = document.querySelector('[data-menu]')

if (menuButton && menu) {
  const closeMenu = () => {
    menu.classList.remove('is-open')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Abrir menu')
    document.body.classList.remove('menu-open')
  }

  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open')
    menuButton.setAttribute('aria-expanded', String(isOpen))
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu')
    document.body.classList.toggle('menu-open', isOpen)
  })

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu))
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu()
  })
}
