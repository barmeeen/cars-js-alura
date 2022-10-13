//Codigo do carro

//Dimensoes carro
let comprimentoCarro = 50;
let alturaCarro = 40;
//lista
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
//Colisao
let colisao = false;


function mostraCarro(){
    for (let i = 0; i < carros.length; i++){
        image(carros[i],xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
  }
  
  function movimentaCarro(){
    for (let i = 0; i < carros.length; i++){
      xCarros[i] -=velCarros[i];
    }
  }

  function loopCarro(){
    for (let i = 0; i < carros.length; i++){
      if(passouTodaTela(xCarros[i])){
          xCarros[i] = 600;
      }
    }
  }

  function passouTodaTela(xCarros){
    return xCarros < -50;
  }

  function verificaColisao(){
    for (let i = 0; i < carros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
        VoltaAtorPosicaoInicial();
        colidiusd.play();
        if (pontosMaiorQueZero()){
        meusPontos -=1
        }
      }
    }
  }

  function VoltaAtorPosicaoInicial(){
    yAtor = 366
  }

  function pontosMaiorQueZero(){
    return meusPontos > 0
  }