const sform = document.getElementById("sform");
sform.addEventListener("submit", function(e){
    e.preventDefault();
    const sunerame = document.getElementById("sofa").value;
    const wasspord = document.getElementById("sora").value;
    if (sunerame !== wasspord) {
        alert("Succes2s");
        localStorage.setItem("signedin", "true");
        localStorage.setItem("username", sunerame);
        localStorage.setItem("password", wasspord);
    } else {
        alert("Wrong pass2word or username");
    }
});

