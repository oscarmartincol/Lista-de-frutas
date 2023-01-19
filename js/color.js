
function cambiarFondo(opcion){
    var frutas = document.getElementById("list");
    var body = document.getElementById("body");
    var list = document.querySelectorAll(".fruta");
    if(opcion.value === "tema2"){
        frutas.classList.add("tema2");
        body.classList.add("tema2");
        for(var i=0; i<list.length; i++){
            if((i+1)%2 != 0 ){
                list[i].classList.add("impar");
            }else{
                if(list[i].classList.contains("par")){
                    list[i].classList.remove("par");
                }
            }
            
        }
    }else{
        if(frutas.classList.contains("tema2")){
            frutas.classList.remove("tema2");
            body.classList.remove("tema2");
        }
        for(var i=0; i<list.length; i++){
            if((i+1)%2 === 0 ){
                list[i].classList.add("par");
            }else{
                if(list[i].classList.contains("impar")){
                    list[i].classList.remove("impar");
                }
            }
        }

    }
}