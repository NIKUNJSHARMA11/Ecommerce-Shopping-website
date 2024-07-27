const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

// const camera = document.getElementById('camera');
// const input = document.querySelector('input');

// if (input) {
//   input.addEventListener('change', () => {
//     input.classList.add('active2'); 
//     obj.classList.remove('active1')
//   });
  
// }
// else{
//     camera.classList.remove('active2'); 
// }
if (bar) {
    bar.addEventListener('click',() => {
        navbar.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',()=>{
        navbar.classList.remove('active');

    })
}
// sproduct 

let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src =smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src =smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src =smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src =smallimg[3].src;
}

// /navigation bottom 
function change(item){
    const buttons = document.querySelectorAll('a');
    buttons.forEach(function(obj){
        obj.classList.remove("active1");
      
    });
    item.classList.add("active1");
    
}




