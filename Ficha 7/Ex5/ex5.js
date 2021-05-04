const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
getTheSum()

function getTheSum() {
    let sum = 0;
    for (prop in salaries) {
        sum += +salaries[prop]
    }
    console.log(sum)
}