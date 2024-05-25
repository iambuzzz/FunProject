let face= document.getElementById("face");
let pupils=document.querySelectorAll(".pupil");
let move=(event)=>{
    let x = (event.clientX / 14);
    let y = (event.clientY / 7);
    let fx = (event.clientX /20);
    let fy = (event.clientY /20);
    face.style.transform= `translate(${fx}px,${fy}px)`;
    document.body.style.backgroundColor=`rgba(${y*5},${x*5},${fx*5},40%)`;
    for(let pupil of pupils){
        pupil.style.transform=`translate(${x}px,${y}px)`;
    }
}
window.addEventListener("mousemove",move);
