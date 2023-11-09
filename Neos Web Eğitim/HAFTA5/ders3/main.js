//string Methods

//replace
let text = "Hello World 2023, Hello World";
console.log(text);

text = text.replace("2023", "2024");
console.log(text);

result = text.replace(/hello/i, "meraba");
console.log(result);

//replace All
result = result.replaceAll("World", "dünyag");
console.log(result);



//toUpperCase
let text2 = "MerHabA";
text2 = text2.toUpperCase();
console.log(text2);

// toLowerCase
text2 = text2.toLowerCase();
console.log(text2);


//trim boşluk silme  .trimStart  .trimEnd
let text3 = "        3          ";
console.log(text3);

text3 = text3.trim();
console.log(text3);



//charAt karakteri  getir
let text4 = "Merhaba";
console.log(text4[0]);
console.log(text4.charAt(0));
console.log(text4.charCodeAt(0));


// Arama Metodu
let text5 = "Yerimi Yerimi Bul Bul";
console.log(text5.indexOf("B"));
console.log(text5.indexOf("Yerimi"));
console.log(text5.lastIndexOf("Yerimi"));

console.log(text5.includes("a")) ;// var mı içinde

let mail = "blablabla@gmail.com";
console.log(mail.includes("@"));
console.log(mail.includes("."));

// console.log(text5.indexOf(/y/i)); calismayan


//startswşth();
let text6 = "Elma Armut"
console.log(text6.startsWith("E"));
console.log(text6.startsWith("A", 5));
// endsWith()

console.log(text6.endsWith("t"));

console.log("\n*****************************\n\n");

let sayi = 999999999999999;
let sayi2 = 9999999999999999;

console.log(sayi);
console.log(sayi2);
console.log(Number.MAX_SAFE_INTEGER);

sayi2 = 999999999999999999n; //bigInt
console.log(sayi2);




let sayi3 = 0.1;
let sayi4 = 0.2;
console.log(sayi3+sayi4);
console.log((sayi3 * 10 + sayi4 * 10) / 10);




