const bodyEl = document.body.style

document.body.addEventListener('click' , function(e){
    let id = e.target.id
    if(id === 'color-one'){
        bodyEl.backgroundColor = "var(--COLOR-ONE)"
    }else if(id === 'color-two'){
        bodyEl.backgroundColor = "var(--COLOR-TWO)"
    }else if(id === 'color-three'){
        bodyEl.backgroundColor = "var(--COLOR-THREE)"
    }else if(id === 'color-four'){
        bodyEl.backgroundColor = "var(--COLOR-FOUR)"
    }else if(id === 'color-five'){
        bodyEl.backgroundColor = "var(--COLOR-FIVE)"
    }else if(id === 'color-six'){
        bodyEl.backgroundColor = "var(--COLOR-SIX)"
    }else if(id === 'color-seven'){
        bodyEl.backgroundColor = "var(--COLOR-SEVEN)"
    }
})