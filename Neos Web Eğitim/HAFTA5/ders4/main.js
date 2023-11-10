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
