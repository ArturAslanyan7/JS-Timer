let minuts = document.querySelector(".js-minuts")
let seconds = document.querySelector(".js-seconds")
let mili = document.querySelector(".js-miliseconds")
let Start = document.querySelector(".butStart")
let Stop = document.querySelector(".butStop")
let Reset = document.querySelector('.butReset')

let interval
let milis = 0;
let mins = 0;
let sec = 0

function startTimer(){
    milis++
    if(milis === 100){
        milis = 0
        sec += 1
    }
    if(milis < 10){
        mili.innerHTML = '0' + milis
    }
    if(milis >= 10){
        mili.innerHTML = milis
    }
    if(sec < 10){
        seconds.innerHTML = '0' + sec
    }
    if(sec >= 10){
        seconds.innerHTML = sec
    }
    if(sec === 60){
        sec = 0
        mins += 1
    }
    if(mins < 10){
        minuts.innerHTML = '0' + mins
    }
    if(mins > 10){
        minuts.innerHTML = mins
    }

    }
Start.addEventListener("click", function onClick(){
        clearInterval(interval)
     interval = setInterval(startTimer,10)
})
Stop.addEventListener("click", function onclikc(){
    clearInterval(interval)
})
Reset.addEventListener("click", function onClick(){
    clearInterval(interval)
        milis = 0;
        mins = 0;
        sec = 0

        minuts.innerHTML = '00'
        seconds.innerHTML = '00'
        mili.innerHTML = '00'
} )