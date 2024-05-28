
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

window.onscroll = function(){
    scroll();
}

function scroll(){
    var btn = document.getElementById("btnTop");
    if(document.documentElement.scrollTop > 150){
        btn.style.display = "block";
    }else{
            btn.style.display = "none";
        }
    }


function backToTop (){
    document.documentElement.scrollTop = 0;
}