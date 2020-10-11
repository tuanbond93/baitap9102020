function cong() {
    let a = Number(document.getElementById("so1").value);
    let b = Number(document.getElementById("so2").value);
    let c = a + b;
    hienthi1 = document.getElementById("so1").value +" + " + document.getElementById("so2").value + " = " 
    document.getElementById("pheptinh").innerHTML = hienthi1
    document.getElementById("so1").value = c;
    document.getElementById("so2").focus;
    document.getElementById("so2").value = "";
}
function tru() {
    let a = Number(document.getElementById("so1").value);
    let b = Number(document.getElementById("so2").value);
    let c = a - b;
    hienthi1 = document.getElementById("so1").value +" - " + document.getElementById("so2").value + " = "
    document.getElementById("pheptinh").innerHTML = hienthi1
    document.getElementById("so1").value = c;
    document.getElementById("so2").focus;
    document.getElementById("so2").value = "";
}
function nhan() {
    let a = Number(document.getElementById("so1").value);
    let b = Number(document.getElementById("so2").value);
    let c = a * b;
    hienthi1 = document.getElementById("so1").value +" x " + document.getElementById("so2").value + " = "
    document.getElementById("pheptinh").innerHTML = hienthi1
    document.getElementById("so1").value = c;
    document.getElementById("so2").focus;
    document.getElementById("so2").value = "";
}
function chia() {
    let a = Number(document.getElementById("so1").value);
    let b = Number(document.getElementById("so2").value);
    let c = a / b;
    hienthi1 = document.getElementById("so1").value +" / " + document.getElementById("so2").value + " = "
    document.getElementById("pheptinh").innerHTML = hienthi1
    document.getElementById("so1").value = c;
    document.getElementById("so2").focus;
    document.getElementById("so2").value = "";
