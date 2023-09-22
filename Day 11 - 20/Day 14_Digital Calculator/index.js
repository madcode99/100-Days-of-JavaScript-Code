let zone = ''
function displayTime(){
    const date = new Date()
    const hours = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds() 
    document.getElementById('container').innerHTML = html(hours, min , sec)

}
 
function html(hours,min,sec){
    if(hours>=12){
        zone = 'PM'
     }else{
        zone = 'AM'
     }
    return`
    <p>${hours} :</p>
    <p>${min} :</p>
    <p>${sec} :</p>
    <p>${zone} </p>`
}

setInterval(displayTime , 1000)