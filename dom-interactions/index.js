function didBodyLoad(){
    console.log("body did load");
}

const box = document.getElementById("box");
document.querySelector(".box")

box.addEventListener("mouseover", function(){
    if(box.style.backgroundColor == "blue"){
        box.style.backgroundColor = "red"; 
    } else {
        box.style.backgroundColor = "blue";
    }
})