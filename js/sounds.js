export default function(){
  const florest = new Audio("../assets/sons/Floresta.wav")
  const rain = new Audio("../assets/sons/rain.wav")
  const market = new Audio ("../assets/sons/market.wav")
  const fire = new Audio ("../assets/sons/Lareira.wav")
  const inputVolumeOne = document.querySelector('.volumeOne')
  const inputVolumeTwo = document.querySelector('.volumeTwo')
  const inputVolumeThree = document.querySelector('.volumeThree')
  const inputVolumeFour = document.querySelector('.volumeFour')




  let soundsOff = (soundOne, soundsTwo, soundThree) => {
    soundOne.pause()
    soundsTwo.pause()
    soundThree.pause()
  }

  function audioFlorest(){
    soundsOff(rain, market, fire)
    florest.play()
    florest.loop = true
    inputVolumeOne.addEventListener('input', function() {
      florest.volume = inputVolumeOne.value;
    });
  }

  function audioRain(){
    soundsOff(florest, market, fire)
    rain.play()
    rain.loop = true
    inputVolumeTwo.addEventListener('input', function() {
      rain.volume = inputVolumeTwo.value;
    });
  }

  function audioMarket(){
   soundsOff(florest, rain, fire)
   market.play()
   market.loop = true
   inputVolumeThree.addEventListener('input', function() {
    market.volume = inputVolumeThree.value;
  });
  }

  function audioFire(){
   soundsOff(florest, rain, market)
   fire.play()
   fire.loop = true
   inputVolumeFour.addEventListener('input', function() {
    fire.volume = inputVolumeFour.value;
  });
  }

  return{
   audioFlorest,
   audioRain, 
   audioMarket,
   audioFire
  }

}