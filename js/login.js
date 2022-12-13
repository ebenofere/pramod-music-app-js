// Jinal Raval - 8825803

$(window).on("hashchange", function () {
  if (location.hash.slice(1) == "signup") {
    $(".page").addClass("extend");
    $("#login").removeClass("active");
    $("#signup").addClass("active");
  } else {
    $(".page").removeClass("extend");
    $("#login").addClass("active");
    $("#signup").removeClass("active");
  }
});
$(window).trigger("hashchange");

function validate_Login_Form() {
  var name = document.getElementById("l_Name").value;
  var password = document.getElementById("l_Password").value;
  var url = "music.html";

  if (name == "" || password == "") {
    document.getElementById("errorMsg").innerHTML =
      "Please fill the required fields";
    return false;
  } else if (password.length < 8) {
    document.getElementById("errorMsg").innerHTML =
      "Your password must include atleast 8 characters";
    return false;
  } else {
    alert("Successfully logged in");
    window.location.href = url;
    return true;
  }
}

function validate_Signup_Form() {
  var mail = document.getElementById("s_Email").value;
  var name = document.getElementById("s_Name").value;
  var password = document.getElementById("s_Password").value;
  var url = "music.html";

  if (mail == "" || name == "" || password == "") {
    document.getElementById("errorMsg").innerHTML =
      "Please fill the required fields";
    return false;
  } else if (password.length < 8) {
    document.getElementById("errorMsg").innerHTML =
      "Your password must include atleast 8 characters";
    return false;
  } else {
    alert("Successfully signed up");
    window.location.href = url;
    return true;
  }
}
