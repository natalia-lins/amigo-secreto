let amigos = [];


function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;

    if(nome !== ""){
        amigos.push(nome);
        atualizarLista();
    }
    else{
        alert("Por favor, insira um nome.");
    }
    limparCampo();
    console.log(amigos); 
}

function limparCampo(){
    nome = document.getElementById('amigo');
    nome.value = "";
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let num=0; num<amigos.length; num++){
        const li = document.createElement("li");
        li.textContent = amigos[num];
        lista.appendChild(li);
    }
}

function verificarNumeroDeAmigos(){
    if(amigos.length<2){
        alert("Insira mais amigos para o sorteio.")
    }
}

function sortearAmigo(){
    if(amigos.length>0){
        let amigoSorteado = document.getElementById("resultado");
        amigoSorteado.innerHTML = amigos[Math.floor(Math.random() * amigos.length)];
    }
    else{
        alert("Por favor, adicione mais amigos.");
    }
}


