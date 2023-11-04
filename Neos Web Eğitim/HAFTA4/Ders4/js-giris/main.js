console.log("Hello World");

// yorum satır

/*
Çoklu Yorum Satırı
*/


//alert - İçe Gömülü Bir Fonksiyondur. Kullanıcıya mesaj göndermek için kullanılır
// Console llog içe gömülü bir fonksiyondur. Console kısmına çıktı göndermek için kullanılır

// eski değişken oluşturma yöntemi
// var degislenAdi = "Merhaba Dünya";

// console.log(degislenAdi);
// console.log("Merhaba Dünya");

//JavaScipt ES6

let degisken1 = "Merhaba Dünya";
console.log(degisken1);

degisken1 = "Güle Güle Dünya"
console.log(degisken1);

//const degisken degisemez
const degisken2 = "Selam";
console.log(degisken2);

// degisken2 = "Görüşürüz";
// console.log(degisken2);

let number1 = 50;

console.log(number1 + 25); // number (integer) (sayısal veriler)
console.log("50" + "25"); //string türü (metinsel veriler)
console.log(50 * 25); 
console.log(50 / 25);
console.log(50 - 25); 

/*

String metin

Number sayısal

Boolean true,false

Undefinied içeriği tanımlanmamoış veri

null boş

List-Array liste

Object Sözlük

Symbol symbol

*/

console.log(typeof(number1));
console.log(typeof(true));

let degislenAdi;

console.log(degislenAdi);
console.log(typeof(degislenAdi));

let isim = "Berke";
let soyad = "Aras";
console.log(isim, soyad);
console.log(isim + " " + soyad);
let country = "Türkiye";
let age = 100;
let isStudent = true;
let isMarried = false;
let tcKimlikNo = 11111111111;

console.log("İsim: " + isim + ", " + "Soyad: " + soyad + "\n" + "Ülke: " + country + "\n" + "Age: " + age);

console.log(`İsim: ${isim}  \nSoyad: ${soyad} `);

const pi = 3.14;


let butce = 210;
const kalemTane = 50,
silgiTane = 10;

butce  = butce - (kalemTane * 2)
butce -= silgiTane

console.log(butce)
