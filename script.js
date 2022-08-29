var players =["X","O"]

var playersTurn = 0;
var tableBox = document.querySelector(".table")
var count = 0;


function reset(){
   
    var reset = document.querySelector(".reset");
    reset.addEventListener('click', function(){
        
        window.location.reload();
        
    })
}

 reset();
console.log("meow");


tableBox.addEventListener('click', clickHandler)



function clickHandler(event){
    
     let box = event.target
     if(box.textContent !== "")return;

    
     event.preventDefault()
     console.log(box.tagName);
    if(box.tagName === "TD"){
         if(box.textContent === "" && playersTurn % 2 === 0 ){
                    box.textContent = players[0];
                    playersTurn++;
                    functionToShow();
                    count++;
                }else {
                    box.textContent = players[1];
                    playersTurn++;
                    functionToShow();
                    count++;
                }

 function compareChoice(){

 
    // For 1st td horizontal win
    for(var i = 0; i <= players.length;i++){
      if(tableBox.children[0].children[0].children[0].textContent == players[i]&&
    tableBox.children[0].children[0].children[1].textContent == players[i] &&   
    tableBox.children[0].children[0].children[2].textContent == players[i] ){
       
        tableBox.children[0].children[0].children[0].style.borderColor = "rgb(0, 255, 247)";

        tableBox.children[0].children[0].children[1].style.borderColor = "rgb(0, 255, 247)";

        tableBox.children[0].children[0].children[2].style.borderColor = "rgb(0, 255, 247)";

    if(tableBox.children[0].children[0].children[0].textContent === players[0]&&
    tableBox.children[0].children[0].children[1].textContent === players[0]&&   
    tableBox.children[0].children[0].children[2].textContent === players[0] ){
        
        displayResult("Player 1 Won");
        var first = document.querySelector(".score1");
  
        first.textContent = Number(first.textContent)+ 1;
    
     
          tableBox.removeEventListener("click", clickHandler);
      return;
    } else {
        displayResult("Player 2 Won");
        tableBox.removeEventListener("click", clickHandler);
        var first = document.querySelector(".score2");
  
  first.textContent = Number(first.textContent)+ 1;
        return;
    } 
    } 
   
  
 
    // For 2nd td horizontal tag
   
    if(tableBox.children[0].children[1].children[0].textContent=== players[i] &&
    tableBox.children[0].children[1].children[1].textContent === players[i] &&  
    tableBox.children[0].children[1].children[2].textContent === players[i] ){

        tableBox.children[0].children[0].children[2].style.borderBottom = "1px solid rgb(0, 255, 247)";

        tableBox.children[0].children[0].children[0].style.borderBottom = "1px solid rgb(0, 255, 247)";
      
        tableBox.children[0].children[0].children[1].style.borderBottom = "1px solid rgb(0, 255, 247)" ;

        
        tableBox.children[0].children[1].children[0].style.
        borderColor = "rgb(0, 255, 247)";

     tableBox.children[0].children[1].children[1].style.
        borderColor = "rgb(0, 255, 247)";


        tableBox.children[0].children[1].children[2].style.
        borderColor = "rgb(0, 255, 247)";



    if(tableBox.children[0].children[1].children[0].textContent === players[0]&&
    tableBox.children[0].children[1].children[1].textContent === players[0]&&   
    tableBox.children[0].children[1].children[2].textContent === players[0] ){
        displayResult('Player 1 Won');
        var first = document.querySelector(".score1");
  
  first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
        return;
        
    } else {
        displayResult("player 2 Won");
        var first = document.querySelector(".score2");
  
  first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
        return;
    }
    }
     
    //For 3rd td horizontal tag
   
    if(tableBox.children[0].children[2].children[0].textContent === players[i] &&
    tableBox.children[0].children[2].children[1].textContent === players[i] &&  
    tableBox.children[0].children[2].children[2].textContent === players[i] ){
    console.log("anusha");
         tableBox.children[0].children[2].children[0].style.borderColor = "rgb(0, 255, 247)";


        tableBox.children[0].children[2].children[1].style.borderColor = "rgb(0, 255, 247)";


         tableBox.children[0].children[2].children[2].style.borderColor = "rgb(0, 255, 247)";


    if(tableBox.children[0].children[2].children[0].textContent === players[0]&&
    tableBox.children[0].children[2].children[1].textContent === players[0]&&   
    tableBox.children[0].children[2].children[2].textContent === players[0] ){
        displayResult('Player 1 Won');
        var first = document.querySelector(".score1");
  
  first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
    } else {
        displayResult("player 2 Won");
        var first = document.querySelector(".score2");
  
  first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
        return;
    }
    }

    //For 1st td tag vertical

    if(tableBox.children[0].children[0].children[0].textContent ===  players[i] &&
    tableBox.children[0].children[1].children[0].textContent === players[i] && tableBox.children[0].children[2].children[0].textContent === players[i] 
     ){
        tableBox.children[0].children[0].children[0].style.borderColor = "rgb(0, 255, 247)";


        tableBox.children[0].children[1].children[0].style.borderColor = "rgb(0, 255, 247)";


        tableBox.children[0].children[2].children[0].style.borderColor = "rgb(0, 255, 247)";

    
    if(tableBox.children[0].children[0].children[0].textContent === players[0]&&
    tableBox.children[0].children[1].children[0].textContent === players[0]&&   
    tableBox.children[0].children[2].children[0].textContent === players[0] ){
        displayResult('Player 1 Won');
        var first = document.querySelector(".score1");
  
  first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
         return;
    } else {
        displayResult("player 2 Won");
        var first = document.querySelector(".score2");
  
  first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
    }
    }

    // //For 2nd td tag vertical
   
    if( tableBox.children[0].children[0].children[1].textContent === players[i] &&
    tableBox.children[0].children[1].children[1].textContent === players[i]  && tableBox.children[0].children[2].children[1].textContent === players[i]
     ){
        tableBox.children[0].children[0].children[0].style.borderRight = "1px solid rgb(0, 255, 247)";

        tableBox.children[0].children[1].children[0].style.borderRight = "1px solid rgb(0, 255, 247)";

        tableBox.children[0].children[2].children[0].style.borderRight = "1px solid rgb(0, 255, 247)";

        tableBox.children[0].children[0].children[1].style.borderColor = "rgb(0, 255, 247)";


        tableBox.children[0].children[1].children[1].style.borderColor = "rgb(0, 255, 247)";


        tableBox.children[0].children[2].children[1].style.borderColor = "rgb(0, 255, 247)";

    if(tableBox.children[0].children[0].children[1].textContent === players[0]&&
    tableBox.children[0].children[1].children[1].textContent === players[0]&&   
    tableBox.children[0].children[2].children[1].textContent === players[0] ){
        displayResult('Player 1 Won');
        var first = document.querySelector(".score1");
  
         first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
         return;
         
    } else {
        displayResult("Player 2 Won");
        var first = document.querySelector(".score2");
  
        first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
    
    }}

    //For 3rd td tag vertical
   
    if( tableBox.children[0].children[0].children[2].textContent === players[i]  &&
    tableBox.children[0].children[1].children[2].textContent === players[i]  && tableBox.children[0].children[2].children[2].textContent === players[i])
    {
        tableBox.children[0].children[0].children[1].style.borderRight = "1px solid rgb(0, 255, 247)";

        tableBox.children[0].children[1].children[1].style.borderRight = "1px solid rgb(0, 255, 247)";

        tableBox.children[0].children[2].children[1].style.borderColor = "rgb(0, 255, 247)";

        tableBox.children[0].children[0].children[2].style.borderColor = "rgb(0, 255, 247)";


        tableBox.children[0].children[1].children[2].style.borderColor = "rgb(0, 255, 247)";


        tableBox.children[0].children[2].children[2].style.borderColor = "rgb(0, 255, 247)";


    if(tableBox.children[0].children[0].children[2].textContent === players[0]&&
    tableBox.children[0].children[1].children[2].textContent === players[0]&&   
    tableBox.children[0].children[2].children[2].textContent === players[0] ){
        displayResult('Player 1 Won');
        var first = document.querySelector(".score1");
  
        first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
    } else {
        displayResult("Player 2 Won");
        var first = document.querySelector(".score2");
  
        first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
        return;
    } 
    }

    // //For 1st Cross
    
       
    if(tableBox.children[0].children[0].children[0].textContent === players[i] && tableBox.children[0].children[1].children[1].textContent === players[i] && tableBox.children[0].children[2].children[2].textContent === players[i])
    { 
        console.log("2");
        tableBox.children[0].children[1].children[2].style.borderColor = "rgb(0, 255, 247)"; 
        tableBox.children[0].children[2].children[1].style.borderRight = "1px solid rgba(0, 255, 247)";

        tableBox.children[0].children[1].children[0].style.borderRight = "1px solid rgba(0, 255, 247)";

        tableBox.children[0].children[0].children[1].style.borderBottom = "1px solid rgba(0, 255, 247)";

        tableBox.children[0].children[2].children[1].style.borderColor = "rgb(0, 255, 247)";

        tableBox.children[0].children[0].children[0].style.borderColor = "rgb(0, 255, 247)";


       tableBox.children[0].children[1].children[1].style.borderColor = "rgb(0, 255, 247)";


       tableBox.children[0].children[2].children[2].style.borderColor = "rgb(0, 255, 247)";

if(tableBox.children[0].children[0].children[0].textContent === players[0]&&
tableBox.children[0].children[1].children[1].textContent === players[0]&&   
tableBox.children[0].children[2].children[2].textContent === players[0] ){
        displayResult('Player 1 Won');
        var first = document.querySelector(".score1");
  
  first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
     return;
    } else {
       displayResult("Player 2 Won");
       var first = document.querySelector(".score2");
  
  first.textContent = Number(first.textContent)+ 1;
       tableBox.removeEventListener("click", clickHandler);
       return;
    }
    }

    //For 2nd Cross
     
    
        
    if(tableBox.children[0].children[0].children[2].textContent === players[i] &&  tableBox.children[0].children[1].children[1].textContent === players[i] && tableBox.children[0].children[2].children[0].textContent === players[i])
    {
 console.log("meow1");
        tableBox.children[0].children[1].children[0].style.borderBottom = "1px solid rgb(0, 255, 247)"; 

        tableBox.children[0].children[0].children[1].style.borderRight = "1px solid rgb(0, 255, 247)";

        tableBox.children[0].children[0].children[1].style.borderBottom = "1px solid rgb(0, 255, 247)" ;

        tableBox.children[0].children[1].children[0].style.borderRight = "1px solid rgb(0, 255, 247)";

        tableBox.children[0].children[0].children[2].style.borderColor = "rgb(0, 255, 247)";


       tableBox.children[0].children[1].children[1].style.borderColor = "rgb(0, 255, 247)";


       tableBox.children[0].children[2].children[0].style.borderColor = "rgb(0, 255, 247)";

       if(tableBox.children[0].children[0].children[2].textContent === players[0]&&
    tableBox.children[0].children[1].children[1].textContent === players[0]&&   
    tableBox.children[0].children[2].children[0].textContent === players[0] ){
        displayResult('Player 1 Won');
        var first = document.querySelector(".score1");
  
  first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
        return;
    } else {
        displayResult("Player 2 Won");
        var first = document.querySelector(".score2");
  
  first.textContent = Number(first.textContent)+ 1;
        tableBox.removeEventListener("click", clickHandler);
        return;
    }
    }
}
 }
    //For draw
   
     if(count === 9){
        displayResult("It is a Tie");
     }
    
}  
compareChoice();


console.log("a");
}


function displayResult(result) {
  textResult = document.createElement("h2");

  textResult.innerText = result;
  document.body.appendChild(textResult);

}

function functionToShow() {

  var class1 =
  document.querySelector('.firstClass')
  var class2 =
document.querySelector('.secondClass')

  if(class1.style.display === "none" && class2.style.display === "block"){
    class1.style.display = "block";
    class2.style.display = "none"
}else
    {
        class1.style.display = "none";
        class2.style.display = "block";    }

   
 
  }


// var class2 =
// document.querySelector('.secondClass')
// if(class2.style.display === "none"){
//   class2.style.display = "block";}else
//   {
//       class2.style.display = "block";
//   }
//    class2 =
//   document.querySelector('secondClass')
 

//}
