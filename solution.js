/*
Thomas Michelena Santos
tms1991@gmail.com
*/

var http = require('http');
var fs = require('fs');

//Funcao para avaliar a pontuacao de Joao
//As cartas de Joao sao mantidas em um array de forma que o primeiro elemento
//seja sempre o mais antigo a ter sido sorteado
function joao(points, lastCard, cards){
  var index = cards.indexOf(lastCard); //Procura a carta sorteada na mao de Joao
  if(index == -1){ //Se Joao nao possui a carta sorteada em maos
    if(cards.length < 5){ //Caso Joao ainda nao possua 5 cartas
      cards.push(lastCard)
    }
    else{ //Caso Joao ja esteja com a mao completa; descarta uma carta
      cards.shift()
      cards.push(lastCard)
    }
  }
  else{ //Se Joao possuir a carta sorteada em maos
    var temp = cards.splice(index, 1);
    cards.push(temp[0]);
    points.Points += 1;
  }
}

//Funcao para avaliar a pontuacao de Maria
//As cartas de Maria sao mantidas em um array em estrutura de fila, a ultima a
//entrar sera a primeira a sair
function maria(points, lastCard, cards){
  var index = cards.indexOf(lastCard); //Procura a carta sorteada na mao de Maria
  if(index == -1){ //Se Maria nao possui a carta sorteada em maos...
    if(cards.length < 5){ //Caso Maria ainda nao possua 5 cartas
      cards.push(lastCard)
    }
    else{ //Caso Maria ja esteja com a mao completa; descarta uma carta
      cards.shift()
      cards.push(lastCard)
    }
  }
  else{ //Se Maria possuir a carta sorteada em maos
    points.Points += 1;
  }
}

//Cria um servidor que vai escutar na porta 8080 e rodara o programa quando
//requisitado, exibindo o resultado
http.createServer(function (req, res) {
  fs.readFile('rounds.json', function(err, datajson) {//Le o arquivo .json

    var joaoPoints={Points : 0}, mariaPoints={Points : 0}, joaoCards = [], mariaCards = [];
    var rounds = JSON.parse(datajson);

    for(i=0; i<rounds.length; i++){
        joao(joaoPoints, rounds[i], joaoCards);
        maria(mariaPoints, rounds[i], mariaCards);
    }

    //Escreve a resposta da request HTTP
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("O resultado de |joaoPoints - mariaPoins| = " + (joaoPoints.Points - mariaPoints.Points).toString());
    return res.end();
  });
}).listen(8080);
