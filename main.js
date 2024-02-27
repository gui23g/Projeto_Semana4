//variaveis para altura e comprimento da tela
var largura = 960;
var altura = 480;

var config = {
    //configuracoes basicas
    type: Phaser.AUTO,
    width: largura,
    height: altura,
    backgroundColor: "b9eaff",
    scene: [Title] //Adicionando as classes/cenas do jogo
  };
  var game = new Phaser.Game(config);