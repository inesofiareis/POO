let submit = document.getElementById("submit");

submit.addEventListener("click", function(event) {


    let gameYear = document.getElementById("gameYear");

    if( gameYear < 1950 ||gameYear > 2021 ) {
        alert("Erro");

    }
    else {
        alert("Validação Ok")
        let table = document.querySelector("#tablesub");

        let name = document.getElementById("gameName").value;
        let year = document.getElementById("gameYear").value;
        let genre = document.getElementById("gameGenre").value;
        let url = document.getElementById("cover").value;
        let opt = `<button class="remove" value="x"></button>`

        table.innerHTML += `
        <tr class= 'Jogo'>
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

        </tr> `;


        const buttons = document.getElementsByClassName("remove");
        for (let button of buttons ) {
            button.addEventListener("click", function() {

                this.parentNode.parentNode.remove();


            });
        }





    }



    event.preventDefault();
});


