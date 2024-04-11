var noOfDrumButtons = document.querySelectorAll(".drum").length;

//below logic is for button press
for (var i=0; i<noOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var letter = this.innerHTML;
        makeSound(letter);
        buttonAnimation(letter);
        
    });
}

//following function is for keyboard strokes
        document.addEventListener("keydown", function(event){
                makeSound(event.key);
                buttonAnimation(event.key);
        });

function makeSound(key){
        switch (key) {
                case 'p': var audio = new Audio("./sounds/crash.mp3");
                        audio.play();
                        break;
    
                case 'r': var audio = new Audio("./sounds/kick-bass.mp3");
                        audio.play();
                        break;
    
                case 'a': var audio = new Audio("./sounds/snare.mp3");
                        audio.play();
                        break;
                        
                case 'w': var audio = new Audio("./sounds/tom-1.mp3");
                        audio.play();
                        break;
                        
                case 'i': var audio = new Audio("./sounds/tom-2.mp3");
                        audio.play();
                        break;
                       
                case 'n': var audio = new Audio("./sounds/tom-3.mp3");
                        audio.play();
                        break;
                       
                case 'c': var audio = new Audio("./sounds/tom-4.mp3");
                        audio.play();
                        break;
                        
                default:
                    break;
            }
}

function buttonAnimation(key){
        var btn = document.querySelector("." +key);
        btn.classList.add("pressed");

        setTimeout(function() {
                btn.classList.remove("pressed");
        }, 100);
}