
var dice1 = {
    sides: 9,
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
  function wincond(){
   coinCalc = (Math.random() * 0.35)+0.15;
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
  var rollDice = document.getElementById('rollDice');
  var restart = document.getElementById("restart");
  var highscores = document.getElementById("highscore");
  var hpPY = document.getElementById("hpPY");
  var hpPC = document.getElementById("hpPC");
  var hptxtPY = document.getElementById("hptxtPY");
  var hptxtPC = document.getElementById("hptxtPC");
  var winner = document.getElementById("winner");
  var coin = 0;
  var sonuc = "";
  var i = 1;
  var level = 1;
  var scorePC = 0;
  var coinCalc = 0;
    hpPY.max = 10;
    hpPC.max = 10;
    hpPY.value = hpPY.max;
    hpPC.value = hpPC.max;
    document.getElementById("hptxtPY").innerHTML = hpPY.value +" / "+ hpPY.max +" hp";
    document.getElementById("hptxtPC").innerHTML = hpPC.value +" / "+ hpPC.max + " hp";
    restart.style.visibility = "hidden";


rollDice.onclick = function() { //CLICK FUNCTION
    winner.style.color = "";
    rollDice.disabled = true;
    rollDice.style.color = "grey"; //disables the rollDice till next round
    rollDice.style.fontSize = "29px";
    restart.style.visibility = "hidden";
    highscores.style.visibility = "hidden";
    wincond(coinCalc);
    var wincoin = coinCalc * level + 2;
    console.log("coin"+coinCalc);
      do{
        rollanimation();
        i++;
        }
      while(i < 14);
        i=1;
    setTimeout(() =>{
    if ( result > result2 ) {
        sonuc = sonuc + "Player hits " + result + " dmg!"  + "<br>" + "Earned + " + wincoin.toFixed(2) + " coins!" + "<br>";
        hpPC.value = hpPC.value - result;
        coin = coin + wincoin;
        console.log(wincoin);
        rollDice.disabled = false;
        rollDice.style.color = "";
        rollDice.style.fontSize ="";
        
    }
    else if( result < result2) {
        sonuc = sonuc + "Pc hits " + result2 + " dmg!" + "<br>" + "Earned +"+coinCalc.toFixed(2) + "<br>";
        hpPY.value = hpPY.value - result2;
        coin = coin + coinCalc+1;
        rollDice.disabled = false;
        rollDice.style.color = "";
        rollDice.style.fontSize ="";
    }
    else{
        sonuc = sonuc +"Its a tie!" + "<br>" ;
        rollDice.disabled = false;
        rollDice.style.color = "";
        rollDice.style.fontSize ="";
    }
    if (hpPY.value <= 0){
      winner.style.color = "red";
      scorePC = scorePC + 1;
      sonuc ="You Lost!" + "<br>";
      restart.style.visibility = "visible";
      highscores.style.visibility = "visible";  
      rollDice.disabled = true;
      rollDice.style.color = "grey"; //disables the rollDice till next round
      rollDice.style.fontSize = "29px";   
    }
    else if (hpPC.value <= 0){
      winner.style.color = "green";
      level = level + 1;
      sonuc ="Next level!" + "<br>" + "Health regenerated" + "<br>" + "+"+wincoin.toFixed(2) + " earned" + "<br>";
      hpPC.max = 5 + level*5;
      hpPY.value = hpPY.max;
      hpPC.value = hpPC.max;
    }
    winner.innerHTML = sonuc;
    document.getElementById("hptxtPY").innerHTML = hpPY.value +" / "+ hpPY.max +" hp";
    document.getElementById("hptxtPC").innerHTML = hpPC.value +" / "+ hpPC.max + " hp";
    document.getElementById("level").innerHTML = "Level: " + level;
    document.getElementById("coin").innerHTML = coin.toFixed(2);
    winner.scrollTop = winner.scrollHeight;
}, 3100);

};
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
    document.getElementById("hptxtPY").innerHTML = hpPY.value +" / "+ hpPY.max +" hp";
    document.getElementById("hptxtPC").innerHTML = hpPC.value +" / "+ hpPC.max + " hp";
    document.getElementById("coin").innerHTML = coin;

  };




 
