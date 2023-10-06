export default class Timeline {
  constructor(container, postModule, validationForm, geolocation) {
    this.container = container;
    this.postModule = postModule;
    // this.getLocation = getLocation;
    this.validationForm = validationForm;
    this.geolocation = geolocation;

    this.addPost = this.addPost.bind(this);
    this.container.addEventListener('click', this.addPost);

    this.container.querySelector('textarea').addEventListener('keyup', this.addPost);

    this.closeModal = this.closeModal.bind(this);
    this.validationForm.form.addEventListener('click', this.closeModal);
    /* this.validateData = this.validateData.bind(this);
    this.validationForm.form.addEventListener('click', this.validateData); */
  }

  async getValidCoords() {
    const result = await this.validationForm.promise2();
    console.log(`данные после введения вручную, полученные из промиса ${result}`);
    return null;
  }

  /* getValidCoords2() {
    const result = this.validationForm.promise2().then((data) => {
      console.log(`Цепляем данные из промиса ${data}`);
    });
    console.log('Ау');
    return null;
  } */

  async getCoordinates(callback, post) {
    try {
      const positionData = await this.geolocation();
      const { latitude, longitude } = positionData.coords;

      console.log(`latitude ${latitude}`);
      console.log(`longitude ${longitude}`);
      // post.querySelector('.geolocation').textContent = `[${latitude}, ${longitude}]`;
      // return `[${latitude}: ${longitude}]`;
      // result.position = `[${latitude}, ${longitude}]`;
      // positionCheck = result;
      // console.log(positionCheck);
      console.log(`Готов отдавать координаты [${latitude}, ${longitude}]`);
      const result = `[${latitude}, ${longitude}]`;

      callback(result, post);

      return true;
      // return `[${latitude}, ${longitude}]`;

      // geolocationField = positionCheck.position;
      // this.container.firstElementChild.appendChild(post);
    } catch (e) {
      // eventBus.emit('show-modal');
      console.log(e);
      this.showModal();
      // this.getSome(this.validationForm.getValidCoords2);
      // this.validationForm.getValidCoords3();
      // this.getValidCoords2();
      // await this.validationForm.promise();
      // return null;
      // this.getValidCoords();
      // this.validationForm.getValidCoords();
      return null;
      // return this.getValidCoords2();
      // return this.getValidCoords();
    }
    // const result = await this.validationForm.promise2();
    // console.log('данные после ошибки геоданных, полученные из промиса ' + result);
    // return null;
  }

  static fillCoords(coords, post) {
    const element = post;
    element.querySelector('.geolocation').textContent = coords;
    // this.container.firstElementChild.appendChild(post);
    // this.container.firstElementChild.insertAdjacentElement('afterbegin', element);
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

        this.newPost = post;
        this.validationForm.newPost2 = post;

        const positionCheck = this.getCoordinates(Timeline.fillCoords, post);

        // this.getValidCoords();
        // this.getValidCoords2();

        // this.container.firstElementChild.insertAdjacentElement('afterbegin', post);

        /* if (typeof positionCheck === 'string') {
          post.querySelector('.geolocation').textContent = positionCheck;
          // this.container.firstElementChild.appendChild(post);
          this.container.firstElementChild.insertAdjacentElement('afterbegin', post);
        } */

        // post.querySelector('.geolocation').textContent = this.getLocation();

        // const geolocationField = post.querySelector('.geolocation').textContent;
        // this.getLocation(geolocationField);

        /* if (navigator.geolocation) {
          // console.log(navigator.geolocation);
          navigator.geolocation.getCurrentPosition(
            (data) => {
            const { latitude, longitude } = data.coords;

            console.log('latitude ' + latitude);
            console.log('longitude ' + longitude);
            post.querySelector('.geolocation').textContent = `[${latitude}: ${longitude}]`;
          }, (err) => {
            // return err
            console.log(err);
            return err;
          },
          { enableHighAccuracy: true})
        }; */ // Работающий вариант геопозиции

        /* const geolocation = navigator.geolocation.getCurrentPosition(
          (data) => {
          const { latitude, longitude } = data.coords;

          console.log('latitude ' + latitude);
          console.log('longitude ' + longitude);
          post.querySelector('.geolocation').textContent = `[${latitude}, ${longitude}]`;
          // return `[${latitude}: ${longitude}]`;
        }, (err) => {
          // return err
          console.log(err);

          this.showModal();
          return err;
        },
        { enableHighAccuracy: true}); */ // Готовый вариант

        /* let positionCheck = {
          position: true,
          error: false,
        };

        if (navigator.geolocation) {
          (() => {
            const result = {
              // position: ,
              // error,
            };

            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;

                console.log(`latitude ${latitude}`);
                console.log(`longitude ${longitude}`);
                // post.querySelector('.geolocation').textContent = `[${latitude}, ${longitude}]`;
                // return `[${latitude}: ${longitude}]`;
                result.position = `[${latitude}, ${longitude}]`;
                positionCheck = result;
                console.log(positionCheck);
                post.querySelector('.geolocation').textContent = positionCheck.position;
                // this.container.firstElementChild.appendChild(post);
                this.container.firstElementChild.insertAdjacentElement('afterbegin', post);
              },
              (err) => {
                // return err
                console.log(err);
                result.error = err;
                console.log(result.error);
                positionCheck = result;
                console.log(positionCheck);
                this.showModal();

                this.closeModal(e);
                // this.validateData(e)

                // if (this.validationForm.coords) {
                //   post.querySelector('.geolocation').textContent = this.validationForm.coords;
                //   this.container.firstElementChild.appendChild(post);
                // }

              // return err;
              },
              { enableHighAccuracy: true },
            );
            // return result;
            // console.log(result);
            // positionCheck = result;
            // console.log(positionCheck);
          })();
        } */ // 3-й вариант

        // error geolocation

        // this.showModal();

        // this.validationForm.validateData(); // ?

        // this.container.firstElementChild.appendChild(post) // Доделать
        // e.target
        //   .closest('.column')
        //   .querySelector('.content')
        //   .appendChild(TaskManager.newNote(value));
        console.log(value);
        textarea.value = '';
      }
    }
  }

  closeModal(e) {
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
        this.newPost.querySelector('.geolocation').textContent = this.validationForm.formatedCoords2;
        // this.container.firstElementChild.appendChild(this.newPost);
        this.container.firstElementChild.insertAdjacentElement('afterbegin', this.newPost);
      }
    }
  }

  showModal() {
    this.validationForm.form.classList.remove('modal-hidden');
    // const modal = document.createElement('div');
    // post.classList.add('modal');

    // const postContent = document.createElement('div');
    // postContent.classList.add('post-content');

    // const postText = document.createElement('div');
    // postText.classList.add('post-text');

    // const postTimeData = document.createElement('div');
    // postTimeData.classList.add('post-time-data');

    // const geolocation = document.createElement('div');
    // geolocation.classList.add('geolocation');

    // postContent.appendChild(postText);
    // postContent.appendChild(postTimeData);

    // post.appendChild(postContent);
    // post.appendChild(geolocation);

    // return post;
  }
}
