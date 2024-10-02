//Answer of the game
const answer = 45;
 limit = 5;





function playGame(){
   while(limit>0){
    let userGuesss = prompt("Enter you guess:");
    if(parseInt(userGuesss) === answer){
        alert("You win!! ");
        break;
    }else {
        alert("no worrries you can try upto 5 times!");
    }
    limit --;
    alert('Attmpt remaining:'+limit);
   }
   if(limit ==0){
    alert("sorry you can always try again!!");
   }
    
}
playGame();
