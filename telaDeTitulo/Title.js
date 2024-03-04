class Title extends Phaser.Scene{
    constructor(){
        super({key:'Title'});
    }

    preload(){
        //preload da imagem do botao de play
        this.load.image('play','assets/play.png');

        //sprites do Alison
        this.load.spritesheet("alisonInicio", "assets/Alison.png", {
            frameWidth: 32,
            frameHeight: 32,
          });
    }

    create(){
        //adicionando o alison para correr na tela enquanto o jogador nao comeca o jogo
        this.alisonInicio = this.add.sprite(-50,altura/2,'alisonInicio');
        this.anims.create({
            key: "correndo",
            frames: this.anims.generateFrameNumbers("alisonInicio", {
              start: 0,
              end: 4,
            }),
            frameRate: 10,
            repeat: -1,
          });
        this.alisonInicio.anims.play("correndo");

        //Texto com o titulo do jogo
        this.add.text(largura/2, altura/4, 'RUN ALISON!', {fill: '#000000', fontSize: '30px'}).setOrigin(0.5,0.5);

        //botao de play do jogo
        this.play = this.add.image(largura/2,altura/2,'play').setScale(0.35);
        this.play.setInteractive();
        this.play.on('pointerdown',() =>{
            this.scene.start('Mapa')});

    }
    update(){
        //logica de loop para o Alison correndo
        while(this.alisonInicio.x<=largura+50){
            this.alisonInicio.x+=2;
            break;
        }
        if(this.alisonInicio.x>largura+50){
            this.alisonInicio.x = -50;
        }
    }
}