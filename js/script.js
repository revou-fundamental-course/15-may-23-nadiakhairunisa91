// fungsi button hitung yang bagian luas//
function hitungluas()
{
    var sisi = document.getElementById("sisi-luas").value 
    var laus = document.getElementById("output-luas")
    var hasil = sisi * sisi

laus.innerHTML="L = S X S<br> L =  "+sisi+" x "+sisi+"<br> L = "+hasil;
}
//fungsi button reset yang bagian luas//
function reset(){
    var sisi = document.getElementById("sisi-luas").value 
    var laus = document.getElementById("output-luas")
    var hasil = sisi * sisi

    laus.innerHTML="";
}
//fungsi button reset yang bagian luas//

function resetkeliling(){
    var sisi = document.getElementById("sisi-keliling").value 
    var keliling = document.getElementById("output-keliling")
    var hasil = 4 * sisi

    keliling.innerHTML="";
}
//fungsi button hitung yang bagian keliling//
function hitungkeliling()
{
    var sisi = document.getElementById("sisi-keliling").value 
    var keliling = document.getElementById("output-keliling")
    var hasil = 4 * sisi

keliling.innerHTML="k = 4 X S<br> K = "+4+" x "+sisi+"<br> K = "+hasil;
}
function reser(){
    
}
