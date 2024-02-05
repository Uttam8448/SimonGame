let gameSeq=[];
let userSeq=[];
let highScore=0;
let btns = ["yellow","red","purple","green"]
let started = false;
let level = 0;
let startkey = document.querySelector("#Startbutton");

let h2= document.querySelector('h2');
let high=document.querySelector('#highscore');
high.innerText=`Highest Score : ${highScore}`;
startkey.addEventListener('click',function(){
    if(!started){
        console.log('Game Started');
        started=true;
        levelUP();
    }
});

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 400);
}
function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function levelUP() {
    userSeq =[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function btnPress (){
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

function checkAns(idx) {
    // console.log("curr level : ",level);
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUP(),1000);
            if(level>(highScore+1)){
                highScore++;
                high.innerText=`Highest Score : ${highScore}`;
            }
        }
    }
    else{
        h2.innerText = `Game Over! Your score was ${(level-1)}
                        Press any key to start.`;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = 'black';
        },150);
       
        
        reset();
l    }
}
function reset(){
    started=false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
