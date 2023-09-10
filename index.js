let modal=document.getElementById('modal');
let overlay=document.getElementById("overlay");
let openmodal=()=>{
    modal.style.transform='scale(1)';
    overlay.style.visibility="visible";
}

let closemodal=()=>
{
    modal.style.transform='scale(0)';
    overlay.style.visibility="hidden";
}
