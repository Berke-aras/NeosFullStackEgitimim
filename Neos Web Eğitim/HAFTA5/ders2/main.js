// veya||or --- ve&&and



//saat 00 ile 23 arasında olabilir
//06 ile 12 arasında günaydın
// 12 ile 18 arasında iyi güler
// 18 ile 23 arasında iyi akşamlar
//23 ile 05 arasında iyi geceler
let saat = prompt("Saat Gir: ");

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
let sayi= prompt("Sayı Gir: ");

if (sayi > 0) {
    if (sayi % 2 == 0 && sayi % 3 == 0) {
        console.log("2 ve 3 ün katı")
    
    }else if (sayi % 2 == 0) {
        console.log("2 nin katı")
    
    }else if (sayi %3 == 0) {
        console.log("3 ün katı")
    
    }
} else {
    console.log("0 dan büyük değer gir veya hata")
}
