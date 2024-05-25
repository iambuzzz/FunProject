let gameseq=[];
let userseq=[];
let highest=[];
function max(highest){
    let hiscore=highest[0];
    for(let i=0;i<highest.length;i++){
        if(highest[i]>=hiscore){
            hiscore=highest[i];
        }
    }
    return hiscore;
}

let started=false;
let level=0;
let h2=document.querySelector("h2");
let h2high=document.querySelector("#high");
function rand(){
    let rn= Math.floor(Math.random()*4)+1;
    console.log(rn);
    return rn;
}
let b1=document.querySelector("#but1");
let b2=document.querySelector("#but2");
let b3=document.querySelector("#but3");
let b4=document.querySelector("#but4");

function btnflash(b){
    let randbut=b;
    console.dir(randbut);
    let incolor=randbut.style.backgroundColor;
    randbut.style.backgroundColor="white";
    setTimeout( ()=> {
    randbut.style.backgroundColor=incolor;

    } , 200);

}
function userbtnflash(b){
    let randbut=b;
    console.dir(randbut);
    let incolor=randbut.style.backgroundColor;
    randbut.style.backgroundColor="black";
    setTimeout( ()=> {
    randbut.style.backgroundColor=incolor;

    } , 200);

}
function rnbtnflash(){
    let randbut=document.querySelector(`#but${rand()}`);
    console.dir(randbut);
    let incolor=randbut.style.backgroundColor;
    randbut.style.backgroundColor="white";
    setTimeout( ()=> {
    randbut.style.backgroundColor=incolor;

    } , 200);
    return randbut;

}
document.addEventListener("keypress",function(e){
    if(e.key===" "){
        setTimeout(()=>{
            if(started==false){
                console.log("game is started");
                started= true;
                levelup();
            }
        },800)
    }
})
function levelup(){
    userseq=[];
    level++;
    h2.innerHTML=`Level ${level}`;
    let rnd=rnbtnflash();
    gameseq.push(rnd);
}
function check(b){
    if(gameseq[b]==userseq[b]){
        if(userseq.length==gameseq.length){
            setTimeout( ()=> {
                levelup();
                } , 800);
        }
    }
    else{
        h2.innerHTML=`Game Over ! And Your Score was <b>${level-1} </b><br>Press Space To Start New Game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
        document.querySelector("body").style.backgroundColor="white";

        },200)
        highest.push(level-1);
        document.querySelector("#main").style.height="90%";
        h2high.innerHTML=`Your Highest Score is ${max(highest)}`;
        reset();
    }
}
function butclick(b){
    userseq.push(b);
    check(userseq.length-1);

}
b1.addEventListener("click",()=>{
    butclick(b1);
    userbtnflash(b1);
});
b2.addEventListener("click",()=>{
    butclick(b2);
    userbtnflash(b2);

});
b3.addEventListener("click",()=>{
    butclick(b3);
    userbtnflash(b3);
});
b4.addEventListener("click",()=>{
    butclick(b4);
    userbtnflash(b4);
});
function reset(){
    level=0;
    userseq=[];
    gameseq=[];
    started=false;
}