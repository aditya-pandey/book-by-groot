var indexI =document.querySelector(".index-i");
var fontI = document.querySelector(".font-i");
var themeI = document.querySelector(".theme-i");
var index = document.querySelector(".index");
var fontProp = document.querySelector(".font-prop");
var theme = document.querySelector(".theme");
var themechanger = document.querySelectorAll(".theme button");
var cover = document.querySelector(".cover");

var font = document.querySelector("#fonts");
var paper = document.querySelectorAll(".paper");

var icons = [indexI,fontI,themeI];
var features = [index,fontProp,theme];

for(let i=0;i<icons.length;i++){
    icons[i].addEventListener("click", () => {
        if(features[i].style.display == "flex"){
            features[i].style.display = "none";
        }
        else{
            features[i].style.display = "flex";
        }
        for (let j = 0; j < icons.length; j++) {
            if(j != i){
                features[j].style.display = "none";
            }
        }
        ;
    })
}
themechanger.forEach(el => {
    el.addEventListener("click",() => {
        for (let i = 1; i < paper.length; i++) {
            paper[i].style.background = `${el.style.background}`;
            paper[i].style.color = `${el.style.color}`;
        }
    })
})

font.addEventListener("change",() => {
    paper.forEach(el => {
        el.style.fontFamily = `${font.value}`;
    });
})
