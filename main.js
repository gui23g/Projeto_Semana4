//variaveis para altura e comprimento da tela
const largura = 960;
const altura = 480;
//pontuacao do jogo
var pontuacao = 0;

var config = {
    //configuracoes basicas
    type: Phaser.AUTO,
    width: largura,
    height: altura,
    backgroundColor: "b9eaff",
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: true
      }
  },
    scene: [Title, Mapa, Score] //Adicionando as classes/cenas do jogo
  };
  var game = new Phaser.Game(config);