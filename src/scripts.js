// Change button color on click
function changeButtonColor(buttonId) {
	const button = document.getElementById(buttonId);
	if (button) {
		if (button.classList.contains('off')) {
			button.classList.remove('off');
			saveToLocalStorage(buttonId, true);
		} else {
			button.classList.add('off');
			saveToLocalStorage(buttonId, false);
		}
	} else {
		console.error(`Button with ID ${buttonId} not found.`);
	}
}

function refresh() {
	// Will restore all buttons to their original state
	const buttons = document.querySelectorAll('.buttonToggle');
	buttons.forEach(button => {
		button.classList.remove('off');
		saveToLocalStorage(buttonId, true);
	});
}

// Put this back in global scope to use in other files later
// Scripts file for localStorage functions
function saveToLocalStorage(key, value) {
	try {
		// Convert the value to a JSON string
		const jsonValue = JSON.stringify(value);
		// Save the JSON string to localStorage with the specified key
		localStorage.setItem(key, jsonValue);
		console.log({ key, jsonValue });
	} catch (error) {
		console.error('Error saving to localStorage:', error);
	}
}