let gameseq=[];
let userseq=[];


let btns=["yellow","blue","red","blue"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if( started==false){
        started=true;
        console.log("game started");

        levelUp();
    }
});
  

function gameFlash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },200);
}

function levelUp(){
    userseq=[];
  level++;
   h2.innerText=`Level ${level}`;


    let ranidx=Math.floor(Math.random()*3); 

    let rancol=btns[ranidx];

    let randbtn=document.querySelector(`.${rancol}`);
    // console.log(ranidx);
    // console.log(rancol);
    // console.log(randbtn);

      gameseq.push(rancol);
      console.log(gameseq);
    gameFlash(randbtn);
}  



function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    },100);
 }
  
 
 function checkAns(idx){
  console.log("curr level : ",level);



  if(userseq[idx]===gameseq[idx]){
    if(userseq.length== gameseq.length){
        setTimeout(levelUp,1000);

    }
  }
  else{
    h2.innerText=`game over in level : ${level}  press any key to restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout( function(){
    document.querySelector("body").style.backgroundColor="white";
    },200);
    reset(); 

  }
 }
function btnPress(){
   let btn=this;
   userFlash(btn);

   let usercol=btn.getAttribute("id");
   console.log(usercol);
   userseq.push(usercol);

   checkAns(userseq.length-1);
}

 
let allbtns=document.querySelectorAll(".btn");
 
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    
}