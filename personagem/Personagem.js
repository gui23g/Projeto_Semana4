class Personagem extends Phaser.Physics.Arcade.Sprite{
    //variaveis
    //velocidade de movimentacao do personagem
    velocidade = 200;
    //variavel que recebera os controles
    controles;
    //velocidade do pulo do personagem
    velocidadePulo = -400;

    constructor(cena){

        //adicionando os comandos das setas do teclado na variavel controles
        this.controles = cena.input.keyboard.createCursorKeys();
    }
    
    //controles de movimentacao do personagem
    movimentacao(){
        //se a seta esquerda for apertada
        if(this.controles.left.isDown){
            this.andarEsquerda();
            return;
        }
        //se a seta direita for apertada
        if(this.controles.left.isDown){
            this.andarDireita();
            return;
        }
        //se a seta para cima for apertada e o personagem esta no chao
        if(this.controles.up.isDown && this.body.onFloor()){
            this.pulo;
            return;
        }

        //se nenhuma das condições foram atendidas, a velocidade do jogador e 0
        this.setVelocityX(0);

    }
    
    //funcoes de movimentacao
    //movimentacao para a esquerda
    andarEsquerda(){
        this.setVelocityX(-this.velocidade);
    }
    //movimentacao para direita
    andarDireita(){
        this.setVelocityX(this.velocidade);
    }

    pulo(){
        this.setVelocityY(this.velocidadePulo);
    }
}