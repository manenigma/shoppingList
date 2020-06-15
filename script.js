var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function creteListElement() {
	var li = document.createElement("li");
	li.innerHTML = '<span>' + input.value + '</span> <button> X </button>';
	// console.log(li);
	// li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		creteListElement();
	}
}

function addListAfterEnter(event) {
	if (inputLength() > 0 && event.which === 13) {
		creteListElement();
	}
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterEnter)

ul.addEventListener('click', function(e) {
	if (e.target.nodeName === "SPAN") {
		e.target.classList.toggle("done");
	} else if (e.target.nodeName === "BUTTON") {
		e.target.parentElement.remove();
	}
});
