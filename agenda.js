linhaEscolhida = null;
function funcoesForm() {
    let dadosForm = pegarDados();
    //aqui é para confirmar se a linha que foi escolhida ja tem valor ou não, se tiver valor vai ser atualizado, 
    //se não tiver valor vai ser inserido os valores
    if (linhaEscolhida == null){
        inserirDados(dadosForm);
    }else{
        atualizar(dadosForm)
    }
    resetarDados();
}

//apenas irá receber os dados que foram inseridos
function pegarDados() {
    let dadosForm = {};
    dadosForm["datas"] = document.getElementById('datas').value;
    dadosForm["horaIni"] = document.getElementById('horaIni').value;
    dadosForm["horaFim"] = document.getElementById('horaFim').value;
    dadosForm["msg"] = document.getElementById('msg').value;
    return dadosForm;
}

//apenas inserção de dados em cada coluna da linha
function inserirDados(dado) {
    let tabela = document.getElementById("tabelaAtividades").getElementsByTagName('tbody')[0];
    let linha = tabela.insertRow(tabela.length);
    //quando o objeto linha for usado irá criar uma linha, e depois será inserido o elemento na coluna específica`
    elemento1 = linha.insertCell(0);
    elemento1.innerHTML = dado.datas;
    //todos esses elementos serão criados em uma única linha, mas em colunas distintas
    elemento2 = linha.insertCell(1);
    elemento2.innerHTML = dado.horaIni;
    elemento3 = linha.insertCell(2);
    elemento3.innerHTML = dado.horaFim;
    elemento4 = linha.insertCell(3);
    elemento4.innerHTML = dado.msg;
    elemento5 = linha.insertCell(4);
    elemento5.innerHTML = `<a onClick="atualizando(this)">Modificar</a>
                        <a onClick="excluir(this)">Excluir</a>`;
}

//apenas resetar os dados após as aplicações
function resetarDados() {
    document.getElementById("datas").value = "";
    document.getElementById("horaIni").value = "";
    document.getElementById("horaFim").value = "";
    document.getElementById("msg").value = "";
    linhaEscolhida = null;
}

//a linha que for escolhida aqui, o seu texto vai para o campo para ser modificado
function atualizando(td) {
    linhaEscolhida = td.parentElement.parentElement;
    document.getElementById("datas").value = linhaEscolhida.cells[0].innerHTML;
    document.getElementById("horaIni").value = linhaEscolhida.cells[1].innerHTML;
    document.getElementById("horaFim").value = linhaEscolhida.cells[2].innerHTML;
    document.getElementById("msg").value = linhaEscolhida.cells[3].innerHTML;
}

//aqui ocorrerá a atualização propriamente dita
function atualizar(dadosForm) {
    linhaEscolhida.cells[0].innerHTML = dadosForm.datas;
    linhaEscolhida.cells[1].innerHTML = dadosForm.horaIni;
    linhaEscolhida.cells[2].innerHTML = dadosForm.horaFim;
    linhaEscolhida.cells[3].innerHTML = dadosForm.msg;
}

function excluir(td) {
    if (confirm('Quer mesmo excluir este registro ?')){
        linhas = td.parentElement.parentElement;
        document.getElementById("tabelaAtividades").deleteRow(linhas.rowIndex);
        resetarDados();
    }
}
