/*
* BERECHNUNGSGRUNDLAGE "lineare Interpolation"
* Ich habe eine Range und einen Wert in dieser Range.
* Ich möchte anhand von diesem Wert, den Wert einer anderen Range (mit anderem Start- und Zielwert) erhalten.
*
* Formel -> result = ((value - a) / (b - a)) * ((d - c)) + c
*
* Beispiel Range 1: a = 0 | b = 1000
* Beispiel Range 2: c = 30 | d = 70
* Beispiel Wert: 400
* result = (400 / 1000) * (70 - 30) + 30
* result = 46
* */


let eye = document.querySelector(`#eye`);
eye.addEventListener(`click`,function (){
    eye.classList.toggle(`bloody`);
});


let follow_me = document.querySelector (`#follow_me`);
document.addEventListener (`mousemove`, function (e) {
    let posX = e.clientX;
    let posY = e.clientY;

    follow_me.style.left = posX + `px`;
    follow_me.style.top = posY + `px`;
    console.log (`mouse wurde bewegt:`, posX, posY);
})

