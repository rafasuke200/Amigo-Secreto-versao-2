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