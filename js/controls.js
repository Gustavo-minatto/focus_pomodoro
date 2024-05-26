import{
  buttonPlay,
  buttonPause,
} from "./elements.js"

export default function(){
  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }
 
  function pause(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  return{
    play,
    pause
  }

}