 const express = require('express');
const fs = require('fs');
const app = express();
var saveData = [];

     score = fs.readFileSync('highscores.json');
     saveData = JSON.parse(score);
     //console.log(saveData);


app.listen(3000, () => console.log("lstn3000"));
app.use(express.static('public'));
app.use(express.json({limit: "1mb" }));

saveData.sort(function(a, b){
  return b.score - a.score
});
for (i = 7; i < saveData.length;) {
  saveData = saveData.slice(0, -1);
  console.log(saveData);
  console.log(saveData.length);
} 

app.post('/CLItoSV', (request, response) => {
    console.log("I got response!");
    saveData.push(request.body);
    var reqData = JSON.stringify(saveData);
    fs.writeFile('highscores.json', reqData, finishedd);
    function finishedd(){
        console.log('veri yazildi');
    }
    
});

app.post('/svtocli', (request, response) => {
  saveData.sort(function(a, b){
    return b.score - a.score
});
  var data=JSON.stringify(saveData);
    response.send(data)
   }
);