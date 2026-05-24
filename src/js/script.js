window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    header.classList.toggle("ativo", window.scrollY > 0);

});

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.visibility = "hidden";

    }, 2000);

});