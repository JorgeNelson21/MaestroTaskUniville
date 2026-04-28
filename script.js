let inputDaTarefa = document.getElementById('inputTarefa');
let botaoAdicionar = document.getElementById('botaoAdicionar');
let listaDeTarefas = document.getElementById('listaTarefas');

function adicionarTarefa() {
    let textoDaTarefa = inputDaTarefa.value.trim(); 

    if (textoDaTarefa === "") {
        alert("A descrição da tarefa é obrigatória.");
        return; 
    }

    let cartao = document.createElement('div');
    cartao.className = 'cartao-tarefa'; 

    cartao.innerHTML = `
        <p>${textoDaTarefa}</p>
        <div class="rodape-cartao">
            <button class="btn-concluir" onclick="concluirTarefa(this)">Concluir ✓</button>
            <button class="btn-excluir" onclick="excluirTarefa(this)">Excluir ✗</button>
        </div>
    `;

    listaDeTarefas.appendChild(cartao);

    inputDaTarefa.value = "";
    inputDaTarefa.focus();
}

function concluirTarefa(botao) {
    let cartao = botao.closest('.cartao-tarefa');
    
    if (cartao.classList.contains('tarefa-concluida')) {
        cartao.classList.remove('tarefa-concluida');
        botao.textContent = "Concluir ✓";
    } else {
        cartao.classList.add('tarefa-concluida');
        botao.textContent = "Desfazer ↺";
    }
}

function excluirTarefa(botao) {
    let confirmacao = confirm("Deseja realmente excluir esta tarefa?");
    
    if (confirmacao === true) {
        let cartao = botao.closest('.cartao-tarefa');
        cartao.remove(); 
    }
}

botaoAdicionar.onclick = adicionarTarefa;

inputDaTarefa.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});