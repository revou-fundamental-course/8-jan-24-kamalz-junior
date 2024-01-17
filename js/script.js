
const btnKeliling = document.getElementById("btn-hitungKeliling");
const btnReset = document.getElementById("btn-reset-keliling");
const alertErrorKeliling = document.getElementById("alert-error-keliling");
const hasilKeliling  = document.getElementById("hasil-k");
const inputKeliling  = document.getElementById("input-k");

const btnLuas = document.getElementById("btn-hitungLuas");
const btnResetLuas = document.getElementById("btn-reset-luas");
const alertErrorLuas = document.getElementById("alert-error-luas");
const hasilLuas  = document.getElementById("hasil-l");
const inputLuas  = document.getElementById("input-l");

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

