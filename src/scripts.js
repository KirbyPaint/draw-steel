// Change button color on click
function changeButtonColor(id) {
	const buttonId = id.replace(/_class$/, '');
	const button = document.getElementById(buttonId);
	if (button) {
		if (button.classList.contains('off')) {
			button.classList.remove('off');
			switch (buttonId) {
				case 'btn_movement':
					button.classList.add('yellow');
					saveToLocalStorage(buttonId, "yellow");
					break;
				case 'btn_maneuver':
					button.classList.add('blue');
					saveToLocalStorage(buttonId, "blue");
					break;
				case 'btn_action':
					button.classList.add('red');
					saveToLocalStorage(buttonId, "red");
					break;
				case 'btn_trigger':
					button.classList.add('green');
					saveToLocalStorage(buttonId, "green");
					break;
				default:
					console.error(`Unknown button ID: ${buttonId}`);
			}
		} else {
			button.classList.add('off');
			saveToLocalStorage(buttonId, "off");
		}
	} else {
		console.error(`Button with ID ${buttonId} not found.`);
	}
}

function refresh() {
	buttonRefresh();
}

function buttonRefresh() {
	const defaultClasses = {
		'btn_movement': 'yellow',
		'btn_maneuver': 'blue',
		'btn_action': 'red',
		'btn_trigger': 'green'
	};
	const buttons = document.querySelectorAll('.buttonToggle');
	buttons.forEach(button => {
		// Remove all classes
		button.className = button.className.replace(/\byellow|blue|red|green\b/g, '').trim();
		button.classList.add('off'); // Set to off by default

		// Reset to default class
		const buttonId = button.id;
		if (defaultClasses[buttonId]) {
			button.classList.remove('off');
			button.classList.add(defaultClasses[buttonId]);
			saveToLocalStorage(buttonId, defaultClasses[buttonId]);
		} else {
			console.error(`No default class for button ID: ${buttonId}`);
		}
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