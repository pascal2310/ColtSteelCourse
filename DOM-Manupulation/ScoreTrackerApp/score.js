var player1Score = document.getElementById('p1Score')
var player2Score = document.getElementById('p2Score')
var p1score = 0;
var p2score = 0;

var p1Btn = document.getElementById("p1");
var p2Btn = document.getElementById("p2");
var reset = document.getElementById("reset");

var isGameOver = false; 
var winningScore = 5; 

var winningScoreLabel = document.getElementById('scoreTill');
var winningInput = document.getElementsByTagName('input')[0]; 

p1Btn.addEventListener('click', ()=> {
    if(!isGameOver){
        p1score++;
            if(p1score === winningScore){
                isGameOver = true;
                player1Score.classList.add('winner')
            }
        player1Score.textContent = p1score
    }
})
p2Btn.addEventListener('click', ()=> {
    if(!isGameOver){
        p2score++;
            if(p2score === winningScore){
                isGameOver = true;
                player2Score.classList.add('winner')
            }
        player2Score.textContent = p2score
    }
})

reset.addEventListener('click', reset)

winningInput.addEventListener('change', ()=> {
    winningScoreLabel.textContent = winningInput.value;
    winningScore = parseInt(winningInput.value);
    reset();
})

function reset (){
    p1score = 0;
    p2score = 0; 
    isGameOver = false; 
    player1Score.classList.remove('winner');
    player2Score.classList.remove('winner');
    player1Score.textContent = 0;
    player2Score.textContent = 0;
}