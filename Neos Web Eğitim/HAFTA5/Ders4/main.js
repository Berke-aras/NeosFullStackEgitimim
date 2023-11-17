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

//
//local storage
//
