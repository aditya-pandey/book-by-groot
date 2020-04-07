var indexI =document.querySelector(".index-i");
var index = document.querySelector(".index");

indexI.addEventListener("click", () => {
    if(index.style.display == "none"){
        index.style.display = "flex";
    }
    else{
        index.style.display = "none";
    }
    ;
})