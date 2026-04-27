//SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos) {
const somarRodada = function(acumulador, pontosDaFase) {
    const novaSoma = acumulador + pontosDaFase;
    return novaSoma;
};

const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
return pontuacaoFinal;
};

function filtrarMissoesConcluidas(listaDeMissoes) {
    const verificarStatusDaMissao = function(missao) {
        const foiFinalizada = missao.status === "concluida"; // === igualdade RESTRITA
        return foiFinalizada;
    };

    const apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);
    return apenasConcluidas;
};