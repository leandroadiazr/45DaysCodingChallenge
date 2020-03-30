console.log("Random Matter.js Connected");

//importing Matter.js
const {
	Engine,
	Render,
	Runner,
	World,
	Bodies,
	MouseConstraint,
	Mouse
} = Matter;
const engine = Engine.create();
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: false,
		width: 1400,
		height: 800
	}
});

//running the engine and rendering on page
Render.run(render);
Runner.run(Runner.create(), engine);
//mouse properties
World.add(
	world,
	MouseConstraint.create(engine, {
		mouse: Mouse.create(render.canvas)
	})
);

// walls
const walls = [
	Bodies.rectangle(700, 0, 1400, 40, { isStatic: true }), //top
	Bodies.rectangle(700, 800, 1400, 40, { isStatic: true }), //bottem
	Bodies.rectangle(0, 400, 40, 800, { isStatic: true }), //left
	Bodies.rectangle(1400, 400, 40, 800, { isStatic: true }) //right
];
World.add(world, walls);

//adding a test element
// World.add(world, Bodies.triangle(110, 480, 120, 120, 120));

//random Shapes
for (let i = 0; i < 10; i++) {
	World.add(
		world,
		Bodies.rectangle(700, 200, 100, 100, {
			render: {
				fillStyle: "red"
			}
		})
	);
}
//random circles
for (let i = 0; i < 30; i++) {
	World.add(world, Bodies.circle(800, 400, 30, 30));
}
