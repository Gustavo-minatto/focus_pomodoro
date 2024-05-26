import{
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSum,
  buttonLess,
  buttonFlorest,
  buttonRain,
  buttonMarket,
  buttonFire,
  buttonSun,
  buttonMoon
  
} from "./elements.js"


export default function({timer, sound, color, dark, controls}) {
  
  let minutes = 25

  buttonPlay.addEventListener('click', function(){
    timer.countdown()
    controls.play()
  })

  buttonPause.addEventListener('click', function(){
    timer.hold()
    controls.pause()
  })

  buttonStop.addEventListener('click', function(){
    timer.resetTimer()
    controls.pause()
  })

  buttonSum.addEventListener('click', function(){
    if(minutes < 60){
     minutes = minutes + 5
      timer.updateTimerDisplay(minutes)
    }
  })

  buttonLess.addEventListener('click', function(){
    if(minutes > 0 ){
      minutes = minutes - 5
      timer.updateTimerDisplay(minutes)
    }
  })

  buttonFlorest.addEventListener('click', function(){
   sound.audioFlorest()
   color.colorFlorest()
  })
  
  buttonRain.addEventListener('click' , function(){
    sound.audioRain()
    color.colorRain()
  })

  buttonMarket.addEventListener('click', function(){
    sound.audioMarket()
    color.colorMarket()
  })

  buttonFire.addEventListener('click', function(){
    sound.audioFire()
    color.colorFire()
  })


  buttonSun.addEventListener('click', function(){
    dark.dark()
   })
   
   buttonMoon.addEventListener('click', function(){
    dark.light()
   })
   
}



