function acesso(){
    var numero = document.getElementById('num').value;
    var trocar = document.body;
    
    if(numero >= 1000 && numero <=1999){
        alert('Acesso total às áreas restritas.');
        trocar.style.backgroundColor = 'green';

    }
    else if (numero >= 2000 && numero <=2999){
        alert('Acesso limitado à algumas áreas restritas.');
        trocar.style.backgroundColor = 'yellow';
    }
    else{
        trocar.style.backgroundColor = 'red';
        alert('Acesso negado às áreas restritas.')
    }
}
