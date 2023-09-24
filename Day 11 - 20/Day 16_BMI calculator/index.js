const form = document.getElementById('form-el')

form.addEventListener('submit' , function(e){
    e.preventDefault()
    const height = document.getElementById('height-el').value
    const weight = document.getElementById('weight-el').value
    const bmi = bmiCalculate(height , weight)
    document.getElementById('msg').innerHTML=
    `<p>your BMI is : ${bmi}</p>`
    height.innerHTML =''
    weight.innerHTML =''
})

function bmiCalculate( height , weight){
    return (weight / ((height * height) / 10000)).toFixed(2)
}