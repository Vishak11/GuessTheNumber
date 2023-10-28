'use strict'
 let Snumber=Math.trunc(Math.random()*20)+1
console.log(Snumber)
document.querySelector('.number').textContent=Snumber
let Score=20
let OldScore=localStorage.getItem('HighScore',Score)
document.querySelector('.HighScore').textContent=OldScore
document.querySelector('.check').addEventListener('click',

function()
{
    const guess= Number(document.querySelector('.guess').value)
    console.log("guess",guess)
    if(!guess)
        {
        document.querySelector('.message').textContent="Empty value"
        }
    else if(guess==Snumber)
        {        
            document.querySelector('.message').textContent="Correct Number"
            document.querySelector('.score').textContent=Score
            document.querySelector('body').style.backgroundColor='60b347'
            localStorage.setItem("HighScore",Score)
            document.querySelector('.HighScore').textContent=Score
        }
    else if(guess>Snumber)
        {
            document.querySelector('.message').textContent="Too High"
            Score--
            if(Score==0)
            {
                document.querySelector('.message').textContent="Game Over"
                document.querySelector('.score').textContent=Score
            }
            else
            {
                document.querySelector('.score').textContent=Score
            }

        }
    else if(guess<Snumber)
        {
             document.querySelector('.message').textContent="Too Low"
             Score--
             if(Score==0)
             {
                 document.querySelector('.message').textContent="Game Over"
                 document.querySelector('.score').textContent=Score
             }
             else
             {
                document.querySelector('.score').textContent=Score
             }
    

        }
        document.querySelector('.guess').value=''
})
document.querySelector('.again').addEventListener('click',

function()
{
    document.querySelector('.guess').value=''
    document.querySelector('.message').textContent="Start Guessing...."
    document.querySelector('.score').textContent=20
    document.querySelector('body').style.backgroundColor='white'
    
    Snumber=Math.trunc(Math.random()*20)+1
    console.log(Snumber)

})
