//desafio 02 ---- calculadora de partidas rankeadas

var SaldoDeVitorias = function(){
  let vitorias = prompt("Saldo de Vitorias: ");
  return vitorias;
}
var SaldoDeDerrotas = function(){
  let derrotas = prompt("Saldo de Derrotas: ");
  return derrotas;
}

var SaldoRankeadas = function(){
  return (SaldodeVitorias - SaldoDeDerrotas);
}

function NivelamentoPlayer(Vitorias, Rankeadas){
  let nivel;
  if (Rankeadas <= 10){
    nivel = 'Ferro';
  } else if (Rankeadas >= 11) && (Rankeadas < 21){
    nivel = 'Bronze';
  } else if (Rankeadas >= 21) && (Rankeadas < 51){
    nivel = 'Prata';
  } else if (Rankeadas >= 51) && (Rankeadas < 81){
    nivel = 'Ouro';
  } else if (Rankeadas >= 81) && (Rankeadas < 91){
    nivel = 'Diamante';
  } else if (Rankeadas >= 91) && (Rankeadas < 101){
    nivel = 'Lendário';
  } else if (Rankeadas >= 101){
    nivel = 'Imortal';
  }
  return `O Herói tem de saldo de ${Vitorias} está no nível de ${nivel}`;
}

NivelamentoPlayer(SaldoDeVitorias, SaldoRankeadas);
