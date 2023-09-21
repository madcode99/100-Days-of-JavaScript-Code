

const dateEl = document.getElementById('date-el')

const date = new Date()
const day = date.getDay()
const month = date.getMonth()
const monthDate = date.getDate()

let today = ''
let thismonth = ''
let quoteOfDay = ''

switch(day){
    case 0 : 
    today = 'Sunday'
    break
    case 1 : 
    today = 'Monday'
    break
    case 2 : 
    today = 'Tuseday'
    break
    case 3 : 
    today = 'Wednesday'
    break
    case 4 : 
    today = 'Thursday'
    break
    case 5 : 
    today = 'Friday'
    break
    case 6 : 
    today = 'Saturday'

}
switch(month){
    case 0 : 
    thismonth = 'January'
    break
    case 1 : 
    thismonth = 'February'
    break
    case 2 : 
    thismonth = 'March'
    break
    case 3 : 
    thismonth = 'April'
    break
    case 4 : 
    thismonth = 'May'
    break
    case 5 : 
    thismonth = 'June'
    break
    case 6 : 
    thismonth = 'July'
    break
    case 7 : 
    thismonth = 'August'
    break
    case 8 : 
    thismonth = 'September'
    break
    case 9 : 
    thismonth = 'October'
    break
    case 10 : 
    thismonth = 'November'
    break
    case 11 : 
    thismonth = 'December'
    break
}

fetch('https://type.fit/api/quotes')
.then(res => res.json())
.then(data => {
    const randomNumber = Math.floor(Math.random()*data.length)
    quoteOfDay = data[randomNumber].text
    html(quoteOfDay)
})

function html(quoteOfDay){
dateEl.innerHTML = 
`<p>${today} ${thismonth} ${monthDate}</p>
<p class="bold">Quote of day :</p>
<p>${quoteOfDay}</p>
`
}