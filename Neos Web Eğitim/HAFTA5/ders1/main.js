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

const para4 = document.querySelectorAll(".description"); //descripton etiketine sahip tüm elementleri alıyor.

console.log(para + "\n" + para2 + "\n" + para3);

para3.innerHTML = "Merhaba";
para3.innerHTML += "Merhaba"; // ekleme yapar +=

const input = document.getElementById("input-alani");
const inpu2 = document.querySelector("#input-alani"); // iki seçim yöntemide olur.
input.placeholder = "Merhabaa";
input.id = "input";

let saat = new Date();
console.log(saat);

document.getElementById("saat-gosterim").innerHTML = saat; // tek sefer kullanma da bune benzer bir kullanım yapılabilir boşa yer kaplamaz
//veya
document.getElementById("saat-gosterim").innerHTML = new Date();
//

const container = document.querySelector("#container");

container.innerHTML = "<h1 class='baslik'>Bu bir Başlık</h1>";
