const btn = document.getElementById('btn-el')
const removeEl = document.getElementById('remove-popUp')
const newsletterEl = document.getElementById('newsletter-el')
const submitBtn = document.getElementById('submit-btn')



btn.addEventListener('click' , function(){
    newsletterEl.classList.add('active')
    btn.classList.add('nonactive')
})
removeEl.addEventListener('click' , function(){
    newsletterEl.classList.remove('active')
    btn.classList.remove('nonactive')
 })
 submitBtn.addEventListener('click' , function(){
    document.getElementById('input-el').value = ''
 })
