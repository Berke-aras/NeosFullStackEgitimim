async function veri() {
    let data = await fetch("https://randomuser.me/api/?result=1", {
        method: "GET", //POST
    });

    console.log(data);

    let rData = await data.json();

    console.log(rData);
}

veri();

let veriYaz = async () => {
    await fetch("", {
        headers: {},
        method: "POST",
        body: JSON.stringify({}),
    });
};
