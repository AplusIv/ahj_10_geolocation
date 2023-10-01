// import PostModule from "./PostModule";

export default class Timeline {
  constructor(container, postModule, getLocation) {
    this.container = container;
    this.postModule = postModule;
    this.getLocation = getLocation;

    this.addPost = this.addPost.bind(this);
    this.container.addEventListener('click', this.addPost)
  }

  addPost(e) {
    e.preventDefault();

    if (e.target.classList.contains('btn')) {
      const textarea = e.target.parentElement.querySelector('textarea');
      const { value } = textarea; // без переносов строки
      if (value) {
        const postContainer = document.querySelector('.post-container')
        const post = this.postModule.creatPost();

        post.querySelector('.post-text').textContent = value; // текст
        post.querySelector('.post-time-data').textContent = this.postModule.postTime; // не вызываем, потому что гетер
        // post.querySelector('.geolocation').textContent = this.getLocation();

        // const geolocationField = post.querySelector('.geolocation').textContent;
        // this.getLocation(geolocationField);

        if (navigator.geolocation) {
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
        };  // Работающий вариант геопозиции



        this.container.firstElementChild.appendChild(post) // Доделать
        
        // e.target
        //   .closest('.column')
        //   .querySelector('.content')
        //   .appendChild(TaskManager.newNote(value));
        console.log(value);
        textarea.value = '';
      }
    }
  }

  showModal() {
    const modal = document.createElement('div');
    post.classList.add('modal');

    const postContent = document.createElement('div');
    postContent.classList.add('post-content');

    const postText = document.createElement('div');
    postText.classList.add('post-text');

    const postTimeData = document.createElement('div');
    postTimeData.classList.add('post-time-data');

    const geolocation = document.createElement('div');
    geolocation.classList.add('geolocation');

    postContent.appendChild(postText);
    postContent.appendChild(postTimeData);

    post.appendChild(postContent);
    post.appendChild(geolocation);

    return post;
  }


}