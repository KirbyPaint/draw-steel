function initializeLocalStorage() {
	/**
	 * Initialize localStorage by loading existing values
	 * and setting up the event listeners for buttons.
	 */
	// Load existing values from localStorage
	setLocalStorage();
	loadLocalStorage();
}

// Attempt to load localStorage values
// and apply to all fields
function loadLocalStorage() {
	try {
		// Loop through all keys in localStorage
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key) {
				const value = localStorage.getItem(key);
				console.log({ key, value });
				console.log('Attempting to restore localStorage value:', value);
				if (value) {
					// Parse the JSON string back to its original form
					const parsedValue = JSON.parse(value);
					// Apply this value to the corresponding button
					const button = document.getElementById(key);
					if (button) {
						if (parsedValue) {
							button.classList.remove('off');
						} else {
							button.classList.add('off');
						}
					}
				}
			}
		}
	} catch (error) {
		console.error('Error loading from localStorage:', error);
	}
}

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

function setLocalStorage() {
	try {
		// Go through and set defaults for localStorage if it doesn't yet exist
		saveToLocalStorage("btn_movement_class", "yellow");
		saveToLocalStorage("btn_maneuver_class", "blue");
		saveToLocalStorage("btn_action_class", "red");
		saveToLocalStorage("btn_trigger_class", "green");
		saveToLocalStorage("input_m", "0");
		saveToLocalStorage("input_a", "0");
		saveToLocalStorage("input_r", "0");
		saveToLocalStorage("input_i", "0");
		saveToLocalStorage("input_p", "0");
		saveToLocalStorage("select_essence", "0");
	} catch (error) {
		console.error('Error setting localStorage:', error);
	}
}

// Erases everything
function clearLocalStorage() {
	try {
		// Get everything in localStorage and clear it
		localStorage.clear();
	} catch (error) {
		console.error('Error clearing localStorage:', error);
	}
}