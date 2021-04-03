window.addEventListener('load', doThis);
function doThis() {

    let textbox = document.getElementById('textbox')
    textbox.addEventListener('input', transform);  //O input serve como um typewriter effect

    function transform() {
        let paragraph = document.getElementById('paragraph');
        paragraph.innerHTML = textbox.value
    }



    document.getElementById('btnclick').addEventListener('click', clickMe);

    function clickMe() {
        alert('Olá Mundo!')
        console.log("obrigado pelo clique no botão!")
    }
    
}


