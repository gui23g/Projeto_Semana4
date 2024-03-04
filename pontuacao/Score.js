class Score extends Phaser.Scene{
    constructor(){
        super({key:'Score'});
    }

    create(data){
        //encontra a pontuacao do jogo
        const pontuacao = data.pontuacao;
        //Exibi a pontuacao do jogador
        this.add.text(largura/2, altura/4, 'Pontuação:', {fill: '#000000', fontSize: '30px'}).setOrigin(0.5,0.5);
        this.add.text(largura/2, altura/2, pontuacao+" segundos", {fill: '#000000', fontSize: '30px'}).setOrigin(0.5,0.5);
    }
}