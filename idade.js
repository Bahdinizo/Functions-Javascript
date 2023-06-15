function VerificaMaior(){  
    var idade = parseInt(document.getElementById('nota1').value);
    
        if (idade > 18){
            alert("Você tem mais de 18 anos, então você é maior de idade!");
        }
        else if (idade < 18){
            alert("Você tem menos de 18 anos, então você é menor de idade!");
        }
        else{
            alert("Você tem 18 anos, então você é maior de idade!")
        }
         
}