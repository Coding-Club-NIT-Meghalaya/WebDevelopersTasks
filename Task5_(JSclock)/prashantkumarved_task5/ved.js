const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

setInterval(() => {
const date = new Date();
let realHour = date.getHours();
let realMinutes = date.getMinutes();
let realSeconds = date.getSeconds();

hour.style.transform = `rotateZ(${realHour * 30 + realMinutes/2}deg)`;
minute.style.transform = `rotateZ(${realMinutes * 6 + realSeconds/10}deg)`;
second.style.transform = `rotateZ(${realSeconds * 6 }deg)`;

}, 1000)