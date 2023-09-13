

document.getElementById('btn').addEventListener('click' , function(){
    const dataArr = []
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((data)=>{
        const randomNumber = Math.floor(Math.random()*data.length)
        console.log(data)
        document.getElementById('quote-wrap').innerHTML = 
        `<p>${data[randomNumber].text}</p> 
        <p class="Aurthor">${data[randomNumber].author}</p>`
    })

   
})