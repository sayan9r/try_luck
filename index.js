
var randomNumber1=Math.floor((Math.random()*6)+1);


//var randomimage="dice"+randomNumber1+".png";
var randomimagesorce="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesorce);





var randomNumber2=Math.floor(Math.random()*6+1);

var randomimagesorce2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesorce2);

var player1=prompt("enter player 1 name...");
var player2=prompt("enter player 2 name...");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML=player1+" Wins! 🚩";

}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML=player2+" Wins! 🚩";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML="draw!";
}else{
    document.querySelector("h1").innerHTML="refresh me";
}


