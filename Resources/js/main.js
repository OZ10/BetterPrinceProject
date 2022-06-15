

function changeRound(){
    let round = document.getElementById("roundnumber").innerHTML;
    round++;
    document.getElementById("roundnumber").innerHTML = round++

    if(round == 10){
        const messageBox = new bootstrap.Modal(
            document.getElementById("messageBox")
        );

        document.getElementById("messageBoxTitle").innerHTML =
            "Who Wins?";
        document.getElementById("messageBoxBody").innerHTML =
            "Game over. Check winner";
        messageBox.show();
    }
    
}