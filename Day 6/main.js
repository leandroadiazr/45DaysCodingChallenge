console.log("Connected");
const inputs = document.querySelectorAll(".controls input");
const sizing = document.querySelectorAll("data-sizing");

function handleUpdate() {
	const sufix = this.dataset.sizing || ""; //selecting the px in the data set field

	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + sufix
	);
}
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mouseMove", handleUpdate));
