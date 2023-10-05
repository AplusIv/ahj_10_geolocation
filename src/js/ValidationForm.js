export default class ValidationForm {
  constructor(form, validateCoords) {
    this.form = form;
    this.validateCoords = validateCoords;
    this.formatedCoords = '[]';

    // this.coords = '';

    this.validateData = this.validateData.bind(this);
    this.form.addEventListener('submit', this.validateData);

    this.close = this.close.bind(this);
    this.form.addEventListener('click', this.close);
  }

  getCoords(coords) {
    // const element = post;
    // element.querySelector('.geolocation').textContent = coords;
    this.formatedCoords = coords;
  }

  // promise(coords) {
  //   return new Promise((resolve, reject) => {
  //     resolve(coords);
  //   });
  // }

  promise2() {
    return new Promise((resolve, reject) => {
      resolve(this.formatedCoords);
    });
  }

  /* async getValidCoords() {
    const result = await this.promise();
    console.log(`данные после введения вручную, полученные из промиса ${result}`);
  } */

  // eslint-disable-next-line consistent-return
  validateData(e) {
    e.preventDefault();

    // const first = [...this.form.elements].find(o => !o.validity.valid);
    const first = this.form.querySelector('.textarea');
    console.log(this.form.elements);
    console.log(first.value);

    if (first.value) {
      // console.log('submit');
      // const valid = this.validateCoords(first.value, this.coords);
      // const valid = this.validateCoords(first.value);
      const valid = this.validateCoords(first.value, this.getCoords);

      console.log(`validateCoords вернула ${valid}`);
      if (!valid) {
        first.setCustomValidity('Ошибка в переданных координатах');
        console.log(first.validity.valid);
      } else {
        console.log('submit');
        // this.coords = first.value;
        // console.log(this.coords);
        // Добавить реплейсер координат регуляркой
        // const FormatedCoords = this.getCoords;
        this.formatedCoords = valid;
        console.log(this.formatedCoords);

        first.value = '';
        this.form.classList.add('modal-hidden'); // закрываем модалку
        // return coords;
        // return;
        // return new Promise((resolve, reject) => {
        //   resolve(coords);
        // });

        // console.log(this.promise(this.formatedCoords));
        // return this.promise(this.formatedCoords);
        console.log(this.promise2());
        return this.promise2();
      }
    }

    const isValid = e.currentTarget.checkValidity();
    console.log(e.currentTarget);
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

      // return; // !!!!!

      // console.log(ValidityState.valid);
    }
  }

  close(e) {
    if (e.target.classList.contains('btn-close')) {
      e.preventDefault();
      console.log('close');
      this.form.querySelector('.textarea').value = '';
      this.form.classList.add('modal-hidden');
    }
  }
}
