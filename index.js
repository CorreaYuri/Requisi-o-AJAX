

function buscaCep(){
//entrada:
var entrada = document.getElementById("input-buscar_cep").value;


//Saídas

var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradoro");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var ddd =  document.getElementById("ddd");
var estado = document.getElementById("estado");






//cria o Obj

var xhr = new XMLHttpRequest();
xhr.responseType = "json";

// envia a requisição

xhr.open("GET", "https://viacep.com.br/ws/"+entrada+"/json/")
xhr.send();

//verifica se o estado da conexão mudou
xhr.onreadystatechange = ()=>{

    //mostra o reutado na tela
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log(xhr.response);


        //grava valores
        cep.innerText = xhr.response.cep;
        logradouro.innerText = xhr.response.logradouro;
        bairro.innerText = xhr.response.bairro;
        cidade.innerText = xhr.response.localidade;
        ddd.innerText = xhr.response.ddd;
        estado.innerText =xhr.response.uf



    }
}



}






