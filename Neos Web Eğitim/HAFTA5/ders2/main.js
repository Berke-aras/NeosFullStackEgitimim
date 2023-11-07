// veya||or --- ve&&and

//saat 00 ile 23 arasında olabilir
//06 ile 12 arasında günaydın
// 12 ile 18 arasında iyi güler
// 18 ile 23 arasında iyi akşamlar
//23 ile 05 arasında iyi geceler

// let saat = prompt("Saat Gir: ");
let saat;
if (saat >= 0 && saat < 24) {
    if (saat >= 6 && saat < 12) {
        console.log("Günaydın");

    } else if (saat >= 12 && saat < 18){
        console.log("İyi Günler");

    } else if (saat >= 18 && saat < 23) {
        console.log("İyi Akşamlar");

    } else if ((saat == 23) || (saat >= 0 && saat < 6)) {
        console.log("İyi Geceler");

    }
} else{

    console.log("Yanlış Değer");
}

// kullanıcıdan bir sayı isteyelim bu sayı 2 ve 3 ile tam bölünüyorsa ....
// let sayi = prompt("Sayı Gir: "); 
// + ineteger olark almasını sağlıyor veririnin +prompt("Sayı Gir: ")
let sayi;
console.log(typeof(sayi));
if (isNaN(sayi)) {
    console.log("Hatalı Giriş");
    
} else {
    sayi = parseInt(sayi)
    if (sayi % 2 == 0 && sayi % 3 == 0) {
        console.log("2 ve 3 ün katı");
    
    }else if (sayi % 2 == 0) {
        console.log("2 nin katı");
    
    }else if (sayi %3 == 0) {
        console.log("3 ün katı");
    
    }else{
        console.log("İkiside değil")
    }
}

// for(döngü değişkeni oluşturma ; döngünün tekrar sayisi, döngünün değişkeni için arttırma){}

let text = "selam";
for (let i = 0; i < 4; i++) {
    console.log(i);
    console.log(text);
    
}

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}    

let x = 0;
while (x < 4) {
    console.log(x);
    console.log(text);
    x++;
}

let y = 0;
while (y < text.length) {
    console.log(text[y]);
    y++;
}

let i = 100;
for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++){
        // let sonuc = i * j
        // console.log(i + " x " + j + " = " + sonuc)
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---------");
    console.log(i);
}
console.log(i);




console.log("\n-----------\n\n")
/*
    String Methods
*/

let a = "a        aaa";
console.log(typeof(a));
console.log(a.length);

let text2 = "Hello World"
console.log(text2[0])
console.log(text2[2] + text2[3])

let meyveler = "elma armut muz"
let meyve1 = meyveler.slice(0,4) // son yazılan dahil değil
console.log(meyve1)




console.log("\n-----------\n\n")
let kDogrulama = false;
let sayac = 0;
// let kAdi = prompt("Kullanıcı Adınızı Girin: ");

while (kDogrulama) {
    console.log("tekrarlandı");

    if (kAdi.length < 8) {
        sayac++;

        console.log("8 karakterden Küçük");
        
        console.log(`${4 - sayac} : Hakkınız Kaldı`)
        
        kAdi = prompt("Kullanıcı Adınızı Girin: ");
        
        // continue;    
    }else{
        
        console.log("başarılı Giriş");
        
        kDogrulama = false;
        
        break;
    }

    if (sayac == 3){
        console.log("Deneme Hakkınız Doldu \nProgram Sonlandırılıyor ....");
        break;
    }
}

for (let i = 0; i < 10; i++) {
    if (i == 5){
        console.log("i = 5 oldu program kapanmak");
        break;
    }
    console.log(i);
}