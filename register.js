function store(){ 
    var name = document.getElementById('name').value;
    var salary = document.getElementById('salary').value;
    var key = document.getElementById('key').value;
    var gender = document.getElementById('gender').value;
    var date=document.getElementById('date').value
    const list = [{
        name:name,
        gender:gender,
        salary:salary,
        key:key,
        date:date,
}]

    window.localStorage.setItem(key,JSON.stringify(list));  
  
}

function retrieveRecords(){ //retrieves items kre ga localStorage sa
    var key = document.getElementById('retrieveKey').value; //gets key nikalo user sa
    console.log("retrive records");
    var records = window.localStorage.getItem(key); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem(){ //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(key) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ 
    document.getElementById("Form").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}