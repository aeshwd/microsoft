// AOS Animation

window.addEventListener("load", () => {
    let preloader = document.querySelector(".preloader");
    preloader.classList.add("fade-out");


    setTimeout(() => {
        preloader.style.display = "none";
        AOS.init();
    }, 6000);
}); 