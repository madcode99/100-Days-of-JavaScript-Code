const heading = document.querySelector('h1')
heading.addEventListener('mouseover' , function(){
    heading.classList.add('superShadow')
    heading.style.marginBottom = '-5px'
    heading.style.marginTop = '5px'
})
heading.addEventListener('mouseleave' , function(){
    heading.classList.remove('superShadow')
    heading.style.marginTop = '-5px'
    heading.style.marginBottom = '5px'
    heading.style.transition = '0.1s'
})