//fonkisyonlar

function fonkAdi() {
    console.log("selam");
}

fonkAdi();

function selamla(isim) {
    console.log(`Merhaba ${isim}`);
}

selamla("Berke");

function topla(x, y) {
    console.log(x + y);
}

topla(5, 7);

function topla(x, y) {
    return x + y;
}

let a = topla(5, 9);
console.log(a);

while (false) {
    if (hata) {
        console.log(" Hatalı islem. islem bitiriliyor");
        break;
    }

    let girdi = prompt(
        "Toplama:1 \nCikarma:2 \nCarpma:3 \nBölme:4 \nCikis:0 \n\nislem sec: "
    );
    if (girdi == 0) {
        console.log("islem bitiriliyor");
        break;
    }
    let sonuc = hesap(girdi);

    console.log(sonuc);
}

//object veri türleri >

let meyve1 = "Elma",
    meyve2 = "Kivi",
    meyve3 = "Kavun",
    meyve4 = "Karpuz";

const meyveler = ["Elma", "Kivi", "Kavun", "Karpuz"];

//sözlük
const meyveler2 = {
    meyve1: "Elma",
    meyve2: "Kivi",
    meyve3: "Kavun",
    meyve4: "Karpuz",
};

console.log(meyveler2.meyve1);

const kisi = {
    firstName: "Berke",
    lastName: "Aras",
    tc: "78945612391",
    fullname: function () {
        return this.firstName + " " + this.lastName;
    },
};

console.log(kisi.fullname());

// kullanıcıdan iki not al bu not değerlerinin ortalamasını alıp ortalama 50den büyükse geçti kaldı

// function not(not1, not2) {
//     let sonuc = (not1 + not2) / 2;
//     if (not1 >= 0 && not1 <= 100 && not2 >= 0 && not2 <= 100) {
//         if (sonuc >= 50) {
//             return "gecti: " + sonuc;
//         } else if (sonuc < 50) {
//             return "kaldi: " + sonuc;
//         } else {
//             return "Hatali Giris";
//         }
//     } else {
//         return (
//             "Hatali Giris. Not 1: " +
//             not1 +
//             " veya Not 2: " +
//             not2 +
//             "  ,100 üstü değer alamaz"
//         );
//     }
// }

// let not1 = +prompt("Not 1: ");
// let not2 = +prompt("Not 2: ");

// console.log(not(not1, not2));
