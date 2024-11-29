const score= JSON.parse(localStorage.getItem('score'))||{
    win:0,
    lose:0,
    tie:0
}

updateScoreElement();
function playGame(playmove){
    const computer = pickComputerMove()
    let result = ' '
    // let userInput = ' ''
    
    if(playmove === '👊'){

        userInput = playmove
        if (computer === '👊') {
            result = 'tie'
           score.tie++
        } else if (computer === '✋') {
            result = 'you lose'
            score.lose++
            
        } else if (computer === '✌️') {
            result = 'you win'
            score.win++


        }
    }
    else if(playmove === '✋'){
        userInput = playmove
        if (computer === '👊') {
            result = 'you win'
            score.win++
        } else if (computer === '✋') {
            result = 'tie'
            score.tie++
        } else if (computer === '✌️') {
            result = 'you lose!'
            score.lose++
            

        }
    }
    else{
        userInput = '✌️'
        
        if (computer === '👊') {
            result = 'you lose!'
            score.lose++
        } else if (computer === '✋') {
            result = 'you win'
            score.win++
        } else if (computer === '✌️') {
            result = 'tie'
            score.tie++

        }
        // console.log('ji') // this will not work after return

    }
    if(result ==='win'){
        score.win++
    }else if(result ==='lose'){
        score.lose++
    }else if(result ==='tie'){
        score.tie++
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement()
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `you ${playmove} - ${computer} computer `

}

function updateScoreElement(){
    document.querySelector('.js_score')
    .innerHTML= `win: ${score.win},lose: ${score.lose},tie: ${score.tie}`;
}

function pickComputerMove() {
    
    let computer = Math.random(0, 10) * 10
    if (computer > 0 && computer < 3) {
        computer = '👊'
    } else if (computer > 3 && computer < 6.5) {
        computer = '✋'
    } else if (computer > 6.5 && computer < 10) {
        computer = '✌️'
    }
    return computer
}