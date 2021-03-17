let table = document.getElementsByName("table");
table.innerHTML +=
let tableRow = document.createElement("tr");
let tableCell = document.createElement("td").innerHTML = "ISEP Porto";
table.append(tableRow);
tableRow.append(tableCell);
let EsmadLocation = document.createElement("td:nth-child(n)").innerHTML = "ISEP Porto";
let removeHeader = table.removeChild("th");