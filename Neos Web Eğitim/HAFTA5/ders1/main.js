// JS DOM == document Object Model
// liste obje const kullan!!

//elemnt ismiyle element çekme
const paragraf = document.getElementsByTagName("p");
console.log(paragraf);

//class ismiyle element çekme
const paragraf2 = document.getElementsByClassName("description");
console.log(paragraf2);

//id isöiyle element çekme
const paragraf3 = document.getElementById("main-description");
console.log(paragraf3);

//Quey Selector
const para = document.querySelector("p");
const para2 = document.querySelector(".description");
const para3 = document.querySelector("#main-description");

const para4 = document.querySelectorAll(".description"); //descripton etiketine sahip tüm elementleri alıyor

console.log(para + "\n" + para2 + "\n" + para3);
