var cpu = ["paper","rock","scissor"];

var autoSelect;
var details;

function auto() {
    var randomNumber = Math.round(Math.random()*2);
    autoSelect = cpu[randomNumber];
    $("#cpu").attr("src","images/"+autoSelect+".png");
}

$(".container .game .box").click(function() {
    details = $(this).attr("id");
    $("#clicked").attr("src","images/"+details+".png");
    auto();
    determineWinner();
}); 

function determineWinner() {
    if(autoSelect === details) {
        console.log("TIE !");
        $("#final-result").text("TIE !");
    }else if(autoSelect === "paper" && details === "rock"){
        console.log("CPU is the winner");
        $("#final-result").text("CPU is the winner");
    }else if(autoSelect === "rock" && details === "paper") {
        console.log("Player is the winner");
        $("#final-result").text("Player is the winner");
    }else if(autoSelect === "paper" && details === "scissor") {
        console.log("Player is the winner");
        $("#final-result").text("Player is the winner");
    }else if(autoSelect === "scissor" && details === "paper") {
        console.log("CPU is the winner");
        $("#final-result").text("CPU is the winner");
    }else if(autoSelect === "rock" && details === "scissor") {
        console.log("CPU is the winner");
        $("#final-result").text("CPU is the winner");
    }else if(autoSelect === "scissor" && details === "rock") {
        console.log("Player is the winner");
        $("#final-result").text("Player is the winner");
    }
}


