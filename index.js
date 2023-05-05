

const btn = document.querySelectorAll(".btn");
var audio = new Audio("./sounds/tom-1.mp3");
var audio1 = new Audio("./sounds/tom-2.mp3");
var audio2 = new Audio("./sounds/tom-3.mp3");
var audio3 = new Audio("./sounds/tom-4.mp3");
var audio4 = new Audio("./sounds/snare.mp3");
var audio5 = new Audio("./sounds/crash.mp3");
var audio6 = new Audio("./sounds/kick-bass.mp3");
const makesound = (btnpress) => {
  switch (btnpress) {
    case "w":
      audio.play();
      
      break;
    case "a":
      audio2.play();
      
      break;
    case "s":
      audio3.play();
      break;

    case "d":
      audio4.play();
      break;
    case "j":
      audio4.play();
      break;
    case "k":
      audio5.play();
      break;
    case "l":
      audio6.play();
      break;
  }
};

console.log(btn)
btn.forEach(button => {
    button.addEventListener(
        "click",
        ()=>{makesound(button.innerHTML);
        button.classList.toggle("active")
        setTimeout(()=>{button.classList.toggle("active")},250)
        
        }
    )
    
});
document.addEventListener("keydown", (event) => {
  makesound(event.key);
  const sbtn= document.querySelector("."+event.key);
  sbtn.classList.toggle("active")
  setTimeout(()=>{sbtn.classList.toggle("active")},250)
});
