const gameState = {}

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(150, 200, 'codey');
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

//keep all of these as if statements, not else if statements, so we
//can have codey move diagonally opposed to just cardinal directions!
function update() {
  if (gameState.cursors.right.isDown) {
    gameState.codey.x += 5;
  }

  if (gameState.cursors.left.isDown) {
    gameState.codey.x -= 5;
  }

  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 5;
  }

  if (gameState.cursors.up.isDown) {
    gameState.codey.y -= 5;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 500,
  backgroundColor: "#5f2a55",
  scene: {
    preload,
    create,
    update
  }
}

const game = new Phaser.Game(config)