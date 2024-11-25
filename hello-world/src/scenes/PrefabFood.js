
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PrefabFood extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "guapen", frame);

		this.scaleX = 0.25;
		this.scaleY = 0.25;
		this.tintTopLeft = 9038427;
		this.tintTopRight = 9038427;
		this.tintBottomLeft = 3572753;
		this.tintBottomRight = 3572753;
		scene.physics.add.existing(this, false);
		this.body.setSize(208, 240, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
