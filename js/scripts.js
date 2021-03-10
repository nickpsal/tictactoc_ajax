var player1_symbol;
var player2_symbol;
var player_turn;
var player1_moves = [];
var player2_moves = [];
$(document).ready(function() {
    $("#choose").show();

    $("#symbol1").click(function(){
        player1_symbol = 'symbol1';
        player2_symbol = 'symbol2';
        document.getElementById('message').append("Ο Πρώτος Παίχτης παίζει με το Χ και το Δεύτερος με το Ο");
        player_turn = 'player1';
        $("#choose").hide();
    });

    $("#symbol2").click(function(){
        player1_symbol = 'symbol2';
        player2_symbol = 'symbol1';
        document.getElementById('message').append("Ο Δεύτερος Παίχτης παίζει με το Χ και το Πρώτος με το Ο");
        player_turn = 'player2';
        $("#choose").hide();
    });
});
function buttonClicked(clicked_id) {
    var response;
    document.getElementById(clicked_id).setAttribute("disabled","disabled");   
    var img = document.getElementById(clicked_id);
    if (player_turn == 'player1') {
        img.src = "images/" + player1_symbol + ".jpg";
        player1_moves.push(clicked_id);
        player_turn = "player2";
        document.getElementById("player_turn").innerHTML = "Σειρά του Παίχτη 2";
    }else{
        img.src = "images/" + player2_symbol + ".jpg";
        player2_moves.push(clicked_id);
        player_turn = "player1";
        document.getElementById("player_turn").innerHTML = "Σειρά του Παίχτη 1";
    }
    response = check_if_won(response);
    if (response != "0") {
        alert (response);
        location.reload();
    }
}

function check_if_won(){
    if (player1_moves.includes("11") && player1_moves.includes("12") && player1_moves.includes("13")){
        var response = "Νίκησε ο Πρώτος Παίχτης!!!!!!!!"
        return response;
    }
    if (player1_moves.includes("21") && player1_moves.includes("22") && player1_moves.includes("23")){
        var response = "Νίκησε ο Πρώτος Παίχτης!!!!!!!!"
        return response;
    }
    if (player1_moves.includes("31") && player1_moves.includes("32") && player1_moves.includes("33")){
        var response = "Νίκησε ο Πρώτος Παίχτης!!!!!!!!"
        return response;
    }
    if (player1_moves.includes("11") && player1_moves.includes("22") && player1_moves.includes("33")){
        var response = "Νίκησε ο Πρώτος Παίχτης!!!!!!!!"
        return response;
    }
    if (player1_moves.includes("13") && player1_moves.includes("22") && player1_moves.includes("31")){
        var response = "Νίκησε ο Πρώτος Παίχτης!!!!!!!!"
        return response;
    }
    if (player1_moves.includes("11") && player1_moves.includes("21") && player1_moves.includes("31")){
        var response = "Νίκησε ο Πρώτος Παίχτης!!!!!!!!"
        return response;
    }
    if (player1_moves.includes("12") && player1_moves.includes("22") && player1_moves.includes("32")){
        var response = "Νίκησε ο Πρώτος Παίχτης!!!!!!!!"
        return response;
    }
    if (player1_moves.includes("13") && player1_moves.includes("23") && player1_moves.includes("33")){
        var response = "Νίκησε ο Πρώτος Παίχτης!!!!!!!!"
        return response;
    }
    if (player2_moves.includes("11") && player2_moves.includes("12") && player2_moves.includes("13")){
        var response = "Νίκησε ο Δεύτερος Παίχτης!!!!!!!!"
        return response;
    }
    if (player2_moves.includes("21") && player2_moves.includes("22") && player2_moves.includes("23")){
        var response = "Νίκησε ο Δεύτερος Παίχτης!!!!!!!!"
        return response;
    }
    if (player2_moves.includes("31") && player2_moves.includes("32") && player2_moves.includes("33")){
        var response = "Νίκησε ο Δεύτερος Παίχτης!!!!!!!!"
        return response;
    }
    if (player2_moves.includes("11") && player2_moves.includes("22") && player2_moves.includes("33")){
        var response = "Νίκησε ο Δεύτερος Παίχτης!!!!!!!!"
        return response;
    }
    if (player2_moves.includes("13") && player2_moves.includes("22") && player2_moves.includes("31")){
        var response = "Νίκησε ο Δεύτερος Παίχτης!!!!!!!!"
        return response;
    }
    if (player2_moves.includes("11") && player2_moves.includes("21") && player2_moves.includes("31")){
        var response = "Νίκησε ο Δεύτερος Παίχτης!!!!!!!!"
        return response;
    }
    if (player2_moves.includes("12") && player2_moves.includes("22") && player2_moves.includes("32")){
        var response = "Νίκησε ο Δεύτερος Παίχτης!!!!!!!!"
        return response;
    }
    if (player2_moves.includes("13") && player2_moves.includes("23") && player2_moves.includes("33")){
        var response = "Νίκησε ο Δεύτερος Παίχτης!!!!!!!!"
        return response;
    }
    if ((player1_moves.length == 5 && player2_moves.length == 4) || (player1_moves.length == 4 && player2_moves.length == 5)) {
        var response = "Ισσπαλία";
        return response;
    }
    response = "0";
    return response;
}
