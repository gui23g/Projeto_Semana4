class Mapa extends Phaser.Scene {
  //variaveis
  //velocidade de movimentacao do personagem
  velocidade = 100;
  //variavel que recebera os controles
  controles;
  //velocidade do pulo do personagem
  velocidadePulo = -200;
  //pontuacao do jogo
  pontuacao = 0;

  constructor() {
    super({ key: "Mapa" });
  }

  preload() {
    //carregamento do mapa do jogo
    this.load.image("bg", "assets/background.png");

    //carregando os obstaculos
    this.load.image("obstaculo", "assets/obstaculo.png");

    //carregando o item de energia
    this.load.image("energia", "assets/energy.png");

    //carregando o personagem na cena
    //carregando os sprites do personagem
    this.load.spritesheet("personagem", "assets/Alison.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }
  create() {
    //adicionando os comandos das setas do teclado na variavel controles
    this.controles = this.input.keyboard.createCursorKeys();
    //adicionando o mapa do jogo
    this.add.image(0, 0, "bg").setOrigin(0, 0);

    //adicionando grupo de obstaculos
    this.obstaculos = this.physics.add.staticGroup();
    this.obstaculos.create(200, (altura * 3) / 4, "obstaculo");
    this.obstaculos.create((largura * 3) / 4, altura, "obstaculo");
    this.obstaculos.create((largura * 3) / 4, altura - 15, "obstaculo");

    //adicionando itens de energia
    this.itensEnergia = this.physics.add.staticGroup();
    this.itensEnergia.create(200, (altura * 3) / 4 - 20, "energia");
    this.itensEnergia.create(largura / 2, (altura * 3) / 4 - 20, "energia");

    //criando o personagem
    this.personagem = this.physics.add.sprite(10, 100, "personagem");
    this.personagem.setCollideWorldBounds(true);
    this.anims.create({
      key: "parado",
      frames: this.anims.generateFrameNumbers("personagem", {
        frame: 0,
      }),
      frameRate: 1,
      repeat: -1,
    });

    this.anims.create({
      key: "correndo",
      frames: this.anims.generateFrameNumbers("personagem", {
        start: 0,
        end: 4,
      }),
      frameRate: 10,
      repeat: -1,
    });

    //adicionando colisoes
    this.physics.add.collider(this.personagem, this.obstaculos);
    this.physics.add.overlap(
      this.personagem,
      this.itensEnergia,
      (personagem, item) => {
        this.velocidade *= 2;
        item.destroy();
      }
    );

    //troca de cena
  }
  update() {
    //se a seta esquerda for apertada
    if (this.controles.left.isDown) {
      this.andarEsquerda();
      this.personagem.anims.play("correndo",true);
      this.personagem.setFlip(true, false);
    }
    //se a seta direita for apertada
    else if (this.controles.right.isDown) {
      this.andarDireita();
      this.personagem.anims.play("correndo",true);
      this.personagem.setFlip(false, false);
    } else {
      //se nenhuma das condições foram atendidas, a velocidade do jogador e 0
      this.personagem.setVelocityX(0);
      this.personagem.anims.play("parado",true);
    }
    //se a seta para cima for apertada e o personagem esta no chao
    if (this.controles.up.isDown && this.personagem.body.onFloor()) {
      this.pulo();
      this.personagem.anims.play("parado",true);
    }

    //sistema de pontuacao do jogo, baseado em tempo
    //A cada 1 segundo aumenta 1 na pontuacao
    this.time.delayedCall(
      1000,
      () => {
        this.pontuacao += 1;
      },
      null,
      this
    );

    if (this.personagem.x >= largura - 50) {
      this.scene.start("Score", { pontuacao: this.pontuacao });
      this.scene.stop("Mapa");
    }
  }

  //funcoes de movimentacao
  //movimentacao para a esquerda
  andarEsquerda() {
    this.personagem.setVelocityX(-this.velocidade);
  }
  //movimentacao para direita
  andarDireita() {
    this.personagem.setVelocityX(this.velocidade);
  }

  pulo() {
    this.personagem.setVelocityY(this.velocidadePulo);
  }
}
