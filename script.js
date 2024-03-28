window.onload = function() {
    
    var itensContainer = document.querySelectorAll('#cont2 div');
    let controle = new Array();
    while(controle.length < 100){
        let  numeroAleatorio = Math.floor(Math.random() * 100);
        if(controle.indexOf(numeroAleatorio) == -1){
            [itensContainer.item(controle.length).innerHTML, itensContainer.item(numeroAleatorio).innerHTML] = [itensContainer.item(numeroAleatorio).innerHTML, itensContainer.item(controle.length).innerHTML];
            controle.push(numeroAleatorio);
        }
    }

    let sizePuzzle = document.querySelector("#sizePuzzle");
    let doc = document.documentElement;
    let elementBegin;
    sizePuzzle.addEventListener("change",()=>{
        doc.style.setProperty("--sizeContainer",sizePuzzle.value + "px")
    })

    let span = document.querySelectorAll('[draggable="true"]');
    span.forEach(element => {
        element.addEventListener("dragover", e => e.preventDefault() )
        element.addEventListener("dragstart",function(e){
            elementBegin = element;
        })
        element.addEventListener("drop",function(e){
            [elementBegin.innerHTML,element.innerHTML] = [element.innerHTML,elementBegin.innerHTML];
            changeExecuted();
        })
    })
    function changeExecuted(){

        let win = true;
        let itens = document.querySelectorAll('.container:first-of-type [draggable="true"]');
        for(let i = 0; i < itens.length; i++){

            if(itens[i].innerHTML != `<img src="img/${(100-i)}.png">`){
                win = false;
                console.log(win);
                break;
            }
        }
        if(win){
            alert("Vitory!")
        }
    }
}