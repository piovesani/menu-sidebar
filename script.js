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


let dia = 5;
let diaNome ='';

switch(dia){
    case 1: 
    diaNome = 'Segunda-Feira';
    break;

    case 2: 
    diaNome = 'Terça-Feira';
    break;

    case 3: 
    diaNome = 'Quarta-Feira';
    break;

    case 4: 
    diaNome = 'Quinta-Feira';
    break;

    default:
    diaNome = 'Outro dia';
    break

}

document.getElementById('titulo').innerHTML = diaNome;
