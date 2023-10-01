export default class Collapsible {
  constructor(element, animatedElement) {
    this.element = element;
    this.animatedElement = animatedElement;

    this.collapseElement = this.collapseElement.bind(this);
    this.element.addEventListener('click', this.collapseElement)

  }

  collapseElement(e) {
    e.preventDefault();
    console.log('click');
    // this.animatedElement.classList.toggle('collapse-initial');
    // this.animatedElement.classList.replace('collapse-first', 'collapse-animation');
    // this.animatedElement.classList.toggle('collapse-first');
    // this.animatedElement.firstElementChild.classList.add('collapse-animation');
    if (!this.animatedElement.classList.contains('collapse-animation')) {
      // this.animatedElement.style.maxHeight = 0;
      if (this.animatedElement.classList.contains('collapse-animation-reverse')) {
        this.animatedElement.classList.remove('collapse-animation');
      } // убрать
      this.animatedElement.classList.add('collapse-animation');
      // this.animatedElement.style.maxHeight = this.animatedElement.offsetHeight;
      return;
    }
    /* if (this.animatedElement.classList.contains('collapse-animation-reverse')) {
      this.animatedElement.classList.add('collapse-animation');
      this.animatedElement.classList.remove('collapse-animation-reverse');
      return;
    } */
    if (this.animatedElement.classList.contains('collapse-animation')) {
      this.animatedElement.style.maxHeight = this.animatedElement.offsetHeight;
      this.animatedElement.classList.remove('collapse-animation');

      this.animatedElement.classList.add('collapse-animation-reverse');

    }
    // this.animatedElement.classList.add('collapse-animation-reverse');

    // this.animatedElement.style.height = '100px';

  }
}
