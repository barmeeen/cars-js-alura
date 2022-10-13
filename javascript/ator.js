//Posicao do ator
let yAtor = 366;
let xAtor = 85;
//Pontos
let meusPontos = 0

function mostraAtor(){
    image(ator, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -=5;
    }
    if (keyIsDown(DOWN_ARROW)){
      if (podeSeMover())
      yAtor += 5;
    }
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,121,198));
  text(meusPontos, width / 5, 27)
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    pontosd.play();
    VoltaAtorPosicaoInicial()
  }
}

function podeSeMover(){
  return yAtor < 366
}