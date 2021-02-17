// Using setInterval() to update the time and calculate the rotation of each hand every second.
setInterval(function()
{
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hRotate = 30*hr + min/2 ;
    mRotate = min*6 + sec/10;
    sRotate = sec*6;

    secBox.style.transform = `rotate(${sRotate}deg)`;
    minBox.style.transform = `rotate(${mRotate}deg)`;
    hrBox.style.transform = `rotate(${hRotate}deg)`;
}, 1000);