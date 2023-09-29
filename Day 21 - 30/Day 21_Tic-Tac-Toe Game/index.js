const btn = document.getElementById('btn')
const boxs = document.querySelectorAll('.box')
  // result-el
const result = document.getElementById('result')

let flag = 1

boxs.forEach(function(box){
    box.addEventListener('click' , function(){
        // adding either 0 or x to clicked box
        if(flag === 1){
            box.value = 'X'
            box.disabled = true
            flag = 2
        }else{
            box.value = '0'
            box.disabled = true
            flag = 1
        }
        // check wins
        checkWins()
        // reset button
        btn.addEventListener('click' , function(){
            box.value = ''
            result.innerHTML = ''
        })
    })
})




function checkWins(){
    //  all key values
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

  

    // checking
    if(b1 == 'X' && b2 == 'X' && b3 == 'X'){
        result.innerHTML = 'Player X Won'
    }else if(b1 == 'X' && b4 == 'X' && b7 == 'X'){
        result.innerHTML = 'Player X Won'
    }else if(b7 == 'X' && b8 == 'X' && b9 == 'X'){
        result.innerHTML = 'Player X Won'
    }else if(b3 == 'X' && b6 == 'X' && b9 == 'X'){
        result.innerHTML = 'Player X Won'
    }else if(b1 == 'X' && b5 == 'X' && b9 == 'X'){
        result.innerHTML = 'Player X Won'
    }else if(b3 == 'X' && b5 == 'X' && b7 == 'X'){
        result.innerHTML = 'Player X Won'
    }else if(b2 == 'X' && b5 == 'X' && b8 == 'X'){
        result.innerHTML = 'Player X Won'
    }else if(b4 == 'X' && b5 == 'X' && b6 == 'X'){
        result.innerHTML = 'Player X Won'
    }else if(b1 == '0' && b2 == '0' && b3 == '0'){
        result.innerHTML = 'Player 0 Won'
    }else if(b1 == '0' && b4 == '0' && b7 == '0'){
        result.innerHTML = 'Player 0 Won'
    }else if(b7 == '0' && b8 == '0' && b9 == '0'){
        result.innerHTML = 'Player 0 Won'
    }else if(b3 == '0' && b6 == '0' && b9 == '0'){
        result.innerHTML = 'Player 0 Won'
    }else if(b1 == '0' && b5 == '0' && b9 == '0'){
        result.innerHTML = 'Player 0 Won'
    }else if(b3 == '0' && b5 == '0' && b7 == '0'){
        result.innerHTML = 'Player 0 Won'
    }else if(b2 == '0' && b5 == '0' && b8 == '0'){
        result.innerHTML = 'Player 0 Won'
    }else if(b4 == '0' && b5 == '0' && b6 == '0'){
        result.innerHTML = 'Player 0 Won'
    }else if((b1 == 'X' || b1 == '0') && (b2 == 'X'
    || b2 == '0') && (b3 == 'X' || b3 == '0') &&
    (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
    (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')){
        result.innerHTML = 'Draw'
    }
}



