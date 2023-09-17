
const img = [
    'Image-01.png',
    'Image-02.png',
    'Image-03.png',
    'Image-04.png'
] 

const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')
const slider = document.getElementById('slider-el')
let count = 0

slider.style.backgroundImage = `url('img/${img[count]}')`

dotsColor(count)
btnRight.addEventListener('click' , function(){
    count++
    if(count>=img.length){
        count = 0
    }
    slider.style.backgroundImage = `url('img/${img[count]}')`
    dotsColor(count)
})

btnLeft.addEventListener('click' , function(){
    count--
    if(count<0){
        count = img.length-1
    }
    slider.style.backgroundImage = `url('img/${img[count]}')`
    dotsColor(count)
})

function dotsColor (count){
    if(count === 0){
        four.style.backgroundColor = '#605757'
        two.style.backgroundColor = '#605757'
        const one = document.getElementById('one')
        one.style.backgroundColor = 'white'
     }
     if(count === 1){
         one.style.backgroundColor = '#605757'
         three.style.backgroundColor = '#605757'
         const two = document.getElementById('two')
         two.style.backgroundColor = 'white'
     }
     if(count === 2){
         two.style.backgroundColor = '#605757'
         four.style.backgroundColor = '#605757'
         const three = document.getElementById('three')
         three.style.backgroundColor = 'white'
     }
     if(count === 3){
         three.style.backgroundColor = '#605757'
         one.style.backgroundColor = '#605757'
         const four = document.getElementById('four')
         four.style.backgroundColor = 'white'
     }
}