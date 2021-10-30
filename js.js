let hourElement = document.querySelector('.hour')
let minuteElement = document.querySelector('.minute')
let text = document.querySelector('p.text');
let clear = document.querySelector('button.clear');
let replacingTheSign = document.querySelector('button.replacingTheSign');
let percent = document.querySelector('button.percent');
let division = document.querySelector('button.division');
let seven = document.querySelector('button.seven');
let eight = document.querySelector('button.eight');
let nine = document.querySelector('button.nine');
let multiplication = document.querySelector('button.multiplication');
let four = document.querySelector('button.four');
let five = document.querySelector('button.five');
let six = document.querySelector('button.six');
let subtraction = document.querySelector('button.subtraction');
let one = document.querySelector('button.one');
let two = document.querySelector('button.two');
let free = document.querySelector('button.free');
let addition = document.querySelector('button.addition');
let zero = document.querySelector('button.zero');
let comma = document.querySelector('button.comma');
let equal = document.querySelector('button.equal');

// Установка времени 

const updateTime = () => {
    const currentTime = new Date();
  
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
  

    hourElement.textContent = currentHour.toString();
    minuteElement.textContent = currentMinute.toString().padStart(2, '0');
  }
  setInterval(updateTime, 1000);
  updateTime();

let numberOne = 0;
let numberTwo = 0;
let numberSymbols = 0;
let end = 0;
let buttonOn = 0;
let comma3 = 0;


function clear2(){
    comma3 = 0
	text.textContent = 0;
    numberOne = 0;
    numberTwo = 0;
    numberSymbols = 0;
    end = 0;
    buttonOn = 0;
    division.style = null
    multiplication.style = null
    subtraction.style = null
    addition.style = null
    text.style = null
}
function replacingTheSign2(){
	if (buttonOn == 0) {
        numberOne = -numberOne
        text.textContent = numberOne
    }
    else if (buttonOn == 1) {
        numberTwo = -numberTwo
        text.textContent = numberTwo
    }
}
function percent2(){
    if (buttonOn == 0) {
	    text.textContent = text.textContent/100
        numberOne = numberOne/100
    }
    else if (buttonOn == 1) {
	    text.textContent = text.textContent/100
        numberTwo = numberTwo/100
    }
}
function division2(){
    comma3 = 0
    if (buttonOn == 0) {
        numberTwo = 0
        buttonOn = buttonOn+1
        numberSymbols = '/'
        division.style.backgroundColor = 'white'
        division.style.color = 'orange'
        division.style.transition = "0.7s"
    }
    else if (buttonOn == 1) {
        if (numberSymbols == '/') {
            buttonOn = buttonOn-1
            numberSymbols = 0   
            division.style = null
            multiplication.style = null
            subtraction.style = null
            addition.style = null 
        }
        else {
            multiplication.style = null
            subtraction.style = null
            addition.style = null 
            numberSymbols = '/'  
            division.style.backgroundColor = 'white'
            division.style.color = 'orange'
            division.style.transition = "0.7s"
        }
    }
}

// Вторая линия

function seven2(){
    if (buttonOn == 0) {
        if (text.textContent === '0') {
            text.textContent = ''
            numberOne = 7
            text.textContent = text.textContent+7 }
        else
        {
            if (text.textContent.length < 9) {     
                text.textContent = text.textContent+7
                numberOne = text.textContent
                numberOne = Number(numberOne)
            }
        }
    }
    else if (buttonOn == 1) {
        if (numberTwo === 0) {
            text.textContent = 7
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
        else {
            if (text.textContent.length < 9) {            
                text.textContent = text.textContent+7
                numberTwo = text.textContent
                numberTwo = Number(numberTwo) 
            }
        }
    }
}
function eight2(){
    if (buttonOn == 0) {
        if (text.textContent === '0') {
            text.textContent = ''
            numberOne = 8
            text.textContent = text.textContent+8 }
        else
        {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+8
            numberOne = text.textContent
            numberOne = Number(numberOne)
            }
        }
    }
    else if (buttonOn == 1) {
        if (numberTwo === 0) {
            text.textContent = 8
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
        else {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+8
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
            }
        }
    }
}
function nine2(){
    if (buttonOn == 0) {
        if (text.textContent === '0') {
            text.textContent = ''
            numberOne = 9
            text.textContent = text.textContent+9 }
        else
        {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+9
            numberOne = text.textContent
            numberOne = Number(numberOne)
            }
        }
    }
    else if (buttonOn == 1) {
        if (numberTwo === 0) {
            text.textContent = 9
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
        else {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+9
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
            }
        }
    }
}
function multiplication2(){
    comma3 = 0
    if (buttonOn == 0) {
        numberTwo = 0
        buttonOn = buttonOn+1
        numberSymbols = 'X'
        multiplication.style.backgroundColor = 'white'
        multiplication.style.color = 'orange'
        multiplication.style.transition = "0.7s"
    }
    else if (buttonOn == 1) {
       if (numberSymbols == 'X') {
        buttonOn = buttonOn-1
        numberSymbols = 0   
        division.style = null
        multiplication.style = null
        subtraction.style = null
        addition.style = null
       }
       else { 
        division.style = null
        subtraction.style = null
        addition.style = null
        numberSymbols = 'X'
        multiplication.style.backgroundColor = 'white'
        multiplication.style.color = 'orange'
        multiplication.style.transition = "0.7s"
       }
    }
}

// Третья линия

function four2(){
    if (buttonOn == 0) {
        if (text.textContent === '0') {
            text.textContent = ''
            numberOne = 4
            text.textContent = text.textContent+4 }
        else
        {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+4
            numberOne = text.textContent
            numberOne = Number(numberOne)
            }
        }
    }
    else if (buttonOn == 1) {
        if (numberTwo === 0) {
            text.textContent = 4
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
        else {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+4
            numberTwo = text.textContent
            numberTwo = Number(numberTwo)
            }
        }
    }
}
function five2(){
    if (buttonOn == 0) {
        if (text.textContent === '0') {
            text.textContent = ''
            numberOne = 5
            text.textContent = text.textContent+5 }
        else
        {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+5
            numberOne = text.textContent
            numberOne = Number(numberOne)
            }
        }
    }
    else if (buttonOn == 1) {
        if (numberTwo === 0) {
            text.textContent = 5
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
        else {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+5
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
            }
        }
    }
}
function six2(){
    if (buttonOn == 0) {
        if (text.textContent === '0') {
            text.textContent = ''
            numberOne = 6
            text.textContent = text.textContent+6 }
        else
        {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+6
            numberOne = text.textContent
            numberOne = Number(numberOne)
            }
        }
    }
    else if (buttonOn == 1) {
        if (numberTwo === 0) {
            text.textContent = 6
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
        else {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+6
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
            }
        }
    }
}
function subtraction2(){
    comma3 = 0
    if (buttonOn == 0) {
        numberTwo = 0
        buttonOn = buttonOn+1
        numberSymbols = '-'
        subtraction.style.backgroundColor = 'white'
        subtraction.style.color = 'orange'
        subtraction.style.transition = "0.7s"
    }
    else if (buttonOn == 1) {
        if (numberSymbols == '-')  {
            buttonOn = buttonOn-1
            numberSymbols = 0   
            division.style = null
            multiplication.style = null
            subtraction.style = null
            addition.style = null
        }
        else {
            division.style = null
            multiplication.style = null
            addition.style = null
            numberSymbols = '-'   
            subtraction.style.backgroundColor = 'white'
            subtraction.style.color = 'orange'
            subtraction.style.transition = "0.7s"
        }
    }
}

// Четвёртая линия

function one2(){
    if (buttonOn == 0) {
        if (text.textContent === '0') {
            text.textContent = ''
            numberOne = 1
            text.textContent = text.textContent+1 }
        else
        {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+1
            numberOne = text.textContent
            numberOne = Number(numberOne)
            }
        }
    }
    else if (buttonOn == 1) {
        if (numberTwo === 0) {
            text.textContent = 1
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
        else {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+1
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
            }
        }
    }
}
 
function two2(){
    if (buttonOn == 0) {
        if (text.textContent === '0') {
            text.textContent = ''
            numberOne = 2
            text.textContent = text.textContent+2 }
        else
        {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+2
            numberOne = text.textContent
            numberOne = Number(numberOne)
            }
        }
    }
    else if (buttonOn == 1) {
        if (numberTwo === 0) {
            text.textContent = 2
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
        else {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+2
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
            }
        }
    }
}

function free2(){
    if (buttonOn == 0) {
        if (text.textContent === '0') {
            text.textContent = ''
            numberOne = 3
            text.textContent = text.textContent+3 }
        else
        {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+3
            numberOne = text.textContent
            numberOne = Number(numberOne)
            }
        }
    }
    else if (buttonOn == 1) {
        if (numberTwo === 0) {
            text.textContent = 3
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
        else {
            if (text.textContent.length < 9) {
            text.textContent = text.textContent+3
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
            }
        }
    }
}

function addition2(){
    comma3 = 0
    if (buttonOn == 0) {
        numberTwo = 0
        buttonOn = buttonOn+1
        numberSymbols = '+'
        addition.style.backgroundColor = 'white'
        addition.style.color = 'orange'
        addition.style.transition = "0.7s"
    }
    else if (buttonOn == 1) {
        if (numberSymbols == '+') {
            buttonOn = buttonOn-1
            numberSymbols = 0   
            division.style = null
            multiplication.style = null
            subtraction.style = null
            addition.style = null
        }
        else {
            division.style = null
            multiplication.style = null
            subtraction.style = null
            numberSymbols = '+'
            addition.style.backgroundColor = 'white'
            addition.style.color = 'orange'
            addition.style.transition = "0.7s"
        }
    }
}

// Пятая линия

function zero2(){
    if (buttonOn == 0) {
        if (text.textContent == 0) {
            text.textContent = ''
            numberOne = 0
            text.textContent = text.textContent+0 }
        else
        {
            text.textContent = text.textContent+0
            numberOne = text.textContent
            numberOne = Number(numberOne)
        }
    }
    else if (buttonOn == 1) {
        if (numberTwo == 0) {
            text.textContent = 0
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
        else {
            text.textContent = text.textContent+0
            numberTwo = text.textContent
            numberTwo = Number(numberTwo) 
        }
    }
}
function comma2(){
    if (comma3 == 0) {
        if (buttonOn == 0) {
            if (Number.isInteger(numberOne) == true) {
            text.textContent = text.textContent+'.'
            numberOne = text.textContent
            comma3 = 1}
        }
        else if (buttonOn == 1) {
            text.textContent = text.textContent+'.'
            numberTwo = text.textContent
            comma3 = 1
        }         
    }   
}
function equal2(){
	if (numberSymbols == '+') {
        end = numberOne+numberTwo
        numberOne = end
    }
    else if (numberSymbols == '-') {
        end = numberOne-numberTwo
        numberOne = end
    }
    else if (numberSymbols == 'X') {
        end = numberOne*numberTwo
        numberOne = end
    }
    else if (numberSymbols == '/') {
        end = numberOne/numberTwo
        numberOne = end
    }
    else if (numberSymbols == 0) {
        end = text.textContent
    }
    buttonOn = 0;
    division.style = null
    multiplication.style = null
    subtraction.style = null
    addition.style = null
    text.textContent = end
    comma3 = 0
}

clear.addEventListener('click', clear2);
replacingTheSign.addEventListener('click', replacingTheSign2);
percent.addEventListener('click', percent2);
division.addEventListener('click', division2);
seven.addEventListener('click', seven2);
eight.addEventListener('click', eight2);
nine.addEventListener('click', nine2);
multiplication.addEventListener('click', multiplication2);
four.addEventListener('click', four2);
five.addEventListener('click', five2);
six.addEventListener('click', six2);
subtraction.addEventListener('click', subtraction2);
one.addEventListener('click', one2);
two.addEventListener('click', two2);
free.addEventListener('click', free2);
addition.addEventListener('click', addition2);
zero.addEventListener('click', zero2);
comma.addEventListener('click', comma2);
equal.addEventListener('click', equal2);
