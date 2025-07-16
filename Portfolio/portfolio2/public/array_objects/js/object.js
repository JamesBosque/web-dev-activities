function showEmployees() {

    let table = document.getElementById('employee');
    table.innerHTML = "<tr><th> Employee ID </th><th> Name </th<th> Positon </th>"
    employees.forEach(element => {

        let newRow = table.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = element.emp_id;
        cell2.innerHTML = element.name;
        cell3.innerHTML = element.position;
    });

}

function addemp() {
    const aid = document.getElementById('addid').value;
    const aname = document.getElementById('addname').value;
    const apos = document.getElementById('addpos').value;

    if (aid && aname && apos) {
        employees.push({
            emp_id: aid,
            name: aname,
            position: apos
        });
    }

    document.getElementById('addid').value = "";
    document.getElementById('addname').value = "";
    document.getElementById('addpos').value = "";

    showEmployees();

    /*     employees.push(id);
        employees.push(aname);
        employees.push(pos);
        showEmployees()
        document.getElementById('name').value = "";
     */
}