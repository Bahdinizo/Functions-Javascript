
function VerificaMaior(){  
    var x1 = parseFloat(document.getElementById('nota1').value);
    var x2 = parseFloat(document.getElementById('nota2').value);
    var x3 = parseFloat(document.getElementById('nota3').value);

        if (x1 > x2 && x1>x3){
            alert("O maior número digitado é o :" + x1);
        }
        else if (x2 > x1 && x2>x3){
            alert("O maior número digitado é o :" + x2);
        }
        else if (x3 > x2 && x1){
            alert("O maior número digitado é o :" + x3);
        }
        else{
             alert("Digite 3 números diferentes")
        }   
}