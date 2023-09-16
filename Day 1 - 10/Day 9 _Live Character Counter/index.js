
const textareaEl = document.getElementById('textarea-el')

textareaEl.addEventListener('keypress' ,function(){
    const count = textareaEl.value.length
    document.getElementById('character-el').innerHTML = `${count} out of 500 characters`
})