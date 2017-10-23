//javascript used for Qaiums Math Game

var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

//if start/reset button is clicked
document.getElementById("startreset").onclick = function(){
  // if we are playing

  if(playing == true){
  location.reload(); //reload page

  }
  else{
    //if we are not playing change mode to playing
    playing = true;

    //set score to 0

    score = 0;
    document.getElementById("scorevalue").innerHTML = score;
    //show countdown box
    show("timeremaining");
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    //hide game over box

    hide("gameOver");

    //change button to reset

    document.getElementById("startreset").innerHTML = "Reset Game";

    //start countdown

    startCountdown();

    generateQA();

  }
}


// cliicking on an answer box

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing == true){//yes
        if(this.innerHTML == correctAnswer){
        //correct answer

            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);

            //Generate new Q&A

            generateQA();
        }else{
        //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);
        }
    }
}
}

function startCountdown(){
  action = setInterval(function(){
      timeremaining -=1;
      document.getElementById("timeremainingvalue").innerHTML = timeremaining;
      if(timeremaining == 0){ //game over
        stopCountdown();
        show("gameOver");
        document.getElementById("gameOver").innerHTML="<p> Game Over!</p><p>Your score is " + score + ".</p>";
        hide("timeremaining");
        hide("correct");
        hide("wrong");
        playing = false;
        document.getElementsByID("startreset").innerHTML = "Start Game";
      }
  }, 1000);
}

// stop counter

function stopCountdown(){
  clearInterval(action);
}

function hide(Id){
  document.getElementById(Id).style.display = "none";
}

function show(Id){
  document.getElementById(Id).style.display = "block";
}

// generate question and multiple answers
function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());

    correctAnswer = x * y;

    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;//fill one box with the correct answers

    //fill other boxes with wrong answers

    var answers = [correctAnswer];

    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }

}


function cardCounter(card) {

    switch (card){
         case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if(count > 0){
        return count + " Bet";
    }else{
        return count + " Hold";
    }
    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
