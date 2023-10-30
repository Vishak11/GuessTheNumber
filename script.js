'use strict'
let Snumber,Score,OldScore
Snumber = Math.trunc(Math.random() * 20) + 1
console.log(Snumber)
document.querySelector('.number').textContent = "Guess me"
Score = 20
OldScore = localStorage.getItem("HighScore")
document.querySelector('.HighScore').textContent = OldScore
document.querySelector('.check').addEventListener('click',

    function () {
        const guess = Number(document.querySelector('.guess').value)
        if(guess>20||guess<1){
            document.querySelector('.message').textContent = "Please enter a value between 1 and 20"
        }
      
        else if (!guess) {
            document.querySelector('.message').textContent = "Empty value"
        }
        else if (guess == Snumber) {
            document.querySelector('.message').textContent = "Correct Number"
            // document.querySelector('.score').textContent=Score
            document.querySelector('body').style.backgroundColor = '60b347'
            if (Score > OldScore) {
                localStorage.setItem("HighScore", Score)
                document.querySelector('.HighScore').textContent = Score
            }
            
            document.querySelector('.number').textContent = "Correct Guess"
            document.querySelector('.guess').disabled = true;
        }
        else if (guess != Snumber) {
            document.querySelector('.message').textContent = guess > Snumber ? "Too High" : "Too Low"
            Score--
            if (Score == 0) {
                document.querySelector('.message').textContent = "Game Over"
                document.querySelector('.score').textContent = Score
            }
            else {
                document.querySelector('.score').textContent = Score
            }
        }
        document.querySelector('.guess').value = ''
    })
document.querySelector('.again').addEventListener('click',

    function () {
        document.querySelector('.guess').value = ''
        document.querySelector('.message').textContent = "Start Guessing...."
        document.querySelector('.score').textContent = 20
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector('.number').textContent = "Guess me"
        Snumber = Math.trunc(Math.random() * 20) + 1
        Score = 20
        document.querySelector('.guess').disabled = false;
        OldScore = localStorage.getItem('HighScore')
        console.log(Snumber)

    })
