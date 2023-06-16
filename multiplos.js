var cont = 0
function Multiplo3(){
    while(cont <= 1000){
        document.write(cont + "," + "</br>");
        cont= cont+3;

    }
}

var conta = 0
function Multiplo5(){
    while(conta <= 1000){
        document.write(conta + "," + "</br>");
        conta= conta+5;

    }
}
function Multiplo(x){
    var x = parseInt(document.getElementById('nota1').value);
    var contador = 0;
        while(contador <= 1000){
            document.write(contador + "," + "</br>");
            contador = contador + x;

        }
}