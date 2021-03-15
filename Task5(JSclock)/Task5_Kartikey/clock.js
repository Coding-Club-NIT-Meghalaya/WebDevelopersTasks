const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
setInterval(() => {
    const date = new Date();
    let ah = date.getHours() * 30;
    let am = date.getMinutes() * deg;
    let as = date.getSeconds() * deg;

    hr.style.transform = `rotateZ(${ah+(am/12)}deg)`;
    mn.style.transform = `rotateZ(${am+(as/60)}deg)`;
    sc.style.transform = `rotateZ(${as}deg)`;
}, 1000)