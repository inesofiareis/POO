
let addButton = document.querySelector("#Add");
let showButton = document.querySelector("#Show");
let removeButton = document.querySelector("#Remove");

let select = document.getElementById("colours");

addButton.addEventListener('click', function () {

    newValue= prompt ("Que cor deseja adicionar?")
    select.innerHTML += `<option value="${newValue}">${newValue}</option>`

});

showButton.addEventListener('click', function () {
    alert(document.querySelector('#colours').value);

});

removeButton.addEventListener('click', function () {
    let selected= document.querySelector('#colours').value;
    select.remove(selected);
    //  select.remove(select.selectedIndex);
});