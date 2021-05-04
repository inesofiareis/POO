let countries = ["Portugal", "Spain", "France"]


alert(countries[0])
alert(countries[2])

countries.push("German")
countries[3] = "Germany"

let counter = 0
for (country in countries) {
    if (country) {
        counter += 1
    }
}
alert(`The array has ${counter} countries!`)

let countries2 = countries
countries2.push("Denmark")
alert(countries)

for (i = 0; i <= counter; i++) {
    console.log(`${i+1} - ${countries[i]}`)
}

for (country of countries) {
    console.log(`${country.index()} - ${country}`)
}