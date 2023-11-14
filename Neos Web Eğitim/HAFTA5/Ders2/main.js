//DOM Variables

const menuIcon = document.getElementById("menu-icon");
// console.log(menuIcon);
const menuContainer = document.querySelector(".link");
const menuItems = document.querySelectorAll(".link-item");
//

menuIcon.addEventListener("click", function name(params) {
    // console.log("tuşa basıldı");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");

    menuContainer.classList.toggle("active");

    // if (menuIcon.classList.contains("fa-xmark")) {
    //     // console.log("Menü Açık");
    //     menuContainer.classList.add("active");
    // } else {
    //     // console.log("Menü kapalı");
    //     menuContainer.classList.remove("active");
    // }

    // if (menuIcon.classList.contains("fa-xmark")) {
    //     menuIcon.classList.remove("fa-xmark");
    //     menuIcon.classList.add("fa-bars");
    // } else {
    //     menuIcon.classList.remove("fa-bars");
    //     menuIcon.classList.add("fa-xmark");
    // }
});
