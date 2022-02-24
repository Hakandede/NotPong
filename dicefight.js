var rollDice = document.getElementById('rollDice');
var restart = document.getElementById("restart");
var highscores = document.getElementById("highscore");
var refillHp = document.getElementById("refillHp");
var maxHp = document.getElementById("maxHp");
var diceBoost = document.getElementById("diceBoost");
var hpPY = document.getElementById("hpPY");
var hpPC = document.getElementById("hpPC");
var hptxtPY = document.getElementById("hptxtPY");
var hptxtPC = document.getElementById("hptxtPC");
var winner = document.getElementById("winner");


var Psides = 6;
var PCsides = 3;
var PCsidesmulti = 1;


//Random number functions for dices

var dice1 = { 
      roll: function () {
        var randomNumber1 = Math.floor(Math.random() * Psides) + 1;
        return randomNumber1;
    }
  }
  var dice2 = {
    sides: PCsides,
      roll: function () {
        var randomNumber2 = Math.floor(Math.random() * PCsides) + PCsidesmulti;
        return randomNumber2;
    }
  }

  //Random number for calculating coin

  function wincond(){
    coinCalc = (Math.random() * 0.45)+0.20;
  }


//Random number for roll animation

  function rolltime(min, max){
      var rolling = Math.floor(Math.random() * (max-min)+min);
        return rolling
  }


//Main function for dice number generation and animation
  
  function rollanimation(){
      setTimeout(() => 
      {  
            result = dice1.roll();
            result2 = dice2.roll();
            printNumber(result);
            printNumber2(result2);
        }, rolltime(700,3000));
      }


//Print function for dices

  function printNumber(number) {
     var placeholder = document.getElementById('placeholder');
      placeholder.innerHTML = number;
  }
  function printNumber2(number2){
    var placeholder2 = document.getElementById('placeholder2');
      placeholder2.innerHTML = number2;
  }



  //Functions for disabling buttons(between rounds etc)


  function buttonStateOff(){
    refillHp.disabled = true;
    maxHp.disabled = true;
    diceBoost.disabled = true;
    refillHp.style.color = "grey";
    maxHp.style.color = "grey";
    diceBoost.style.color = "grey";
  }
  function buttonStateOn(){
    refillHp.disabled = false;
    maxHp.disabled = false;
    diceBoost.disabled = false;
    refillHp.style.color = "";
    maxHp.style.color = "";
    diceBoost.style.color = "";
  }


  //Refresh function for output values

  function refreshValues(){
    document.getElementById("hptxtPY").innerHTML = hpPY.value +" / "+ hpPY.max +" hp";
    document.getElementById("hptxtPC").innerHTML = hpPC.value +" / "+ hpPC.max + " hp";
    document.getElementById("level").innerHTML = "Level: " + level;
    document.getElementById("coin").innerHTML = coin.toFixed(2);
  }


var coin = 0;
var sonuc = "";
var i = 1;
var level = 1;
var scorePC = 0;
var coinCalc = 0;
 hpPY.max = 1;
hpPC.max = 10;
hpPY.value = hpPY.max;
hpPC.value = hpPC.max;
document.getElementById("hptxtPY").innerHTML = hpPY.value +" / "+ hpPY.max +" hp";
document.getElementById("hptxtPC").innerHTML = hpPC.value +" / "+ hpPC.max + " hp";
restart.style.visibility = "hidden";

//Main game function for rolling the dices ------------------------------------------------------------------------------------------------------------

rollDice.onclick = function() { 

//disables the buttons for round
    winner.style.color = "";
    rollDice.disabled = true;
    rollDice.style.color = "grey"; 
    rollDice.style.fontSize = "29px";
    restart.style.visibility = "hidden";
    highscores.style.visibility = "hidden";
    buttonStateOff();
    wincond(coinCalc);


var wincoin = coinCalc * level + 2;
var loscoin = coinCalc + 1;

//Duration of the dice roll animation
      do{
        rollanimation();
        i++;
        }
      while(i < 14);
        i=1;
setTimeout(() =>{


  if ( result > result2 ) { //IF PLAYER WINS
        sonuc = sonuc + "Player hits " + result + " dmg!"  + "<br>" + "Earned + " + wincoin.toFixed(2) + " coins!" + "<br>";
        hpPC.value = hpPC.value - result;
        coin = coin + wincoin;
        buttonStateOn();
        rollDice.disabled = false;
        rollDice.style.color = "";
        rollDice.style.fontSize ="";
        
    }
  else if( result < result2) { //IF PC WINS
        sonuc = sonuc + "Pc hits " + result2 + " dmg!" + "<br>" + "Earned +"+ loscoin.toFixed(2) + "<br>";
        hpPY.value = hpPY.value - result2;
        coin = coin + loscoin;
        buttonStateOn();
        rollDice.disabled = false;
        rollDice.style.color = "";
        rollDice.style.fontSize ="";
    }
  else{
        sonuc = sonuc +"Its a tie!" + "<br>" ;
        buttonStateOn();
        rollDice.disabled = false;
        rollDice.style.color = "";
        rollDice.style.fontSize ="";
    }
      if (hpPY.value <= 0){ //IF PLAYER DIES
          winner.style.color = "red";
          scorePC = scorePC + 1;
          sonuc ="You Lost!" + "<br>";
          restart.style.visibility = "visible";
          highscores.style.visibility = "visible";  
          buttonStateOff();
          rollDice.disabled = true;
          rollDice.style.color = "grey";
          rollDice.style.fontSize = "29px";
          PCsides = 3;
        }
      else if (hpPC.value <= 0){  //IF PC DIES
          winner.style.color = "green";
          level = level + 1;
          PCsides = PCsides + 1;
          sonuc ="Next level!" + "<br>" +"Enemy got stronger!"+ "<br>" + "Health regenerated" + "<br>" + "+"+wincoin.toFixed(2) + " earned" + "<br>";
          hpPC.max = 5 + level*5;
          buttonStateOn();
          hpPY.value = hpPY.max;
          hpPC.value = hpPC.max;
        }

  //Outputing and resetting values
  winner.innerHTML = sonuc;
  refreshValues();
  winner.scrollTop = winner.scrollHeight;
  Psides = 6;
}, 3100);


//Restroe hp button

  refillHp.onclick = function(){
    if(coin >= 3 && hpPY.value < hpPY.max){
      hpPY.value = hpPY.value + 3;
      coin = coin - 3;
      refreshValues();
      sonuc = sonuc + "Purchase succesfull restoring 3 HP!" + "<br>";
    }
    else if(hpPY.value == hpPY.max && coin >= 5){
        sonuc = sonuc + "Hitpoints are already at max!" + "<br>";
      }
    else {
      sonuc = sonuc + "Not enough coins to spend!" + "<br>"
    }
      winner.innerHTML = sonuc;
      winner.scrollTop = winner.scrollHeight;
  }


//Hp upgrade button

  maxHp.onclick = function(){
    if(coin >= 6){
      hpPY.max = hpPY.max + 2;
      hpPY.value = hpPY.value + 2;
      coin = coin - 6;
      refreshValues();
      sonuc = sonuc + "Purchase succesfull max HP raised by 2!" + "<br>";
    } 
      else{
        sonuc = sonuc + "Not enough coins to spend!" + "<br>";
      }
    winner.innerHTML = sonuc;
    winner.scrollTop = winner.scrollHeight;
  }

//Dice side boots button

  diceBoost.onclick = function(){
    if(coin >= 2 && Psides < 9){
      Psides = Psides + 1;
      coin = coin - 2;
      refreshValues();
      sonuc = sonuc + "Dice side expaned 2 for one round!" + "<br>";
      console.log(Psides);
    }
    else if(Psides >= 8){
      sonuc = sonuc + "Dice has reached its capacity" + "<br>";
    }
      else{
        sonuc = sonuc + "Not enough coins to spend!" + "<br>";
      }
    winner.innerHTML = sonuc;
    winner.scrollTop = winner.scrollHeight;

  }
  highscores.onclick = function(){
    console.log("notalert");
    alert("Not Yet");
  }
};

//Restart button function

  restart.onclick = function(){
    restart.style.visibility = "hidden";
    highscores.style.visibility = "hidden";
    rollDice.disabled = false;
    rollDice.style.color = "";
    rollDice.style.fontSize ="";
    level = 1;
    coin = 0;
    hpPC.max = 10;
    hpPY.max = 10;
    hpPY.value = hpPY.max;
    hpPC.value = hpPC.max;
    refreshValues();
    buttonStateOn();

  };




 
