
document.getElementById('form-el').addEventListener('submit' , function(e){
    e.preventDefault()
    const inputValue = document.getElementById('input-el').value
    checkPalindrome(inputValue)
    document.getElementById('input-el').value = ''
})

function checkPalindrome(value){
    const reverseText = value.split("").reverse().join('')
    const msg =document.getElementById('msg')
    if(reverseText === value){
        msg.innerHTML = 
        `<p>PALINDROME </p>`
    }else{
        msg.innerHTML = 
        `<p>NOT PALINDROME</p>`
    }
}