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

//------------------logout------------------
const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('ha salido');

        location.reload();
    })
})

//----------------login-----------------
const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const email = document.querySelector('#login-email').value;
    const pasword = document.querySelector('#login-password').value;

    //console.log(email, pasword);

    auth.signInWithEmailAndPassword(email, pasword)
        .then(userCredential => {

            signinForm.reset();
            $('#signinModal').modal('hide');
            console.log('si funciona');
            document.getElementById('entrar').style.display = 'none';
            let autorizadoPor = email;
            document.getElementById('usuarioIni').value = autorizadoPor;

        })


});

//-------------registro------------
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const email = document.querySelector('#signup-email').value;
    const pasword = document.querySelector('#signup-password').value;

    //console.log(email, pasword);

    auth.createUserWithEmailAndPassword(email, pasword)
        .then(userCredential => {

            signupForm.reset();
            $('#signupModal').modal('hide');
            console.log('si funciona');


        })


});


function Registrar() {

    auth.onAuthStateChanged((user) => {
        if (user) {

            if (document.getElementById('centroCostos').value != '' && document.getElementById('maquinaria1').value != '' && document.getElementById('cantidad1').value != '') {

                let costos = document.getElementById('centroCostos').value;
                let maquina1 = document.getElementById('maquinaria1').value;
                let maquina2 = document.getElementById('maquinaria2').value;
                let maquina3 = document.getElementById('maquinaria3').value;
                let maquina4 = document.getElementById('maquinaria4').value;
                let numCaso = document.getElementById('caso').value;
                let estado = 'Activo';
                let fecha = new Date();

                let cantidad1 = document.getElementById('cantidad1').value;
                let cantidad2 = document.getElementById('cantidad2').value;
                let cantidad3 = document.getElementById('cantidad3').value;
                let cantidad4 = document.getElementById('cantidad4').value;

                let insumo1 = document.getElementById('Insumo1').value;
                let insumo2 = document.getElementById('Insumo2').value;
                let insumo3 = document.getElementById('Insumo3').value; 
                let insumo4 = document.getElementById('Insumo4').value;

                let cantidadIn1 = document.getElementById('cantidadIn1').value;
                let cantidadIn2 = document.getElementById('cantidadIn2').value;
                let cantidadIn3 = document.getElementById('cantidadIn3').value;
                let cantidadIn4 = document.getElementById('cantidadIn4').value;



                db.collection("Maquinarias").add({
                    CentroCostos: costos,
                    Maquinaria1: maquina1,
                    Maquinaria2: maquina2,
                    Maquinaria3: maquina3,
                    Maquinaria4: maquina4,
                    Caso: Number(numCaso),
                    Estado: estado,
                    Fecha: fecha,
                    Cantidad1:cantidad1,
                    Cantidad2:cantidad2,
                    Cantidad3:cantidad3,
                    Cantidad4:cantidad4,
                    Insumo1:insumo1,
                    Insumo2:insumo2,
                    Insumo3:insumo3,
                    Insumo4:insumo4,
                    CantidadInsu1:cantidadIn1,
                    CantidadInsu2:cantidadIn2,
                    CantidadInsu3:cantidadIn3,
                    CantidadInsu4:cantidadIn4,

                })
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                        Swal.fire(
                            'Registro Exitoso!!!',
                            'Ha completado el registro exitosamente..',
                            'success'
                        )
                        setInterval("location.reload()", 3000);
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });

            } else {
                Swal.fire("Por Favor Complete los campos", "", "error");

            }




        } else {
            console.log("loguese por favor");
            Swal.fire("Debe Loguearse", "", "error");
        }
    });

}
window.onload = inicializar;


//---------------Actualizar numero de registro

function inicializar() {

    /* fichero = document.getElementById('fichero');
     fichero.addEventListener('change', subirImagenAfirebase, false);
 
     storageRef = firebase.storage().ref();*/


    auth.onAuthStateChanged(user => {
        if (user) {
            document.getElementById('logout').style.display = 'block';
            document.getElementById('entrar').style.display = 'none';
            autorizadoPor = user.email;
            document.getElementById('usuarioIni').value = autorizadoPor;
            db.collection("Maquinarias").where("Caso", ">", 0).orderBy("Caso", "asc")
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        //console.log(doc.id, " => ", doc.data());
                        var caso = Number(`${doc.data().Caso}`);
                        //var casoNuevo = 0;
                        // var casoNuevo = Number(caso + 1);
                        //---------------------------------------------------------------------------------
                        //var casoNuevo = 0;
                        //var casoNuevo = Number(caso + 1);
                        caso++;

                        //console.log(caso);
                        //alert(casoNuevo)
                        // document.getElementById('caso').value = casoNuevo;
                        document.getElementById('caso').value = caso;

                        //--------------------------------------------------------------------------------

                        //console.log(casoNuevo);
                        // document.getElementById('caso').value = casoNuevo;

                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });

        } else {
            console.log('loguese por favor');
            Swal.fire(
                'Debe Loguearse',
                '',
                'error'
            )
            document.getElementById('entrar').style.display = 'block';
            document.getElementById('logout').style.display = 'none';
        }
    })


}

function Consultar() {

    auth.onAuthStateChanged((user) => {
        if (user) {

            let numeroCaso = Number(document.getElementById('consulta').value);




            db.collection("Maquinarias").where("Caso", "==", numeroCaso)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        //console.log(doc.id, " => ", doc.data());
                        let centroCostos = `${doc.data().CentroCostos}`;
                        let maquina1 = `${doc.data().Maquinaria1}`;
                        let maquina2 = `${doc.data().Maquinaria2}`;
                        let maquina3 = `${doc.data().Maquinaria3}`;
                        let maquina4 = `${doc.data().Maquinaria4}`;
                        let Caso = Number(`${doc.data().Caso}`);

                        let Cantidad1 = `${doc.data().Cantidad1}`;
                        let Cantidad2 = `${doc.data().Cantidad2}`;
                        let Cantidad3 = `${doc.data().Cantidad3}`;
                        let Cantidad4 = `${doc.data().Cantidad4}`;

                        let CantidadInsu1 = `${doc.data().CantidadInsu1}`;
                        let CantidadInsu2 = `${doc.data().CantidadInsu2}`;
                        let CantidadInsu3 = `${doc.data().CantidadInsu3}`;
                        let CantidadInsu4 = `${doc.data().CantidadInsu4}`;

                        let Insumo1 = `${doc.data().Insumo1}`;
                        let Insumo2 = `${doc.data().Insumo2}`;
                        let Insumo3 = `${doc.data().Insumo3}`;
                        let Insumo4 = `${doc.data().Insumo4}`;

                        document.getElementById('centroCostos').value = centroCostos;
                        document.getElementById('maquinaria1').value = maquina1;
                        document.getElementById('maquinaria2').value = maquina2;
                        document.getElementById('maquinaria3').value = maquina3;
                        document.getElementById('maquinaria4').value = maquina4;
                        document.getElementById('caso').value = Caso;

                         document.getElementById('cantidad1').value=Cantidad1;
                         document.getElementById('cantidad2').value=Cantidad2;
                         document.getElementById('cantidad3').value=Cantidad3;
                         document.getElementById('cantidad4').value=Cantidad4;


                         document.getElementById('Insumo1').value=Insumo1;
                         document.getElementById('Insumo2').value=Insumo2;
                         document.getElementById('Insumo3').value=Insumo3; 
                         document.getElementById('Insumo4').value=Insumo4;
         
                         document.getElementById('cantidadIn1').value=CantidadInsu1;
                         document.getElementById('cantidadIn2').value=CantidadInsu2;
                         document.getElementById('cantidadIn3').value=CantidadInsu3;
                         document.getElementById('cantidadIn4').value=CantidadInsu4;


                        elimi = function () {
                            let estadoActu='Eliminado';
                            var washingtonRef = db.collection("Maquinarias").doc(doc.id);

                            // Set the "capital" field of the city 'DC'
                            return washingtonRef.update({
                                Estado: estadoActu
                            })
                                .then(() => {
                                    console.log("Document successfully updated!");
                                    Swal.fire(
                                        'Eliminacion Exitosa!!!',
                                        'Ha eliminado el documento  '+doc.id,
                                        'success'
                                    )
                                    setInterval("location.reload()", 3000);
                                })
                                .catch((error) => {
                                    // The document probably doesn't exist.
                                    console.error("Error updating document: ", error);
                                });
                        }
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });






        } else {
            console.log("loguese por favor");
            Swal.fire("Debe Loguearse", "", "error");
        }
    });
}


function Eliminar() {

    auth.onAuthStateChanged(user => {

        if (user) {

            if (confirm("Seguro que desea ELIMINAR el registro?")) {
                elimi();
            } else {

            }

        } else {
            console.log('loguese por favor');

            document.getElementById('entrar').style.display = 'block';
            document.getElementById('logout').style.display = 'none';
            Swal.fire(
                'Debe Loguearse',
                '',
                'error'
            )

        }


    })


}
