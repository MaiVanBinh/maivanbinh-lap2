// Calculator
function deleteOne() {
    let inputValue = document.getElementById("value").value;
    document.getElementById("value").value = inputValue.slice(0,inputValue.length-1);
}
function clearInput() {
    document.getElementById("value").value = "";
}
function insertInput(str) {
    let inputValue = document.getElementById("value").value;
    const operator = ['+', '-', '*', '/'];
    if(inputValue){
        let c = inputValue.slice(inputValue.length-1);
        if(operator.find(o => o === str) && operator.find(o => o === c)){
            return;
        }
    }
    let format = /^[0-9]/;
    if(format.test(inputValue + str)){
        return document.getElementById("value").value = inputValue + str;
    }
    return;
}

// Background animate
let bg = document.getElementById("bg");
let clock = document.getElementById("clock");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    clock.style.marginLeft = value * 0.5 - 350 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value*1 - 180 + 'px';
});

// Contdown 2010
let countDate = new Date('Jan 1, 2021 00:00:00').getTime();
function newYear() {
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap /(day));
    let h = Math.floor((gap%(day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / second);

    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
}

setInterval(function() {
    newYear();
},1000);

// Clock
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const smnc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
},1000);