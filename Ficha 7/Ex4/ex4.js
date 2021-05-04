let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false


function isEmpty(feature) {
    for (prop in feature) {
        return false
    }
    return true
}