
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var sports = ['SUN', 'MERCURY', 'VENUS', 'EARTH', 'MARS','JUPITER','SATURN', 'URANUS', 'NEPTUNE', 'PLUTO'];

var answer = "";

var underAns = [];


function startGame(){
    
    var ansGuess = "";
    var ansWord = document.getElementById("answerWord");

    answer = sports[Math.floor(Math.random() * sports.length)];
    
    word = answer.length;
    
    
    //VISUALS FOR PROGRESSION
    for (i = 0; i < answer.length; i++) { 
        
       underAns.push("_");
    
        
    };
    
    //ALPHABET BUTTON CREATION
    
    for (i = 0; i < alphabet.length; i++) { 
        
        var alphaDiv = document.getElementById("alphabet");
        var buttonDiv = document.createElement("div");
        var alphaButton = document.createElement("button");
        alphaButton.setAttribute('id','alphaBut');
        buttonDiv.setAttribute('id','alphaButBack');
        
        alphaButton;
        check();
        alphaButton.innerHTML = alphabet[i];
        alphaDiv.appendChild(buttonDiv);
        buttonDiv.appendChild(alphaButton);
        
    };
    
    // LETTER GUESSING FUNCTION
       function check() {
    alphaButton.onclick = function () {
      var guess = (this.innerHTML);
     
      for (var i = 0; i < answer.length; i++) {
        if (answer[i] === guess) {
            console.log("firecracker");
            
            
                underAns[i] = guess;
                console.log(underAns)
            ansWord.innerHTML = underAns.join(" ");
            
           if(underAns.includes("_")){
               document.getElementById("winner").innerHTML = "Guess another letter!"
           } else {
               alert("you win!")
           }
            
        } 
      }
    }
}
    
    ansWord.innerHTML = underAns.join(" ");
    
    console.log(alphabet, answer, word, underAns);
    
    
    
    
}

//RESTART GAME

function restart(){
        location.reload();
    }