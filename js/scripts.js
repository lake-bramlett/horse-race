$(document).ready(function() {
  console.log('jquery is enabled');

  function generateRandomNumber() {
    number = Math.floor((Math.random() * 3) + 1);
    console.log(number);
    return number;
  };

  // var horseProgressOverall = 0;
  // var horseAProgress = 0;
  // var horseBProgress = 0;
  // var horseCProgress = 0;

  var trackLength = 10;

  function resetHorseValues(){
    horseProgressOverall = 0;
    horseAProgress = 0;
    horseBProgress = 0;
    horseCProgress = 0;
    $('.horse-progress').detach();
  };

  var horseAProgress = 0;
  var horseBProgress = 0;
  var horseCProgress = 0;



  $('button').click(function(event) {
    event.preventDefault();
    console.log('horse race has started');
    resetHorseValues();

    setTimeout(function() {

    while (horseAProgress < trackLength && horseBProgress < trackLength && horseCProgress < trackLength) {
        var horseNumber = generateRandomNumber();
        if (horseNumber === 1) {
          horseAProgress ++;
          setTimeout(function() {
            $('.horseA').append('<div class="horse-progress">&nbsp</div>');
          }, (2000*horseAProgress));
        } else if (horseNumber === 2) {
          horseBProgress ++;
          setTimeout(function() {
            $('.horseB').append('<div class="horse-progress">&nbsp</div>');
          }, (2000*horseBProgress));
        } else if (horseNumber === 3) {
          horseCProgress ++;
          setTimeout(function() {
            $('.horseC').append('<div class="horse-progress">&nbsp</div>');
          }, (2000*horseCProgress));
        };//if statement
        console.log('Horse A Progress: ' + horseAProgress);
        console.log('Horse B Progress: ' + horseBProgress);
        console.log('Horse C Progress: ' + horseCProgress);
    };//if statement

  }, 1000);
setTimeout(function() {
  if (horseAProgress > horseBProgress && horseAProgress > horseCProgress) {
    alert('Horse A Wins!');
  } else if (horseBProgress > horseAProgress && horseBProgress > horseCProgress) {
    alert('Horse B Wins!');
  } else if (horseCProgress > horseAProgress && horseCProgress > horseBProgress) {
    alert('Horse C Wins!');
  } else {
    alert("It's a tie!");
  };
}, 21000);

  });//click event



});//jquery
