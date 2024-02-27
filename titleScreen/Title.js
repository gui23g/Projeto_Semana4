class Title extends Phaser.Scene{
    constructor(){
        super({key:'Title'});
    }

    preload(){
        //preload da imagem do botao de play
        this.load.image('play','assets/play.png')
    }

    create(){
        //Texto com o titulo do jogo
        this.add.text(largura/2, altura/4, 'RUN ALISON!', {fill: '#000000', fontSize: '30px'}).setOrigin(0.5,0.5);

        //botao de play do jogo
        this.play = this.add.image(largura/2,altura/2,'play').setScale(0.35);
        this.play.setInteractive();
        this.play.on('pointerdown',comercarJogo);

    }
}
function comercarJogo(){
    console.log("I love U <3")
}