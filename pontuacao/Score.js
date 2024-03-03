class Score extends Phaser.Scene{
    constructor(){
        super({key:'Score'});
    }

    create(){
        //Exibi a pontuacao do jogador
        this.add.text(largura/2, altura/4, 'Pontuação:', {fill: '#000000', fontSize: '30px'}).setOrigin(0.5,0.5);
        this.add.text(largura/2, altura/2, `${pontuacao}`, {fill: '#000000', fontSize: '30px'}).setOrigin(0.5,0.5);
    }
}