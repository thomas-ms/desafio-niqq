/*
Instruções:

- Escreva o código em Javascript
- Sugere-se executar com Node.js
- Documente o código o quanto achar necessário

- Envie a resposta no site estagio.niqq.in/desafio
- Você tem 1 tentativa por hora até 23:59 do dia 21 de julho
- Coloque o seu programa final em algum repositório de Git (GitHub, BitBucket etc)
- Envie o programa mesmo se você não chegou ao resultado correto

- Envie um email para estagio@niqq.in até as 23:59 do dia 21 de julho contendo o link do seu repositório


**************************************************************************************************************************************
DESAFIO: 
**************************************************************************************************************************************

João e Maria vão jogar um jogo de cartas que podem ser de números [1, 10]. Cada jogador pode ter no máximo 5 cartas na mão em qualquer momento. 

Os dois jogadores começam com as mãos vazias. É sorteada aleatoriamente uma carta de um baralho infinito. Se o jogador possuir a carta cujo número foi sorteado em mãos, ele ganha 1 ponto. Se não possuir a carta, deverá adicioná-la à sua mão, descartando alguma carta anterior se já possuir 5 cartas. 

Cada jogador quer adotar uma estratégia diferente de descarte de cartas:
-João descarta a carta que tem o maior tempo sem ser sorteada
-Maria descarta a carta que está há mais tempo em sua mão


Exemplo:

Rodada | Carta sorteada   | Mão de João | Pontos de João | Mão de Maria | Pontos de Maria
  1    |         1        |  1          |       0        |  1           |       0
  2    |         2        |  1,2        |       0        |  1,2         |       0
  3    |         4        |  1,2,4      |       0        |  1,2,4       |       0
  4    |         6        |  1,2,4,6    |       0        |  1,2,4,6     |       0
  5    |         1        |  1,2,4,6    |       1        |  1,2,4,6     |       1
  6    |         8        |  1,2,4,6,8  |       1        |  1,2,4,6,8   |       1
  7    |         10       |  1,4,6,8,10 |       1        |  2,4,6,8,10  |       1
  8    |         2        |  1,2,6,8,10 |       1        |  2,4,6,8,10  |       2
  9    |         4        |  1,2,4,8,10 |       1        |  2,4,6,8,10  |       3
  10   |         1        |  1,2,4,8,10 |       2        |  1,4,6,8,10  |       3


Sendo joaoPoints e mariaPoints a pontuação de cada jogador, qual será o valor de |joaoPoints - mariaPoints| depois dos 2 milhões de rounds especificados no arquivo rounds.json?

*/

