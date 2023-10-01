// import Collapsible from "./collapseModule";
import Timeline from "./Timeline";
import PostModule from "./PostModule";
import getLocation from "./getLocation";

// const btn = document.querySelector('.btn');
// const collapsibleElement = document.querySelector('.collapse');
// console.log(collapsibleElement);

// console.log(collapsibleElement.offsetHeight);

const container = document.querySelector('.container');
const timeline = new Timeline(container, PostModule, getLocation);
console.log(timeline);

// const example = new Collapsible(btn, collapsibleElement);