var count;
function starmark(item){
    count=item.id[0];
    sessionStorage.starRating = count;
    var subid= item.id.substring(1);
    for(var i=0;i<5;i++){
    
        if(i<count){
            document.getElementById((i+1)+subid).style.color="orange";
        }
        else{
             document.getElementById((i+1)+subid).style.color="black";
        }
    }
}

function mostrarPuntuacion(){
    alert("Puntuaciación: "+count+" \nNombre de usuario: "+ document.getElementById("nombreUsuario").value+ "\nComentario: "+document.getElementById("comentario").value)
}     
        