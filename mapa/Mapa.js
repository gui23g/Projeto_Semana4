class Mapa extends Phaser.Scene{
    constructor(){
        super({key:'Mapa'});
    }

    preload(){
        //carregamento do mapa do jogo
        this.load.image('bg','assets/background.png');

    }
    create(){
        //adicionando o mapa do jogo
        this.add.image(0,0,'bg').setOrigin(0,0);
    }
    update(){

    }
}