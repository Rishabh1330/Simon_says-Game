let gameseq=[];
let userseq=[];
let btns =["yellow","red","purple","green"];
let started =false;
let level =0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function (){
    if(started==false){
        console.log("game is started")
        started = true;
        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },500);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },500);
}

function levelup(){
    userseq =[];
    level++;
    h2.innerText ="level " +level;
    let random= Math.floor(Math.random()*3);
    let randColor= btns[random];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(random);
    // console.log(randColor);
    // console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    btnflash(randbtn);
}
function checkAns(idx){
   // console.log("curr level: ",level);
//    let idx = level-1;
   if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelup,1000) 
    }
    //console.log("same value");
   }else{
    h2.innerHTML =`game over! your score was <b>${level}<b> press any key to start`;
    document.querySelector("body").style.backgroundcolor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundcolor="white";
    }, 1000);
    reset();

   }
}
function btnpress() {
   // console.log(this);
    let btn =this;
    userflash(btn);
    userColor =btn.getAttribute("id");
    userseq.push(userColor);
    
    checkAns(userseq.length - 1);
}
let allbtns =document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset() {
    started =false;
    gameseq=[];
    userseq=[];
    level=0;
}
// btn.addEventListener("keypress",function (){
//     let h2 =document.querySelector("h2")
//     h2.innerText="level 1";
// })