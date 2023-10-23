
const quiz = document.getElementById('quiz')
const checkBtn = document.getElementById('check-el')

let allAnswers = []


fetch('https://opentdb.com/api.php?amount=5')
.then(res=> res.json())
.then((data)=> 

data.results.forEach((data)=>{
    const uuid = crypto.randomUUID();
    allAnswers = data.incorrect_answers
    allAnswers.push(data.correct_answer)
    let answerHtml = ''
    
    allAnswers.forEach((ans)=>{
        
        answerHtml +=  `<input type="radio" data-val=${ans} name=${uuid}>${ans}</input>`
    })

    quiz.innerHTML += `
    <div class='question'>${data.question}</div>
    <div class="options">${answerHtml}</div>
    `
    checkBtn.addEventListener('click' , function(){
       const inputs = document.querySelectorAll('input')
       inputs.forEach((input)=>{
        const Option = input.dataset.val
        if(Option === data.correct_answer){
            input.style.color = 'green'
        }
       })
    })
}))

