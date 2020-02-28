const gameState = {
    onColor: 0xaaffaa,
    offColor: 0xffaaaa
  }
  
  function create() {
    gameState.rect1 = this.add.rectangle(200, 100, 100, 100, gameState.onColor);
    gameState.rect2 = this.add.rectangle(200, 300, 100, 100, gameState.offColor);
  
    gameState.switchedOn = 'rect1';
  
    gameState.rect2.setInteractive();
  
    gameState.rect2.on('pointerup', function() {
      gameState.rect1.fillColor = gameState.offColor;
      gameState.rect2.fillColor = gameState.onColor;
    })
  }
  
  const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 450,
    backgroundColor: 0x333333,
    scene: {
      create
    }
  }
  
  const game = new Phaser.Game(config)