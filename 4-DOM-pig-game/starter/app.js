/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying;

<<<<<<< HEAD
scores = [0,0];
roundScore = 0;
activePlayer = 0;
=======
init();
var lastDice;
>>>>>>> 1430b3de98a6791062dd97682c77c15557c3b9cb

function rollDice(num) {
    if (gamePlaying) {
        //1 random number

        var dice = Math.floor(Math.random() * 6) + 1;

        var currentdice;

        //2 display result
        var diceDOM = document.querySelector(".dice-"+num);
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";
        console.log(dice);


        //3 update the round score - only if !=1

        if (lastDice == 6 && dice == 6) {
            console.log("two sixs");
            scores[activePlayer];

<<<<<<< HEAD
document.querySelector('.btn-roll') .addEventListener('click',function(){
    //1 random number
   var dice = Math.floor(Math.random()*6)+1;
    
    //2 display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    console.log(dice)
    
    
    //3 update the round score - only if !=1
    if(dice !== 1){
        //add the score
         roundScore +=dice;
        document.querySelector('#current-' + activePlayer) .textContent = roundScore;
        
    }else{
        //next player turn
        activePlayer === 0 ? activePlayer =1 :
        activePlayer =0;
        roundScore = 0;
        
        document.getElementById("current-1").textContent = '0';
        document.getElementById("current-0").textContent = '0';
        
         
        document.querySelector('.player-0-panel').classList.toggle('active');
        
        document.querySelector('.player-1-panel').classList.toggle('active');
        
//        document.querySelector('.player-0-panel').classList.remove('active');
//        
//        document.querySelector('.player-1-panel').classList.add('active');
        
    document.querySelector('.dice').style.display='none';
        
        
=======
            document.querySelector("#current-" + activePlayer).textContent = 0;
            document.querySelector("#score-" + activePlayer).textContent = '0';
            nextPlayer();
        }

        if (dice !== 1) {
            //add the score
            roundScore += dice;
            document.querySelector(
                "#current-" + activePlayer).textContent = roundScore;
        } else {
            //next player turn

            nextPlayer();
        }

        lastDice = dice;
>>>>>>> 1430b3de98a6791062dd97682c77c15557c3b9cb
    }

}



document.querySelector(".btn-roll").addEventListener("click", function(){
    rollDice(1);
    rollDice(2);
    
})

var x;

<<<<<<< HEAD
document.querySelector('btn-hold').addEventListener('click',function(){
    
    //Add CURRENT score to global score
    scores[activePlayer] +=roundScore;
    
    
    //update UI
    
    
    //check player won da the game
    
    
})


=======
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlaying) {
        //add current score to the global score
>>>>>>> 1430b3de98a6791062dd97682c77c15557c3b9cb

        scores[activePlayer] += roundScore;

        //update the ui

        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];

        var input = document.querySelector('.form').value;
        console.log(input);
        var winningScore;
        //validity check

        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }



        //check if player has won the game
        if (scores[activePlayer] >= winningScore) {

            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice-1").style.display = "none";
            document.querySelector(".dice-2").style.display = "none";
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");

            gamePlaying = false;
        } else {
            //nextplayer
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice-1").style.display = "none";
    document.querySelector(".dice-2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;


    document.querySelector(".dice-1").style.display = "none";
    document.querySelector(".dice-2").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");


    document.querySelector(".player-1-panel").classList.remove("active");
}



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
