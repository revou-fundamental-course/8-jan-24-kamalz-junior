

const btnKeliling = document.getElementById("btn-hitungKeliling");
const btnReset = document.getElementById("btn-reset-keliling");
const hasilKeliling  = document.getElementById("hasil-k");
const inputKeliling  = document.getElementById("input-k");

btnKeliling.addEventListener("click", function(){
    var sisi = inputKeliling.value;
    var keliling = 4 * sisi;

    hasilKeliling.innerHTML = keliling;
})

btnReset.addEventListener("click", function(){
    inputKeliling.value = "";
    hasilKeliling.innerHTML = "";
})




const btnLuas = document.getElementById("btn-hitungLuas");
const btnResetLuas = document.getElementById("btn-reset-luas");
const hasilLuas  = document.getElementById("hasil-l");
const inputLuas  = document.getElementById("input-l");

btnLuas.addEventListener("click", function(){
    var sisi = inputLuas.value;
    var luas = sisi * sisi;


    hasilLuas.innerHTML = luas;
})

btnResetLuas.addEventListener("click", function(){
    inputLuas.value = "";
    hasilLuas.innerHTML = "";
})

