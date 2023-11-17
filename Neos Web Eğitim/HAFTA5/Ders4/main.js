//Js Dom
const paragraf = document.getElementsByTagName("p");
const title = document.getElementsByTagName("h1");

const prgrf = document.getElementsByClassName("description");
const ttl = document.getElementsByClassName("title");

console.log(title);

//jQuuery ile element seçimi

const paragraph = $("p");
const baslik = $("h1");

const prgraph = $(".description");
const bslik = $("#main.title");

console.log(paragraph);
console.log(baslik);

console.log(prgraph);
console.log(bslik);

//tek css degistime
baslik.css("background-color", "red");

//coklu css degistime
baslik.css({
    display: "flex",
    "font-size": "2rem",
});

//
// baslik.hover(
//     function () {
//         baslik.css("background-color", "darkblue");
//     },
//     function () {
//         baslik.css("background-color", "violet");
//     }
// );

baslik.on({
    mouseenter: function () {
        console.log("Mouse Girdi");
        $(this).hide();
    },
    mouseleave: function () {
        console.log("Mouse Ayrıldı");
        $(this).show();
    },
    click: function () {
        console.log("Tıklandı");
    },
});

//hide() > elemnetler gizlenebilir Css üzerinden visibility: hidden verir
//show() > gösterme

// value nasıl alınır formdan
$("#button").click(function () {
    console.log($("#isim").val());
    console.log($(".description").text());
    console.log($(".description").html());
    console.log($("#isim").attr("placeholder"));
});

//++++++++++++++++++++++++++++++++++++++++
//local storage
//

localStorage.setItem("theme", "dark");
localStorage.getItem("theme");
console.log(localStorage.getItem("theme"));
// localStorage.removeItem("theme"); // sildi
// localStorage.clearItem(); // tutulan tüm verileri siler // cokies sormak zorunludur eb sitelerinde arama motorlarında daha güvenli gözükmeye yarar

// if (localStorage.getItem("theme") == "dark") {
//     alert("Koyu Tema Seçildi");
// } else {
//     alert("Açık tema seçildi");
// }

//random sayı üretimi
const selamla = ["merhaba", "hoşgeldin", "Sitemize hoş geldiniz"];

let ramdomsayi = Math.random();
console.log(ramdomsayi);

let ramdomsayi2 = Math.round(Math.random() * 10);
console.log(ramdomsayi2);

let ramdomsayi3 = Math.round(Math.random() * 2); //kaç sayı arasından seçeceksek bi altın değerle çarpcaz
console.log(selamla[ramdomsayi3]);

//
//
// Belirli değerler arası random sayı seçme
let minDeger2 = 2;
let maxDeger = 81;
let randomDeger = Math.round(
    Math.random() * (maxDeger - minDeger2 + 1) + minDeger2
);

console.log(randomDeger);

//++++++++++++++++++++++++
//
//Fetch Api (application Programmin interface)
const data1 = {
    results: [
        {
            gender: "female",
            name: { title: "Miss", first: "Alexandra", last: "Lee" },
            location: {
                street: { number: 6676, name: "Lichfield Street" },
                city: "Lower Hutt",
                state: "Northland",
                country: "New Zealand",
                postcode: 84891,
                coordinates: { latitude: "54.4102", longitude: "104.4578" },
                timezone: {
                    offset: "0:00",
                    description:
                        "Western Europe Time, London, Lisbon, Casablanca",
                },
            },
            email: "alexandra.lee@example.com",
            login: {
                uuid: "0647a768-ddef-4006-bf89-8f25d65c56de",
                username: "orangelion959",
                password: "kajak",
                salt: "179dbzT7",
                md5: "266a5b496f87463a8b6a8a6d84485e5e",
                sha1: "3fa5d5a442999b7d431c8398d36091c439878e25",
                sha256: "313c2003909314b608dbb4f6b6e16ed35218e90ce379bf2bb300ef0be17cd931",
            },
            dob: { date: "1952-01-08T08:52:48.421Z", age: 71 },
            registered: { date: "2008-10-04T11:37:54.370Z", age: 15 },
            phone: "(337)-348-8850",
            cell: "(751)-192-8048",
            id: { name: "", value: null },
            picture: {
                large: "https://randomuser.me/api/portraits/women/81.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/women/81.jpg",
            },
            nat: "NZ",
        },
    ],
    info: { seed: "759d0b7cb73747dc", results: 1, page: 1, version: "1.4" },
};
console.log(data1);
console.log(data1.results);
console.log(data1.results[0]);
let cinsiyet = data1.results[0].gender;
let name = data1.results[0].name;
let fname = data1.results[0].name.first;
let lname = data1.results[0].name.last;

console.log(` İsim: ${fname} Soyisim: ${lname} Cinsiyet: ${cinsiyet}`);

let resim = data1.results[0].picture.large;
console.log(resim);
//java script object notation

// git ve yakala                   then ardından demek
fetch("https://randomuser.me/api")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("api den getirilen değer ", data);
        console.log(data.results[0].name.first);
        console.log(data.results[0].name.last);
        console.log(data.results[0].gender);
        console.log(data.results[0].picture.medium);
    })
    .catch((e) => {
        console.log("Hata Oluştu ", e);
    });
// bu yazı sayesinde hata alırsak program durmayacak url hatası dışında
// e bi event olan hata neyse onu buraya döndürür - kullanım standartı e yazmak
//genel şekilde böyle çekmek
