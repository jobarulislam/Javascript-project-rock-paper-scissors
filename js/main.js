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
function pickResultRock()
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
        alert(`You picked Rock. computer picked ${computerMove} and Result is : ${result}`)
}
function pickResultPaper()
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
        alert(`You picked Paper. computer picked ${computerMove} and Result is : ${result}`)
}
function pickResultScissors()
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
        alert(`You picked scissors. computer picked ${computerMove} and Result is : ${result}`)
}
