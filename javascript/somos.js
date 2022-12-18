function total(x,y,z){
    var x=parseFloat(document.getElementById("primero").value);
    var y=parseInt(document.getElementById("segundo").value);
    var z=parseInt(document.getElementById("tercero").value);
    var resultado= (x+y+z)/3;

    document.getElementById("res").value=resultado
 
}
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})