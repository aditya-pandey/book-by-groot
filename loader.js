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
    setTimeout(function(){
        preload.style.display = "none";
    },
    2000)
},5000);

(function(){
    var burger = document.querySelector('.burger-container');
    var header = document.querySelector('.navbar');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
    var about = document.querySelector("#about-link");
    var contact = document.querySelector("#contact-link");
    about.onclick = function() {
        header.classList.remove('menu-opened');
    }

    contact.onclick = function() {
        header.classList.remove('menu-opened');
    }
}());

var buttonInstall = document.querySelector(".install");

let deferredPrompt;

buttonInstall.addEventListener('click', () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    promptEvent.userChoice.then((result) => {
      console.log('👍', 'userChoice', result);
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      window.deferredPrompt = null;
      // Hide the install button.
      divInstall.classList.toggle('hidden', true);
    });
  })

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
});

buttonInstall.addEventListener('click', (e) => {
    // Hide the app provided install promotion
    // hideMyInstallPromotion();
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    })
  });