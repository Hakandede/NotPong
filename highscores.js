
 
 
 function makeList() {
     var listContainername = document.getElementById('listHighscorename');
     var listContainerscore = document.getElementById('listHighscorescore');
     var numberOfListItems = dataHighscore.length;
     var listItem;
     var listItemscore;
     var i;
     for (i = 0; i < numberOfListItems; ++i) {
        listItem = document.createElement('li');
        listItemscore = document.createElement('li');
        listItemscore.setAttribute("id", "listscore");
        listItem.setAttribute("id", "listElem");
        listItemscore.innerHTML = (dataHighscore[i].score);
        listItem.innerHTML = (dataHighscore[i].userName);
        listContainername.appendChild(listItem);
        listContainerscore.appendChild(listItemscore);
     }
 }



 
 var dataHighscore = [];

 const option ={
     method: 'get',
     headers: {
       'Content-Type': 'application/json'
    }
    };
fetch('/SVtoCLI', option)
.then(response => {
    if(response.ok) {
        return response.json();
    }
}).then(data => {
    dataHighscore = data;
    makeList();
    console.log(dataHighscore);
}).catch(err => console.error(err));





console.log(dataHighscore + "asdasasd");










