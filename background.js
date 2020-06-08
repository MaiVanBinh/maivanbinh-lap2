// Calculator
const OPERATOR = ['+', '-', '*', '/'];
const equalMultiTime = {value: 0};
const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', () => {
    equalMultiTime.value += 1;
    console.log(equalMultiTime);
    let inputValue = document.getElementById("value").value;
    const finalValue = document.getElementById("valueFinal").value;
    let inputArray = inputValue.split(' ');
    if (inputArray[inputArray.length-1] === '' && OPERATOR.find(o => o === inputArray[inputArray.length-2])) {
        return;
    }
    if(equalMultiTime.value > 1) {
        inputArray = inputArray.slice(inputArray.length-2);
        inputArray.unshift(finalValue);
        document.getElementById("value").value = inputArray.join(' ');
    }
    
    if(inputArray.length === 0) {
        document.getElementById('valueFinal').value = 0;
    } else if (inputArray.length === 1){
        document.getElementById('valueFinal').value = inputArray[0]
    } else {
        let result = calculateResult(inputArray);
         document.getElementById('valueFinal').value = result;
        // 
    }
})

const calculateResult = (inputArray) => {
    let result = 0;
    let operator = '+';
    const updateArray = inputArray.slice(0, inputArray.length-1);
    for(let i = 0; i<= updateArray.length; i++) {
        console.log(inputArray[i], '-')
        if(OPERATOR.find(o => o === inputArray[i]) && OPERATOR.find(o => o === inputArray[i])){
            operator = inputArray[i];
            continue;
        }
        switch(operator) {
            case '+' : 
                result += parseFloat(inputArray[i]);
                continue;
            case '-' : 
                result -= parseFloat(inputArray[i]);
                continue;
            case '*' : 
                result *= parseFloat(inputArray[i]);
                continue;
            case '/' : 
                result /= parseFloat(inputArray[i]);
                continue;
            default: 
                continue;
        }
    }
    return result;
}


function deleteOne() {
    equalMultiTime.value = 0;
    let inputValue = document.getElementById("value").value;
    let inputArray = inputValue.split(' ');
    inputArray.pop();
    document.getElementById("value").value = inputArray.join(' ');
}

function clearInput() {
    equalMultiTime.value = 0;
    document.getElementById('valueFinal').value = '0';
    document.getElementById("value").value = "";
}

function insertInput(str) {
    equalMultiTime.value = 0;
    let inputValue = document.getElementById("value").value;
    if(inputValue){
        let c = inputValue.slice(inputValue.length-2, inputValue.length-1);
        if(OPERATOR.find(o => str === o) && OPERATOR.find(o => o === c)){
            return;
        }
    }
    if(inputValue === ''){
        if(OPERATOR.find(o => str === o)){
            return;
        }
    }
    let format = /^[0-9.]/;
    // if(format.test(inputValue + str)){
    //     return document.getElementById("value").value = inputValue + str + ' ';
    // }
    if(format.test(str)){
        return document.getElementById("value").value = inputValue + str;
    }
    return document.getElementById("value").value = inputValue + ' ' + str + ' ';
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