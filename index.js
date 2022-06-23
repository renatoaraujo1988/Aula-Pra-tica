const ListaTarefas = document.querySelector('#ListaTarefas');
const CaixaTexto = document.querySelector('#CaixaDeTexto');
const BotaoAdicionar = document.querySelector('#BotaoAdicionar');
const ListaSuspensa = document.querySelector('#ListaSuspensa');

//Funcao do botao adicionar ok
BotaoAdicionar.addEventListener('click', function() {
    const TextoDaTarefa = CaixaTexto.value;
    CaixaTexto.value = '';
    ListaTarefas.appendChild(AdicionaTarefa(TextoDaTarefa));
    ExibeOcultaListaSuspensa();
    CaixaTexto.focus();
})


//Funcao de Adicionar Tarefas Ok
function AdicionaTarefa(TextoDaTarefa) {
    const ElementoLI = document.createElement('li');
    const ElementoSPAN = document.createElement('span');
    ElementoSPAN.setAttribute('id', 'Tarefa');
    ElementoSPAN.textContent = TextoDaTarefa;
    ElementoLI.className = 'NaoRealizada';
    ElementoLI.appendChild(ElementoSPAN);
    ElementoLI.appendChild(AdicionarBotao());
   
//Funcao Realizada/Não Realizada ok.
    ElementoSPAN.addEventListener('click',function() {
        if(this.id === 'Tarefa') {
            if(this.parentNode.className === 'NaoRealizada') {
                this.parentNode.className = 'Realizada'
            } else {
                this.parentNode.className = 'NaoRealizada'
            }        
        }
    })

    return ElementoLI;
}

//Funcao do Botao Remover OK.
function AdicionarBotao() {
    const BotaoRemover = document.createElement('button');
    BotaoRemover.textContent = '✘';
    BotaoRemover.className = 'Remover';
    BotaoRemover.addEventListener('click', function() {
        ListaTarefas.removeChild(this.parentNode);
    ExibeOcultaListaSuspensa();
        }
    );
    return BotaoRemover;
}

//Funcao Exibe Oculta Lista ok
function ExibeOcultaListaSuspensa () {
    const Tarefa1 = document.querySelector('#Tarefa');
    if(Tarefa1 === null) {
        ListaSuspensa.setAttribute('hidden' , 'hidden');
    } else {
        ListaSuspensa.removeAttribute('hidden');
    }
}


ListaSuspensa.addEventListener('change',function(){
    if(ListaSuspensa.selectedIndex === 1 || ListaSuspensa.selectedIndex === 2 ) {
        const VetorTarefa = document.querySelectorAll('#Tarefa');
        for(Tarefa of VetorTarefa) {
            Tarefa.dispatchEvent(new Event('click'));

        }
    } else if(ListaSuspensa.selectedIndex === 3) {
        const VetorRemover = document.querySelectorAll('.Remover');
        for(Botao of VetorRemover) {
            Botao.dispatchEvent(new Event('click'));
        }
    }
});