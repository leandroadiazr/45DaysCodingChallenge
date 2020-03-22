//TIMER CLASS THAT CAN BE REUSED FOR OTHER PROJECTS
class Timer {
	constructor(durInp, startBtn, stopBtn, resetBtn, callBacks) {
		this.durInp = durInp;
		this.startBtn = startBtn;
		this.stopBtn = stopBtn;
		this.resetBtn = resetBtn;
		if (callBacks) {
			this.onStart = callBacks.onStart;
			this.onTick = callBacks.onTick;
			this.onCompleted = callBacks.onCompleted;
		}

		//1.2.-event listener for the click buttons
		this.startBtn.addEventListener("click", this.start);
		this.startBtn.addEventListener("click", this.start);
		this.stopBtn.addEventListener("click", this.stop);
		this.resetBtn.addEventListener("click", this.reset);
	}
	//need to define the methods with arrow function so the This keyword is always pointing to the same object
	//or bind the this keyword in the event
	//2.0 - Start Method
	start = () => {
		if (this.onStart) {
			this.onStart(this.timeRemaining);
		}

		this.thick(); //this will start as soon as start is clicked
		//creating an instance variable with the this word
		this.timeVal = setInterval(this.thick, 120);
	};
	// 3.0-Stop Method
	stop = () => {
		console.log("stopped");
		clearInterval(this.timeVal);
	};
	//4.0- Reset Method
	reset = () => {
		console.log("Reset");
		clearInterval(this.timeVal);
		this.timeRemaining = 30;
		display.textContent = '';



	};

	//5.0-Start countdown
	thick = () => {
		//when time is completed or equal to 0
		if (this.timeRemaining <= 0) {
			this.stop();
			this.onCompleted();
		} else {
			//if time remaining greater than 0
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
			//setter               //getter
			this.timeRemaining = this.timeRemaining - 0.1;
		}
	};

	//this method will allow us to whatever value is passed in the input on the html to be passed into this method
	// get value
	get timeRemaining() {
		return parseFloat(this.durInp.value);
	}
	//set value
	set timeRemaining(time) {
		this.durInp.value = time.toFixed(1);
	}
}
