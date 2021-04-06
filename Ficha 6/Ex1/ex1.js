let schoolForm = document.querySelector('#schoolForm');

let addButton = document.querySelector('#Add')
let editButton = document.getElementById('Edit');

let table = document.querySelector('#schoolTable');

function addToTable() {


    let schoolName = document.getElementById('schoolName').value;
    let schoolLocation = document.getElementById('schoolLocation').value;


    table.innerHTML += ` 
    <tr>
            <td>
                ${schoolName}
            </td>

            <td>
                ${schoolLocation}
            </td>
        </tr>`;

    
}

function editTable() {

    let numeroLinha = prompt('Número da linha?');

    let numeroColuna = prompt('Número da coluna?');

    let editingCell= table.rows[numeroLinha].cells[numeroColuna - 1];

    editingCell. innerHTML = prompt("Qual será o novo conteúdo da célula?")

}

addButton.addEventListener('click', function (event) {
    
    addToTable ();
    event.preventDefault();
});

editButton.addEventListener('click', function (event) {

    editTable()
    event.preventDefault();

});
