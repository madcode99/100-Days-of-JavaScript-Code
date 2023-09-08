
let toFixed = 0
document.getElementById('btn').addEventListener('click' , function(){
    // values of user
    const bill = document.getElementById('bill-amount-el').value
    const people = document.getElementById('people-amount-el').value
    const service = document.getElementById('service-el').value

    if(bill === '' && service == 0){
        alert('Please complete the form !!')
    }else{
        // calculate tip 
       total = (bill * service)/people
       total = Math.floor(total * 100)/100
       total= total.toFixed(2)
    //    
    document.getElementById('main-el').innerHTML += tipAmountHtml()
    const span  = document.querySelector('span')
    // check for amount of people
    if(people<=1){
        span.style.display="none"
    }

    }  
})
// function to return html for result 
function tipAmountHtml(){
    return `<div id="tip-amount-el">
    <p>TIP AMOUNT</p>
    <p class="bold">$${total}<span> each</span></p>
</div> `
}

