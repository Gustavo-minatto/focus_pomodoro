import {
  themeLight,
  buttonSun,
  buttonMoon
} from "./elements.js"

export default function(){
  
  function dark(){
    themeLight.classList.toggle('theme-dark')
    buttonSun.classList.add('hide')
    buttonMoon.classList.remove('hide')
  }
  
  function light(){
    themeLight.classList.toggle('theme-dark')
    buttonMoon.classList.add('hide')
    buttonSun.classList.remove('hide')
  }
  


  return{
    dark,
    light
  } 
}