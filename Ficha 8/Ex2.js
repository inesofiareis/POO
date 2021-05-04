let addName = document.getElementById("addName")
let names = []

addName.addEventListener('click', function (evt) {
    let name = document.getElementById("insertName").value
    names.push(name);
    console.log(names)
    evt.preventDefault()
})

names.push('John', 'Peter', 'Mary', 'Ann', 'Michael')
let lastName = names.pop()
alert(lastName)

let firstName = names.shift()
alert(firstName)

let names2 = []
names2.push('Charles', 'Paul')

let allNames = names.concat(names2)
alert(allNames)

let allNames = [...names, ...names2]