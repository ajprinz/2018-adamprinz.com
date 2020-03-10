//Adam Prinz
//Class Catalog Maintence

var $ = function(id) {
    return document.getElementById(id);
};


function clearForm() {

    //clear the form values
    document.querySelector("form").reset();

}

function printClass() {


    var tbody = document.querySelector("tbody");
    var row = document.createElement("tr");
    tbody.appendChild(row);
    row.innerHTML = "<td>" + localStorage.getItem("Name") + "</td>" +
                    "<td>" + localStorage.getItem("Number") + "</td>" +
                    "<td>" + localStorage.getItem("Date") + "</td>" +
                    "<td>" + localStorage.getItem("Length") + "</td>" +
                    "<td>" + localStorage.getItem("Weekday") + "</td>" +
                    "<td>" + localStorage.getItem("Time") + "</td>" +
                    "<td>" + localStorage.getItem("Description") + "</td>";

}

function addClass() {

    //grab user input
    var name = $("name").value;
    var number = $("number").value;
    var date = $("date").value;
    var length = $("length").value;
    var weekday = $("weekday").value;
    var time = $("time").value;
    var description = $("description").value;

    //Form validation
    
    var input = document.querySelectorAll("form input");
    var select = document.querySelectorAll("select");
    var textarea = document.querySelector("textarea");
    
    for(var i = 0; i < input.length; i++) {

        if (input[i].value == "" || select[i].value == "-" || textarea.value == "") {

            alert("Please enter valid information for each input.");
            break;

        }

    }

    //Date validation
    //get current date in mm/dd/yyyy format
    var currentDate = new Date().toISOString().slice(0, 10);

    if (date <= currentDate) {
        
        alert("Please enter valid date.");
        return;

    }

    //store user input in local storage
    localStorage.setItem("Name", name);
    localStorage.setItem("Number", number);
    localStorage.setItem("Date", date);
    localStorage.setItem("Length", length);
    localStorage.setItem("Weekday", weekday);
    localStorage.setItem("Time", time);
    localStorage.setItem("Description", description);


    //print the class to table
    printClass();
    
}

window.onload = function() {

    $("add").onclick = addClass;
    $("clear").onclick = clearForm;

}