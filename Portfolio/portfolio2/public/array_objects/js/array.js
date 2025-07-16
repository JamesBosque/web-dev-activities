function showALL() {
    const list = document.getElementById('list');

    let namelist = "";

    names.forEach(element => {
        namelist += element + "</br>";


    });

    list.innerHTML = namelist;


}

function addName() {
    const name = document.getElementById('name').value;
    
    names.push(name);
    showALL();
    document.getElementById('name').value = "";
    
} jdfb