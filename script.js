//var for counter
var couB = 0

function promBt() {
    var num = prompt("type anything: ", 0);
    document.getElementById("promR").innerHTML = num;
}

function alerBt() {
    alert("alert alert");
}

function inpuBt() {

}

function counBt() {
    couB++;
    document.getElementById("counR").innerHTML = couB
}