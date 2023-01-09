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

function Mostrar() {
    var tabl23 = document.getElementById("tabla");


    dataSet = new Array();
    var i = 1;

    db.collection("Maquinarias").get().then(function (querySnapshot) {
        tabl23.innerHTML = "";
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            /*Swal.fire(
              'Consulta exitosa!!!',
              '',
              'success'
            )*/
            let centroCostos = `${doc.data().CentroCostos}`;
            let maquina1 = `${doc.data().Maquinaria1}`;
            let maquina2 = `${doc.data().Maquinaria2}`;
            let maquina3 = `${doc.data().Maquinaria3}`;
            let maquina4 = `${doc.data().Maquinaria4}`;
            let Caso = `${doc.data().Caso}`;
            let estado = `${doc.data().Estado}`;





            dataSet.push([Caso, centroCostos, maquina1, maquina2, maquina3,maquina4,estado]);
            //console.log('usuario:' + usuario + '-' + 'modificado:' + modificadoX + '-' + 'fecha' + Fecha);

            i = i + 1;


            $(document).ready(function () {
                var tablaSuma = $('#example').DataTable({

                    dom: "Bfrtip",
                    pageLength: 50,
                    resposive: true,

                  





                    data: dataSet,
                    "bDestroy": true,
                    columnDefs: [{
                        "defaultContent": "",
                        "targets": "_all"
                    }],
                    columns: [

                        { title: "N° Registro" },
                        { title: "Centro Costos" },
                        { title: "MQ1" },
                        { title: "MQ2" },
                        { title: "MQ3" },
                        { title: "MQ4" },
                        { title: "Estado" },



                    ],


                    //para cambiar el lenguaje a español
                    "language": {
                        "lengthMenu": "Mostrar _MENU_ registros",
                        "zeroRecords": "No se encontraron resultados",
                        "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                        "sSearch": "Buscar:",
                        "oPaginate": {
                            "sFirst": "Primero",
                            "sLast": "Último",
                            "sNext": "Siguiente",
                            "sPrevious": "Anterior"
                        },

                        "sProcessing": "Procesando...",

                    }

                });


            });
            //info2daParte();






        });
        Swal.fire(
            'Cargado datos!!',
            'Se puede demorar unos segundos...',
            'success'
        )

    })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    //-------------------------------------



}

