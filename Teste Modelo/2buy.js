let productName = document.getElementById("productName");
let cathegory = document.getElementById("Cathegory");
let quantity = document.getElementById("quantity");

let table = document.getElementById("Table");
let addButton = document.getElementById("add");

let generalCount = document.getElementById("generalCount");
let cathegoryCount = document.getElementById("cathegoryCount");
let clean = document.getElementById("clean");


addButton.addEventListener("click", function (event) {

    if (!productExists(productName.value, quantity.value)) {


        table.innerHTML += `
        <tr class="product">
            <td>${productName.value}</td>
            <td>${cathegory.value}</td>
            <td>${quantity.value}</td> 
            <td><button class="mais">+</button>
            <button class="menos">-</button></td>
        </tr>
        `



        let plusButtons = document.querySelectorAll(".mais");
        for (let botao of plusButtons) {
            botao.addEventListener("click", function () {
                this.parentNode.parentNode.cells[2].innerHTML = +this.parentNode.parentNode.cells[2].innerHTML + 1;
            });


        }

        let lessButtons = document.querySelectorAll(".menos");
        for (let botao of lessButtons) {
            botao.addEventListener("click", function () {
                if (this.parentNode.parentNode.cells[2].innerHTML == "1") {
                    this.parentNode.parentNode.remove()
                } else {
                    this.parentNode.parentNode.cells[2].innerHTML = +this.parentNode.parentNode.cells[2].innerHTML - 1; //O mais antes do this transforma o string em numero
                }
            })
        };

    }

    function productExists(productName, quantity) {

        let rows = document.querySelectorAll(".product")
        for (let row of rows) {
            if (row.cells[0].innerHTML == productName && productName != " ") {
                row.cells[2].innerHTML = +row.cells[2].innerHTML + +quantity;
                return true
            }

        }
        return false
    }

    event.preventDefault();
});




generalCount.addEventListener('click', function () {

    let rows = document.querySelectorAll(".product")
    let allCounter = 0;
    for (let row of rows) {
        allCounter += +row.cells[2].innerHTML
    };

    alert(`A lista de compras tem ${allCounter} produtos`)
});




cathegoryCount.addEventListener('click', function () {

    let rows = document.querySelectorAll(".product")
    let cat = prompt("Insira uma categoria:")
    let catCounter = 0;
    for (let row of rows) {
        if (row.cells[1].innerHTML == cat && cat != " ") {
            catCounter += +row.cells[2].innerHTML
        };
    }
    alert(`A lista de compras tem ${catCounter} produtos com a categoria ${cat}`)
});

clean.addEventListener('click', function () {

    let rows = document.querySelectorAll(".product")
    let answer = prompt("Tem a certeza que quer limpar a lista? (s/n) ")
    if (answer == "s") {
    for (let row of rows) {
            row.remove();
        }
    }
    else {
        alert("Operação cancelada")
    }
});