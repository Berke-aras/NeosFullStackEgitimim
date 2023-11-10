let hata = false;
function hesap(islemSec) {
    if (islemSec < 5) {
        let x = +prompt("Sayi1: ");
        let y = +prompt("Sayi2: ");

        if (islemSec == 1) {
            return x + y;
        } else if (islemSec == 2) {
            return x - y;
        } else if (islemSec == 3) {
            return x * y;
        } else if (islemSec == 4) {
            return x / y;
        }
    } else {
        console.log("Hatali Secim.");
        hata = true;
    }
}
