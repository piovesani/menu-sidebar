function menuToggle (){
    let menuArea = document.getElementById("menu-area");
    let titulo =document.getElementById('titulo');

    if(menuArea.style.width == '200px'){
        menuArea.style.width = '0';
        titulo.classList.remove('margin-left');
    }

    else{
        menuArea.style.width = '200px';
        titulo.classList.add('margin-left');
    }
}


