var playing = false;
var score;
var trialsLeft;
var step;
var action;
var timeremaining;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];

$(function(){
  // click on start reset button
  $("#startreset").click(function(){
    // we are playing
    if(playing == true){
      location.reload(); // reload page
    }else{
      // we are not playing
      playing = true; //game initiated

      //set score to 0
      score = 0;
      $("#scorevalue").html(score);

      ///show trials left
      $("#trialsLeft").show();
      trialsLeft = 3;
      addHearts();

      //hide game over box
      $("#gameOver").hide();

      // change button text to reset game
      $("#startreset").html("Reset Game");

      //start sending fruits
      startAction();

    }
  });

  // slice a fruit
  $("#fruit1").mouseover(function() {
      score++;
      $("#scorevalue").html(score); // update score
      $("#slicesound")[0].play(); // play sound

      //stop fruit
      clearInterval(action);

      //hide
      $("#fruit1").hide("explode", 500); //slice fruit

      //send new fruit
      setTimeout(startAction, 1500);

  });

  //functions
1
  // fill trailsLeft box with hearts

  function addHearts(){
      $("#trialsLeft").empty();
      for(i = 0; i < trialsLeft; i++){
          $("#trialsLeft").append('<img src="images/heart.png" class="life">');
      }
  }

  //start sending fruits

  function startAction(){

    //generate a fruit
    $('#fruit1').show();
    chooseFruit();
    $('#fruit1').css({'left' : Math.round(200*Math.random()), 'top' : -50});

    //generate random step;
    step = 1+ Math.round(8*Math.random());
    //move fruit down by one step every 10 ms
    action = setInterval(function(){
      //move fruit by one step
      $('#fruit1').css('top', $('#fruit1').position().top + step);

      //check if the fruits are too low
      if($('#fruit1').position().top > $('#fruitsContainer').height()){
        //if we have trials left
        if(trialsLeft > 1){
          $('#fruit1').show();
          chooseFruit();
          $('#fruit1').css({'left' : Math.round(200*Math.random()), 'top' : -50});

          //gemerate random step
          step = 1+ Math.round(8*Math.random());
          // reduce trails by one
          trialsLeft--;

          // populate trailsLeft  box
          addHearts();

      }else{ // game over
          playing = false; //we are not playing anymore
          $("#startreset").html("Start Game"); // change button to Start Game
          $("#gameOver").show();
          $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
          $("#trialsLeft").hide();
          stopAction();
      }
  }
}, 10);
}

// generate a random fruit

function chooseFruit(){
$("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] +'.png');
}

//Stop dropping fruits

function stopAction(){
clearInterval(action);
$("#fruit1").hide();
}
});
