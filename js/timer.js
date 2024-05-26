export default function timer({
  minutesDisplay,
  secondsDisplay,
})  {


let timerTimeOut 
let minutes = Number(minutesDisplay.textContent)
let newMinutes

function updateMinutes(){
  minutes = newMinutes
}

function updateTimerDisplay(minutes, seconds){
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer(){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function hold(){
  clearTimeout(timerTimeOut)
}

function countdown(){
    timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0){
     return
    }
    
    if(seconds <= 0){
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))
    countdown()

    },1000)
 }

 return{
  updateMinutes,
  updateTimerDisplay,
  resetTimer,
  countdown,
  hold
 }

}