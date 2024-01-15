function veri(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 3000);
    });
}
console.log(veri("Ahmet"));

// function ver1() {
//     setTimeout(() => {
//         console.log(1);
//     });
// }

// function ver2() {
//     setTimeout(() => {
//         console.log(2);
//     }, 5000);
// }

// function ver3() {
//     setTimeout(() => {
//         console.log(3);
//     }, 2000);
// }

// ver1();
// ver2();
// ver3();

async function veriGetir() {
    let x = await veriGetir("pancar");
    console.log(x);
}

let veriGetir2 = () => {
    veri("ahmet").then((x) => console.log(x));
};

veriGetir();
veriGetir2();
