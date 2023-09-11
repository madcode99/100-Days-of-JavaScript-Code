  

let count = 0
const countEl = document.getElementById('count-el')
document.getElementById('add-btn').addEventListener('click' , function(){
    count++
    countEl.innerText = count
})
document.getElementById('minus-btn').addEventListener('click' , function(){
    count--
    countEl.innerText = count
})