var $input = $("#input");
var $inputCode = $("#code");
var $resendCode = $("#btnCode");
var $validCode = Math.floor(Math.random() * 1000);
var $name = $("#name");
var $password = $("#email");
var $check = $("#check");

$(document).ready(function() {
  $input.keyup(valid);
  $inputCode.keyup(activeBoton);
  $resendCode.click(generateCode);
  $name.keyup(form);
  $password.keyup(form);
  $check.keyup(form);

});

var valid = function() {
  if ($("#input").val().trim().length == 10) {
    $("#btn").addClass('active');
    $("#btn").removeClass('disabled');
    $("#btn").click(function() {
      location.href = "../views/verify.html";
      alert("Lab- " + $validCode);
    });
  };
};

function generateCode() {
  var validCode = Math.floor(Math.random() * 1000);
  console.log(validCode);
  alert("LAB- " + validCode);
  // // redereccion a siguiente vista, al cerrar alert
  // location.href = "verify.html";
};

var activeBoton = function() {
  if ($("#code").val().trim().length == 3) {
    $("#btnVerify").addClass('active');
    $("#btnVerify").removeClass('disabled');
    $("#btnVerify").click(function() {
      location.href = "../views/form.html";

    });
  };
};

var form = function() {
  if($("#name").val().trim().length > 0 && $("#email").val().trim().length > 0 && $("#check").prop('checked', true)) {
    $("#last-btn").addClass('active');
    $("#last-btn").removeClass('disabled');
    $("#last-btn").click(function() {
      location.href = "../views/check.html";
    });
  };
};
