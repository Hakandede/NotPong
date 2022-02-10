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
  var hpPY = document.getElementById("hpPY");
  var hpPC = document.getElementById("hpPC");
  var hptxtPY = document.getElementById("hptxtPY");
  var hptxtPC = document.getElementById("hptxtPC");
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
        sonuc ="Player Wins this round!";
        hpPC.value = hpPC.value - result;
        
    }
    else if( result < result2) {
        sonuc ="Pc Wins this round!";
        hpPY.value = hpPY.value - result2;
    }
    else{
        sonuc = "Its a tie!";
    }
    if (hpPY.value <= 0){
      sonuc ="You Lost!";
      scorePC = scorePC + 1;
      hpPY.value = hpPY.max;
      hpPC.value = hpPC.max;
    }
    else if (hpPC.value <= 0){
      sonuc ="You Won!";
      scorePY = scorePY + 1;
      hpPY.value = hpPY.max;
      hpPC.value = hpPC.max;
    }
    document.getElementById("winner").innerHTML = sonuc;
    document.getElementById("skor").innerHTML = scorePY + " - " + scorePC;
    document.getElementById("hptxtPY").innerHTML = hpPY.value + "%";
    document.getElementById("hptxtPC").innerHTML = hpPC.value + "%";
}, 3100);
  };




 
