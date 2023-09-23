

const btn = document.getElementById('btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click' , function(){
    if(btn.innerHTML === 'play'){
        btn.innerHTML = 'pause'
        video.play()
    }else{
        btn.innerHTML = 'play'
        video.pause()
    }
})

