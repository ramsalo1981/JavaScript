// var clickAllButtons = document.querySelectorAll("button");
// for (var i = 0; i < clickAllButtons.length; i++) {
//   clickAllButtons[i].addEventListener("click", function () {
//     alert("Hello World");
//   });
// }

// play sound  when button is clicked
var numberOfDrumsButtons = document.querySelectorAll(".drum");
for (var i = 0; i < numberOfDrumsButtons.length; i++) {
  numberOfDrumsButtons[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

function playSound(soundFilePath) {
  var sound = new Audio(soundFilePath);
  sound.play();
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      playSound("sounds/crash.mp3");
      // // var crash = new Audio("sounds/crash.mp3");
      // crash.play();
      break;
    case "a":
      playSound("sounds/kick-bass.mp3");
      break;
    case "s":
      playSound("sounds/snare.mp3");
      break;
    case "d":
      playSound("sounds/tom-1.mp3");
      break;
    case "j":
      playSound("sounds/tom-2.mp3");
      break;
    case "k":
      playSound("sounds/tom-3.mp3");
      break;
    case "l":
      playSound("sounds/tom-4.mp3");
      break;
    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activButton = document.querySelector("." + currentKey);
  activButton.classList.add("pressed");
  setTimeout(function () {
    activButton.classList.remove("pressed");
  }, 100);
}
