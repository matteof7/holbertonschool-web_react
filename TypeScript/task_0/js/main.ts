interface students {
    firstName: string;
    lastname: string;
    age: number;
    location: string;
    }

    const students1: students = {
        firstName: "Alice",
        lastname: "Smith",
        age: 20,
        location: "New York"
    };

    const students2: students = {
        firstName: "Bob",
        lastname: "Johnson",
        age: 22,
        location: "Los Angeles"
    };

    const studenlistList: students[] = [students1, students2];

    // Creation du tableau html  
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    studenlistList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
