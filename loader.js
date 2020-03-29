setTimeout(()=>{
    var preload = document.querySelector(".preload");
    var name = document.querySelector(".preload h2");
    var loading = document.querySelector(".preload h3");
    var preloadLogo = document.querySelector(".preload img");
    var preloadBook = document.querySelector(".preload-book");
    var poemIntro = document.querySelector(".poem-intro");
    var about = document.querySelector("#about");
    var contact = document.querySelector("#contact");
    // name.style.transform = "translateY(-500px)";
    // preloadBook.style.transform = "translateY(500px)";
    name.style.opacity= "0";
    loading.style.opacity = "0";
    preloadBook.style.opacity= "0";
    preload.style.opacity = "0";
    preloadLogo.style.opacity = "0";
    poemIntro.style.display = "flex";
    about.style.display = "flex";
    contact.style.display = "flex";
    setTimeout(function(){
        preload.style.display = "none";
    },
    2000)
},5000)

(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.navbar');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());