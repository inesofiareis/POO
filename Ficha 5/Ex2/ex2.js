let form = document.getElementById("formAddGames");

form.addEventListener("submit", function(event) {


    let gameYear = document.getElementById("gameYear");

    if( gameYear < 1950 ||gameYear > 2021 ) {
        alert("Erro");

    }
    else {
        alert("Validação Ok")
        addGameToTable();
        form.reset();
    }
    event.preventDefault();
});

    function addGametoTable() {
        let table = document.querySelector("#tablesub");

        let name = document.getElementById("gameName").value;
        let year = document.getElementById("gameYear").value;
        let genre = document.getElementById("gameGenre").value;
        let url = document.getElementById("cover").value;
        let opt = `<button id="remove" onclick="remove()"></button>`

        table.innerHTML += `
        <tr>
            <td>
                ${name}
            </td>

            <td>
                ${year}
            </td>

            <td>
                ${genre}
            </td>

            <td>
                <img src="${url}">
            </td>

            <td>
                ${opt}
            </td>

        </tr> `
    }
