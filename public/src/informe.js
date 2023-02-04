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

var fichero;
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


auth.onAuthStateChanged(user => {
    if (user) {

        let ingreso =user.email;

        document.getElementById('mailUser').value=ingreso;

        //-----------------------------------------

    } else {

        console.log('loguese por favor');
        Swal.fire(
            'Debe Loguearse',
            '',
            'error'
        )
        window.location.href='index.html'

    }



})

//------------------logout------------------
const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('ha salido');

        //location.reload();
        window.location.href='index.html'
    })
})



subirImagenAfirebase = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = fichero.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL1='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL1) => {
                console.log('File available at1', downloadURL1);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona = document.getElementById('zona1').value;


                db.collection("ImagenesInforme").add({
                    Url1: downloadURL1,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona1:zona
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

function subirImg() {
    fichero = document.getElementById('fichero');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase();





}

//------------------------imagen 2-----------
subirImagenAfirebase2 = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = fichero2.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL2='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL2) => {
                console.log('File available at1', downloadURL2);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona2 = document.getElementById('zona2').value;


                db.collection("ImagenesInforme").add({
                    Url2: downloadURL2,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona2:zona2
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

function subirImg2() {
    fichero2 = document.getElementById('fichero2');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase2();





}

//---------------------imagen 3------------------
subirImagenAfirebase3 = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = fichero3.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL3='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL3) => {
                console.log('File available at1', downloadURL3);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona3 = document.getElementById('zona3').value;


                db.collection("ImagenesInforme").add({
                    Url3: downloadURL3,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona3:zona3
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

function subirImg3() {
    fichero3 = document.getElementById('fichero3');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase3();





}

//-------------------imagen 4-----------------------
subirImagenAfirebase4 = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = fichero4.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL4='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL4) => {
                console.log('File available at1', downloadURL4);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona4 = document.getElementById('zona4').value;


                db.collection("ImagenesInforme").add({
                    Url4: downloadURL4,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona4:zona4
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

function subirImg4() {
    fichero4 = document.getElementById('fichero4');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase4();





}

//----------------imagen 5------------------------
subirImagenAfirebase5 = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = fichero5.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL5='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL5) => {
                console.log('File available at1', downloadURL5);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona5 = document.getElementById('zona5').value;


                db.collection("ImagenesInforme").add({
                    Url5: downloadURL5,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona5:zona5
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

function subirImg5() {
    fichero5 = document.getElementById('fichero5');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase5();


}

//---------------imagen 6------------------------
subirImagenAfirebase6 = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = fichero6.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL5='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL6) => {
                console.log('File available at1', downloadURL6);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona6 = document.getElementById('zona6').value;


                db.collection("ImagenesInforme").add({
                    Url6: downloadURL6,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona6:zona6
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

function subirImg6() {
    fichero6 = document.getElementById('fichero6');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase6();


}
//---------------imagen 7-------------------------
subirImagenAfirebase7 = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = fichero7.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL5='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL7) => {
                console.log('File available at1', downloadURL7);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona7 = document.getElementById('zona7').value;

                db.collection("ImagenesInforme").add({
                    Url7: downloadURL7,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona7:zona7,
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

function subirImg7() {
    fichero7 = document.getElementById('fichero7');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase7();


}

//---------------imagen 8------------------------
subirImagenAfirebase8 = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = fichero8.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL5='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL8) => {
                console.log('File available at1', downloadURL8);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona8 = document.getElementById('zona8').value;

                db.collection("ImagenesInforme").add({
                    Url8: downloadURL8,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona8:zona8,
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

function subirImg8() {
    fichero8 = document.getElementById('fichero8');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase8();


}

//----------------imagen 9----------------------
subirImagenAfirebase9 = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = fichero9.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL5='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL9) => {
                console.log('File available at1', downloadURL9);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona9 = document.getElementById('zona9').value;

                db.collection("ImagenesInforme").add({
                    Url9: downloadURL9,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona9:zona9,
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

function subirImg9() {
    fichero9 = document.getElementById('fichero9');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase9();


}

//----------------imagen 10---------------------
subirImagenAfirebase10 = function () {
    //alert('subir');
    
    var imagenASubir;
    var imagenASubir = fichero10.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL5='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL10) => {
                console.log('File available at1', downloadURL10);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona10 = document.getElementById('zona10').value;

                db.collection("ImagenesInforme").add({
                    Url10: downloadURL10,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona10:zona10,
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

function subirImg10() {
    fichero10 = document.getElementById('fichero10');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase10();


}

//--------------------------imagen 11------------------------
subirImagenAfirebase11 = function () {
    //alert('subir');
    if(fichero11){
        fichero11=fichero11;
    }else{
        fichero11='vacio';
    }
    var imagenASubir;
    var imagenASubir = fichero11.files[0];
    var uploadTask = storageRef.child('FQ/' + imagenASubir.name + '-' + new Date()).put(imagenASubir);

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
            var downloadURL5='vacio'; 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL11) => {
                console.log('File available at1', downloadURL11);
                var documento = document.getElementById('documento').value;
                var nit = document.getElementById('nit').value;
                var fecha = document.getElementById('fecha').value;
                var zona11 = document.getElementById('zona11').value;

                db.collection("ImagenesInforme").add({
                    Url11: downloadURL11,
                    Documento: documento,
                    Nit:nit,
                    Fecha:fecha,
                    Zona11:zona11,
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


                db.collection("ImagenesFirmasInfor").add({
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

function subirImg11() {
    fichero11 = document.getElementById('fichero11');

    //fichero.addEventListener('onclick', subirImagenAfirebase, false);
    subirImagenAfirebase11();


}

function testSplit(){
    /*var centrocos=document.getElementById('centroco').value;
    var divisiones = parseInt(centrocos.split(" ", 1)) ;
    console.log(typeof divisiones)*/
    //console.log("Blue Whale".indexOf("rojo"))
    var one="HOLA";
    var dos="OLGA";
    var test=one.indexOf("OL");
    console.log(test);

}

function Registrar(){

    if(document.getElementById('nombre').value!='' && document.getElementById('centroco').value!='' && document.getElementById('fecha').value!='' && document.getElementById('zona1').value!='' && document.getElementById('estado1').value!='' && document.getElementById('concep1').value!='' && document.getElementById('estad1').value!=''){ 

        if (confirm("Seguro que desea continuar con el registro?")) {

            // inicializo variable checkbox

            let cb1=false;
            let cb2=false;
            let cb3=false;
            let cb4=false;
            let cb5=false;
            let cb6=false;
            let cb7=false;
            let cb8=false;
            let cb9=false;
            let cb10=false;
            let cb11=false;


            var documento=document.getElementById('documento').value;
            var nombre=document.getElementById('nombre').value;
            var nit= document.getElementById('nit').value;
            var centrocos=document.getElementById('centroco').value;
            var fecha=document.getElementById('fecha').value;
        
            var zon1=document.getElementById('zona1').value;
            var estado1=document.getElementById('estado1').value;
            
            var zon2=document.getElementById('zona2').value;
            var estado2=document.getElementById('estado2').value;
            
            var zon3=document.getElementById('zona3').value;
            var estado3=document.getElementById('estado3').value;
            
            var zon4=document.getElementById('zona4').value;
            var estado4=document.getElementById('estado4').value;
            
            var zon5=document.getElementById('zona5').value;
            var estado5=document.getElementById('estado5').value;
            
            var zon6=document.getElementById('zona6').value;
            var estado6=document.getElementById('estado6').value;
            
            var zon7=document.getElementById('zona7').value;
            var estado7=document.getElementById('estado7').value;
            
            var zon8=document.getElementById('zona8').value;
            var estado8=document.getElementById('estado8').value;
            
            var zon9=document.getElementById('zona9').value;
            var estado9=document.getElementById('estado9').value;
            
            var zon10=document.getElementById('zona10').value;
            var estado10=document.getElementById('estado10').value;
            
            var zon11=document.getElementById('zona11').value;
            var estado11=document.getElementById('estado11').value;
        
            //------------segundo informe-------------------------
            var concepto1=document.getElementById('concep1').value;
            var estatus1=document.getElementById('estad1').value;
            var concepto2=document.getElementById('concep2').value;
            var estatus2=document.getElementById('estad2').value;
            var concepto3=document.getElementById('concep3').value;
            var estatus3=document.getElementById('estad3').value;
            var concepto4=document.getElementById('concep4').value;
            var estatus4=document.getElementById('estad4').value;
            var concepto5=document.getElementById('concep5').value;
            var estatus5=document.getElementById('estad5').value;
            var concepto6=document.getElementById('concep6').value;
            var estatus6=document.getElementById('estad6').value;
            var concepto7=document.getElementById('concep7').value;
            var estatus7=document.getElementById('estad7').value;
            var concepto8=document.getElementById('concep8').value;
            var estatus8=document.getElementById('estad8').value;
            var concepto9=document.getElementById('concep9').value;
            var estatus9=document.getElementById('estad9').value;
            var concepto10=document.getElementById('concep10').value;
            var estatus10=document.getElementById('estad10').value;
            var concepto11=document.getElementById('concep11').value;
            var estatus11=document.getElementById('estad11').value;
            var concepto12=document.getElementById('concep12').value;
            var estatus12=document.getElementById('estad12').value;
        
            var fechaLarge= new Date();
            var ingreso=document.getElementById('mailUser').value;

            var divisiones = String(centrocos.split(" ", 1)) ;

            if (document.getElementById('cb1').checked) {
                cb1 = true;
            }
            if (document.getElementById('cb2').checked) {
                cb2 = true;
            }
            if (document.getElementById('cb3').checked) {
                cb3 = true;
            }
            if (document.getElementById('cb4').checked) {
                cb4 = true;
            }
            if (document.getElementById('cb5').checked) {
                cb5 = true;
            }
            if (document.getElementById('cb6').checked) {
                cb6 = true;
            }
            if (document.getElementById('cb7').checked) {
                cb7 = true;
            }
            if (document.getElementById('cb8').checked) {
                cb8 = true;
            }
            if (document.getElementById('cb9').checked) {
                cb9 = true;
            }
            if (document.getElementById('cb10').checked) {
                cb10 = true;
            }
            if (document.getElementById('cb11').checked) {
                cb11 = true;
            }

             //--------------------firma--------------------
             ficheroF = document.getElementById('ficheroF');

             //fichero.addEventListener('onclick', subirImagenAfirebase, false);
             subirImagenAfirebaseFirma();
             //---------------------------------------------
        
            db.collection("RegistroInforme").add({
                Cb1:cb1,
                Cb2:cb2,
                Cb3:cb3,
                Cb4:cb4,
                Cb5:cb5,
                Cb6:cb6,
                Cb7:cb7,
                Cb8:cb8,
                Cb9:cb9,
                Cb10:cb10,
                Cb11:cb11,
                Registra:ingreso,
                Documento: documento,
                Nombre: nombre,
                Nit:divisiones,
                CentroCostos:centrocos,
                Fecha2:fechaLarge,
                Fecha:fecha,
                Zona1:zon1,
                Estado1:estado1,
                Zona2:zon2,
                Estado2:estado2,
                Zona3:zon3,
                Estado3:estado3,
                Zona4:zon4,
                Estado4:estado4,
                Zona5:zon5,
                Estado5:estado5,
                Zona6:zon6,
                Estado6:estado6,
                Zona7:zon7,
                Estado7:estado7,
                Zona8:zon8,
                Estado8:estado8,
                Zona9:zon9,
                Estado9:estado9,
                Zona10:zon10,
                Estado10:estado10,
                Zona11:zon11,
                Estado11:estado11,

                Latitud: latitud,
                Longitud: longitud,
                Ubicacion: NameCity,
        
                //-----------2da parte---
                concepto1:concepto1,
                EstatusInforme1:estatus1,
                concepto2:concepto2,
                EstatusInforme2:estatus2,
                concepto3:concepto3,
                EstatusInforme3:estatus3,
                concepto4:concepto4,
                EstatusInforme4:estatus4,
                concepto5:concepto5,
                EstatusInforme5:estatus5,
                concepto6:concepto6,
                EstatusInforme6:estatus6,
                concepto7:concepto7,
                EstatusInforme7:estatus7,
                concepto8:concepto8,
                EstatusInforme8:estatus8,
                concepto9:concepto9,
                EstatusInforme9:estatus9,
                concepto10:concepto10,
                EstatusInforme10:estatus10,
                concepto11:concepto11,
                EstatusInforme11:estatus11,
                concepto12:concepto12,
                EstatusInforme12:estatus12,
        
        
        
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                Swal.fire(
                    'Registro Exitoso!!!',
                    'Ha completado el registro del formato..',
                    'success'
                )
                setInterval("location.reload()", 3000)
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        
        

        }else{

        }

    }else{
        Swal.fire(
            'Complete los campos',
            '',
            'error'
        )
    }


   
}

function Documento(val) {

    val2=String(val);

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


}
function Calcular(){

    let estatus1=Number(document.getElementById('estad1').value);
    let estatus2=Number(document.getElementById('estad2').value) ;
    let estatus3=Number(document.getElementById('estad3').value) ;
    let estatus4=Number(document.getElementById('estad4').value) ;
    let estatus5=Number(document.getElementById('estad5').value) ;
    let estatus6=Number(document.getElementById('estad6').value) ;
    var estatus7=Number(document.getElementById('estad7').value) ;
    var estatus8=Number(document.getElementById('estad8').value) ;
    var estatus9=Number(document.getElementById('estad9').value) ;
    var estatus10=Number(document.getElementById('estad10').value) ;
    var estatus11=Number(document.getElementById('estad11').value) ;
    var estatus12=Number(document.getElementById('estad12').value) ;

    
        
    contador=0;
    if(estatus1!=0 ){
     contador++;
    }
    if(estatus2!=0){
     contador++;
    }
    if(estatus3!=0){
     contador++;
    }
    if(estatus4!=0){
     contador++;
    }
    if(estatus5!=0){
     contador++;
    }
    if(estatus6!=0){
     contador++;
    }
    if(estatus7!=0){
     contador++;
    }
    if(estatus8!=0){
     contador++;
    }
    if(estatus9!=0){
     contador++;
    }
    if(estatus10!=0){
     contador++;
    }
    if(estatus11!=0){
     contador++;
    }
    if(estatus12!=0){
     contador++;
    }

    //console.log('el numero es'+contador);
    var promedio = (estatus1 + estatus2 + estatus3 + estatus4 + estatus5 + estatus6 + estatus7 + estatus8 + estatus9 + estatus10 + estatus11 + estatus12)/contador;

    document.getElementById('calif').value=promedio;

}

function Nit(val) {

//tabl = document.getElementById("resul11");
val3=String(val);

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