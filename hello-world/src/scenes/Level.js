
// You can write more code here

/* START OF COMPILED CODE */

import PrefabFood from "./PrefabFood.js";
import prefab_burger from "./prefab_burger.js";
import prefab_rock from "./prefab_rock.js";
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

		// UI
		const uI = this.add.layer();

		// bg
		const bg = this.add.image(640, 358, "bg");
		bg.scaleX = 2.0536400059061237;
		bg.scaleY = 1.5812484016335173;
		bg.alpha = 0.75;
		bg.alphaTopLeft = 0.75;
		bg.alphaTopRight = 0.75;
		bg.alphaBottomLeft = 0.75;
		bg.alphaBottomRight = 0.75;
		uI.add(bg);

		// textScore
		const textScore = this.add.text(5, 5, "", {});
		textScore.text = "Score: 0";
		textScore.setStyle({ "fontSize": "48px" });
		uI.add(textScore);

		// dino
		const dino = this.physics.add.image(640, 288, "dino");
		dino.setInteractive(new Phaser.Geom.Rectangle(35, 14, 164.51933899844647, 222.41531742016807), Phaser.Geom.Rectangle.Contains);
		dino.scaleX = 0.5;
		dino.scaleY = 0.5;
		dino.body.collideWorldBounds = true;
		dino.body.setSize(250, 250, false);

		// food_1
		const food_1 = new PrefabFood(this, 236, 455);
		this.add.existing(food_1);

		// prefabFood
		const prefabFood = new PrefabFood(this, 889, 70);
		this.add.existing(prefabFood);
		prefabFood.tintTopLeft = 16050016;
		prefabFood.tintTopRight = 16050016;

		// food_2
		const food_2 = new PrefabFood(this, 288, 130);
		this.add.existing(food_2);
		food_2.tintTopLeft = 15220255;
		food_2.tintTopRight = 15220255;

		// burger_1
		const burger_1 = new prefab_burger(this, 1107, 150);
		this.add.existing(burger_1);

		// burger
		const burger = new prefab_burger(this, 987, 471);
		this.add.existing(burger);

		// rock
		const rock = new prefab_rock(this, 266, 260);
		this.add.existing(rock);

		// rock1
		const rock1 = new prefab_rock(this, 927, 294);
		this.add.existing(rock1);

		// rock2
		const rock2 = new prefab_rock(this, 561, 473);
		this.add.existing(rock2);

		// rock3
		const rock3 = new prefab_rock(this, 545, 62);
		this.add.existing(rock3);

		// lists
		const listFood = [prefabFood, food_1, food_2, burger, burger_1];
		const listRock = [rock, rock3, rock2, rock1];

		// collider_food
		this.physics.add.overlap(dino, listFood, this.eatFruit, undefined, this);

		// collider_rock
		this.physics.add.collider(dino, listRock);

		this.textScore = textScore;
		this.dino = dino;
		this.food_1 = food_1;
		this.up_key = up_key;
		this.down_key = down_key;
		this.left_key = left_key;
		this.right_key = right_key;
		this.listFood = listFood;
		this.listRock = listRock;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	textScore;
	/** @type {Phaser.Physics.Arcade.Image} */
	dino;
	/** @type {PrefabFood} */
	food_1;
	/** @type {Phaser.Input.Keyboard.Key} */
	up_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	down_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	left_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	right_key;
	/** @type {Array<PrefabFood|prefab_burger>} */
	listFood;
	/** @type {prefab_rock[]} */
	listRock;

	/* START-USER-CODE */

	// Write more your code here
	playerVelocity = 200;
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
