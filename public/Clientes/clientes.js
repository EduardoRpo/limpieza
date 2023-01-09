
var email = '1013375958@mail.com';
var email_analizado = /^([^]+)@(\w+).(\w+)$/.exec(email);
var [, nombre, servidor, dominio] = email_analizado;
console.log('Nombre del usuario: ' + nombre);
//console.log('Servidor de Correo: ' + servidor);
//console.log('Dominio: ' + dominio);

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

auth.onAuthStateChanged(user => {
    if (user) {

        ingreso = user.email;

        document.getElementById('usuario').value = ingreso;

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

info2daParte = function () {



    //-----------------------------------
    var email = document.getElementById('usuario').value;
    var email_analizado = /^([^]+)@(\w+).(\w+)$/.exec(email);
    var [, nombre, servidor, dominio] = email_analizado;
    console.log('Nombre del usuario: ' + nombre);


    var fecha1 = document.getElementById('fechaInfo').value;
    var fecha2 = document.getElementById('fechaInfo2').value;
    var tabl23 = document.getElementById("tabla4");


    dataSet = new Array();
    var i = 1;

    db.collection("RegistroInforme").where("Fecha", ">=", fecha1).where("Fecha", "<=", fecha2).where("Nit","==",nombre)
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
                Swal.fire(
                    'Consulta exitosa!!',
                    '',
                    'success'
                  )

                Fecha = `${doc.data().Fecha}`;
                Nombre = `${doc.data().Nombre}`;

                Nit = `${doc.data().Nit}`;
                CentroCostos = `${doc.data().CentroCostos}`;
                concepto1 = `${doc.data().concepto1}`;
                concepto2 = `${doc.data().concepto2}`;
                concepto3 = `${doc.data().concepto3}`;
                concepto4 = `${doc.data().concepto4}`;
                concepto5 = `${doc.data().concepto5}`;
                concepto6 = `${doc.data().concepto6}`;
                concepto7 = `${doc.data().concepto7}`;
                concepto8 = `${doc.data().concepto8}`;

                concepto9 = `${doc.data().concepto9}`;
                concepto10 = `${doc.data().concepto10}`;
                concepto11 = `${doc.data().concepto11}`;
                concepto12 = `${doc.data().concepto12}`;
                EstatusInforme1 = Number(`${doc.data().EstatusInforme1}`);
                EstatusInforme2 = Number(`${doc.data().EstatusInforme2}`);
                EstatusInforme3 = Number(`${doc.data().EstatusInforme3}`);
                EstatusInforme4 = Number(`${doc.data().EstatusInforme4}`);
                EstatusInforme5 = Number(`${doc.data().EstatusInforme5}`);
                EstatusInforme6 = Number(`${doc.data().EstatusInforme6}`);
                EstatusInforme7 = Number(`${doc.data().EstatusInforme7}`);
                EstatusInforme8 = Number(`${doc.data().EstatusInforme8}`);
                EstatusInforme9 = Number(`${doc.data().EstatusInforme9}`);

                EstatusInforme10 = Number(`${doc.data().EstatusInforme10}`);
                EstatusInforme11 = Number(`${doc.data().EstatusInforme11}`);
                EstatusInforme12 = Number(`${doc.data().EstatusInforme12}`);


                /*if (isNaN(Valor1)) {
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

                /* var total1 = Valor1 * Canti1;
                 var total2 = Valor2 * Canti2;
                 var total3 = Valor3 * Canti3;
                 var total4 = Valor4 * Canti4;
                 var total5 = Valor5 * Canti5;*/


                contador = 0;
                if (EstatusInforme1 != 0) {
                    contador++;
                }
                if (EstatusInforme2 != 0) {
                    contador++;
                }
                if (EstatusInforme3 != 0) {
                    contador++;
                }
                if (EstatusInforme4 != 0) {
                    contador++;
                }
                if (EstatusInforme5 != 0) {
                    contador++;
                }
                if (EstatusInforme6 != 0) {
                    contador++;
                }
                if (EstatusInforme7 != 0) {
                    contador++;
                }
                if (EstatusInforme8 != 0) {
                    contador++;
                }
                if (EstatusInforme9 != 0) {
                    contador++;
                }
                if (EstatusInforme10 != 0) {
                    contador++;
                }
                if (EstatusInforme11 != 0) {
                    contador++;
                }
                if (EstatusInforme12 != 0) {
                    contador++;
                }

                //console.log('el numero es'+contador);
                var promedio = (EstatusInforme1 + EstatusInforme2 + EstatusInforme3 + EstatusInforme4 + EstatusInforme5 + EstatusInforme6 + EstatusInforme7 + EstatusInforme8 + EstatusInforme9 + EstatusInforme10 + EstatusInforme11 + EstatusInforme12) / contador;

                //console.log('el total 1 es' + promedio);

                //-------------------2 parte-------------------------, Reposi1
                /*if (modificadoX == 'undefined') {
                  modificadoX = '';
                }*/

                dataSet.push([Fecha,
                    Nombre,
                    Nit, CentroCostos, promedio, concepto1, EstatusInforme1, concepto2, EstatusInforme2, concepto3, EstatusInforme3, concepto4, EstatusInforme4, concepto5, EstatusInforme5, concepto6, EstatusInforme6, concepto7, EstatusInforme7, concepto8, EstatusInforme8, concepto9, EstatusInforme9, concepto10, EstatusInforme10, concepto11, EstatusInforme11, concepto12, EstatusInforme12]);
                //console.log('usuario:' + usuario + '-' + 'modificado:' + modificadoX + '-' + 'fecha' + Fecha);

                i = i + 1;


                $(document).ready(function () {
                    var tablaSuma = $('#example4').DataTable({

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

                            { title: "Fecha" },
                            { title: "Nombre" },
                            { title: "Nit" },
                            { title: "Centro Costos" },
                            { title: "Promedio" },
                            { title: "Concepto1" },
                            { title: "Estado1" },
                            { title: "Concepto2" },
                            { title: "Estado2" },
                            { title: "Concepto3" },
                            { title: "Estado3" },
                            { title: "Concepto4" },

                            { title: "Estado4" },
                            { title: "Concepto5" },
                            { title: "Estado5" },
                            { title: "Concepto6" },
                            { title: "Estado6" },
                            { title: "Concepto7" },
                            { title: "Estado7" },
                            { title: "Concepto8" },
                            { title: "Estado8" },

                            { title: "Concepto9" },
                            { title: "Estado9" },
                            { title: "Concepto10" },
                            { title: "Estado10" },
                            { title: "Concepto11" },
                            { title: "Estado11" },
                            { title: "Concepto12" },
                            { title: "Estado12" },

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

function Prueba() {
    info2daParte();

}


function consultarFechasInfo() {



    //-----------------------------------
    //info2daParte();
   var email = document.getElementById('usuario').value;
    var email_analizado = /^([^]+)@(\w+).(\w+)$/.exec(email);
    var [, nombre, servidor, dominio] = email_analizado;
    console.log('Nombre del usuario: ' + nombre);


    var fecha1 = document.getElementById('fechaInfo').value;
    var fecha2 = document.getElementById('fechaInfo2').value;
    var tabl23 = document.getElementById("tabla3");


    dataSet = new Array();
    var i = 1;

    db.collection("RegistroInforme").where("Fecha", ">=", fecha1).where("Fecha", "<=", fecha2).where("Nit","==",nombre)
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
                Swal.fire(
                    'Consulta exitosa!!',
                    '',
                    'success'
                  )

                Fecha = `${doc.data().Fecha}`;
                Nombre = `${doc.data().Nombre}`;

                Nit = `${doc.data().Nit}`;
                CentroCostos = `${doc.data().CentroCostos}`;
                Zona1 = `${doc.data().Zona1}`;
                Zona2 = `${doc.data().Zona2}`;
                Zona3 = `${doc.data().Zona3}`;
                Zona4 = `${doc.data().Zona4}`;
                Zona5 = `${doc.data().Zona5}`;
                Zona6 = `${doc.data().Zona6}`;
                Zona7 = `${doc.data().Zona7}`;
                Zona8 = `${doc.data().Zona8}`;

                Zona9 = `${doc.data().Zona9}`;
                Zona10 = `${doc.data().Zona10}`;



                Zona11 = `${doc.data().Zona11}`;
                Estado1 = Number(`${doc.data().Estado1}`);
                Estado2 = Number(`${doc.data().Estado2}`);
                Estado3 = Number(`${doc.data().Estado3}`);
                Estado4 = Number(`${doc.data().Estado4}`);
                Estado5 = Number(`${doc.data().Estado5}`);
                Estado6 = Number(`${doc.data().Estado6}`);
                Estado7 = Number(`${doc.data().Estado7}`);
                Estado8 = Number(`${doc.data().Estado8}`);
                Estado9 = Number(`${doc.data().Estado9}`);

                Estado10 = Number(`${doc.data().Estado10}`);
                Estado11 = Number(`${doc.data().Estado11}`);

                /*if (isNaN(Valor1)) {
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

                /* var total1 = Valor1 * Canti1;
                 var total2 = Valor2 * Canti2;
                 var total3 = Valor3 * Canti3;
                 var total4 = Valor4 * Canti4;
                 var total5 = Valor5 * Canti5;*/


                contador = 0;
                if (Estado1 != 0) {
                    contador++;
                }
                if (Estado2 != 0) {
                    contador++;
                }
                if (Estado3 != 0) {
                    contador++;
                }
                if (Estado4 != 0) {
                    contador++;
                }
                if (Estado5 != 0) {
                    contador++;
                }
                if (Estado6 != 0) {
                    contador++;
                }
                if (Estado7 != 0) {
                    contador++;
                }
                if (Estado8 != 0) {
                    contador++;
                }
                if (Estado9 != 0) {
                    contador++;
                }
                if (Estado10 != 0) {
                    contador++;
                }
                if (Estado11 != 0) {
                    contador++;
                }

                //console.log('el numero es'+contador);
                var promedio = (Estado1 + Estado2 + Estado3 + Estado4 + Estado5 + Estado6 + Estado7 + Estado8 + Estado9 + Estado10 + Estado11) / contador;

                //console.log('el total 1 es' + promedio);

                //-------------------2 parte-------------------------, Reposi1
                /*if (modificadoX == 'undefined') {
                  modificadoX = '';
                }*/

                dataSet.push([Fecha,
                    Nombre,
                    Nit, CentroCostos, promedio, Zona1, Estado1, Zona2, Estado2, Zona3, Estado3, Zona4, Estado4, Zona5, Estado5, Zona6, Estado6, Zona7, Estado7, Zona8, Estado8, Zona9, Estado9, Zona10, Estado10, Zona11, Estado11]);
                //console.log('usuario:' + usuario + '-' + 'modificado:' + modificadoX + '-' + 'fecha' + Fecha);

                i = i + 1;


                $(document).ready(function () {
                    var tablaSuma = $('#example3').DataTable({

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

                            { title: "Fecha" },
                            { title: "Nombre" },
                            { title: "Nit" },
                            { title: "Centro Costos" },
                            { title: "Promedio" },
                            { title: "Zona1" },
                            { title: "Estado1" },
                            { title: "Zona2" },
                            { title: "Estado2" },
                            { title: "Zona3" },
                            { title: "Estado3" },
                            { title: "Zona4" },

                            { title: "Estado4" },
                            { title: "Zona5" },
                            { title: "Estado5" },
                            { title: "Zona6" },
                            { title: "Estado6" },
                            { title: "Zona7" },
                            { title: "Estado7" },
                            { title: "Zona8" },
                            { title: "Estado8" },

                            { title: "Zona9" },
                            { title: "Estado9" },
                            { title: "Zona10" },
                            { title: "Estado10" },
                            { title: "Zona11" },
                            { title: "Estado11" },

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

           

        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    //-------------------------------------


}

