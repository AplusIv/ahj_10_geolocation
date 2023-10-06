import Timeline from './Timeline';
import PostModule from './PostModule';
import ValidationForm from './ValidationForm';
import validateCoords from './validateCoords';
import geolocation from './geolocation';

const container = document.querySelector('.container');
const form = document.querySelector('.modal');
const validationForm = new ValidationForm(form, validateCoords);

const timeline = new Timeline(container, PostModule, validationForm, geolocation);

// Хранение
window.addEventListener('beforeunload', () => {
  const storageData = [];

  const posts = document.querySelectorAll('.post');
  for (let index = 0; index < posts.length; index += 1) {
    const key = `Post № ${index + 1}`;
    const value = posts[index].outerHTML;
    storageData.push({ [key]: value }); // в ключе значение константы key
  }

  localStorage.setItem('storageData', JSON.stringify(storageData));
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('storageData')) {
    const json = localStorage.getItem('storageData');
    let storageData;

    try {
      storageData = JSON.parse(json);
    } catch (error) {
      console.log(error);
    }

    const postContainer = document.querySelector('.post-container');

    storageData.forEach((post) => {
      const value = Object.values(post)[0];
      postContainer.insertAdjacentHTML('beforeend', value);
    });
  }
});
