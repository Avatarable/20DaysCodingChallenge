var left = document.getElementById("left");
var right = document.getElementById("right");
var leftImg = document.getElementById("leftImg");
var rightImg = document.getElementById("rightImg");
var runBtn = document.getElementById("runBtn");
var result = document.getElementById("result");
var userScore = document.getElementById("userScore");
var compScore = document.getElementById("compScore");
var overlay = document.querySelector(".rightOverlay");
var userChoice = "rock";
result.innerHTML = "...";

var scoreU = 0;
var scoreC = 0;

var compare = function(userChoice, compChoice) {
    if(userChoice === compChoice) {
    return "A tie!";
    }
    if(userChoice === "rock") {
        if(compChoice === "scissors") {
            scoreU += 1;
            return "rock crushes scissors. You win!";
        } else {
            scoreC += 1;
            return "paper covers rock. You lose!";
        }
    }
    if(userChoice === "paper") {
        if(compChoice === "rock") {
            scoreU += 1;
            return "paper covers rock. You win!";
        } else {
            if(compChoice === "scissors") {
                scoreC += 1;
                compScore.style.opacity = '0';
                return "scissors cuts paper. You lose!";
            }
        }
    }
    if(userChoice === "scissors") {
        if(compChoice === "rock") {
            scoreC += 1;
            return "rock crushes scissors. You lose!";
        } else {
            if(compChoice === "paper") {
                scoreU += 1;
                return "scissors cuts paper. You win!";
            }
        }
    }
};

left.addEventListener('click', function(){
    overlay.style.opacity = "0.5";
    rightImg.setAttribute('src', 'img/images/rockR.png');

    if(leftImg.getAttribute('src') === "img/images/rockL.png"){
        leftImg.setAttribute('src', 'img/images/paperL.png');
        userChoice = "paper";
    }
    else if(leftImg.getAttribute('src') === "img/images/paperL.png"){
        leftImg.setAttribute('src', 'img/images/scissorsL.png');
        userChoice = "scissors";
    }
    else if(leftImg.getAttribute('src') === "img/images/scissorsL.png"){
        leftImg.setAttribute('src', 'img/images/rockL.png');
        userChoice = "rock";
    }
});

runBtn.addEventListener('click', function(){
    overlay.style.opacity = "0";
    var compChoice = Math.random();
    if (compChoice < 0.34) {
        compChoice = "rock";
        rightImg.setAttribute('src', 'img/images/rockR.png');
    } 
    else if(compChoice <= 0.67) {
        compChoice = "paper";
        rightImg.setAttribute('src', 'img/images/paperR.png');
    } 
    else {
        compChoice = "scissors";
        rightImg.setAttribute('src', 'img/images/scissorsR.png');
    }    

    result.innerHTML = compare(userChoice, compChoice);
    userScore.innerText = scoreU;
    compScore.innerText = scoreC;
});










// Avatarable Codes