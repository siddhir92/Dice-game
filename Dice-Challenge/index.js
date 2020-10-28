var randomNumber1= Math.floor(Math.random()*6)+1;

var randomDiceImage= "dice"+  randomNumber1 +".png";

var randomSource= "images/" +randomDiceImage;

var image1= document.querySelectorAll('img')[0];

image1.setAttribute("src",randomSource);

var randomNumber2= Math.floor(Math.random() * 6)+1;

var randomSource2 = "images/dice" +randomNumber2 + ".png";

document.querySelectorAll('img')[1].setAttribute("src",randomSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="PLAYER ONE WINS💥";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="PLAYER TWO  WINS💨";
}
else{
  document.querySelector("h1").innerHTML="DRAW🤷‍";
}
