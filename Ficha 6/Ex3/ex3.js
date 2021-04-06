const form = document.getElementById("formAddParticipants")
const submitButton = document.getElementById("submit")


let table = document.querySelector("#tablesub");

let name = document.getElementById("name");
let course = document.querySelectorAll("input[name='course']:checked");
let select = document.getElementById("course"); 
let profile = document.getElementById("profile");
let sessions = document.querySelectorAll("#session:checked");


submitButton.addEventListener("click", function(event) {


        let table = document.querySelector("#tablesub");

        let name = document.getElementById("name");
        let course = document.querySelector("#course:checked");
        let select = document.getElementById("course"); 
        let profile = document.getElementById("profile");
        let sessions = document.querySelectorAll("#session:checked");
        if (sessions.length == 0) {
            alert("Por favor, selecione pelo menos uma sessão")
        }
        else {
            for(session of sessions) {
                sessions += (session.value) 
            }
        }

        if (profile.value == "other") {
            let profile = prompt("Insira o outro perfil: ")
            select.innerHTML += `<option value="${profile}">${profile}</option>`
        }

        table.innerHTML += `
        <tr class= 'participant'>
            <td>
                ${name}
            </td>

            <td>
                ${course}
            </td>

            <td>
                ${profile}
            </td>

            <td>
                ${session}
             </td>

        </tr> 
        `
        form.reset()

    event.preventDefault();
});