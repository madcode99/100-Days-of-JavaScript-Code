
const inputEl = document.getElementById('input-el')
let oprater = ''
let num1 = ''
let num2 = ''

document.addEventListener('click' , function(e){
    const id = e.target.id

   if(e.target.id === 'C'){
    inputEl.value = ''
   }
   if(id === '+' || id === '-' || id === 'X' || id === '/' ){
    inputEl.value += id
    oprater = id
   }
   if(id === '7' || id === '8' || id === '9' || id === '6' || id === '5' || id === '4' || id === '3' || id === '2' || id === '1' || id === '0' || id === '.'){
    inputEl.value += id
    
    if(oprater){
        num2 += id
    }else{
        num1 += id
    }
   }

})

document.getElementById('equal-btn').addEventListener('click' , function(){
    inputEl.value = calculate(Number(num1) , oprater ,Number(num2))
    num1 = calculate(Number(num1) , oprater ,Number(num2))
    num2 = 0
    oprater = ''
})

function calculate(num1 , oprater , num2){
    let ans = 0
    if(oprater === '+'){
        ans = num1+num2
    }else if(oprater === '-'){
        ans = num1-num2
    }else if(oprater === 'X'){
        ans = num1*num2
    }else{
        ans = num1/num2
    }
    return ans
}