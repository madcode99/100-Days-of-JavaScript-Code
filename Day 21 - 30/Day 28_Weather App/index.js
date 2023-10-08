const formEl = document.getElementById('form-el')
const display = document.querySelector('.display')
const cityName = document.getElementById('cityoutput')
const description = document.getElementById('description')
const temp  = document.getElementById('temp')
const wind = document.getElementById('wind')
apik = "3045dd712ffe6e702e3245525ac7fa38"





formEl.addEventListener('submit' , function(e){
    e.preventDefault()
    const cityElValue = document.getElementById('city-el').value
    display.classList.remove('none')
    display.classList.add('block')

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityElValue+'&appid='+apik)
  .then(res => res.json())
  .then(data => {
    const weather = data.weather[0]
    cityName.innerHTML = `Weather of ${data.name}`
    description.innerHTML= `Sky Conditions: ${weather.main}`
    temp.innerHTML = `Temperature: ${data.main.temp.toFixed(2)} C`
    wind.innerHTML = `Wind Speed: ${data.wind.speed.toFixed(2)}km/hr`
  })
    
})