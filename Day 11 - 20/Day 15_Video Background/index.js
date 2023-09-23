

const play = document.getElementById('play')
const pause = document.getElementById('pause')
const video = document.querySelector('.video-container')

play.addEventListener('click' , function(){
    video.play()
})
pause.addEventListener('click' , function(){
    video.pause()
})
