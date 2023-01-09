firebase.initializeApp({

    apiKey: "AIzaSyD_GuE1Q-gzYic_e3moii3vAuWTxhjt-Gs",
    authDomain: "limpiezaysoluciones-bc4f1.firebaseapp.com",
    projectId: "limpiezaysoluciones-bc4f1",
    storageBucket: "limpiezaysoluciones-bc4f1.appspot.com",
    messagingSenderId: "106315930731",
    appId: "1:106315930731:web:3c186a5fb5197ecfcee52e",
    measurementId: "G-FPSHWBZZ7M"

});
var db = firebase.firestore();

var auth = firebase.auth();

var storageRef;
storageRef = firebase.storage().ref();

//-------------------------------ubicacion-------------
NameCity = '';
latitud = '';
longitud = '';
window.addEventListener('load', () => {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')

    //ciudad='Cali';


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            //ubicación actual    
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7c2ea75f3f04318c65c62f32ccd5213c`

            //ubicación por ciudad
            /*const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=7c2ea75f3f04318c65c62f32ccd5213c`*/

            //console.log(url)


            fetch(url)
                .then(response => { return response.json() })
                .then(data => {

                    console.log(data);
                    NameCity = data.name;
                    console.log('Latitud' + data.coord.lat);
                    console.log('longitud' + data.coord.lon);
                    latitud = data.coord.lat;
                    longitud = data.coord.lon;



                    let temp = Math.round(data.main.temp)
                    //console.log(temp)
                    temperaturaValor.textContent = `${temp} ° C`

                    //console.log(data.weather[0].description)
                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()
                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`

                    //para iconos estáticos
                    //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
                    //icono.src = urlIcon
                    //console.log(data.weather[0].icon)

                    //para iconos dinámicos
                    console.log(data.weather[0].main)
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src = 'animated/thunder.svg'
                            console.log('TORMENTA');
                            break;
                        case 'Drizzle':
                            iconoAnimado.src = 'animated/rainy-2.svg'
                            console.log('LLOVIZNA');
                            break;
                        case 'Rain':
                            iconoAnimado.src = 'animated/rainy-7.svg'
                            console.log('LLUVIA');
                            break;
                        case 'Snow':
                            iconoAnimado.src = 'animated/snowy-6.svg'
                            console.log('NIEVE');
                            break;
                        case 'Clear':
                            iconoAnimado.src = 'animated/day.svg'
                            console.log('LIMPIO');
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = 'animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;
                        case 'Clouds':
                            iconoAnimado.src = 'animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;
                        default:
                            iconoAnimado.src = 'animated/cloudy-day-1.svg'
                            console.log('por defecto');
                    }

                })
                .catch(error => {
                    console.log(error)
                })
        })

    }
})


//------------------------------------------------------


auth.onAuthStateChanged(user => {
    if (user) {

        ingreso = user.email;

        document.getElementById('mailUser').value = ingreso;

        //-----------------------------------------

    } else {

        console.log('loguese por favor');
        Swal.fire(
            'Debe Loguearse',
            '',
            'error'
        )
        window.location.href = 'index.html'

    }



})

//------------------logout------------------
const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('ha salido');

        //location.reload();
        window.location.href = 'index.html'
    })
})
subirImagenAfirebaseFirma = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = ficheroF.files[0];
    var uploadTask = storageRef.child('Firmas/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

    //-----------------
    uploadTask.on('state_changed',
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // Handle unsuccessful uploads
            console.log(error);
        },

        () => {
            var downloadURLFirma='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURLFirma) => {
                console.log('File available at1', downloadURLFirma);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                //var zona = document.getElementById('zona1').value;


                db.collection("ImagenesFirmasEPP").add({
                    Url1: downloadURLFirma,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    //Zona1:zona
                })
                    .then((docRef) => {
                        console.log("Document written with ID imagen: ", docRef.id);
                        Swal.fire(
                            'Registro Exitoso!!!',
                            '',
                            'success'
                        )
                        
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
            });
        }
    );

    //--------------------
}



function Registrar() {

    if (document.getElementById('nombre').value != '' && document.getElementById('centroco').value != '' && document.getElementById('fecha').value != '' && document.getElementById('element1').value != '' && document.getElementById('canti1').value != '') {

        if (confirm("Seguro que desea continuar con el registro?")) {

            var docuemnto = document.getElementById('documento').value;
            var nombre = document.getElementById('nombre').value;
            var nit = document.getElementById('nit').value;
            var centrocostos = document.getElementById('centroco').value;
            var elemeto1 = document.getElementById('element1').value;
            var cantidad1 = document.getElementById('canti1').value;
            var elemeto2 = document.getElementById('element2').value;
            var cantidad2 = document.getElementById('canti2').value;
            var elemeto3 = document.getElementById('element3').value;
            var cantidad3 = document.getElementById('canti3').value;
            var elemeto4 = document.getElementById('element4').value;
            var cantidad4 = document.getElementById('canti4').value;
            var elemeto5 = document.getElementById('element5').value;
            var cantidad5 = document.getElementById('canti5').value;
            var elemeto6 = document.getElementById('element6').value;
            var cantidad6 = document.getElementById('canti6').value;
            var elemeto7 = document.getElementById('element7').value;
            var cantidad7 = document.getElementById('canti7').value;
            var elemeto8 = document.getElementById('element8').value;
            var cantidad8 = document.getElementById('canti8').value;
            var elemeto9 = document.getElementById('element9').value;
            var cantidad9 = document.getElementById('canti9').value;
            var elemeto10 = document.getElementById('element10').value;
            var cantidad10 = document.getElementById('canti10').value;
            var elemeto11 = document.getElementById('element11').value;
            var cantidad11 = document.getElementById('canti11').value;

            var fecha = document.getElementById('fecha').value;
            var fechaComple = new Date();
            //let ingreso = user.email;
            var ingreso = document.getElementById('mailUser').value;

            //--------------------firma--------------------
            ficheroF = document.getElementById('ficheroF');

            //fichero.addEventListener('onclick', subirImagenAfirebase, false);
            subirImagenAfirebaseFirma();
            //---------------------------------------------


            // Add a new document with a generated id.
            db.collection("RegistroEPP").add({
                Registra: ingreso,
                Fecha: fecha,
                Fecha2: fechaComple,
                Documento: docuemnto,
                Nombre: nombre,
                Nit: nit,
                CentroCostos: centrocostos,
                Elemento1: elemeto1,
                Cantidad1: cantidad1,
                Elemento2: elemeto2,
                Cantidad2: cantidad2,
                Elemento3: elemeto3,
                Cantidad3: cantidad3,
                Elemento4: elemeto4,
                Cantidad4: cantidad4,
                Elemento5: elemeto5,
                Cantidad5: cantidad5,
                Elemento6: elemeto6,
                Cantidad6: cantidad6,
                Elemento7: elemeto7,
                Cantidad7: cantidad7,
                Elemento8: elemeto8,
                Cantidad8: cantidad8,
                Elemento9: elemeto9,
                Cantidad9: cantidad9,
                Elemento10: elemeto10,
                Cantidad10: cantidad10,
                Elemento11: elemeto11,
                Cantidad11: cantidad11,
                Latitud: latitud,
                Longitud: longitud,
                Ubicacion: NameCity,
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    Swal.fire(
                        'Registro Exitoso!!!',
                        'Ha completado el registro del formato..',
                        'success'
                    )
                    setInterval("location.reload()", 3000);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);

                });



        } else {

        }



    } else {
        Swal.fire(
            'Complete los campos',
            '',
            'error'
        )
    }


}

function Documento(val) {

    auth.onAuthStateChanged(user => {
        if (user) {

            val2 = String(val);

            //tabl = document.getElementById("resul11");


            db.collection("Empleados").where("Cedula", "==", val2)
                .get()
                .then(function (querySnapshot) {
                    //tabl.innerHTML = "";
                    querySnapshot.forEach(function (doc) {

                        console.log(doc.id, " => ", doc.data());
                        /* var mq = `${doc.data().MAQUINA}`;*/
                        var nombre = `${doc.data().Empleado}`;
                        var centroC = `${doc.data().Centro_de_costo}`;


                        //opciones = document.createElement('option');
                        //opciones.setAttribute('value','value1');

                        document.getElementById('nombre').value = nombre;
                        document.getElementById('centroco').value = centroC;
                        //document.getElementById('numero').value = tlfno;
                        //document.getElementById('ubicacion').value = dire
                        //document.getElementById('codLista').value = listaPrec;

                        /*  tabl.innerHTML += `
                              <tr>
                              <option value="${mq}" >${mq}</option>
                              
                              
                         
                  
                        
                          </tr>
                          `*/



                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });

            //-----------------------------------------


            //-----------------------------------------

        } else {

            console.log('loguese por favor');
            Swal.fire(
                'Debe Loguearse',
                '',
                'error'
            )

        }



    })








    //-----------------------------------------


}

function Nit(val) {

    auth.onAuthStateChanged(user => {
        if (user) {

            val3 = String(val);

            db.collection("Clientes").where("Nit", "==", val3)
                .get()
                .then(function (querySnapshot) {
                    //tabl.innerHTML = "";
                    querySnapshot.forEach(function (doc) {

                        console.log(doc.id, " => ", doc.data());
                        /* var mq = `${doc.data().MAQUINA}`;*/
                        var cliente = `${doc.data().Cliente}`;


                        //opciones = document.createElement('option');
                        //opciones.setAttribute('value','value1');

                        document.getElementById('centroco').value = cliente;
                        //document.getElementById('numero').value = tlfno;
                        //document.getElementById('ubicacion').value = dire
                        //document.getElementById('codLista').value = listaPrec;

                        /*  tabl.innerHTML += `
                              <tr>
                              <option value="${mq}" >${mq}</option>
                              
                              
                         
                  
                        
                          </tr>
                          `*/



                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });

            //-----------------------------------------


            //-----------------------------------------

        } else {

            console.log('loguese por favor');
            Swal.fire(
                'Debe Loguearse',
                '',
                'error'
            )

        }



    })

    //tabl = document.getElementById("resul11");





    //-----------------------------------------


}


//-----------------------dibujar firma------------
let miCanvas = document.querySelector('#pizarra');
let lineas = [];
let correccionX = 0;
let correccionY = 0;
let pintarLinea = false;
// Marca el nuevo punto
let nuevaPosicionX = 0;
let nuevaPosicionY = 0;

let posicion = miCanvas.getBoundingClientRect()
correccionX = posicion.x;
correccionY = posicion.y;

miCanvas.width = 300;
miCanvas.height = 200;

//======================================================================
// FUNCIONES
//======================================================================

/**
 * Funcion que empieza a dibujar la linea
 */
function empezarDibujo () {
    pintarLinea = true;
    lineas.push([]);
};

/**
 * Funcion que guarda la posicion de la nueva línea
 */
function guardarLinea() {
    lineas[lineas.length - 1].push({
        x: nuevaPosicionX,
        y: nuevaPosicionY
    });
}

/**
 * Funcion dibuja la linea
 */
function dibujarLinea (event) {
    event.preventDefault();
    if (pintarLinea) {
        let ctx = miCanvas.getContext('2d')
        // Estilos de linea
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.lineWidth = 10;
        // Color de la linea
        ctx.strokeStyle = '#000';
        // Marca el nuevo punto
        if (event.changedTouches == undefined) {
            // Versión ratón
            nuevaPosicionX = event.layerX;
            nuevaPosicionY = event.layerY;
        } else {
            // Versión touch, pantalla tactil
            nuevaPosicionX = event.changedTouches[0].pageX - correccionX;
            nuevaPosicionY = event.changedTouches[0].pageY - correccionY;
        }
        // Guarda la linea
        guardarLinea();
        // Redibuja todas las lineas guardadas
        ctx.beginPath();
        lineas.forEach(function (segmento) {
            ctx.moveTo(segmento[0].x, segmento[0].y);
            segmento.forEach(function (punto, index) {
                ctx.lineTo(punto.x, punto.y);
            });
        });
        ctx.stroke();
    }
}

/**
 * Funcion que deja de dibujar la linea
 */
function pararDibujar () {
    pintarLinea = false;
    guardarLinea();
}

//======================================================================
// EVENTOS
//======================================================================

// Eventos raton
miCanvas.addEventListener('mousedown', empezarDibujo, false);
miCanvas.addEventListener('mousemove', dibujarLinea, false);
miCanvas.addEventListener('mouseup', pararDibujar, false);

// Eventos pantallas táctiles
miCanvas.addEventListener('touchstart', empezarDibujo, false);
miCanvas.addEventListener('touchmove', dibujarLinea, false);


/*var limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", function () {
    miCanvas.width = miCanvas.width;
}, false);*/

/*function Limpiar() {
    var canvas = document.getElementById("pizarra");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
*/
function Limpiar() {

    $(document).ready(function () {
        var refreshId = setInterval(function () {
            $('#pizarra').load('epp.js');//actualizas el div
        }, 1000);
    });

}


function download() {
    var download = document.getElementById("download");
    var image = document.getElementById("pizarra").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    //download.setAttribute("download","archive.png");

    document.getElementById('ficheroF').style.display = 'block';
    /*if (document.getElementById('emple').value != '' && document.getElementById('tarje').value != '') {

        var download = document.getElementById("download");
        var image = document.getElementById("pizarra").toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);
        //download.setAttribute("download","archive.png");

        document.getElementById('fichero').style.display = 'block';
    } else {
        alert('complete la información...');
    } */
}

descargar = function convertCanvasToImgElement() {
    var imgElement = ReImg.fromCanvas(document.querySelector('canvas')).toImg();

    var output = document.querySelector('.output');
    output.innerText = '';
    output.appendChild(imgElement);
    download(imgElement);

}