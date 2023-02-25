const Application = PIXI.Application;

const app = new Application({
	width: 500,
	height: 500,
	transparent: false,
	antialias: true,
});

app.renderer.background.color = 0x23395d;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

// Rectangle
const rectangle = new Graphics();
rectangle
	.beginFill(0x22aacc)
	.lineStyle(5, 0xffea00, 1)
	.drawRect(200, 200, 100, 120)
	.endFill();

app.stage.addChild(rectangle);

// Polygon
const poly = new Graphics();
poly
	.beginFill(0x22aacc)
	.lineStyle(5, 0xffea00, 1)
	.drawPolygon([500, 100, 700, 150, 800, 300, 600, 400, 450, 300])
	.endFill();

app.stage.addChild(poly);

// Circle
const circle = new Graphics();
circle
	.beginFill(0x22aacc)
	.lineStyle(5, 0xffea00, 1)
	.drawCircle(1000, 400, 80)
	.endFill();

app.stage.addChild(circle);

// Line
const line = new Graphics();
line.lineStyle(5, 0xffea00, 1).moveTo(1200, 100).lineTo(1400, 500);

app.stage.addChild(line);

// Torus
const torus = new Graphics();
torus
	.beginFill(0xfffddd)
	.drawTorus(200, 500, 80, 100, 0, Math.PI / 1.5)
	.endFill();

app.stage.addChild(torus);

// Star
const star = new Graphics();
star.beginFill(0x22aacc).drawStar(900, 600, 10, 80).endFill();

app.stage.addChild(star);

// Text
const style = new PIXI.TextStyle({
	fontFamily: "andale mono, monospace",
	fontSize: 48,
	fill: "red",
	stroke: "#ffea00",
	strokeThickness: 4,
	dropShadow: true,
	dropShadowDistance: 10,
	dropShadowAngle: Math.PI / 2,
	dropShadowBlur: 4,
	dropShadowColor: "#000000",
});

const text = new PIXI.Text("Hello World!", style);

app.stage.addChild(text);

// Change Text
text.text = "Street Fighter II";

// Change Styles
text.style.wordWrap = true;
text.style.wordWarpWidth = 100;
text.style.align = "center";

// Animate Elements
/* app.ticker.add(function () {
	const rect = new Graphics();
	rect
		.beginFill(0xffffff)
		.drawRect(
			Math.random() * app.screen.width,
			Math.random() * app.screen.height,
			10,
			10
		)
		.endFill();

	app.stage.addChild(rect);
});  */

// Add Images
/* const avatar1Texture = PIXI.Texture.from('./assets/avatar-1.jpg');
const avatar1Sprite = new PIXI.Sprite(avatar1Texture); */

const char1Sprite = PIXI.Sprite.from("./assets/sonic.png");
app.stage.addChild(char1Sprite);

char1Sprite.width = 100;
char1Sprite.height = 100;

// char1Sprite.scale.x = 1.5;
// char1Sprite.scale.y = 1.5;

// char1Sprite.scale.set(1.75, 1.75);

// char1Sprite.x = 400;
// char1Sprite.y = 400;
char1Sprite.position.set(450, 450);

// app.ticker.add(function () {
// 	char1Sprite.rotation += 0.02;
// });

// char1Sprite.anchor.x = 0.5;
// char1Sprite.anchor.y = 0.5;
char1Sprite.anchor.set(0.5, 0.5);

char1Sprite.interactive = true;
char1Sprite.cursor = "pointer";

char1Sprite.on("pointerdown", function () {
	char1Sprite.scale.x += 0.1;
	char1Sprite.scale.y += 0.1;
});

document.addEventListener("keydown", function (e) {
	if (e.key === "ArrowRight") {
		char1Sprite.rotation += 1;
		char1Sprite.x += 10;
	}
	if (e.key == "ArrowLeft") {
		char1Sprite.rotation -= 1;
		char1Sprite.x -= 10;
	}
});


// Wrap group of Sprites - Charaters and weapons
const container = new PIXI.Container();

const sonicSprite = PIXI.Sprite.from("./assets/sonic.png");
sonicSprite.width = 100;
sonicSprite.height = 100;

container.addChild(sonicSprite);

const powerRingSprite = PIXI.Sprite.from('./assets/ring.png');
powerRingSprite.width = 50;
powerRingSprite.height = 40;

container.addChild(powerRingSprite);

app.stage.addChild(container); 

container.position.set(200, 100);
powerRingSprite.position.set(-25, 25);

console.log(sonicSprite.x);
console.log(sonicSprite.getGlobalPosition());
console.log(container.children)


// Particle Containers
const particleContainer = new PIXI.ParticleContainer(1000, {
	position: true, // can change position
	rotation: true, // can rotate children
	verticles: true, // can scale or anchor position of children
	tint: true,
	uvs: true
});

