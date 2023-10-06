export default class Timeline {
  constructor(container, postModule, validationForm, geolocation) {
    this.container = container;
    this.postModule = postModule;
    this.validationForm = validationForm;
    this.geolocation = geolocation;

    this.addPost = this.addPost.bind(this);
    this.container.addEventListener('click', this.addPost);

    this.container.querySelector('textarea').addEventListener('keyup', this.addPost);

    // this.closeModal = this.closeModal.bind(this);
    // this.validationForm.form.addEventListener('click', this.closeModal);
  }

  async getCoordinates(callback, post) {
    try {
      const positionData = await this.geolocation();
      const { latitude, longitude } = positionData.coords;

      console.log(`latitude ${latitude}`);
      console.log(`longitude ${longitude}`);
      console.log(`Готов отдавать координаты [${latitude}, ${longitude}]`);
      const result = `[${latitude}, ${longitude}]`;

      callback(result, post);

      return true;
    } catch (e) {
      console.log(e);
      this.showModal();
      return null;
    }
  }

  static fillCoords(coords, post) {
    const element = post;
    element.querySelector('.geolocation').textContent = coords;
    document.querySelector('.post-container').insertAdjacentElement('afterbegin', element);
  }

  addPost(e) {
    e.preventDefault();

    if (e.target.classList.contains('btn') || e.code === 'Enter') {
      const textarea = e.target.parentElement.querySelector('textarea');
      const { value } = textarea; // без переносов строки
      if (value) {
        // const postContainer = document.querySelector('.post-container')
        const post = this.postModule.creatPost();

        post.querySelector('.post-text').textContent = value; // текст
        post.querySelector('.post-time-data').textContent = this.postModule.postTime; // не вызываем, потому что гетер

        // this.newPost = post;
        this.validationForm.newPost = post;

        this.getCoordinates(Timeline.fillCoords, post);

        console.log(value);
        textarea.value = '';
      }
    }
  }

  /* closeModal(e) {
    // e.preventDefault();

    console.log(this);
    if (e.target.classList.contains('btn-send2')) {
      //
      // this.validationForm.getValidCoords3().then(data => console.log(data));
      // console.log(this.validationForm.getValidCoords3().then(data => console.log(data)));
      // this.validationForm.getValidCoords3();
      // console.log(this.validationForm.getValidCoords3());
      // this.validationForm.validateData(e)
      // this.validationForm.form.submit();

      console.log('сохраню координаты и закрою');
      // console.log(`а вот и координаты после проверки ${this.validationForm.formatedCoords}`);
      console.log(`а вот и координаты после проверки ${this.validationForm.formatedCoords2}`);

      console.log(this.newPost);
      if (this.validationForm.formatedCoords2) {
        this.newPost.querySelector('.geolocation')
        .textContent = this.validationForm.formatedCoords2;
        // this.container.firstElementChild.appendChild(this.newPost);
        this.container.firstElementChild.insertAdjacentElement('afterbegin', this.newPost);
      }
    }
  } */

  showModal() {
    this.validationForm.form.classList.remove('modal-hidden');
  }
}
