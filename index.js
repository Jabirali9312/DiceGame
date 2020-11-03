
// document.querySelector("h1").innerHTML = "My name is Khan!";

var randomNo1 = Math.floor(Math.random()*6) + 1; // 1-6 random nos
var randomNo2 = Math.floor(Math.random()*6) + 1;

// var img = document.querySelectorAll("img");
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , "images/dice" + randomNo1 + ".png")

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , "images/dice" + randomNo2 + ".png")

if (randomNo1 > randomNo2){
  document.querySelector("h1").innerHTML = "Player 1 Win!";
}else if(randomNo2 > randomNo1){
  document.querySelector("h1").innerHTML = "Player 2 Win!"
}
else{
  document.querySelector("h1").innerHTML =  "Draw!";
}
