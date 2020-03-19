console.log("Connected");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const checkBox = document.querySelector("#checkbox");
const form = document.querySelector(".registration-form");

//array from inputs
const inputs = [firstName, lastName, email, password, checkBox];

//adding event listener trough for of loop
for (let input of inputs) {
	input.addEventListener("input", ({ target }) => {
		//desctructuring e.target
		const { name, type, value, checked } = target;

		//saving values of each input to the object
		formData[name] = type === "checkbox" ? checked : value;
		console.log(formData);
	});
}
//empty object on load
const formData = {};

//prevent default form action
form.addEventListener("submit", function(evt) {
	evt.preventDefault();
});
