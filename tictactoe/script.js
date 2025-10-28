let but=document.querySelector("#startbut");
let h2=document.querySelector("h2");
let reset=false;
let count=0;
let box=document.querySelectorAll(".box")
function clear(b){
    b.innerHTML="";
    reset=false;
    but.innerHTML="Start";
    b.style.color="#fff";
}
function clearAll(){
    reset=false;
    but.innerHTML="Start";
    for(bb of box){
        bb.innerHTML="";
    }
}
function check(){
    if((b1.innerHTML=="X"&&b2.innerHTML=="X"&&b3.innerHTML=="X")||(b1.innerHTML=="O"&&b2.innerHTML=="O"&&b3.innerHTML=="O")){
        youwon(b1,b2,b3);
    }
    else if((b1.innerHTML=="X"&&b4.innerHTML=="X"&&b7.innerHTML=="X")||(b1.innerHTML=="O"&&b4.innerHTML=="O"&&b7.innerHTML=="O")){
        youwon(b1,b4,b7);
    
    }
    else if((b1.innerHTML=="X"&&b5.innerHTML=="X"&&b9.innerHTML=="X")||(b1.innerHTML=="O"&&b5.innerHTML=="O"&&b9.innerHTML=="O")){
        youwon(b1,b5,b9);
    
    }
    else if((b2.innerHTML=="X"&&b5.innerHTML=="X"&&b8.innerHTML=="X")||(b2.innerHTML=="O"&&b5.innerHTML=="O"&&b8.innerHTML=="O")){
        youwon(b2,b5,b8);
    
    }
    else if((b3.innerHTML=="X"&&b6.innerHTML=="X"&&b9.innerHTML=="X")||(b3.innerHTML=="O"&&b6.innerHTML=="O"&&b9.innerHTML=="O")){
        youwon(b3,b6,b9);
    
    }
    else if((b3.innerHTML=="X"&&b5.innerHTML=="X"&&b7.innerHTML=="X")||(b3.innerHTML=="O"&&b5.innerHTML=="O"&&b7.innerHTML=="O")){
        youwon(b3,b5,b7);
    
    }
    else if((b4.innerHTML=="X"&&b5.innerHTML=="X"&&b6.innerHTML=="X")||(b4.innerHTML=="O"&&b5.innerHTML=="O"&&b6.innerHTML=="O")){
        youwon(b4,b5,b6);
    
    }
    else if((b1.innerHTML=="X"&&b4.innerHTML=="X"&&b7.innerHTML=="X")||(b1.innerHTML=="O"&&b4.innerHTML=="O"&&b7.innerHTML=="O")){
        youwon(b1,b4,b7);
    
    }
    else if((b7.innerHTML=="X"&&b8.innerHTML=="X"&&b9.innerHTML=="X")||(b7.innerHTML=="O"&&b8.innerHTML=="O"&&b9.innerHTML=="O")){
        youwon(b7,b8,b9);
    
    }
    else if((b1.innerHTML=="X"&&b4.innerHTML=="X"&&b7.innerHTML=="X")||(b1.innerHTML=="O"&&b4.innerHTML=="O"&&b7.innerHTML=="O")){
        youwon(b1,b4,b7);
    
    }
    else if(count>=9){
        h2.innerHTML="Game Over ! Start Again";
    }
}

but.addEventListener("click",function clicked(){
    if(reset==false){
        but.innerHTML="Let's Go!";
        reset=true;
        turn();
        addclick();
    }
    else if(reset==true){
        h2.innerHTML="Click to Start!";
        count=0;
        for(bb of box){
            clear(bb);
        }
    }
})
let first="O";
function disp(){
    reset=true;
    count++;
    but.innerHTML="Reset";
    if(first=="O"){
        return first;
    }
    else if(first=="X"){
        return first;
    }

}
function turn(){
    
    if(first=="O") first="X";
    else first="O";
    h2.innerHTML=`Player '${first}' Turn`;
}
let b1=document.querySelector("#b1");
let b2=document.querySelector("#b2");
let b3=document.querySelector("#b3");
let b4=document.querySelector("#b4");
let b5=document.querySelector("#b5");
let b6=document.querySelector("#b6");
let b7=document.querySelector("#b7");
let b8=document.querySelector("#b8");
let b9=document.querySelector("#b9");
function addclick(){
    b1.addEventListener("click",()=>{
        b1.innerHTML= disp();
        turn();
        check();

    })
    b2.addEventListener("click",()=>{
        b2.innerHTML=disp();
        turn();
        check();
    })
    b3.addEventListener("click",()=>{
        
        b3.innerHTML=disp();
        turn();
        check();
    })
    b4.addEventListener("click",()=>{
        b4.innerHTML=disp();
        turn();
        check();
    })
    b5.addEventListener("click",()=>{
        b5.innerHTML=disp();
        turn();
        check();
    })
    b6.addEventListener("click",()=>{
        b6.innerHTML=disp();
        turn();
        check();
    })
    b7.addEventListener("click",()=>{
        b7.innerHTML=disp();
        turn();
        check();
    })
    b8.addEventListener("click",()=>{
        b8.innerHTML=disp();
        turn();
        check();
    })
    b9.addEventListener("click",()=>{
        b9.innerHTML=disp();
        turn();
        check();
    })
}


function youwon(bb1,bb2,bb3){
    bb1.style.color="black";
    bb2.style.color="black";
    bb3.style.color="black";
    h2.innerHTML="Game Over ! Start Again";
    but.innerHTML="Reset";
    count=0;
    setTimeout(()=>{
        clearAll();
        for(bb of box){
            bb.style.color="#fff";
        }
    },1500);
}
