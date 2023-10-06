import Timeline from './Timeline';

export default class ValidationForm {
  constructor(form, validateCoords) {
    this.form = form;
    this.validateCoords = validateCoords;

    this.validateData = this.validateData.bind(this);
    this.form.addEventListener('submit', this.validateData);

    this.close = this.close.bind(this);
    this.form.addEventListener('click', this.close);
  }

  // eslint-disable-next-line consistent-return
  validateData(e) {
    e.preventDefault();

    // const first = [...this.form.elements].find(o => !o.validity.valid);
    const first = this.form.querySelector('.textarea');
    console.log(this.form.elements);
    console.log(first.value);

    if (first.value) {
      const valid = this.validateCoords(first.value, this.getCoords);

      console.log(`validateCoords вернула ${valid}`);
      if (!valid) {
        first.setCustomValidity('Ошибка в переданных координатах');
        console.log(first.validity.valid);
      } else {
        console.log('submit');
        const validCoords = valid;

        first.value = '';
        this.form.classList.add('modal-hidden'); // закрываем модалку

        console.log(this.newPost);
        Timeline.fillCoords(validCoords, this.newPost);

        return true;
      }
    }

    const isValid = e.currentTarget.checkValidity();
    console.log(isValid);
    if (!isValid) {
      // first = [...this.form.elements].find(o => !o.validity.valid);
      console.log(this.form.elements);
      console.log(first);
      first.focus();
      const error = document.createElement('div');
      error.dataset.id = 'error';
      error.className = 'form-error';
      error.textContent = 'Попробуйте ещё раз. Необходимо ввести координаты широты и долготы, разделённые запятой';

      first.offsetParent.appendChild(error);
      error.style.top = `${first.offsetTop + first.offsetHeight / 2 - error.offsetHeight / 2}px`;
      error.style.left = `${first.offsetLeft + first.offsetWidth}px`;

      setTimeout(() => {
        error.remove();
      }, 3000);

      first.value = '';
    }
  }

  close(e) {
    if (e.target.classList.contains('btn-close')) {
      e.preventDefault();
      this.form.querySelector('.textarea').value = '';
      this.form.classList.add('modal-hidden');
    }
  }
}
