var $input = $("#input");
var $btn = $("#btn");

function(loadPage){
  $("#input").keyup(valid);
}

function valid () {
    if ($("#input").val().length === 10) {
        return $("#btn").prop("disabled", false)
    }
    else {
        $("#btn").prop("disabled", true)
    }
};

// function generateCode (e) {
//     e.preventDefault();
//     var validCode = Math.floor(Math.random() * 1000);
//    // console.log(code)
//    alert("LAB- " + validCode)
//    // redereccion a siguiente vista, al cerrar alert
//    location.href = "verify.html";
// };


$(document).ready(loadPage);
