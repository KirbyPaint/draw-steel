// Scripts file for localStorage functions
function saveToLocalStorage(key, value) {
	try {
		// Convert the value to a JSON string
		const jsonValue = JSON.stringify(value);
		// Save the JSON string to localStorage with the specified key
		localStorage.setItem(key, jsonValue);
	} catch (error) {
		console.error('Error saving to localStorage:', error);
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