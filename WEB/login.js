const form = document.getElementById("lform");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("loga").value;
    const password = document.getElementById("logan").value;
    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
        alert("Success");
        localStorage.setItem("loggedin", "true");
        localStorage.setItem("usernamed", username);
    } else {
        alert("Wrong password or username");
    }
});

