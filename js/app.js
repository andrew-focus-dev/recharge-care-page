const animated = () => {
  const elements = document.querySelectorAll('[data-animation-classes]')

  elements.forEach(item => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          const clasess = item.target.dataset.animationClasses.split(' ')
          clasess.forEach(cls => item.target.classList.add(cls))
        }
      })
    })

    observer.observe(item)
  })
}

const accardion = () => {
  const activeItemCls = 'matters-item--active'
  const activeContentCls = 'matters-content--active'
  const items = document.querySelectorAll('[data-matters-item-id]')
  const contents = document.querySelectorAll('[data-matters-content-id]')

  const removeCls = () => {
    items.forEach(item => item.classList.remove(activeItemCls))
    contents.forEach(content => content.classList.remove(activeContentCls))
  }

  items.forEach(item => {
    item.addEventListener('click', e => {
      const current = document.querySelector(
        `[data-matters-content-id="${e.target.dataset.mattersItemId}"]`
      )

      removeCls()

      current.classList.add(activeContentCls)
      e.target.classList.add(activeItemCls)
    })
  })
}

const toggleModal = () => {
  const activeCls = 'modal--active'
  const noneCls = 'modal--none'
  const btns = document.querySelectorAll('[data-modal-open]')
  const btnCloses = document.querySelectorAll(['[data-modal-close]'])

  btnCloses.forEach(btn => {
    btn.addEventListener('click', e => {
      const modal = document.querySelector(
        `[data-modal="${e.target.dataset.modal}"]`
      )

      modal.classList.remove(activeCls)

      setTimeout(() => {
        modal.classList.add(noneCls)
      }, 300)

      document.body.style.overflow = 'auto'
    })
  })

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const modal = document.querySelector(
        `[data-modal="${e.target.dataset.modalOpen}"]`
      )

      document.body.style.overflow = 'hidden'
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      modal.classList.remove(noneCls)

      setTimeout(() => {
        modal.classList.add(activeCls)
      }, 0)
    })
  })
}

const toggleMenu = () => {
  const activeCls = 'navbar--active'
  const navbar = document.querySelector('#navbar')
  const open = document.querySelector('#navbar-open')

  open.addEventListener('click', e => {
    if (e.target.dataset.openMenu) {
      navbar.classList.add(activeCls)
    }

    if (e.target.dataset.closeMenu) {
      navbar.classList.remove(activeCls)
    }
  })
}

toggleMenu()
toggleModal()
accardion()
animated()
