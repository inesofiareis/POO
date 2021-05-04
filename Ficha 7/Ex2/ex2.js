const student = {
    name: "John Doe",
    course: "POO",
    grade: 12 
}

countProp();

/*
listProp();
removeProperty('grade');
countPop();
function listProp(){

    let properties = ''
    for (let prop in student ) {
        properties += `value:${prop}; `}
    console.log(properties);

}; */

/* function removeProperty(feature){
    console.log(student)
    delete student[feature]
    console.log(student)
} */


function countProp() {
    count = 0
    for (let prop in student ) {
        count += 1}
    alert(count);
}