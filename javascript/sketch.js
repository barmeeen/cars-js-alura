
function setup() {
  createCanvas(500, 400);
  trilhasd.loop();
}

function draw() {
  background(estradaImg);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  loopCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}