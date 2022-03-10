var rollDice = document.getElementById('rollDice');
var restart = document.getElementById("restart");
var highscores = document.getElementById("highscore");
var refillHp = document.getElementById("refillHp");
var maxHp = document.getElementById("maxHp");
var diceBoost = document.getElementById("diceBoost");
var hpPY = document.getElementById("hpPY");
var hpPC = document.getElementById("hpPC");
var diceCounterPY = document.getElementById("diceCounterPY");
var diceCounterPC =document.getElementById("diceCounterPC");
var hptxtPY = document.getElementById("hptxtPY");
var hptxtPC = document.getElementById("hptxtPC");
var winner = document.getElementById("winner");
var PCmulti = document.getElementById("PCmult");
var scoreForm = document.getElementById("scoreForm");
var formVis = document.getElementById("highscoreForm");
var formVisfiller = document.getElementById("formFiller");



console.log("delirdim");
formVis.style.visibility = "hidden";
formVisfiller.style.visibility = "hidden";



var PYsides = 6;
var PCsides = 3;
var PCsidesmulti = 1;


//Random number functions for dices

var dice1 = { 
    roll: function () {
      var randomNumber1 = Math.floor(Math.random() * PYsides) + 1;
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


    //Highscore request API


  function highScoreButton(){
    formVis.style.visibility = "hidden";
    formVisfiller.style.visibility = "hidden";
    highscores.style.visibility = "visible";
    var userName = document.getElementById('fname').value;
    const data = {userName, score};
    const option ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
   fetch('/CLItoSV', option);
   console.log(data);
   console.log("Gonderdim!");
  };



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

    diceCounterPY.innerHTML = PYsides;
    diceCounterPC.innerHTML = PCsides;
    PCmult.innerHTML = "x"+PCmultipli.toFixed(2);9
    document.getElementById("hptxtPY").innerHTML = hpPY.value +" / "+ hpPY.max +" hp";
    document.getElementById("hptxtPC").innerHTML = hpPC.value +" / "+ hpPC.max + " hp";
    document.getElementById("level").innerHTML = "Level: " + level;
    document.getElementById("coin").innerHTML = coin.toFixed(2);
    console.log(userName);
    scoreForm.innerHTML = score;
  }


var coin = 0;
var sonuc = "";
var i = 1;
var level = 1;
var coinCalc = 0;
var PCmultipli = 1;
var score = 0;
var levelReset = 0;
var userName = 


hpPY.max = 10;
hpPC.max = 10;
hpPY.value = hpPY.max;
hpPC.value = hpPC.max;
document.getElementById("hptxtPY").innerHTML = hpPY.value +" / "+ hpPY.max +" hp";
document.getElementById("hptxtPC").innerHTML = hpPC.value +" / "+ hpPC.max + " hp";
restart.style.visibility = "hidden";
formVis.style.visibility = "hidden";
formVisfiller.style.visibility = "hidden";

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


//Duration of the dice roll animation
      do{
        rollanimation();
        i++;
        }
      while(i < 14);
        i=1;

setTimeout(() =>{


  var dmg = result-result2;
  var wincoin = coinCalc * level + dmg;
  var loscoin = coinCalc + 1;



  if ( result > result2 ) { //IF PLAYER WINS
        sonuc = sonuc + "Player hits " + dmg + " dmg!"  + "<br>" + "Earned + " + wincoin.toFixed(2) + " coins!" + "<br>";
        hpPC.value = hpPC.value - dmg;
        coin = coin + wincoin;
        buttonStateOn();
        refreshValues();
        rollDice.disabled = false;
        rollDice.style.color = "";
        rollDice.style.fontSize ="";
        
    }
  else if( result < result2) { //IF PC WINS
        sonuc = sonuc + "Pc hits " + dmg + " dmg!" + "<br>" + "Earned +"+ loscoin.toFixed(2) + "<br>";
        hpPY.value = hpPY.value + dmg;
        coin = coin + loscoin;
        buttonStateOn();
        refreshValues();
        rollDice.disabled = false;
        rollDice.style.color = "";
        rollDice.style.fontSize ="";
    }
  else{
        sonuc = sonuc +"Its a tie!" + "<br>" ;
        buttonStateOn();
        refreshValues();
        rollDice.disabled = false;
        rollDice.style.color = "";
        rollDice.style.fontSize ="";
    }
      if (hpPY.value <= 0){ //IF PLAYER DIES
          winner.style.color = "red";
          sonuc ="You Lost!" + "<br>";
          restart.style.visibility = "visible";
          formVis.style.visibility = "visible";
          formVisfiller.style.visibility = "visible";
          scoreForm.innerHTML = score;
          buttonStateOff();
          rollDice.disabled = true;
          rollDice.style.color = "grey";
          rollDice.style.fontSize = "29px";
        }
      else if (hpPC.value <= 0){  //IF PC DIES
          winner.style.color = "green";
          level = level + 1;
          var scoreHPmulti = hpPY.max;
          if(level > 7){
            level = 1;
            PCsides = 3;
            hpPC.max = 5 + level*5;
            hpPY.value = hpPY.max;
            hpPC.value = hpPC.max;
            score = score + 10 + (levelReset * 5) + (scoreHPmulti * 0.25);
            sonuc ="Level reset!" + "<br>" +"Enemy got stronger!"+ "<br>" + "Health regenerated" + "<br>" + "+"+wincoin.toFixed(2) + " earned" + "<br>" + "Combat multiplier increased!" + "<br>" + "Score multiplier increased!" + "<br>";
            levelReset = levelReset + 1;
            PCmultipli = PCmultipli*1.25;
            refreshValues();
          }
          else{    
          PCsides = PCsides + 1;
          sonuc ="Next level!" + "<br>" +"Enemy got stronger!"+ "<br>" + "Health regenerated" + "<br>" + "+"+wincoin.toFixed(2) + " earned" + "<br>";
          hpPC.max = 5 + level * 5;
          score = score + levelReset + 1;
          buttonStateOn();
          hpPY.value = hpPY.max;
          hpPC.value = hpPC.max;
          refreshValues();
          }
        }

  //Outputing and resetting values
  winner.innerHTML = sonuc;
  PYsides = 6;
  diceCounterPY.style.fontWeight = "100";
  diceCounterPC.style.fontWeight = "100";
  diceCounterPY.style.color = "";
  refreshValues();
  winner.scrollTop = winner.scrollHeight;
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
    if(coin >= 2 && PYsides < 9){
      PYsides = PYsides + 1;
      coin = coin - 2;
      sonuc = sonuc + "Dice side expaned 1 for one round!" + "<br>";
      diceCounterPY.style.fontWeight = "bold";
      diceCounterPY.style.color = "rgb(255, 215, 0)";
      refreshValues();
    }
    else if(PYsides >= 9){
      sonuc = sonuc + "Dice has reached its capacity" + "<br>";
    }
      else{
        sonuc = sonuc + "Not enough coins to spend!" + "<br>";
      }
    winner.innerHTML = sonuc;
    winner.scrollTop = winner.scrollHeight;

  }
};

//Restart button function

  restart.onclick = function(){
    restart.style.visibility = "hidden";
    highscores.style.visibility = "hidden";
    formVis.style.visibility = "hidden";
    formVisfiller.style.visibility = "hidden";
    rollDice.disabled = false;
    rollDice.style.color = "";
    rollDice.style.fontSize ="";
    level = 1;
    coin = 0;
    hpPC.max = 10;
    hpPY.max = 10;
    PCsides = 3;
    score = 0; 
    levelReset = 0;
    hpPY.value = hpPY.max;
    hpPC.value = hpPC.max;
    refreshValues();
    buttonStateOn();

  };




 
