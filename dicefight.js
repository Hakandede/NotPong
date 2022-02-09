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
        
        console.log(result);
        console.log(result2);
    }, rolltime(500,2500));

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
  button.onclick = function() {
   // for (var i = 1; i < 10; i++ )
   document.getElementById("winner").innerHTML = " ";
   do{
        rollanimation();
        i++;
    }
    while(i < 10);
    i=1;
    setTimeout(() =>{
    if ( result > result2 ) {
        sonuc ="Player Wins!";
    }
    else if( result < result2) {
        sonuc ="Pc Wins!";
    }
    else{
        sonuc = "Its a tie!";
    }
    document.getElementById("winner").innerHTML = sonuc;
    console.log(result)
}, 2500);
  };




 
