// Declaração do array que armazenará os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  // Captura o valor do campo de entrada com id "amigo"
  const inputAmigo = document.getElementById('amigo');
  const nome = inputAmigo.value.trim();

  // Validação: se o campo estiver vazio, exibe um alerta
  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  // Adiciona o nome ao array
  amigos.push(nome);

  // Limpa o campo de entrada
  inputAmigo.value = '';

  // Atualiza a lista de amigos exibida na página
  atualizarListaAmigos();
}

// Função para atualizar a lista HTML com os nomes armazenados no array "amigos"
function atualizarListaAmigos() {
  // Seleciona o elemento da lista com id "listaAmigos"
  const lista = document.getElementById('listaAmigos');

  // Limpa o conteúdo atual da lista para evitar duplicados
  lista.innerHTML = '';

  // Percorre o array "amigos" e adiciona cada nome como um elemento <li>
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função para sortear aleatoriamente um amigo secreto
function sortearAmigo() {
  // Valida se há amigos disponíveis para o sorteio
  if (amigos.length === 0) {
    alert('Não há amigos para sortear.');
    return;
  }

  // Gera um índice aleatório usando Math.random() e Math.floor()
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  // Obtém o nome do amigo sorteado a partir do array "amigos"
  const amigoSorteado = amigos[indiceAleatorio];

  // Atualiza o conteúdo do elemento de resultado (id "resultado")
  // Como o HTML utiliza uma <ul> para resultado, adicionamos um <li> com o texto
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}
