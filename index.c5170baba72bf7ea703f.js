/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 76:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/geolocation.d65fcd4854bd0032e80f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

;// CONCATENATED MODULE: ./src/js/Timeline.js
class Timeline {
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
      const {
        latitude,
        longitude
      } = positionData.coords;
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
      const {
        value
      } = textarea; // без переносов строки
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
;// CONCATENATED MODULE: ./src/js/PostModule.js
const geo = __webpack_require__(76);
class PostModule {
  static creatPost() {
    const post = document.createElement('div');
    post.classList.add('post');
    const postContent = document.createElement('div');
    postContent.classList.add('post-content');
    const postText = document.createElement('div');
    postText.classList.add('post-text');
    const postTimeData = document.createElement('div');
    postTimeData.classList.add('post-time-data');
    const geolocationContainer = document.createElement('div');
    geolocationContainer.classList.add('geolocation-container');
    const geolocation = document.createElement('div');
    geolocation.classList.add('geolocation');
    const geolocationIcon = document.createElement('div');
    geolocationIcon.classList.add('geolocation-icon');
    const img = document.createElement('img');
    img.classList.add('geo-icon');
    img.src = geo;
    geolocationIcon.appendChild(img);
    geolocationContainer.appendChild(geolocationIcon);
    geolocationContainer.appendChild(geolocation);
    postContent.appendChild(postText);
    postContent.appendChild(postTimeData);
    post.appendChild(postContent);
    post.appendChild(geolocationContainer);
    return post;
  }
  static get postTime() {
    const date = new Date();
    const dateNumber = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    const postTime = `${dateNumber}.${month}.${date.getFullYear()} ${hours}:${minutes}`;
    return postTime;
  }
}
;// CONCATENATED MODULE: ./src/js/ValidationForm.js

class ValidationForm {
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
;// CONCATENATED MODULE: ./src/js/validateCoords.js
// pattern="^\[?\-?\d{1,2}\.\d{1,}\,\s?\-?\d{1,3}\.\d{1,}\]?$"
// [32.1772375,-129.7764664683]
// [-12.1772375, 129.7764664683]
// 3.1772375, -129.7764664683
// -78.64563, -312.3423
// 11.2345,-128.545363

function validateCoords(str) {
  const result = str.match(/^\[?(-?\d{1,2}\.\d{1,}),\s?(-?\d{1,3}\.\d{1,})\]?$/);
  if (result === null) return false;
  if (result !== null) {
    const latitude = Number(result[1]);
    const longitude = Number(result[2]);
    if (latitude < 90 && latitude > -90 && longitude < 180 && longitude > -180) {
      // eslint-disable-next-line no-param-reassign
      const coords = `[${latitude}, ${longitude}]`;
      return coords;
      // console.log(`[${latitude}, ${longitude}]`);
      // return true;
    }
  }

  return false;
}
;// CONCATENATED MODULE: ./src/js/geolocation.js
function geolocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => resolve(data), data => reject(data), {
        enableHighAccuracy: true
      });
    } else {
      reject(new Error('This browser does not support Geolocation'));
    }
  });
}
;// CONCATENATED MODULE: ./src/js/app.js





const container = document.querySelector('.container');
const app_form = document.querySelector('.modal');
const validationForm = new ValidationForm(app_form, validateCoords);
const timeline = new Timeline(container, PostModule, validationForm, geolocation);

// Хранение
window.addEventListener('beforeunload', () => {
  const storageData = [];
  const posts = document.querySelectorAll('.post');
  for (let index = 0; index < posts.length; index += 1) {
    const key = `Post № ${index + 1}`;
    const value = posts[index].outerHTML;
    storageData.push({
      [key]: value
    }); // в ключе значение константы key
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
    storageData.forEach(post => {
      const value = Object.values(post)[0];
      postContainer.insertAdjacentHTML('beforeend', value);
    });
  }
});
;// CONCATENATED MODULE: ./src/index.js


}();
/******/ })()
;