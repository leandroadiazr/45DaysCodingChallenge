console.log("TimerApp Connected");

//TIMER APP

//Main Goal implementation
//select dom elements
const initialTime = document.querySelector(".initialTime");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const circle = document.querySelector("circle");
const display = document.querySelector("#timer");

// circle function
let duration;
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

// 1.2 Creating new class with my html inputs
const timer = new Timer(initialTime, start, stop, reset, {
	onStart(totalDuration) {
		duration = totalDuration;
		console.log("OnStart");
	},
	onTick(timeRemaining) {
		console.log("ticking");
		display.textContent = timeRemaining.toFixed(0);
		circle.setAttribute(
			"stroke-dashoffset",
			(perimeter * timeRemaining) / duration - perimeter
		);
	},
	onCompleted() {
		console.log("completed");
		timeRemaining = 0;

	}
});

//2.- Draw full border around the timer

// 4. - each time the timer counts down update border

// 5. - when timer reaches 0

// 5.1 reset border

// 5.2 reset timer
