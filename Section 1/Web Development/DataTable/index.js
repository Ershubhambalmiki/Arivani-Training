// Sample data array
const data = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Emily Johnson", age: 35 },
    { id: 4, name: "Michael Brown", age: 40 }
];

// Function to load data into the table
function loadData() {
    // Get the tbody element of the table
    const tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    // Clear any existing rows
    tbody.innerHTML = '';

    // Loop through the data array and create table rows
    data.map(item => {
        // Create a new row
        const row = document.createElement('tr');

        // Create cells for ID, Name, and Age
        const cellId = document.createElement('td');
        cellId.textContent = item.id;

        const cellName = document.createElement('td');
        cellName.textContent = item.name;

        const cellAge = document.createElement('td');
        cellAge.textContent = item.age;

        // Append cells to the row
        row.appendChild(cellId);
        row.appendChild(cellName);
        row.appendChild(cellAge);

        // Append the row to the tbody
        tbody.appendChild(row);
    });
}