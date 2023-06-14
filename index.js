function CalculaMedia(){
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    media(nota1, nota2, nota3);
}
function media(nota1,nota2,nota3){
    var media=((Number(nota1)+Number(nota2)+Number(nota3))/3).toFixed(2);
    alert("A nota final é:"+ media);
}