const popup = document.querySelector('.popup');
const close2 = document.querySelector('.close2');
 var blur = document.getElementById('blur');

window.onload =function(){
    setTimeout(function(){

        blur.classList.add('active');
        popup.style.display ="block";
        
    },4000);
}

close2.addEventListener('click',() => {
    popup.style.display ="none";
    blur.classList.remove('active');
})
