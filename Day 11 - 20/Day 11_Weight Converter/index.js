const formEl = document.getElementById('form-el')
const inputEl = document.getElementById('input-el')
formEl.addEventListener('submit' , function(e){
    e.preventDefault()
    const inputValue = inputEl.value
    convertHtml(inputValue)
    inputEl.value = ''
})

function convertHtml(inputValue){
    document.getElementById('pounds-el').innerText = `${inputValue} kilograms = ${inputValue*2.2046} Pounds`
    document.getElementById('ounces-el').innerText = `${inputValue} kilograms = ${inputValue*35.274} Ounces`
    document.getElementById('grams-el').innerText = `${inputValue} kilograms = ${inputValue*1000} Grams`
    document.getElementById('stones-el').innerText = `${inputValue} kilograms = ${inputValue*0.1574} Stones`
}
