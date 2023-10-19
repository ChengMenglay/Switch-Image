var images=document.querySelectorAll(".img-wrapper>img");
var prev=document.querySelector(".prev");
var next=document.querySelector(".next");
var allDop=document.querySelectorAll(".dop");
let count=0;
next.addEventListener("click",nextslide);
function nextslide(){
    images[count].style.animation="nextOut 0.5s forwards";
    if(count >= images.length-1){
        count=0;
    }
    else{
        count++;
    }
    images[count].style.animation="nextIn 0.5s forwards";
    DopRemoveAndAdd();
}
prev.addEventListener("click",()=>{
    images[count].style.animation="prevIn 0.5s forwards";
    if(count==0){
        count=images.length-1;
    }
    else{
        count--;
    }
    images[count].style.animation="prevOut 0.5s forwards";
    DopRemoveAndAdd();
})
DopRemoveAndAdd=()=>{
    for(let i=0;i<=allDop.length-1;i++){
        allDop[i].className=allDop[i].className.replace("active","");
    }
    allDop[count].className += " active";
}
allDop.forEach(dop=>{
    dop.addEventListener('click',function(e){
        console.dir(e.currentTarget.getAttribute("attr"));
        e.currentTarget.classList.add("active");
        const dopIndex =e.currentTarget.getAttribute("attr");
        if(dopIndex>count){
            images[count].style.animation="nextOut 0.5s forwards";
            count=dopIndex;
            images[count].style.animation="nextIn 0.5s forwards";
        }
        else{
            images[count].style.animation="prevIn 0.5s forwards";
            count=dopIndex;
            images[count].style.animation="prevOut 0.5s forwards";
        }
        DopRemoveAndAdd();
    })
})
function autosliding(){
    myInterval= setInterval(function(){
        nextslide();
        DopRemoveAndAdd();
    },1000)
};
autosliding();
const slideContainer=document.querySelector(".img-wrapper");
slideContainer.addEventListener("mouseover",function(){
    clearInterval(myInterval);
});
slideContainer.addEventListener("mouseleave",function(){
    autosliding ();
});

