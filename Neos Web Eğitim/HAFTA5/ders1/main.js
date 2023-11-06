/*
KArşılaştırma Operatörleri
== eşit eşittir number ve string 5 i doğru kabul eder
<
>
<=
>=
=== soldaki değerin hem kendisi hem de veri tipi sağdakine eşit mi
. !=  eşit değil mi
. !== soldaki değerin hem kendisi hem de veri tipi sağdakine eşit değil mi | hem veri tipi hem de değerleri eşit değilse çalışır

---------------------

Aritmetik Operatörler

+
-
/
*
% mod - kalan bulma


Artırma Operatörleri
var olan bir değeri 1 artırmak için

a++
a--

++a
--c

*/



let a = 50,
b = 48,
c = a + b;
console.log(++c);

let x = 5; //integer
let y = 5.4; // float
console.log(typeof(x));
console.log(typeof(y));

x = x.toString();
console.log(typeof(x));
console.log(x);

let z = "45465";
console.log(z);


z = parseInt(z);
console.log(typeof(z));
console.log(z);

z = parseFloat(z);
console.log(typeof(z));
console.log(z);



let gun = 1;
if (gun == 0) {
    console.log("Pazartesi");
}
else if (gun == 1) {
    console.log("Salı");
}
else if (gun == 2) {
    console.log("Çarşamba");
}
else if (gun == 3) {
    console.log("Perşembe");
}
else if (gun == 4) {
    console.log("Cuma");
}
else if (gun == 5) {
    console.log("Cumartesi");
}
else if (gun == 6) {
    console.log("Pazar");
}
else{
    console.log("Böyle Bir Gün Yok");
}
