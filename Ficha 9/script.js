category = document.getElementById("taskCategory").value
task = document.getElementById("taskName").value
table = document.getElementById("table")
buttonSubmit = document.getElementById("submit")

buttonSubmit.addEventListener("click", function(evt) {

    table.innerHTML += ` 
    <tr class="row">
        <th scope="row-1"> 1</th>
        <td scope="row">${task}</td>
        <td scope ="row">${category}</td>
        <td scope ="row"> <button type="button" class="btn btn-primary">Remove task</button> </td>
    </tr>`

    evt.preventDefault()
})