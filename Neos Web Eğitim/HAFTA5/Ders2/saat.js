// dom variebles
const hourDisplay = document.querySelector(".hour");
const minuteDisplay = document.querySelector(".minute");
const secondDisplay = document.querySelector(".second");

function displayTime() {
    let dateCurrent = new Date();
    let hour = dateCurrent.getHours();
    let minute = dateCurrent.getMinutes();
    let second = dateCurrent.getSeconds();

    hourDisplay.innerHTML = hour;
    minuteDisplay.innerHTML = minute;
    secondDisplay.innerHTML = second;

    if (hour < 10) {
        hourDisplay.innerHTML = "0" + hour;
    }

    if (minute < 10) {
        minuteDisplay.innerHTML = "0" + minute;
    }

    if (second < 10) {
        secondDisplay.innerHTML = "0" + second;
    }
}

displayTime();

// BOM > browser object model

setInterval(displayTime, 1000);

// mono space font family kullanmak lazım - yoksa büyüklük farkı kaymaya sebep olur
