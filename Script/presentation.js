let btnOp=document.getElementById('btnOpen');
let btnClos=document.getElementById('btnClose');
let cv=document.getElementById('zoneCv');

btnOp.addEventListener('click',()=>{
    btnOp.style.display='none';
    btnClos.style.display='block';
    // cv.style.display='block';
    cv.style.visibility='visible';
})
btnClos.addEventListener('click',()=>{
    btnClos.style.display='none';
    btnOp.style.display='block';
    // cv.style.display='none'
    cv.style.visibility='hidden';


})