
var btnKeliling = document.getElementById("btn-hitungKeliling");
var btnReset = document.getElementById("btn-reset-keliling");
var alertErrorKeliling = document.getElementById("alert-error-keliling");
var hasilKeliling  = document.getElementById("hasil-k");
var inputKeliling  = document.getElementById("input-k");

var btnLuas = document.getElementById("btn-hitungLuas");
var btnResetLuas = document.getElementById("btn-reset-luas");
var alertErrorLuas = document.getElementById("alert-error-luas");
var hasilLuas  = document.getElementById("hasil-l");
var inputLuas  = document.getElementById("input-l");


btnKeliling.addEventListener("click", function(){
    if(inputKeliling.value !== ''){
        var sisi = inputKeliling.value;
        var keliling = 4 * sisi;

        hasilKeliling.innerHTML = keliling;
        alertErrorKeliling.innerHTML = '';
        
    }else{
        alertErrorKeliling.innerHTML = 'Harap Isi Dulu';

    }
    
})



btnReset.addEventListener("click", function(){
    inputKeliling.value = "";
    hasilKeliling.innerHTML = "";
    alertErrorKeliling.innerHTML = '';
})


btnLuas.addEventListener("click", function(){
    if(inputLuas.value !==''){
        var sisi = inputLuas.value;
        var luas = sisi * sisi;

        hasilLuas.innerHTML = luas;
        alertErrorLuas.innerHTML = '';
    }
    else{
        alertErrorLuas.innerHTML = 'Harap Isi Dulu';
    }
    
})

btnResetLuas.addEventListener("click", function(){
    inputLuas.value = "";
    hasilLuas.innerHTML = "";
    alertErrorLuas.innerHTML = '';
})

