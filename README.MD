# <p align="center"> Projeto do curso: Lógica de programação: laços e listas com Javascript</p>

> Este curso tem como objetivo final desenvolver a lógica de programação com o desenvolvimento do clássico jogo Freeway.
<p align="center">
<img src="https://github.com/barmeeen/cars-js-alura/blob/master/images/cars-js.png?raw=true" width="300" height="250">
</p>

### Objetivos do curso
- [x] Criar um jogo do zero, com animações, pontuação e sons
- [x] Aprender na prática como usar Arrays
- [x] Entender como evitar código duplicado com laços de repetição
- [x] Desenvolver minha lógica de programação
> Status do Projeto: Concluido :heavy_check_mark:

### Como jogar
* Movimente o ator utilizando as setas direcionais para cima e para baixo, evitando colidir com os carros e chegando ao outro lado da rua.

### Resumo do aprendizado
* Lógica de programação
* Sintaxe e boas práticas de javascript
* Laços de repetição
* Array (Listas)
* Funções e retorno de funções
* Distribuição e divisão de responsabilidades do código por arquivo
* Refatoração de código
* Identação

### Por ter seguido o curso utilizando ferramentas e ambientes diferentes do utilizado nas aulas, adquiri conhecimento extra como:
1. Como utilizar uma IDE (VS CODE) e adicionar extensões úteis para o ambiente de desenvolvimento
2. Pratiquei o uso do terminal do linux Mint para criar e manipular diretórios e arquivos
3. Pratiquei a escrita de texto em Markdown para criação deste README.
4. Utilizei o Git para criar um repositório local e depois subir para o Github utilizando Git.

### Resumo das aulas

* Criamos uma função para movimentar o carro na primeira faixa de cima para baixo;

* Movimentamos nosso personagem quando as setas para cima ou para baixo são pressionadas.

* Dividimos a responsabilidade de código criando três arquivos: carro.js, ator.js, imagens.js;

* Adicionamos mais dois carros no jogo;

* Deixamos o jogo em loop infinito, fazendo com que os carros voltem a passar na estrada depois de percorrer toda a tela.

* No lugar de usar 9 variáveis, 3 para cada carro, criamos 3 listas: `xCarros`, `yCarros` e `velocidadeCarros`;

* Removemos os códigos duplicados, utilizando laços de repetição e contadores em cada iteração;

* Extraímos a verificação que identifica se o carro passou toda a tela para uma nova função chamada `passouTodaATela()`.

* Adicionamos uma biblioteca para detectar a colisão de algum dos carros com a personagem;

* Adicionamos carros em todas as pistas da estrada;

* Criamos os pontos do jogo, que são alterados quando conseguimos atravessar a rua ou quando algum carro colide com nosso personagem.


* Criamos uma função que verifica se a variável `meusPontos` é maior do que 0, para evitar que a pontuação fique negativa quando houver colisão com algum dos carros;

Adicionamos 3 diferentes sons no jogo: o som da trilha sonora, que executamos com o comando `loop()`, o som da colisão e o som de quando marcamos pontos com o comando `play()`.