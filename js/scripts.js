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

  function resetHorseValues(){
    horseProgressOverall = 0;
    horseAProgress = 0;
    horseBProgress = 0;
    horseCProgress = 0;
    $('.horse-progress').detach();
  }



  $('button').click(function(event) {
    event.preventDefault();
    console.log('horse race has started');
    resetHorseValues();


    while (horseAProgress < 10 || horseBProgress < 10 || horseCProgress<10){

      horseCheck = generateRandomNumber();
      if (horseCheck === 1) {
        $(".horseA").append('<div class="horse-progress">&nbsp</div>');
        horseAProgress++;
        horseProgressOverall ++;
        console.log("Horse A Progress:" + HorseAProgress);

      } else if (horseCheck === 2) {
        $(".horseB").append('<div class="horse-progress">&nbsp</div>');
        horseBProgress++;
        horseProgressOverall ++;
        console.log("Horse B Progress:" + HorseBProgress);

      } else if (horseCheck === 3) {
        $(".horseC").append('<div class="horse-progress">&nbsp</div>');
        horseCProgress++;
        horseProgressOverall ++;
        console.log("Horse C Progress:" + HorseCProgress);
      };




      // if (horseAProgress >= 10 && horseAProgress > horseBProgress) {
      //   $('.results').text('Horse A Wins!');
      // } else if (horseBProgress >= 10 && horseBProgress > HorseAProgress) {
      //   $('.results').text('Horse B Wins!');
      // };
    }//for condition

  });//click event



});//jquery
