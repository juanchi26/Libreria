let listaLibros = [];
let min = undefined;
let max = undefined;
let search = undefined;

function redireccionar(id) {
    localStorage.setItem("libroID", id);
    window.location = "ver-libro.html";
}

function mostrarLibros(arrayLibros) {
    document.getElementById("listado").innerHTML = "";
    for (let libro of arrayLibros) {
        libro.paginas = parseInt(libro.paginas);

        if  (!(libro.paginas < min) && !(libro.paginas > max))
         /* ((min == undefined && max == undefined) || (libro.paginas >= min && libro.paginas <= max) ||
        (libro.paginas >= min && max == undefined) || (libro.paginas <= max && min == undefined)) */ {

            if (search == undefined || search == "" || libro.titulo.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                let contenido =`
                <div class="list-group">
                <li onclick="redireccionar(${libro.id})" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1"> Título: ${libro.titulo}</h5>
                  <small class="text-muted"> Páginas: ${libro.paginas}</small>
                </div>
                <p class="mb-1">Autor: ${libro.autor} <br></p>
                <small class="text-muted">Editorial: ${libro.editorial}</small>
              </li>
              </div>`
             /* `
                <li onclick="redireccionar(${libro.id})">
                    Título: ${libro.titulo} <br>
                    Autor: ${libro.autor} <br>
                    Páginas: ${libro.paginas}
                </li>
                <hr>
                ` */;
                document.getElementById("listado").innerHTML += contenido;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(LIBROS_URL).then(resultado => {
        if (resultado.status == "ok") {
            listaLibros = resultado.data;
            mostrarLibros(listaLibros);
            document.getElementById("filtrar").addEventListener("click", function () {
                if (document.getElementById("rango-min").value != "") {
                    min = parseInt(document.getElementById("rango-min").value);
                }else{
                    min = undefined;
                }
        
                if (document.getElementById("rango-max").value != "") {
                    max = parseInt(document.getElementById("rango-max").value);
                }else{
                    max = undefined;
                }
                mostrarLibros(listaLibros);
            })
        
            document.getElementById("limpiar").addEventListener("click", function () {
                min = undefined;
                max = undefined;
                document.getElementById("rango-min").value = "";
                document.getElementById("rango-max").value = "";
                mostrarLibros(listaLibros);
            })
        
            document.getElementById("buscador").addEventListener("input", function () {
                search = document.getElementById("buscador").value;
                mostrarLibros(listaLibros);
            })
        
            document.getElementById("sortPagDesc").addEventListener("click", function () {
                listaLibros.sort(function (a, b) {
                    return parseInt(b.paginas) - parseInt(a.paginas);
                })
                mostrarLibros(listaLibros);
            })

            

        }else{
            alert("Algo salió mal: " + resultado.data);
        }
    })




});













































//(!(parseInt(libro.paginas) < min) && !(parseInt(libro.paginas) > max))