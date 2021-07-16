//Code written by me :

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

function playSound(name)
{
  //Audio play
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keydown(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});




//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
      var audio1 = new Audio("sounds/wrong.mp3");
      audio1.play();

      $("body").addClass("game-over");

      setTimeout(function(){
        $("body").removeClass("game-over");
      },1400);

      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();

    }

}


function startOver(){
level = 0;
gamePattern = [];
started = false;
}


function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);
}




$(".btn").click(function(){
    var  userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // console.log(userClickedPattern);

     playSound(userChosenColour);
     animatePress(userChosenColour);
     //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
});


function nextSequence(){
  randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //Animation
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  //Audio play
  playSound(randomChosenColour);

  //Increase the Level
  level++;

  //Printing the Level
  $("#level-title").text("Level " + level);
}





//Code given by Angelina  Udemy


// var buttonColours = ["red", "blue", "green", "yellow"];
//
// var gamePattern = [];
// var userClickedPattern = [];
//
// var started = false;
// var level = 0;
//
// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });
//
// $(".btn").click(function() {
//
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//
//   checkAnswer(userClickedPattern.length-1);
// });
//
//
// function checkAnswer(currentLevel) {
//
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//
//       console.log("success");
//
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//
//     } else {
//
//       console.log("wrong");
//
//       playSound("wrong");
//
//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);
//
//       $("#level-title").text("Game Over, Press Any Key to Restart");
//
//       //2. Call startOver() if the user gets the sequence wrong.
//       startOver();
//     }
//
// }
//
// function nextSequence() {
//
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }
//
// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
//
// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }
//
// //1. Create a new function called startOver().
// function startOver() {
//
//   //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
//   level = 0;
//   gamePattern = [];
//   started = false;
// }
