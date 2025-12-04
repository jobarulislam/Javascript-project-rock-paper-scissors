let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0,
        totalplay: 1
    };
}
let computerMove ='';
function pickComputerMove()
{
     const randomNumber = Math.random();
        
        if (randomNumber >= 0 && randomNumber <1/3)
        {
            computerMove = 'rock';
        }
        else if(randomNumber >= 1 /3 && randomNumber < 2/ 3 && randomNumber < 1)
        {
            computerMove ='paper';
        }
        else if (randomNumber >= 2/3 && randomNumber < 1)
        {
            computerMove = 'scissors';
        }
}
let result = '';
function playGame(playerMove)
{   pickComputerMove();
    if (playerMove === 'rock')
    {
        if (computerMove === 'rock')
        {
            result = 'Tie.';
        }
        else if (computerMove === 'paper')
        {
            result = 'You win.';
        }
        else if (computerMove === 'scissors')
        {
            result = 'You lose.';
        }
    }
    else if (playerMove === 'paper')
    {
        if (computerMove === 'rock')
        {
            result = 'You win.';
        }
        else if (computerMove === 'paper')
        {
            result = 'Tie.';
        }
        else if (computerMove === 'scissors')
        {
            result = 'You lose.';
        }
    }
    else if ( playerMove === 'scissors')
    {
        if (computerMove === 'rock')
        {
            result = 'You lose.';
        }
        else if (computerMove === 'paper')
        {
            result = 'You win.';
        }
        else if (computerMove === 'scissors')
        {
            result = 'tie.';
        }
    }
    scores();
    
        alert(`You picked ${playerMove}. computer picked ${computerMove} and Result is : ${result}
win : ${score.wins}. losses : ${score.losses}. tie : ${score.ties}. 
total Play : ${score.totalplay}.`)
}
function scores(){
if(result === 'You win.')
{
    score.wins += 1;
}
else if (result === 'You lose.')
{
    score.losses += 1;
}
else if (result === 'tie.')
{
    score.ties += 1;
}
score.totalplay = score.wins + score.losses + score.ties ;
 localStorage.setItem('score' , JSON.stringify(score));
}

function restart()
{
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    score.totalplay = 0;
}
