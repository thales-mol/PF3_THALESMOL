


   function imc () {    
    const valor = document.getElementById('valor').value;    
    const juros = document.getElementById('juros').value;    
    const parcelas = document.getElementById('parcelas').value;   
    const jurosPorcent = juros /100;
    const resultado = valor((((1 + jurosPorcent)**parcelas) - 1)/jurosPorcent)
    }


