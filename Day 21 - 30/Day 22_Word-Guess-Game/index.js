const alphabetsArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z']
const category = {
    food: ['cake' , 'apple' , 'milk' , 'candy' , 'icecream'],
    film : ['titanic' , 'avengers' , 'lionKing' , 'jurassicpark' , 'avatar'],
    place : ['china' , 'brazil' , 'canada' ,'india' , 'italy']
}
let letter = ''
let check = ''
let guessAmount = 12
let guessWord = []
const categoryEl = document.getElementById('category-el')


alphabetsArray.forEach(function(alphabet){
    document.getElementById('btn-div').innerHTML += 
    `<button id=${alphabet}>${alphabet}</button>`
})

document.body.addEventListener('click' , function(e){
    if(e.target.id){
       CheckLetter(e.target.id)
    }
    if(e.target.id === 'category-el'){
        handelSelection()
    }
  
})

function handelSelection(){
    const randomNumber = Math.floor(Math.random()*category.film.length)
    if(categoryEl.value === 'film'){
        letter = category.film[randomNumber]
        categoryEl.disabled = true
    }else if(categoryEl.value === 'food'){
        letter = category.food[randomNumber]
        categoryEl.disabled = true
    }else if(categoryEl.value === 'place'){
        letter = category.place[randomNumber]
        categoryEl.disabled = true
    }
    guessWord = letter.split('')
    guessWord.forEach(function(word){
        document.getElementById('guess').innerHTML += `<span>_ </span>`
    }
    )
}

function CheckLetter(id){
    let count = -1
    guessAmount--
    document.getElementById('msg').innerHTML = `${guessAmount?'You have '+guessAmount+' guesses': 'You last'} `
    guessWord.forEach(function(word){
        count++
        const span = document.querySelectorAll('span')
        if(id === word){
            span[count].innerHTML = `${word} `
             check += word
        }else{
            document.getElementById(id).disabled = true
            document.getElementById(id).style.background = 'gray'
        }

        if(check === letter){
            document.getElementById('msg').innerHTML = 'You won'
        }
    })
    
}

