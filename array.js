function Calcula(){
    var obj1 = parseInt(document.getElementById('obj1').value);
    var obj2 = parseInt(document.getElementById('obj2').value);
    var obj3 = parseInt(document.getElementById('obj3').value);
    Array1([obj1, obj2, obj3]);
}
function Array1([obj1, obj2, obj3]){
    var Array1 = [obj1, obj2, obj3];
    alert("O array criado foi:"+ Array1);
}

function Calcula2(){
    var obj1 = parseInt(document.getElementById('obj1').value);
    var obj2 = parseInt(document.getElementById('obj2').value);
    var obj3 = parseInt(document.getElementById('obj3').value);
    Array2([obj1, obj2, obj3]);
}
function Array2([obj1, obj2, obj3]){
    var Array2 = [obj1, obj2, obj3];
    Array2.reverse();
    alert("O array criado foi:"+ Array2);
}