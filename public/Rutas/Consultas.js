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



function consultarFechas() {



            //-----------------------------------


            var fecha1 = document.getElementById('fecha').value;
            //var fecha2 = document.getElementById('fecha2').value;
            var tabl23 = document.getElementById("tabla");

            dataSet = new Array();
            var i = 1;

            db.collection("Rutas").where("FecIni", ">=", fecha1)//.where("FecIni", "<=", fecha2)
                .get()
                .then(function (querySnapshot) {
                    tabl23.innerHTML = "";
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        /*Swal.fire(
                          'Consulta exitosa!!!',
                          '',
                          'success'
                        )*/
                        var Documento = `${doc.data().Documento}`;
                        var Costos1 = `${doc.data().Costos1}`;
                        var Costos2 = `${doc.data().Costos2}`;
                        var Costos3 = `${doc.data().Costos3}`;
                        var Costos4 = `${doc.data().Costos4}`;
                        var Costos5 = `${doc.data().Costos5}`;
                        var Costos6 = `${doc.data().Costos6}`;
                        var Costos7 = `${doc.data().Costos7}`;
                        var Costos8 = `${doc.data().Costos8}`;
                        var Costos9 = `${doc.data().Costos9}`;
                        var Costos10 = `${doc.data().Costos10}`;
                        var Costos11 = `${doc.data().Costos11}`;
                        var Costos12 = `${doc.data().Costos12}`;
                        var Costos13 = `${doc.data().Costos13}`;
                        var Costos14 = `${doc.data().Costos14}`;
                        var Costos15 = `${doc.data().Costos15}`;
                        var Costos16 = `${doc.data().Costos16}`;
                        var Costos17 = `${doc.data().Costos17}`;
                        var Costos18 = `${doc.data().Costos18}`;
                        var Costos19 = `${doc.data().Costos19}`;
                        var Costos20 = `${doc.data().Costos20}`;
                        var Empleado = `${doc.data().Empleado}`;
                        var FecFin = `${doc.data().FecFin}`;
                        var FecIni = `${doc.data().FecIni}`;


                        /* if (isNaN(Valor1)) {
                           Valor1 = 0;
                         }
                         if (isNaN(Valor2)) {
                           Valor2 = 0;
                         }
                         if (isNaN(Valor3)) {
                           Valor3 = 0;
                         }
                         if (isNaN(Valor4)) {
                           Valor4 = 0;
                         }
                         if (isNaN(Valor5)) {
                           Valor5 = 0;
                         }*/

                        /*var total1 = Valor1 * Canti1;
                        var total2 = Valor2 * Canti2;
                        var total3 = Valor3 * Canti3;
                        var total4 = Valor4 * Canti4;
                        var total5 = Valor5 * Canti5;
            
                        var TotalSuma = Number(total1 + total2 + total3 + total4 + total5);*/


                        //-------------------2 parte-------------------------, Reposi1
                       /* if (modificadoX == 'undefined') {
                            modificadoX = '';
                        }*/

                        dataSet.push([Documento,
                            Empleado,
                            FecIni, FecFin, Costos1, Costos2, Costos3, Costos4, Costos5, Costos6, Costos7,
                            Costos8, Costos9, Costos10, Costos11, Costos12, Costos13, Costos14, Costos15, Costos16,
                            Costos17, Costos18, Costos19, Costos20]);

                        i = i + 1;


                        $(document).ready(function () {
                            var tablaSuma = $('#example').DataTable({

                                dom: "Bfrtip",
                                pageLength: 1000,
                                resposive: true,

                                buttons: [
                                    {
                                        extend: "excelHtml5",
                                        text: '<i class="fas fa-file-excel  btn btn-success" ></i>',
                                        tittleAttr: 'Exportar a Excel',
                                        className: 'btn btn-success',
                                        excelStyles:
                                        {
                                            template: 'header_blue'
                                        }

                                    },
                                ],





                                data: dataSet,
                                "bDestroy": true,
                                columnDefs: [{
                                    "defaultContent": "",
                                    "targets": "_all"
                                }],
                                columns: [

                                    { title: "Documento" },
                                    { title: "Empleado" },
                                    { title: "Fecha I" },
                                    { title: "Fecha F" },
                                    { title: "Costos N°1" },
                                    { title: "Costos N°2" },
                                    { title: "Costos N°3" },
                                    { title: "Costos N°4" },
                                    { title: "Costos N°5" },
                                    { title: "Costos N°6" },
                                    { title: "Costos N°7" },

                                    { title: "Costos N°8" },
                                    { title: "Costos N°9" },
                                    { title: "Costos N°10" },
                                    { title: "Costos N°11" },
                                    { title: "Costos N°12" },
                                    { title: "Costos N°13" },
                                    { title: "Costos N°14" },
                                    { title: "Costos N°15" },
                                    { title: "Costos N°16" },

                                    { title: "Costos N°17" },
                                    { title: "Costos N°18" },
                                    { title: "Costos N°19" },
                                    { title: "Costos N°20" },


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





                    });

                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });

            //-------------------------------------


        





}
