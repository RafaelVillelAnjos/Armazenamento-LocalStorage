function CadastrarCarro(){
    let marcaCarro = document.getElementById("MarcaCarro").value
    let modeloCarro = document.getElementById("ModeloCarro").value
    let precoCarro = document.getElementById("PrecoCarro").value
    let kmCarro = document.getElementById("KmRodados").value 

    const dadosCarro = {
        marca: marcaCarro,
        modelo: modeloCarro,
        preço: precoCarro+ " R$",
        km: kmCarro+ " Km"
    };

    localStorage.setItem('Dados do carro', JSON.stringify(dadosCarro));
    console.log(dadosCarro)
    alert("Os dados de seu carro foram cadastrados com sucesso!! Cheque as abas console e application para vê-las.")

}