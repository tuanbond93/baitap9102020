function tich() {
    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let tich = soThuNhat * soThuHai
    let phatNgon = tich
    document.getElementById("pheptinh").innerText = soThuNhat + " * " + soThuHai + " = "
    document.getElementById("phatNgon").innerText = phatNgon
    document.getElementById("pheptinhtam").value = phatNgon

}
function thuong() {

    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let thuong = soThuNhat / soThuHai
    let phatNgon = thuong
    
    document.getElementById("pheptinh").innerText = soThuNhat + " / " + soThuHai + " = "
    document.getElementById("phatNgon").innerText = phatNgon
    document.getElementById("pheptinhtam").value = phatNgon
}
function tong() {

    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let tong = soThuNhat + soThuHai
    let phatNgon = tong
    
    document.getElementById("pheptinh").innerText = soThuNhat + " + " + soThuHai + " = "
    document.getElementById("phatNgon").innerText = phatNgon
    document.getElementById("pheptinhtam").value = phatNgon
}
function hieu() {

    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let hieu = soThuNhat - soThuHai
    let phatNgon = hieu
    
    document.getElementById("pheptinh").innerText = soThuNhat + " - " + soThuHai + " = "
    document.getElementById("phatNgon").innerText = phatNgon
    document.getElementById("pheptinhtam").value = phatNgon
}

