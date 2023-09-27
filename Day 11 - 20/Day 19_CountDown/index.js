const countdownDate = new Date("Jan 1, 2024 01:00:00").getTime()

const x = setInterval(function(){
    const now = new Date().getTime()
    const distance = countdownDate-now
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('count-el').innerHTML = 
    `<div> <h1>${days} </h> <p>days</p> </div>
    <div> <h1>${hours} </h> <p>hours</p> </div> 
    <div> <h1>${minutes} </h> <p>minutes</p> </div>   
    <div> <h1>${seconds} </h> <p>seconds</p> </div>   `

    if(distance < 0){
        document.getElementById('count-el').innerHTML= 'EXPIRED'
    }
},1000)

