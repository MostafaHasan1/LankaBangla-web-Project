function myfunction() {
    var x = document.getElementById("pass");

    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;

    if (username == "admin" && password == "1234") {
        alert("Login Succesfull");
        window.location.replace("");
        return false;
    }
    else {
        alert("Login Failed");
    }
}