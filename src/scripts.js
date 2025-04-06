// Change button color on click
function changeButtonColor(buttonId) {
	const button = document.getElementById(buttonId);
	if (button) {
		if (button.classList.contains('off')) {
			button.classList.remove('off');
		} else {
			button.classList.add('off');
		}
	} else {
		console.error(`Button with ID ${buttonId} not found.`);
	}
}

function refresh() {
	// Will restore all buttons to their original state
	const buttons = document.querySelectorAll('.buttonToggle');
	buttons.forEach(button => {
		if (button.classList.contains('off')) {
			button.classList.remove('off');
		}
	});
}