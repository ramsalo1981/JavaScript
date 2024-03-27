// var images = [
//   "./images/dice1.png",
//   "./images/dice2.png",
//   "./images/dice3.png",
//   "./images/dice4.png",
//   "./images/dice5.png",
//   "./images/dice6.png",
// ];
// var randomImg1 = Math.floor(Math.random() * images.length) - 1; // 0-indexed, so we subtract one to get a number from 0-
// var randomImg2 = Math.floor(Math.random() * images.length) - 1;
// var diceImg1 = document
//   .querySelector("img.img1")
//   .setAttribute("src", images[randomImg1]);
// var diceImg2 = document
//   .querySelector("img.img2")
//   .setAttribute("src", images[randomImg2]);
// if (randomImg1 > randomImg2) {
//   document.querySelector("h1").textContent = "Player 1 Wins!";
// } else if (randomImg1 < randomImg2) {
//   document.querySelector("h1").textContent = "Player 2 Wins!";
// } else {
//   document.querySelector("h1").textContent = "It's a Draw!";
// }

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomDiceImage = `dice${randomNumber1}.png`; //  dice1.png, dice2.png ... etc
var randomImageSource = `images/${randomDiceImage}`; //  images/dice1.png , images/dice2.png .....etc
var image1 = document.querySelectorAll(`img`)[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomDiceImage2 = `dice${randomNumber2}.png`; //  dice1.png, dice2.png ... etc
var randomImageSource2 = `images/${randomDiceImage2}`; //  images/dice1.png , images/dice2.png .....etc
var image2 = document.querySelectorAll(`img`)[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 It's a Draw! 🚩";
}
