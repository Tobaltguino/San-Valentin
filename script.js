const btnNo = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Evento cuando el mouse entra en el botón
btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target);
});

// Evento cuando se hace clic en el botón
btnNo.addEventListener("click", function (e) {
    moverAleatoriamente(e.target);
});
