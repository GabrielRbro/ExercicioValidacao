const form = document.getElementById("form")

form.addEventListener("submit", function(e){
    e.preventDefault();
    Verificar();
})

function Verificar(){
    const nA = document.getElementById("primeiroNumero").value
    const nB = document.getElementById("segundoNumero").value
    const resultado = document.getElementById("resultado")

    if(nB>nA){
        resultado.innerHTML = `O valor é Válido`
    }else{
        resultado.innerHTML = `O valor é Inválido`       
    }
}