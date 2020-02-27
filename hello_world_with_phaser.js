function create() {
   
    this.add.text(50, 100, "Tag It", { font: "40px Times New Roman", fill: "#ffa0d0"});
  

    this.add.text(130, 300, "by Rutger McKenna", { font: "20px Times New Roman", fill: "#ffa0d0"});
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      backgroundColor: "#5f2a55",
      scene: {
      create
      }
  };
  
  const game = new Phaser.Game(config);