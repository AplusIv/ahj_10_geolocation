// import Collapsible from "./collapseModule";
import Timeline from "./Timeline";
import PostModule from "./PostModule";
import getLocation from "./getLocation";
import ValidationForm from "./ValidationForm";
import validateCoords from "./validateCoords";

// const btn = document.querySelector('.btn');
// const collapsibleElement = document.querySelector('.collapse');
// console.log(collapsibleElement);

// console.log(collapsibleElement.offsetHeight);

const container = document.querySelector('.container');
const form = document.querySelector('.modal');
console.log(form);
const validationForm = new ValidationForm(form, validateCoords);

const timeline = new Timeline(container, PostModule, getLocation, validationForm);
console.log(timeline);

// const example = new Collapsible(btn, collapsibleElement);