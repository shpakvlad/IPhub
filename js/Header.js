class Header {
  selectors = {
    root: '[data-js-header]',
    menu: '[data-js-menu]',
    burgerButton: '[data-js-burger-button]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLocked: 'is-locked',
  }

  bindEvents = () => {
    this.burgerButtonElement.addEventListener('click', this.onBurgerClick);
  }

  onBurgerClick = () => {
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLocked);
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(this.selectors.menu);
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
    this.bindEvents();
  }
}

export default Header;
