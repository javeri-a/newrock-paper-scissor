let  javeria : string = "Rock"
let laiba : string = "paper"
 
if (javeria === laiba) {
    console.log("its a tie");
    
}
else if ((javeria === "Rock" && laiba === "scissor") || 
( laiba === "paper" && javeria === "scissor")||
(javeria === "scissor"  && laiba === "Rock")){
console.log("player one wins");

}
else {
    console.log( "player two wins");
    
}