
// You can write more code here

/* START OF COMPILED CODE */

import PrefabFood from "./PrefabFood.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// up_key
		const up_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// down_key
		const down_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// left_key
		const left_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// right_key
		const right_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// welcome
		const welcome = this.add.text(640, 478, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "Phaser 3 & Phaser Editor v4";
		welcome.setStyle({ "fontFamily": "s", "fontSize": "30px" });

		// dino
		const dino = this.physics.add.image(640, 288, "dino");
		dino.setInteractive(new Phaser.Geom.Rectangle(35, 14, 164.51933899844647, 222.41531742016807), Phaser.Geom.Rectangle.Contains);
		dino.body.collideWorldBounds = true;
		dino.body.setSize(250, 250, false);

		// dino_1
		const dino_1 = this.physics.add.image(982, 288, "dino");
		dino_1.setInteractive(new Phaser.Geom.Rectangle(35, 14, 164.51933899844647, 222.41531742016807), Phaser.Geom.Rectangle.Contains);
		dino_1.scaleX = 0.5;
		dino_1.scaleY = 0.5;
		dino_1.body.collideWorldBounds = true;
		dino_1.body.immovable = true;
		dino_1.body.setSize(250, 250, false);

		// food_1
		const food_1 = new PrefabFood(this, 236, 455);
		this.add.existing(food_1);

		// prefabFood
		const prefabFood = new PrefabFood(this, 812, 70);
		this.add.existing(prefabFood);

		// textScore
		const textScore = this.add.text(5, 5, "", {});
		textScore.text = "Score: 0";
		textScore.setStyle({ "fontSize": "48px" });

		// lists
		const listFood = [prefabFood, food_1];

		// collider_dino
		this.physics.add.collider(dino, dino_1, undefined, undefined, this);

		// collider_food
		this.physics.add.overlap(dino, listFood, this.eatFruit, undefined, this);

		this.welcome = welcome;
		this.dino = dino;
		this.dino_1 = dino_1;
		this.food_1 = food_1;
		this.textScore = textScore;
		this.up_key = up_key;
		this.down_key = down_key;
		this.left_key = left_key;
		this.right_key = right_key;
		this.listFood = listFood;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	welcome;
	/** @type {Phaser.Physics.Arcade.Image} */
	dino;
	/** @type {Phaser.Physics.Arcade.Image} */
	dino_1;
	/** @type {PrefabFood} */
	food_1;
	/** @type {Phaser.GameObjects.Text} */
	textScore;
	/** @type {Phaser.Input.Keyboard.Key} */
	up_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	down_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	left_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	right_key;
	/** @type {PrefabFood[]} */
	listFood;

	/* START-USER-CODE */

	// Write more your code here
	playerVelocity = 150;
	score = 0;

	create() {

		this.editorCreate();

		this.dino.on("pointerdown", () => {

			this.welcome.text = "Hello, World!";
		});
	}

	update() {
		if (this.up_key.isDown) {
			this.dino.setVelocityY(this.playerVelocity * -1);
		} else if (this.down_key.isDown) {
			this.dino.setVelocityY(this.playerVelocity);
		} else {
			this.dino.setVelocityY(0);
		}
		if (this.left_key.isDown) {
			this.dino.setVelocityX(this.playerVelocity * -1);
		} else if (this.right_key.isDown) {
			this.dino.setVelocityX(this.playerVelocity);
		} else {
			this.dino.setVelocityX(0);
		}
	}

	eatFruit(dino, food) {
		food.disableBody();
		food.destroy();
		this.score += 1;
		this.textScore.setText('Score: '+this.score);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
