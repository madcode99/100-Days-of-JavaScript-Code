const inputs = document.querySelectorAll('input')
inputs.forEach((input)=> input.addEventListener('change' , update) )

function update(){
    const change = this.dataset.sizing 
    document.getElementById('img-el').style.setProperty( `--${this.name}` , this.value + change)
}