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


/*auth.onAuthStateChanged(user => {
  if (user) {
 
      let ingreso = user.email;
 
      document.getElementById('mailUser').value = ingreso;
 
      //-----------------------------------------
 
  } else {
 
      console.log('loguese por favor');
      Swal.fire(
          'Debe Loguearse',
          '',
          'error'
      )
      //window.location.href = 'index.html'
 
  }
 
 
 
})*/


function consultarFechasInfo() {


    var fecha1 = document.getElementById('fechaInfo').value;
    var documentos = document.getElementById('queryDoc').value;


    db.collection("RegistroInforme").where("Fecha", "==", fecha1).where("Documento", "==", documentos)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());

                Swal.fire(
                    'Consulta exitosa!!',
                    '',
                    'success'
                  )


                Fecha = `${doc.data().Fecha}`;
                Nombre = `${doc.data().Nombre}`;

                Nits = `${doc.data().Nit}`;
                CentroCostos = `${doc.data().CentroCostos}`;
                Documentos = `${doc.data().Documento}`;
                Latitud = `${doc.data().Latitud}`;
                Longitud = `${doc.data().Longitud}`;
                Registra = `${doc.data().Registra}`;

                document.getElementById('nombre').value = Nombre;
                //document.getElementById('documento').value = Documentos;
                document.getElementById('centrocos').value = CentroCostos;
                //document.getElementById('nit1').value = Nits;
                document.getElementById('registra').value = Registra;
                iniciarMap();

            });

        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    //-------------------------------------


}

function iniciarMap() {

    variableLat = Number(Latitud);
    variableLng = Number(Longitud);
    var coord = { lat: variableLat, lng: variableLng };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}