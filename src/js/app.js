import Timeline from './Timeline';
import PostModule from './PostModule';
// import getLocation from "./getLocation";
import ValidationForm from './ValidationForm';
import validateCoords from './validateCoords';

const container = document.querySelector('.container');
const form = document.querySelector('.modal');
console.log(form);
const validationForm = new ValidationForm(form, validateCoords);

const timeline = new Timeline(container, PostModule, validationForm);
console.log(timeline);
