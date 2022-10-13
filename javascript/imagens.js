//Imagens
let estradaImg;
let ator;
let carro1;
let carro2;
let carro3;
//Sons
let trilhasd;
let pontosd;
let colidiusd;

function preload(){
    estradaImg = loadImage("material/estrada.png");
    ator = loadImage("material/ator-1.png");
    carro1 = loadImage("material/carro-1.png");
    carro2 = loadImage("material/carro-2.png");
    carro3 = loadImage("material/carro-3.png");
    carros = [carro1, carro2, carro3, carro1, carro2, carro3];
    
    trilhasd = loadSound("material/sons/trilha.mp3");
    pontosd = loadSound("material/sons/pontos.wav");
    colidiusd = loadSound("material/sons/colidiu.mp3");
  }