let ID = localStorage.getItem("libroID")

document.addEventListener("DOMContentLoaded", function(){
    fetch(`https://danikho2020.github.io/libros-biblioteca/${ID}.json`)     //fetch con id concatendo
    .then(res => res.json())
    .then(data => {
        datos = data
        console.log(datos)
        contenidos()
        imagenes()
        relacionados ()
        
        
    })
    .catch(err=> console.log(err))


    function contenidos(){                              //agrega todo el contenido

        document.getElementById("contenido").innerHTML = `
            <h3 class="mt-4"><strong>${datos.titulo}</strong></h3>
            <div id="datos">
            <p><strong>Autor</strong>: ${datos.autor}</p>
            <p><strong>Descripción</strong>: ${datos.descripcion}</p>
            <p><strong>Editorial</strong>: ${datos.editorial}
            <p><strong>ISBN</strong>: ${datos.isbn}</p>
            <p><strong>Paginas</strong>: ${datos.paginas}</p>
            </div>
            
        `
    }

    function imagenes(){                    //itera entre las imagenes y las muestra en pantalla
        img = ``
        for(i=0; i < datos.imagenes.length; i++) {
            img +=`
             
            <img class="card col img-thumbnail gallery-item"  id="imagenesAdd" src="${datos.imagenes[i]}"</img>`
        }

        document.getElementById("imagenes").innerHTML = img
    }


    




})