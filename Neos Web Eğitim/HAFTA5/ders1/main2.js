//Dom variables
const btnRed = document.getElementById("btn-red");
const btnGreen = document.getElementById("btn-green");
const btnViolet = document.getElementById("btn-violet");
const btnYellow = document.getElementById("btn-yellow");

const wrapper = document.querySelector(".wrapper");

btnRed.addEventListener("click", function () {
    wrapper.style.backgroundColor = "crimson";
});

btnGreen.addEventListener("click", function () {
    wrapper.style.backgroundColor = "darkgreen";
});

btnViolet.addEventListener("click", function () {
    wrapper.style.backgroundColor = "darkviolet";
});

btnYellow.addEventListener("click", function () {
    wrapper.style.backgroundColor = "yellowgreen";
});

btnRed.addEventListener("drag", function () {
    btnRed.innerText = "Sürüklendi.";
});

btnRed.addEventListener("dragend", function () {
    btnRed.innerText = "Red";
});

/*
click - tıklama durumu

drag - sürükleme durumu
dragEnd - sürükleme bitince

keypress - bir tuşa basınca çalışır
keydown- bir tuşa basılı tutunca çalışır
keyup - basılı tuştan elimizi kaldırınca çalışır

mouseover - elemte hover başlayınca çalışır
mouseout - elementten mouse çıkınca çaşışır
mouseenter - elemente hover balayınca çalışır
mouseleave - elementten mouse çıkınca çalışır

touchmove - parmakla dokunma başlayınca çalışır
touchend - parmakla dokunma bitince çalışır

load - sayfa yüklenmesi bitince çalışır

*/

//Arrow Function
//2015 yılından önce var olan eski yöntem
function selamla() {
    console.log("Selamla");
}

//es6 - EcmaScript 6

let selam = () => {
    console.log("Selam");
};

selamla();
selam();
