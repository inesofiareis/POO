let clientName = document.getElementById("clientName");
let addButton = document.getElementById("add");
let buyButton = document.getElementById("buyProduct");
let addProductButton  = document.getElementById("addProduct");

addButton.addEventListener("click", function (event) {


    let productName = document.getElementById("productName");
    let valueIva = document.querySelector('input[name="IVA"]:checked');
    let table = document.getElementById("Table");
    let item = productName.options[productName.selectedIndex].innerHTML;
    
    if (!productExistsInTable(item)) {

        let PU = productName.value;
        let IVA = valueIva.value;
        let total = (+PU +(PU*IVA)).toFixed(2)
        let quantity = 1;

        table.innerHTML += `
        <tr class="product">
            <td>${item}</td>
            <td>${quantity}</td>
            <td>${PU}€</td> 
            <td>${valueIva.id}</td>
            <td>${total}</td>
        </tr>
        `
        productName.options[0].selected= true;
        productName.focus()

    }
    function productExistsInTable(item) {

        let rows = document.querySelectorAll(".product")
        for (let row of rows) {
            if (row.cells[0].innerHTML == item && item != " ") {
                alert("Este produto já se encontra na fatura!")
                row.cells[1].innerHTML = +row.cells[1].innerHTML + 1;
                row.cells[4].innerHTML *= row.cells[1].innerHTML ;
                return true
            }

        }
        return false
    }

    event.preventDefault();

});




buyButton.addEventListener('click', function () {
    let subtotal = ''
    let rows = document.querySelectorAll(".product")
    for (let row of rows) {
        subtotal += row.cells[4].innerHTML;
    }
    window.alert(`O cliente ${clientName.value} tem a pagar ${subtotal}€`)

});




addProductButton.addEventListener('click', function () {
    let newProductName = prompt("Insira o novo produto: ")
    let PU =prompt("Insira o seu preço: ")

    let productName = document.getElementById("productName").innerHTML;
    for (product of productName) {
        if (newProductName == product) {
            product.value = PU;
        }
        else {
            productName.innerHTML += `<option value="${newProductName}">${newProductName}</option>`
        }
        
    }

});
