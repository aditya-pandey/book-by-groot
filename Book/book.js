var indexI =document.querySelector(".index-i");
var fontI = document.querySelector(".font-i");
var themeI = document.querySelector(".theme-i");
var index = document.querySelector(".index");
var fontProp = document.querySelector(".font-prop");
var theme = document.querySelector(".theme");
var themechanger = document.getElementsByName("theme");

var font = document.querySelector("#fonts");
var paper = document.querySelectorAll(".paper p");

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
        icons.filter((a) => {if(a != icons[i]){
            console.log(i)
        }} );
        ;
    })
}
font.addEventListener("change",() => {
    paper.forEach(el => {
        el.style.fontFamily = `${font.value}`;
    });
})
