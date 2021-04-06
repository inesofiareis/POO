function load() {

    let msg = document.getElementById("msg");
    let img = document.getElementById("image");
    let date = new Date();
    let hour = date.getHours()
    msg.innerHTML(`São ${hour} horas.`)

}


