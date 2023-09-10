const formEl = document.getElementById('form-el')
const username = document.getElementById('username-el')
const email = document.getElementById('email-el')
const password = document.getElementById('password-el')
const passwordCheck = document.getElementById('password-check-el')

const msgEl = document.createElement('p')
msgEl.innerText = ''
msgEl.classList.add('error')
formEl.appendChild(msgEl)

formEl.addEventListener('submit' , (event)=>{
    event.preventDefault();

    validateForm()
    
})

function validateForm(){

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordCheckValue = passwordCheck.value.trim()


   
  
    if(passwordCheckValue !== passwordValue){
        msgEl.innerText = 'Your password does not match'
   }else if(passwordCheckValue === passwordValue){
       if(usernameValue && emailValue && passwordValue && passwordCheckValue && passwordCheckValue === passwordValue){
         msgEl.classList.add('success')
         msgEl.innerText = 'Submited'
   }
   }
   if(passwordValue === ''){
    msgEl.innerText = 'Please enter a password'
   }
   if(emailValue === ''){
    msgEl.innerText = 'Please enter your email'
   }
   if( usernameValue === ''){
    msgEl.innerText = 'Please enter a username'
   }


}
