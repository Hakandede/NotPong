var dice1 = {
    sides: 6,
    roll: function () {
      var randomNumber1 = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber1;
    }
  }
  var dice2 = {
    sides: 6,
    roll: function () {

      var randomNumber2 = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber2;
    }
  }
  function rolltime(min, max){
      var rolling = Math.floor(Math.random() * (max-min)+min);
     return rolling
  }  
  
  

  function rollanimation(){
    setTimeout(() => 
    {  
        result = dice1.roll();
        result2 = dice2.roll();
        printNumber(result);
        printNumber2(result2);
    }, rolltime(700,3000));

  };
  function printNumber(number) {
     var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  function printNumber2(number2){
  var placeholder2 = document.getElementById('placeholder2');
  placeholder2.innerHTML = number2;
  }
  var button = document.getElementById('button');
  var sonuc;
  var i = 1;
  var scorePY = 0;
  var scorePC = 0;
  score = "scorePY "|" scorePC";
  button.onclick = function() {
   document.getElementById("winner").innerHTML = "Ready for next round!";
   do{
        rollanimation();
        i++;
    }
    while(i < 14);
    i=1;
    setTimeout(() =>{
    if ( result > result2 ) {
        sonuc ="Player Wins!";
        scorePY = scorePY + 1;

    }
    else if( result < result2) {
        sonuc ="Pc Wins!";
        scorePC = scorePC + 1;
    }
    else{
        sonuc = "Its a tie!";
    }
    document.getElementById("winner").innerHTML = sonuc;
    document.getElementById("skor").innerHTML = scorePY + " - " + scorePC;
}, 3100);
  };




 
