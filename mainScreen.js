player1 = localStorage.getItem("player_1");
player2 = localStorage.getItem("player_2");

player1score = 0;
player2score = 0;

document.getElementById("P1Name").innerHTML = player1;
document.getElementById("P2Name").innerHTML = player2;

document.getElementById("p1Score").innerHTML = player1score;
document.getElementById("p2Score").innerHTML = player2score;

document.getElementById("QT").innerHTML = "Question Turn - " + player1;
document.getElementById("AT").innerHTML = "Answer Turn - " + player2;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actualAnswer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input = "<br>Answer : <input id='input_check_box' type='text'></input";
    answer_button = "<br><br><button onclick='check()' class='btn btn-info'>Check</button";
    row = question_number + input + answer_button;

    document.getElementById("question_div").innerHTML = row;
    
}

questionTurn = "player1";
answerTurn = "player2";

function check(){
    getAnswer = document.getElementById("input_check_box").value;

    if(getAnswer == actualAnswer){

        if(answerTurn == "player1"){
            player1score += 1;
            document.getElementById("p1Score").innerHTML = player1score;
        }
        else{
            player2score += 1;
            document.getElementById("p2Score").innerHTML = player2score;
        }
    }

    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("QT").innerHTML = "Question Turn - " + player2;
    }
    else{
        questionTurn = "player1";
        document.getElementById("QT").innerHTML = "Question Turn - " + player1;
    }

    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById("AT").innerHTML = "Answer Turn - " + player2;
    }
    else{
        answerTurn = "player1";
        document.getElementById("AT").innerHTML = "Answer Turn - " + player1;
    }
document.getElementById("question_div").innerHTML = "";
}
