function ConverterDolar (){
    document.getElementById("submit").onclick = function() {
        const pegarValor = document.getElementById("valor").value;
        const valorEmDolar = parseFloat(pegarValor) * 5
        document.getElementById("valorConvertido").innerHTML = `O valor em dólar é ${valorEmDolar}`
        }
}


function ConverterEuro() {
    document.getElementById("submit2").onclick = function(){
    const pegarValor = document.getElementById("valor").value
    const valorEmEuro = (parseFloat(pegarValor) * 5.50).toFixed(2);
    document.getElementById("valorConvertido").innerHTML = `O valor em euro é ${valorEmEuro}`
    }
}
