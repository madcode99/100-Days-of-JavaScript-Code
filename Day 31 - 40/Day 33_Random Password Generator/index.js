const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const inputOne = document.getElementById('input-one')
const inputTwo = document.getElementById('input-two')
const btn = document.getElementById('btn')

let pass1 = ''
let pass2 = ''
    for(let i = 0;i <= 12;i++){
         let randomNum1 = Math.floor(Math.random()*characters.length)
         let randomNum2 = Math.floor(Math.random()*characters.length)
         pass1 += characters[randomNum1]
         pass2 += characters[randomNum2]
    }
btn.addEventListener('click' , function() { 
    inputOne.value = pass1
    inputTwo.value = pass2
})
inputOne.addEventListener('click' , function(){
 inputOne.select();
  inputOne.setSelectionRange(0, 99999);
  document.execCommand('copy');
})
inputTwo.addEventListener('click' , function(){
 inputTwo.select();
  inputTwo.setSelectionRange(0, 99999);
  document.execCommand('copy');
})