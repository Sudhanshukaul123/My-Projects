let Snake = "Snake";
let Water = "Water";
let Gun = "Gun";
let CurrentRounded = 0;
let UserScore = 0;
let CoumputerScore = 0;
alert("Let's Play Snake,Water,Gun Game")
let NumberOfRound = parseInt(prompt("How many rounds You wana play!"));
function RandomChose(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
// console.log(ComputerChoice);
// console.log(typeof(ComputerChoice));
// console.log(UserChoice);
// console.log(typeof(UserChoice));

do{
    let  ComputerChoice = RandomChose([Snake, Water, Gun]);
    console.log(ComputerChoice);
    let  UserChoice = prompt("Choose your choice ( Snake,Water,Gun ) : ");
    UserChoice = UserChoice.charAt(0).toUpperCase() + UserChoice.slice(1);
    console.log(UserChoice);
     
if (UserChoice === "Snake" || UserChoice === "Water" || UserChoice === "Gun"){
    if(UserChoice===ComputerChoice){
        alert("IT'S a tie!!!");
    }
    else if(UserChoice === Snake && ComputerChoice ===Water){
        alert("...... You Won !!!");
        UserScore++;
        
    }
    else if(UserChoice === Snake && ComputerChoice ===Gun){
        alert("...... Coumputer Won !!! 'Better luck next time !!!' ");
         CoumputerScore++;

    }
    else if(UserChoice === Water && ComputerChoice ===Snake){
        alert("...... Coumputer Won !!! 'Better luck next time !!!' ");
         CoumputerScore++;

    }
    else if(UserChoice === Water && ComputerChoice ===Gun){
        alert("...... You Won !!!");
        UserScore++;

    }
    else if(UserChoice === Gun && ComputerChoice ===Snake){
        alert("...... You Won !!!");
        UserScore++;

    }
    else if(UserChoice === Gun && ComputerChoice ===Water){
        alert("...... Coumputer Won !!! 'Better luck next time !!!' ");
         CoumputerScore++;

    }
} else{
    alert("Chose the right one...");
}
    CurrentRounded++;
}while(CurrentRounded != NumberOfRound )
alert("Game Over")


alert( "Your score !!! " +  UserScore)
alert( "Computer score !!!" +  CoumputerScore)

if(UserScore === CoumputerScore){
    alert("It's a tiee... !!!!!!!");
}
else if(UserScore > CoumputerScore){
    alert("You WON THE GAME !!!!!!!");
}
else{
    alert("Computer WON THE GAME !!!!!!!");
}

