for(let i=0; i<document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll("button")[i].addEventListener("click", clicky)};
document.addEventListener("keydown", clicky)
function clicky () {
    switch(this.innerHTML) {
        
        case "w" :
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
        case "a" :
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break; 
        case "s" :
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        default: console.log(this.innerHTML);
    }
};