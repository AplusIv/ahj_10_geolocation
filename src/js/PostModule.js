export default class PostModule {
  // constructor() {

  // }

  static creatPost() {
    const post = document.createElement('div');
    post.classList.add('post');

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

  static get postTime() {
    const date = new Date();
    const dateNumber = (date.getDate() < 10) ? `0${date.getDate()}` : `${date.getDate()}`;
    const month = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    const hours = (date.getHours() < 10) ? `0${date.getHours()}` : `${date.getHours()}`;

    const postTime = `${dateNumber}.${month}.${date.getFullYear()} ${hours}:${minutes}`;
    return postTime;
  }
}
