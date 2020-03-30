console.log("Maze App Connected");

//importing Matter.js
//num of rows and cols to create
/***configuration files */
const width = window.innerWidth;
const height = window.innerHeight;
// const cells = 10;
const cellsHoriz = 10; //num of col
const cellsVert = 10; //num of rows  to create
let numR_C = 50; //always needs to be bigger than cells
// const unitLenght = width / cells;
const unitLenghtHorz = width / cellsVert;
const unitLenghtVert = height / cellsHoriz;

const {
	Engine,
	Render,
	Runner,
	World,
	Bodies,
	MouseConstraint,
	Mouse,
	Body,
	Events
} = Matter;

//creating the engine
const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: false,
		width,
		height
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
	Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }), //top
	Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }), //bottom
	Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }), //left
	Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }) //right
];
World.add(world, walls);

//creating the grid using an advance tehcnique
//Array(3) will create an array with 3 empty positions
//.fill(null) will assign null values to each of those positions
//then .map will create another version of the same array with fill false
//and will assign the value of that new map to the original grid var
// //nested loop to generate 3 columns and 3 rows on load will generate the same thing we did with map
// for (let i = 0; i < 3; i++) {
// 	grid.push([]);

// 	for (let j = 0; j < 3; j++) {
// 		grid[i].push(false);
// 	}
// }

//custom shuffle function
const shuffle = arr => {
	let counter = arr.length;
	while (counter > 0) {
		const idx = Math.floor(Math.random() * counter);
		//decrease counter -1
		counter--;
		// swap index from the array elements
		const temp = arr[counter];
		//update value at idx
		arr[counter] = arr[idx];
		//update array index with whatever value was at temp
		arr[idx] = temp;
	}
	//return the array so it can be used

	return arr;
};

//creating the Original Grids
const grid = Array(cellsHoriz)
	.fill(null)
	.map(() => Array(cellsVert).fill(false));

// console.log(grid, "grid");

//Creating the Vertical rows
const verticals = Array(cellsVert)
	.fill(null)
	.map(() => Array(cellsVert - 1).fill(false));
// console.log(verticals, "verticals");

//Creating the horizontal rows
const horizontals = Array(cellsHoriz - 1)
	.fill(null)
	.map(() => Array(cellsHoriz).fill(false));
// console.log(horizontals, "horizontal");

//starting cells and rows
const startRow = Math.floor(Math.random() * cellsVert);
const startCol = Math.floor(Math.random() * cellsHoriz);
// console.log(startRow, startCol, "starting point");

const stepIn = (row, column) => {
	//visited cell at [row,column], then return
	if (grid[row][column]) {
		return;
	}
	//mark cell as visited
	grid[row][column] = true;
	//ramdom neigborgs
	const neigbors = shuffle([
		[row - 1, column, "up"], //up
		[row, column + 1, "right"], //right
		[row + 1, column, "down"], //down
		[row, column - 1, "left"] //left
	]);

	// console.log(neigborgs, "neighborgs");
	//for each neigborg
	for (let neigbor of neigbors) {
		const [nextRow, nextColumn, direction] = neigbor;
		// 1.- see if is out of bound
		if (
			nextRow < 0 ||
			nextRow >= cellsVert ||
			nextColumn < 0 ||
			nextColumn >= cellsHoriz
		) {
			continue;
		}
		// 2.- check if visited neighbor already or not
		if (grid[nextRow][nextColumn]) {
			continue;
		}
		// 3.- remove walls vert or horiz
		// updating columns
		if (direction === "left") {
			verticals[row][column - 1] = true;
		} else if (direction === "right") {
			verticals[row][column] = true;
		}
		// updating rows
		if (direction === "up") {
			horizontals[row - 1][column] = true;
		} else if (direction === "down") {
			horizontals[row][column] = true;
		}
		stepIn(nextRow, nextColumn);
		// 4.- visite next cell
	}
};

stepIn(startRow, startCol);

// generating the horizontal maze lines
horizontals.forEach((row, rowIdx) => {
	row.forEach((open, columnIdx) => {
		//if open is true
		if (open) {
			return;
		}

		const wall = Bodies.rectangle(
			columnIdx * unitLenghtVert + unitLenghtVert / 2,
			rowIdx * unitLenghtHorz + unitLenghtHorz,
			unitLenghtHorz,
			numR_C,
			{
				label: "wall",

				isStatic: true
			}
		);
		//add that wall to the World
		World.add(world, wall);
	});
});

// generating the verticals maze lines
verticals.forEach((row, rowIdx) => {
	row.forEach((open, columnIdx) => {
		//if open is true
		if (open) {
			return;
		}

		const wall = Bodies.rectangle(
			columnIdx * unitLenghtHorz + unitLenghtHorz,
			rowIdx * unitLenghtVert + unitLenghtVert / 2,
			numR_C,
			unitLenghtVert,
			{
				label: "wall",
				isStatic: true
			}
		);
		//add that wall to the World
		World.add(world, wall);
	});
});

// maze exit
const mazeExit = Bodies.rectangle(
	width - unitLenghtHorz / 2,
	height - unitLenghtVert / 2,
	unitLenghtHorz * 0.5,
	unitLenghtVert * 0.5,
	{
		label: "exit",
		render: {
			fillStyle: "green"
		},
		isStatic: true
	}
);
World.add(world, mazeExit);

// maze ball
const ball = Bodies.circle(
	unitLenghtHorz / 2, //x coordinate
	unitLenghtVert / 2, //y coordinate
	unitLenghtHorz * 0.3,
	{
		label: "ball"
	}

	// unitLenght * 0.5
	// {
	// 	render: {
	// 		fillStyle: "green"
	// 	},
	// 	isStatic: false
	// }
);
World.add(world, ball);

//EVENTLISTENER FOR THE KEYS
document.addEventListener("keydown", evt => {
	const { x, y } = ball.velocity;
	// console.log(x, y);
	if (evt.keyCode === 37) {
		//left
		Body.setVelocity(ball, { x: x - 5, y });
	}
	if (evt.keyCode === 38) {
		//up
		Body.setVelocity(ball, { x, y: y - 5 });
	}
	if (evt.keyCode === 39) {
		//right
		Body.setVelocity(ball, { x: x + 5, y });
	}
	if (evt.keyCode === 40) {
		//down
		Body.setVelocity(ball, { x, y: y + 5 });
	}
});

//on colission ball and exit
Events.on(engine, "collisionStart", evt => {
	evt.pairs.forEach(collision => {
		const labels = ["ball", "exit"];
		if (
			labels.includes(collision.bodyA.label) &&
			labels.includes(collision.bodyB.label)
		) {
			engine.world.gravity.y = 1;
			world.bodies.forEach(body => {
				if (body.label === "wall" || body.label === "exit") {
					Body.setStatic(body, false);
				}
			});
		}
	});
});
