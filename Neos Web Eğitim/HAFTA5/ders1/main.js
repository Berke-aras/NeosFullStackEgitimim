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
container.textContent; // ayni işe yarar ama element oluşturmaz yazi yazar
container.innerText;

container.style.backgroundColor = "red";
container.style.textTransform = "uppercase";
container.style.fontSize = "2rem";

const del = document.querySelector(".silinecek");
del.remove();

const baslik = document.createElement("h1");
baslik.innerText = "Bu Başlık Sonradan Oluşturuldu";
container.appendChild(baslik);

baslik.setAttribute("data-deger", "20");
if (baslik.getAttribute("data-deger") == "20") {
    console.log("Data deger 20");
} else if (baslik.getAttribute("data-deger") == "10") {
    console.log("Data deger 10");
}

//class list işlemleri
const title = document.getElementsByClassName("title"); //birden falza eleman bu class ı alabileceği için liste olarak hepsini döndürüyor listeden seçiyoruz
console.log(title);

title[0].style.backgroundColor = "red";
title[0].classList.add("ilk-baslik");
title[0].classList.remove("title-1");
