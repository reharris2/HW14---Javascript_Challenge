// from data.js
var tableData = data;
var tbody = d3.select("tbody");

//************************************************************************************* */
// Appending the table to the web page and then add new rows of data for each UFO sighting.

tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//************************************************************************************* */

//Selecting the button
let button = d3.select("#filter-btn");
button.on("click", function() {
let empty = d3.select("tbody");
empty.html("")    
d3.event.preventDefault();
   
 
//Select the input element and get the raw HTML node
    let inputElement = d3.select ("#datetime");
    
//Get the value property of the input element

    let inputValue = inputElement.property("value");
    console.log(inputValue);

    let filteredData = tableData.filter(dateSighting => dateSighting.datetime === inputValue);
    console.log(filteredData);

    tbody.html("");

    
    if (inputValue) {
        
    filteredData.forEach((byDate) => {
        var row2 = tbody.append("tr");
        Object.entries(byDate).forEach(([key, value]) => {
        var cell2 = row2.append("td");
        cell2.text(value);
        });
    });
}

else{
tbody.html("");
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
}
});