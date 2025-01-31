let arrayAmigos = [];

function adicionarAmigo() {
    let addAmigos = document.getElementById('amigo').value;
    
    if (addAmigos == ""){
        alert('Digite o nome de um amigo!');
    } else{
        arrayAmigos.push(addAmigos);
        exibirListaDeAmigos();
        limparCampoAddAmigos();
        console.log(arrayAmigos);
    }
}

function limparCampoAddAmigos() {
    document.getElementById('amigo').value = '';
}

function exibirListaDeAmigos() {
    let listaDeAmigosHtml = document.getElementById('listaAmigos');
    listaDeAmigosHtml.innerHTML ='';

    for ( let indiceAmigo = 0; indiceAmigo < arrayAmigos.length; indiceAmigo++) {
        let itemDaLista = document.createElement('li');
        itemDaLista.textContent = arrayAmigos[indiceAmigo];
        listaDeAmigosHtml.appendChild(itemDaLista);
    }
}

function sortearAmigo() {
    if(arrayAmigos.length === 0) {
        alert('Não há amigos para sortear! Adicione amigos para o sorteio!');
        return;
    }
    let indiceAleatorio = Math.floor( Math.random() * arrayAmigos.length);
    let amigoSorteado = arrayAmigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi ${amigoSorteado}`;
}