alert("Rotate, if using phone");

//detecting button press//
var noofBtns=document.querySelectorAll(".note").length
for(var i=0; i<noofBtns; i++)
{
    document.querySelectorAll(".note")[i].addEventListener("click", function(){
        var btnInnerHTML=this.innerHTML;
        makeSound(btnInnerHTML); 
        btnAnimation(btnInnerHTML); 
    });
}

//detecting keyboard press//
document.addEventListener
("keydown", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
});

//function to switch the keys and create sound//
function makeSound(key){
    switch(key){
        case "a":
            var note1=new Audio("./audio/C3.mp3");
            note1.play();
            break;
        case "s":
            var note2=new Audio("./audio/D3.mp3");
            note2.play();
            break;
        case "d":
            var note3=new Audio("./audio/E3.mp3");
            note3.play();
            break;
        case "f":
            var note4=new Audio("./audio/F3.mp3");
            note4.play();
            break;
        case "g":
            var note5=new Audio("./audio/G3.mp3");
            note5.play();
            break;
        case "h":
            var note6=new Audio("./audio/A3.mp3");
            note6.play();
            break;
        case "j":
            var note7=new Audio("./audio/B3.mp3");
            note7.play();
            break;
        case "k":
            var note8=new Audio("./audio/C4.mp3");
            note8.play();
            break;
        case "l":
            var note9=new Audio("./audio/D4.mp3");
            note9.play();
            break;
        case "z":
            var note10=new Audio("./audio/E4.mp3");
            note10.play();
            break;
        case "x":
            var note11=new Audio("./audio/F4.mp3");
            note11.play();
            break;
        case "c":
            var note12=new Audio("./audio/G4.mp3");
            note12.play();
            break;
        case "v":
            var note13=new Audio("./audio/A4.mp3");
            note13.play();
            break;
        case "b":
            var note14=new Audio("./audio/B4.mp3");
            note14.play();
            break;
        case "q":
            var note15=new Audio("./audio/Db3.mp3");
            note15.play();
            break;
        case "w":
            var note16=new Audio("./audio/Eb3.mp3");
            note16.play();
            break;
        case "e":
            var note17=new Audio("./audio/Gb3.mp3");
            note17.play();
            break;
        case "r":
            var note18=new Audio("./audio/Ab3.mp3");
            note18.play();
            break;
        case "t":
            var note19=new Audio("./audio/Bb3.mp3");
            note19.play();
            break;
        case "y":
            var note20=new Audio("./audio/Db4.mp3");
            note20.play();
            break;
        case "u":
            var note21=new Audio("./audio/Eb4.mp3");
            note21.play();
            break;
        case "i":
            var note22=new Audio("./audio/Gb4.mp3");
            note22.play();
            break;
        case "o":
            var note23=new Audio("./audio/Ab4.mp3");
            note23.play();
            break;
        case "p":
            var note24=new Audio("./audio/Bb4.mp3");
            note24.play();
            break;
        default:
            console.log(key);
            break;
    }
}

//function to create key animation when sound is crated//
function btnAnimation(currentKey){
    var activeBtn=document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function(){activeBtn.classList.remove("pressed")},200);
}