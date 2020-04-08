var indexI =document.querySelector(".index-i");
var index = document.querySelector(".index");

indexI.addEventListener("click", () => {
    if(index.style.display == "flex"){
        index.style.display = "none";
    }
    else{
        index.style.display = "flex";
    }
    ;
})