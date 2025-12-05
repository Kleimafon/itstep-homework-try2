//Змiннi Калькулятора

const CEnter = document.getElementById('calculator-enter')
const Num1 = document.getElementById('Num1')
const Num2 = document.getElementById('Num2')
const operator = document.getElementById('operator')
const ButtonCalculator = document.getElementById('ButtonCalculator')

//Калькулятор, логiка

ButtonCalculator.addEventListener('click', () => {
    const num1 = Number(Num1.value);
    const num2 = Number(Num2.value);
    switch (operator.value) {
        case "+": CEnter.textContent = num1 + num2; break;
        case "-": CEnter.textContent = num1 - num2; break;
        case "*": CEnter.textContent = num1 * num2; break;
        case "/": num1 === 0 || num2 === 0 ? CEnter.textContent = '∞' : CEnter.textContent = num1 / num2; break;
    }
})

// змiннi пiдсказок

const num1arrow1 = document.getElementById('num1arrow1');
const num1arrow2 = document.getElementById('num1arrow2');

const num2arrow1 = document.getElementById('num2arrow1');
const num2arrow2 = document.getElementById('num2arrow2');

// Пiдсказки

Num1.addEventListener('focus', () => {
    num1arrow1.classList.remove('displaynone')
    num1arrow2.classList.remove('displaynone')
})
Num1.addEventListener('blur', () => {
    num1arrow1.classList.add('displaynone')
    num1arrow2.classList.add('displaynone')
})

Num2.addEventListener('focus', () => {
    num2arrow1.classList.remove('displaynone')
    num2arrow2.classList.remove('displaynone')
})
Num2.addEventListener('blur', () => {
    num2arrow1.classList.add('displaynone')
    num2arrow2.classList.add('displaynone')
})

//2 максимальнi числа

//Змiннi
const maxresult = document.getElementById('maxresult')
const buttonMax = document.getElementById('buttonMax')

buttonMax.addEventListener('click', () => {
    const mxNum1 = document.getElementById('mxNum1')
    const mxNum2 = document.getElementById('mxNum2')

    const mxTrueNum1 = Number(mxNum1.value)
    const mxTrueNum2 = Number(mxNum2.value)
    //логiка

    if (mxTrueNum1 === mxTrueNum2) {
        maxresult.textContent = '='
    }
    else {
        maxresult.textContent = mxTrueNum1 > mxTrueNum2 ? '>' : '<'
    }
})

//3 таймер

//змiннi
const timerNumber = document.getElementById('timerNumber')
const start = document.getElementById('Start')
const pause = document.getElementById('Pause')
const restart = document.getElementById('Restart')
let timer = 60
let timer1

//start
start.addEventListener('click', () => {
    start.disabled = true
    timer1 = setInterval(() => {
        timer--
        timerNumber.textContent = timer
        if (timer <= 0) {
            clearInterval(timer1)
            timerNumber.textContent = "0"
            for (let i = 0; i <= 5; i++) {
                setTimeout(() => {
                    if (i % 2 === 0) {
                        timerNumber.classList.add('colornone');
                    } else {
                        timerNumber.classList.remove('colornone');
                    }
                }, 1000 * i);
            }
        }
    }, 1000)

})

//pause
pause.addEventListener('click', () => {
    clearInterval(timer1)
    start.disabled = false

})

//restart
restart.addEventListener('click', () => {
    clearInterval(timer1)
    start.disabled = false
    timer = 60
    timerNumber.textContent = 60
})


//Вгадай число

//змiннi

let item4chislo = document.getElementById('item4chislo')
const item4try = document.getElementById('item4try')
const item4input = document.getElementById('item4input')
const item4button = document.getElementById('item4button')
const item4h3 = document.getElementById('item4h3')
const item4Wins = document.getElementById('item4Wins')
let i4wins = 0
let try2 = 0

const randomizer = () => Math.floor(Math.random() * 100) + 1; //для удобства
let randomNum = randomizer()

//процесс

item4button.addEventListener('click', () => {

    //якщо вгадали
    if (Number(item4input.value) == randomNum) {
        item4button.disabled = true
        item4input.disabled = true
        item4h3.innerHTML = `Ви <span class = "colorOrange">перемогли</span>! Число було <span class = "colorRed">${randomNum}</span>.`
        i4wins++; item4Wins.textContent = i4wins //Перемоги
        try2++; item4try.textContent = try2; //+ спроби
        setTimeout(() => {
            randomNum = randomizer() //Нове рандомне число

            //кд на кнопку та зброс минулих данних
            item4button.disabled = false
            item4input.disabled = false
            item4h3.innerHTML = 'Число <span id="item4chislo">?</span>'
            item4chislo = document.getElementById('item4chislo')
            try2 = 0; item4try.textContent = try2;
        }, 5000);

    }

    //менше
    else if (Number(item4input.value) > randomNum) {
        item4chislo.textContent = 'менше'
        try2++; item4try.textContent = try2;//+ спроби

        //кд на кнопку
        item4button.disabled = true
        setTimeout(() => {
            item4button.disabled = false
        }, 500);
    }

    //бiльше
    else {
        item4chislo.textContent = 'бiльше'
        try2++; item4try.textContent = try2; //+ спроби

        //кд на кнопку
        item4button.disabled = true
        setTimeout(() => {
            item4button.disabled = false
        }, 500);
    }
})

//Камiнь ножицi бумага

//змiннi
let enemy = document.getElementById('Enemy');
let enemyElem = document.getElementById('enemyEl');
let you = document.getElementById('You');
const stone = document.getElementById('stone');
const scis = document.getElementById('scis');
const paper = document.getElementById('paper');
let youElem = 0
let timerItem5 = document.getElementById('timerItem5')


//Рандомн вiд 1 до 3
const enemyRandom = () => Math.floor(Math.random() * 3) + 1;

//якщо вибрати камiнь
stone.addEventListener('click', () => {
    stone.classList.add('inactive');
    scis.classList.add('inactive');
    paper.classList.add('inactive');
    stone.style.backgroundColor = 'Lime'
    youElem = 1;
    let enemyElement = enemyRandom();
    
    let timer = 3

    let a = setInterval(() => {
        timerItem5.classList.remove('colorNone')
        timerItem5.classList.add('colorRed')
        timerItem5.textContent = timer--
        if (timer <= 0) {
            clearInterval(a)
            setTimeout(() => {
                if (youElem === 1 && enemyElement === 1) {
                    enemyElem.innerHTML = '🗿'
                    timerItem5.textContent = 'Draw!'
                    setTimeout(() => {
                        timerItem5.classList.add('colorNone')
                        timerItem5.classList.remove('colorRed')
                        enemyElem.innerHTML = '?'
                    }, 2000);
                }
                else if (youElem === 1 && enemyElement === 2) {
                    enemyElem.innerHTML = '✂️'
                    timerItem5.textContent = 'You Win!'
                    setTimeout(() => {
                        timerItem5.classList.add('colorNone')
                        timerItem5.classList.remove('colorRed')
                        enemyElem.innerHTML = '?'
                    }, 1500);
                }
                else{
                    enemyElem.innerHTML = '📄'
                    timerItem5.textContent = 'You Lose!'
                    setTimeout(() => {
                        timerItem5.classList.add('colorNone')
                        timerItem5.classList.remove('colorRed')
                        enemyElem.innerHTML = '?'
                    }, 1500);
                }
                stone.style.backgroundColor = '#e9e9e9'
                stone.classList.remove('inactive');
                scis.classList.remove('inactive');
                paper.classList.remove('inactive');
            }, 1000);
        }
    }, 1000);

})

//якщо вибрати ножицi
scis.addEventListener('click', () => {
    stone.classList.add('inactive');
    scis.classList.add('inactive');
    paper.classList.add('inactive');
    scis.style.backgroundColor = 'Lime'
    youElem = 2;
    let enemyElement = enemyRandom();
    
    let timer = 3

    let a = setInterval(() => {
        timerItem5.classList.remove('colorNone')
        timerItem5.classList.add('colorRed')
        timerItem5.textContent = timer--
        if (timer <= 0) {
            clearInterval(a)
            setTimeout(() => {
                if (youElem === enemyElement) {
                    enemyElem.innerHTML = '✂️'
                    timerItem5.textContent = 'Draw!'
                    setTimeout(() => {
                        timerItem5.classList.add('colorNone')
                        timerItem5.classList.remove('colorRed')
                        enemyElem.innerHTML = '?'
                    }, 2000);
                }
                else if (enemyElement === 3) {
                    enemyElem.innerHTML = '📄'
                    timerItem5.textContent = 'You Win!'
                    setTimeout(() => {
                        timerItem5.classList.add('colorNone')
                        timerItem5.classList.remove('colorRed')
                        enemyElem.innerHTML = '?'
                    }, 1500);
                }
                else{
                    enemyElem.innerHTML = '🗿'
                    timerItem5.textContent = 'You Lose!'
                    setTimeout(() => {
                        timerItem5.classList.add('colorNone')
                        timerItem5.classList.remove('colorRed')
                        enemyElem.innerHTML = '?'
                    }, 1500);
                }
                scis.style.backgroundColor = '#e9e9e9'
                stone.classList.remove('inactive');
                scis.classList.remove('inactive');
                paper.classList.remove('inactive');
            }, 1000);
        }
    }, 1000);

})

//якщо вибрати бумагу
paper.addEventListener('click', () => {
    stone.classList.add('inactive');
    scis.classList.add('inactive');
    paper.classList.add('inactive');
    paper.style.backgroundColor = 'Lime'
    youElem = 3;
    let enemyElement = enemyRandom();
    
    let timer = 3

    let a = setInterval(() => {
        timerItem5.classList.remove('colorNone')
        timerItem5.classList.add('colorRed')
        timerItem5.textContent = timer--
        if (timer <= 0) {
            clearInterval(a)
            setTimeout(() => {
                if (youElem === enemyElement) {
                    enemyElem.innerHTML = '📄'
                    timerItem5.textContent = 'Draw!'
                    setTimeout(() => {
                        timerItem5.classList.add('colorNone')
                        timerItem5.classList.remove('colorRed')
                        enemyElem.innerHTML = '?'
                    }, 2000);
                }
                else if (enemyElement === 1) {
                    enemyElem.innerHTML = '🗿'
                    timerItem5.textContent = 'You Win!'
                    setTimeout(() => {
                        timerItem5.classList.add('colorNone')
                        timerItem5.classList.remove('colorRed')
                        enemyElem.innerHTML = '?'
                    }, 1500);
                }
                else{
                    enemyElem.innerHTML = '✂️'
                    timerItem5.textContent = 'You Lose!'
                    setTimeout(() => {
                        timerItem5.classList.add('colorNone')
                        timerItem5.classList.remove('colorRed')
                        enemyElem.innerHTML = '?'
                    }, 1500);
                }
                paper.style.backgroundColor = '#e9e9e9'
                stone.classList.remove('inactive');
                scis.classList.remove('inactive');
                paper.classList.remove('inactive');
            }, 1000);
        }
    }, 1000);

})


//6

let ball = document.getElementById('ball');
let margup = 1850
let margleft = 1280
const UP = document.getElementById('UP');
const LEFT = document.getElementById('LEFT')
const RIGHT = document.getElementById('RIGHT')
const DOWN = document.getElementById('BOTTOM')

function DOWNER(){
    margup += 10
    ball.style.marginLeft = String(margleft) + 'px'
}

UP.addEventListener('click', () => {
    margup -= 10
    ball.style.marginTop = String(margup) + 'px'
})
DOWN.addEventListener('click', () => {
    margup += 10
    ball.style.marginTop = String(margup) + 'px'
})
LEFT.addEventListener('click', () => {
    margleft -= 10
    ball.style.marginLeft = String(margleft) + 'px'
})
RIGHT.addEventListener('click', () => {
    margleft += 10
    ball.style.marginLeft = String(margleft) + 'px'
})


const item5 = document.getElementById('item5');
const body = document.getElementById('body')
body.addEventListener('keyup', (el) => {
    if(el.code === 'KeyA'){
        margleft -= 10
        ball.style.marginLeft = String(margleft) + 'px'
    }
    else if(el.code === 'KeyS'){
        margup += 10
        ball.style.marginTop = String(margup) + 'px'
    }
    else if(el.code === 'KeyD'){
        margleft += 10
        ball.style.marginLeft = String(margleft) + 'px'
    }
    else if(el.code === 'KeyW'){
        margup -= 10
        ball.style.marginTop = String(margup) + 'px'
    }
})