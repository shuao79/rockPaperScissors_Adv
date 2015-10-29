var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    Math.random()
    
    return "random";
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    if (userValue===aiValue)
    return "draw"
    else if (userValue== "paper" && aiValue== "rock")
       return "user" ;
    else if (userValue== "rock" && aiValue== "scissors")
       return "user" ;
    else if (userValue== "scissors" && aiValue== "paper")
       return "user" ;
     else if (userValue== "rock" && aiValue== "paper")
       return "ai" ;
    else if (userValue== "scissors" && aiValue== "rock")
       return "ai" ;
    else if (userValue== "paper" && aiValue== "scissors") 
       return "ai" ;
}

// This function sets the scoreboard with the correct points
function setScore() {

}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
       $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
    $(".token").click(evaluate);
    
});
