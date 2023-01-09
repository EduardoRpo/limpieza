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
    contador1=0;
    contador2=0;
    contador3=0;
    contador4=0;
    contador5=0;
    contador6=0;
    contador7=0;
    contador8=0;
    contador9=0;
    contador10=0;
    contador11=0;
    contador12=0;
    contador13=0;
    contador14=0;
    contador15=0;
    contador16=0;
    contador17=0;
    contador18=0;
    contador19=0;
    contador20=0;

    db.collection("Rutas").where("FecIni", ">=", '2023-01-01').get().then(function (querySnapshot) {
        tabl23.innerHTML = "";
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            /*Swal.fire(
              'Consulta exitosa!!!',
              '',
              'success'
            )*/
            let Documento = `${doc.data().Documento}`;
            let Costos1 = `${doc.data().Costos1}`;
            let Costos2 = `${doc.data().Costos2}`;
            let Costos3 = `${doc.data().Costos3}`;
            let Costos4 = `${doc.data().Costos4}`;
            let Costos5 = `${doc.data().Costos5}`;
            let Costos6 = `${doc.data().Costos6}`;
            let Costos7 = `${doc.data().Costos7}`;
            let Costos8 = `${doc.data().Costos8}`;
            let Costos9 = `${doc.data().Costos9}`;
            let Costos10 = `${doc.data().Costos10}`;
            let Costos11 = `${doc.data().Costos11}`;
            let Costos12 = `${doc.data().Costos12}`;
            let Costos13 = `${doc.data().Costos13}`;
            let Costos14 = `${doc.data().Costos14}`;
            let Costos15 = `${doc.data().Costos15}`;
            let Costos16 = `${doc.data().Costos16}`;
            let Costos17 = `${doc.data().Costos17}`;
            let Costos18 = `${doc.data().Costos18}`;
            let Costos19 = `${doc.data().Costos19}`;
            let Costos20 = `${doc.data().Costos20}`;

            let Visita1 = `${doc.data().Visita1}`;
            let Visita2 = `${doc.data().Visita2}`;
            let Visita3 = `${doc.data().Visita3}`;
            let Visita4 = `${doc.data().Visita4}`;
            let Visita5 = `${doc.data().Visita5}`;
            let Visita6 = `${doc.data().Visita6}`;
            let Visita7 = `${doc.data().Visita7}`;
            let Visita8 = `${doc.data().Visita8}`;
            let Visita9 = `${doc.data().Visita9}`;
            let Visita10 = `${doc.data().Visita10}`;
            let Visita11 = `${doc.data().Visita11}`;
            let Visita12 = `${doc.data().Visita12}`;
            let Visita13 = `${doc.data().Visita13}`;
            let Visita14 = `${doc.data().Visita14}`;
            let Visita15 = `${doc.data().Visita15}`;
            let Visita16 = `${doc.data().Visita16}`;
            let Visita17 = `${doc.data().Visita17}`;
            let Visita18 = `${doc.data().Visita18}`;
            let Visita19 = `${doc.data().Visita19}`;
            let Visita20 = `${doc.data().Visita20}`;

            let fechaIni = `${doc.data().FecIni}`;


            db.collection("RegistroInforme").where("Documento", "==", Documento).where("Fecha",">=",'2022-01-01').orderBy('Fecha', 'asc').limit(1)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data()); 

                        let CentroCostos = `${doc.data().CentroCostos}`;

                        if(CentroCostos==Costos1){
                            contador1++;
                        }
                        if(CentroCostos==Costos2){
                            contador2++;
                        }
                        if(CentroCostos==Costos3){
                            contador3++;
                        }
                        if(CentroCostos==Costos4){
                            contador4++;
                        }
                        if(CentroCostos==Costos5){
                            contador5++;
                        }
                        if(CentroCostos==Costos6){
                            contador6++;
                        }
                        if(CentroCostos==Costos7){
                            contador7++;
                        }
                        if(CentroCostos==Costos8){
                            contador8++;
                        }
                        if(CentroCostos==Costos9){
                            contador9++;
                        }
                        if(CentroCostos==Costos10){
                            contador10++;
                        }
                        if(CentroCostos==Costos11){
                            contador11++;
                        }
                        if(CentroCostos==Costos12){
                            contador12++;
                        }
                        if(CentroCostos==Costos13){
                            contador13++;
                        }
                        if(CentroCostos==Costos14){
                            contador14++;
                        }
                        if(CentroCostos==Costos15){
                            contador15++;
                        }
                        if(CentroCostos==Costos16){
                            contador16++;
                        }
                        if(CentroCostos==Costos17){
                            contador17++;
                        }
                        if(CentroCostos==Costos18){
                            contador18++;
                        }
                        if(CentroCostos==Costos19){
                            contador19++;
                        }
                        if(CentroCostos==Costos20){
                            contador20++;
                        }









                        dataSet.push([Documento,fechaIni, '%cumplimiento', Costos1, Visita1, contador1, Costos2, Visita2, contador2, Costos3, Visita3, contador3, Costos4, Visita4, contador4, Costos5, Visita5, contador5, Costos6, Visita6, contador6, Costos7, Visita7, contador7, Costos8, Visita8, contador8, Costos9, Visita9, contador9, Costos10, Visita10, contador10, Costos11, Visita11, contador11, Costos12, Visita12, contador12, Costos13, Visita13, contador13, Costos14, Visita14, contador14, Costos15, Visita15, contador15, Costos16, Visita16, contador16, Costos17, Visita17, contador17, Costos18, Visita18, contador18, Costos19, Visita19, contador19, Costos20, Visita20, contador20]);
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

                                    { title: "Documento" },
                                    { title: "Fecha Inicio" },
                                    { title: "% Cumplimiento" },
                                    { title: "CC1" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC2" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC3" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC4" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC5" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC6" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC7" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC8" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC9" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC10" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC11" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC12" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC13" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC14" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC15" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC16" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC17" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC18" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC19" },
                                    { title: "Meta" },
                                    { title: "Visitas" },
                                    { title: "CC20" },
                                    { title: "Meta" },
                                    { title: "Visitas" },



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

        });
    })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    //-------------------


}

