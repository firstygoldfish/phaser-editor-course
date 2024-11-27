
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Main extends Phaser.Scene {

	constructor() {
		super("Main");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		const bg = this.add.image(323, 382, "bg");
		bg.scaleX = 3.0364678935801623;
		bg.scaleY = 1.669358301520048;

		// buttonStart
		const buttonStart = this.add.image(640, 478, "button");
		buttonStart.setInteractive(new Phaser.Geom.Rectangle(0, 0, 157, 49), Phaser.Geom.Rectangle.Contains);
		buttonStart.scaleX = 1.5;
		buttonStart.scaleY = 1.5;

		// text_1
		const text_1 = this.add.text(640, 360, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.tintTopLeft = 198471;
		text_1.tintTopRight = 198471;
		text_1.tintBottomLeft = 198471;
		text_1.tintBottomRight = 198471;
		text_1.text = "Hungry Dinosaur";
		text_1.setStyle({ "fontSize": "48px", "strokeThickness": 1 });

		this.buttonStart = buttonStart;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	buttonStart;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.buttonStart.once("pointerdown", () => {
			this.scene.start("Level");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
