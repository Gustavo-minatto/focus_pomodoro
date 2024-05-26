import{
  buttonFlorest,
  buttonRain,
  buttonMarket,
  buttonFire,
} from "./elements.js"

export default function(){
  

  function colorOff(colorOne, colorTwo, colorThree) {
    colorOne.classList.remove('ativo')
    colorTwo.classList.remove('ativo')
    colorThree.classList.remove('ativo')
  }
  
  
  function colorFlorest(){
    colorOff(buttonRain, buttonMarket, buttonFire)
    buttonFlorest.classList.add('ativo')
  }

  function colorRain(){
    colorOff(buttonFlorest, buttonMarket, buttonFire)
    buttonRain.classList.add('ativo')
  }

  function colorMarket(){
    colorOff(buttonFlorest, buttonRain, buttonFire)
    buttonMarket.classList.add('ativo')
  }
  
  function colorFire(){
    colorOff(buttonFlorest, buttonRain, buttonMarket)
    buttonFire.classList.add('ativo')
  }

  return{
    colorFlorest,
    colorRain,
    colorMarket,
    colorFire
  }

}