// Create actions table
function createActionsTable(skills) {
	// Take the actions from actions.js and create a simple table
	// The table will display in the div_actions element
	const table = document.createElement('table');
	table.classList.add('actions-table');
	const headerRow = document.createElement('tr');
	// Create header row
	const headers = ['Name', 'Description', 'Abbreviation'];
	headers.forEach(headerText => {
		const th = document.createElement('th');
		th.textContent = headerText;
		headerRow.appendChild(th);
	});
	table.appendChild(headerRow);
	// Create rows for each skill
	skills.forEach(skill => {
		const row = document.createElement('tr');
		// Create cells for each property of the skill
		const nameCell = document.createElement('td');
		nameCell.textContent = skill.name;
		row.appendChild(nameCell);

		const descriptionCell = document.createElement('td');
		descriptionCell.textContent = skill.description;
		row.appendChild(descriptionCell);

		const abbreviationCell = document.createElement('td');
		abbreviationCell.textContent = skill.abbreviation;
		row.appendChild(abbreviationCell);

		table.appendChild(row);
	});
	// Append the table to the div_actions element
	const actionsDiv = document.getElementById('div_actions');
	if (actionsDiv) {
		// Clear previous content
		actionsDiv.innerHTML = '';
		// Append the new table
		actionsDiv.appendChild(table);
	} else {
		console.error('div_actions element not found in the document.');
	}
	return table; // Return the table in case it's needed for further manipulation
}