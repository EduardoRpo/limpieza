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
        window.location.href = '../index.html'

    }



})


function numeroAFecha(numeroDeDias, esExcel = false) {
    var diasDesde1900 = esExcel ? 25567 + 1 : 25567;

    // 86400 es el número de segundos en un día, luego multiplicamos por 1000 para obtener milisegundos.
    return new Date((numeroDeDias - diasDesde1900) * 86400 * 1000);
}

var fecha = numeroAFecha(43638.65650864583, true);
console.log(fecha);

function Test() {

    var f1 = new Date(45232)
    var f2 = 44885;
    var s = new Date(45232).toLocaleDateString("en-US")
    //console.log(f1);

    var hoy = new Date();

    var fecha = numeroAFecha(f2, true);
    console.log(fecha);

    const diffInDays = Math.floor((hoy - fecha) / (1000 * 60 * 60 * 24));
    console.log(diffInDays);

    console.log(hoy);

    if(diffInDays > 365){
        console.log("f2 es mayor a 365");
    }else{
        console.log("f2 es menor a 365");
    }

    
    //var manana = new Date(fecha);
    //var fecha = numeroAFecha(f2, true);
    



    //console.log(diffInDays);


    /*if (f1 > f2) {
        console.log('f1' + f1 + 'es mayor que f2' + f2)
    } else {
        console.log('F2 es mayor que f1')
    }*/
}

vacacionesVencidas = function () {
    var tabl23 = document.getElementById("tabla2");




    dataSet2 = new Array();
    var i = 1;

    db.collection("Empleados").where("Estado", "==", "Contratado").limit(500)
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
                Cargo = `${doc.data().Cargo}`;
                Cedula = `${doc.data().Cedula}`;
                Centro_de_costo = `${doc.data().Centro_de_costo}`;
                Clase_de_Contrato = `${doc.data().Clase_de_Contrato}`;

                Contrato = `${doc.data().Contrato}`;
                Contrato_el_dia = `${doc.data().Contrato_el_dia}`;

                Empleado = `${doc.data().Empleado}`;
                Empleador = `${doc.data().Empleador}`;


                Estado = `${doc.data().Estado}`;
                Hasta_el_dia = `${doc.data().Hasta_el_dia}`;

                NIT_Empleador = `${doc.data().NIT_Empleador}`;
                Retiro = `${doc.data().Retiro}`;
                ultimasVaca = `${doc.data().Vacaciones_liquidadas_hasta}`;


                centroSinEs = Centro_de_costo.split(" ")[0];
                console.log(centroSinEs);

                //if (nombre == centroSinEs) {

                    var fecha = numeroAFecha(ultimasVaca, true);
                    console.log(fecha);

                    var hoy = new Date();
                    var manana = new Date(fecha);


                    const diffInDays = Math.floor((manana - hoy) / (1000 * 60 * 60 * 24));
                    console.log(diffInDays);
                    if (diffInDays > 365) {

                        dataSet.push([Cedula, Empleado, diffInDays]);

                        //console.log('usuario:' + usuario + '-' + 'modificado:' + modificadoX + '-' + 'fecha' + Fecha);

                        i = i + 1;


                        $(document).ready(function () {
                            var tablaSuma = $('#vencimientoVaca').DataTable({

                                dom: "Bfrtip",
                                pageLength: 50,
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
                                    {
                                        extend: 'pdfHtml5',
                                        text: '<i class="fas fa-file-pdf btn btn-danger"></i> ',
                                        titleAttr: 'Exportar a PDF',
                                        className: 'btn btn-danger'
                                    },
                                    {
                                        extend: 'print',
                                        text: '<i class="fa fa-print btn btn-warning""></i> ',
                                        titleAttr: 'Imprimir',
                                        className: 'btn btn-warning'
                                    },
                                ],





                                data: dataSet2,
                                "bDestroy": true,
                                columnDefs: [{
                                    "defaultContent": "",
                                    "targets": "_all"
                                }],
                                columns: [

                                    { title: "Documento" },
                                    { title: "Nombres" },
                                    { title: "Fecha Ult Vacaciones" },


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




                    }




               // } else {

               // }





            });
            //alert('mensaje');

            //-------------Empieza
            Swal.fire(
                'Cargado datos!!',
                'Se puede demorar unos segundos...',
                'success'
            )

            //--------------termina


        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

}
function Mostrar3(){

    var tabl23 = document.getElementById("tabla3");




    dataSet4 = new Array();
    var i = 1;

    db.collection("Empleados").where("Estado", "==", "Contratado").limit(500)
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
                //Cargo = `${doc.data().Cargo}`;
                Cedula = `${doc.data().Cedula}`;
                Centro_de_costo = `${doc.data().Centro_de_costo}`;
                //Clase_de_Contrato = `${doc.data().Clase_de_Contrato}`;

                //Contrato = `${doc.data().Contrato}`;
                Contrato_el_dia = `${doc.data().Contrato_el_dia}`;

                Empleado = `${doc.data().Empleado}`;
                //Empleador = `${doc.data().Empleador}`;


                Estado = `${doc.data().Estado}`;
                //Hasta_el_dia = `${doc.data().Hasta_el_dia}`;

                //NIT_Empleador = `${doc.data().NIT_Empleador}`;
                //Retiro = `${doc.data().Retiro}`;
                //ultimasVaca = `${doc.data().Vacaciones_liquidadas_hasta}`;


                centroSinEs = Centro_de_costo.split(" ")[0];
                console.log(centroSinEs);

                //if (nombre == centroSinEs) {

                    
                    var hoy = new Date();

                    var fecha = numeroAFecha(Contrato_el_dia, true);
                    var dia=fecha.getDate();
                    var mes= fecha.getMonth()+1;
                    var year= fecha.getFullYear();
                    var dateCompleted=dia+"/"+mes+"/"+year;
                    console.log(dateCompleted);
                
                    const diffInDays = Math.floor((hoy - fecha) / (1000 * 60 * 60 * 24));
                    //console.log(diffInDays);
                
                    //console.log(hoy);
                
                   /* if(diffInDays > 365){
                        console.log("f2 es mayor a 365");
                    }else{
                        console.log("f2 es menor a 365");
                    }*/
                    if (diffInDays < 30) {

                        dataSet4.push([Cedula, Empleado, diffInDays]);

                        //console.log('usuario:' + usuario + '-' + 'modificado:' + modificadoX + '-' + 'fecha' + Fecha);

                        i = i + 1;


                        $(document).ready(function () {
                            var tablaSuma = $('#periodPrueba').DataTable({

                                dom: "Bfrtip",
                                pageLength: 50,
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
                                    {
                                        extend: 'pdfHtml5',
                                        text: '<i class="fas fa-file-pdf btn btn-danger"></i> ',
                                        titleAttr: 'Exportar a PDF',
                                        className: 'btn btn-danger'
                                    },
                                    {
                                        extend: 'print',
                                        text: '<i class="fa fa-print btn btn-warning""></i> ',
                                        titleAttr: 'Imprimir',
                                        className: 'btn btn-warning'
                                    },
                                ],





                                data: dataSet4,
                                "bDestroy": true,
                                columnDefs: [{
                                    "defaultContent": "",
                                    "targets": "_all"
                                }],
                                columns: [

                                    { title: "Documento" },
                                    { title: "Nombres" },
                                    { title: "Dias Restantes" },


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




                    }




               // } else {

               // }





            });
            //alert('mensaje');

            //-------------Empieza
            Swal.fire(
                'Cargado datos!!',
                'Se puede demorar unos segundos...',
                'success'
            )

            //--------------termina


        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}

function Mostrar2(){

    var tabl23 = document.getElementById("tabla2");




    dataSet3 = new Array();
    var i = 1;

    db.collection("Empleados").where("Estado", "==", "Contratado").limit(500)
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
                Cargo = `${doc.data().Cargo}`;
                Cedula = `${doc.data().Cedula}`;
                Centro_de_costo = `${doc.data().Centro_de_costo}`;
                Clase_de_Contrato = `${doc.data().Clase_de_Contrato}`;

                Contrato = `${doc.data().Contrato}`;
                Contrato_el_dia = `${doc.data().Contrato_el_dia}`;

                Empleado = `${doc.data().Empleado}`;
                Empleador = `${doc.data().Empleador}`;


                Estado = `${doc.data().Estado}`;
                Hasta_el_dia = `${doc.data().Hasta_el_dia}`;

                NIT_Empleador = `${doc.data().NIT_Empleador}`;
                Retiro = `${doc.data().Retiro}`;
                ultimasVaca = `${doc.data().Vacaciones_liquidadas_hasta}`;


                centroSinEs = Centro_de_costo.split(" ")[0];
                console.log(centroSinEs);

                //if (nombre == centroSinEs) {

                    
                    var hoy = new Date();

                    var fecha = numeroAFecha(ultimasVaca, true);
                    var dia=fecha.getDate();
                    var mes= fecha.getMonth()+1;
                    var year= fecha.getFullYear();
                    var dateCompleted=dia+"/"+mes+"/"+year;
                    console.log(dateCompleted);
                
                    const diffInDays = Math.floor((hoy - fecha) / (1000 * 60 * 60 * 24));
                    //console.log(diffInDays);
                
                    //console.log(hoy);
                
                   /* if(diffInDays > 365){
                        console.log("f2 es mayor a 365");
                    }else{
                        console.log("f2 es menor a 365");
                    }*/
                    if (diffInDays > 365) {

                        dataSet3.push([Cedula, Empleado, dateCompleted]);

                        //console.log('usuario:' + usuario + '-' + 'modificado:' + modificadoX + '-' + 'fecha' + Fecha);

                        i = i + 1;


                        $(document).ready(function () {
                            var tablaSuma = $('#vencimientoVaca').DataTable({

                                dom: "Bfrtip",
                                pageLength: 50,
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
                                    {
                                        extend: 'pdfHtml5',
                                        text: '<i class="fas fa-file-pdf btn btn-danger"></i> ',
                                        titleAttr: 'Exportar a PDF',
                                        className: 'btn btn-danger'
                                    },
                                    {
                                        extend: 'print',
                                        text: '<i class="fa fa-print btn btn-warning""></i> ',
                                        titleAttr: 'Imprimir',
                                        className: 'btn btn-warning'
                                    },
                                ],





                                data: dataSet3,
                                "bDestroy": true,
                                columnDefs: [{
                                    "defaultContent": "",
                                    "targets": "_all"
                                }],
                                columns: [

                                    { title: "Documento" },
                                    { title: "Nombres" },
                                    { title: "Fecha Ult Vacaciones" },


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




                    }




               // } else {

               // }





            });
            //alert('mensaje');

            //-------------Empieza
            Swal.fire(
                'Cargado datos!!',
                'Se puede demorar unos segundos...',
                'success'
            )

            //--------------termina


        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}

function Mostrar() {

    //vacacionesVencidas();

    var email = document.getElementById('usuario').value;
    var email_analizado = /^([^]+)@(\w+).(\w+)$/.exec(email);
    var [, nombre, servidor, dominio] = email_analizado;
    console.log('Nombre del usuario: ' + nombre);

    var tabl23 = document.getElementById("tabla");




    dataSet = new Array();
    var i = 1;

    db.collection("Empleados").where("Estado", "==", "Contratado").limit(500)
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
                Cargo = `${doc.data().Cargo}`;
                Cedula = `${doc.data().Cedula}`;
                Centro_de_costo = `${doc.data().Centro_de_costo}`;
                Clase_de_Contrato = `${doc.data().Clase_de_Contrato}`;

                Contrato = `${doc.data().Contrato}`;
                Contrato_el_dia = `${doc.data().Contrato_el_dia}`;

                Empleado = `${doc.data().Empleado}`;
                Empleador = `${doc.data().Empleador}`;


                Estado = `${doc.data().Estado}`;
                Hasta_el_dia = `${doc.data().Hasta_el_dia}`;

                NIT_Empleador = `${doc.data().NIT_Empleador}`;
                Retiro = `${doc.data().Retiro}`;


                centroSinEs = Centro_de_costo.split(" ")[0];
                console.log(centroSinEs);

                //if (nombre == centroSinEs) {

                    var fecha = numeroAFecha(Hasta_el_dia, true);
                    console.log(fecha);

                    var hoy = new Date();
                    var manana = new Date(fecha);


                    const diffInDays = Math.floor((manana - hoy) / (1000 * 60 * 60 * 24));
                    console.log(diffInDays);
                    if (diffInDays < 45) {

                        dataSet.push([Cedula, Empleado, Cargo, Centro_de_costo, Estado, diffInDays]);

                        //console.log('usuario:' + usuario + '-' + 'modificado:' + modificadoX + '-' + 'fecha' + Fecha);

                        i = i + 1;


                        $(document).ready(function () {
                            var tablaSuma = $('#example').DataTable({

                                dom: "Bfrtip",
                                pageLength: 50,
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
                                    {
                                        extend: 'pdfHtml5',
                                        text: '<i class="fas fa-file-pdf btn btn-danger"></i> ',
                                        titleAttr: 'Exportar a PDF',
                                        className: 'btn btn-danger'
                                    },
                                    {
                                        extend: 'print',
                                        text: '<i class="fa fa-print btn btn-warning""></i> ',
                                        titleAttr: 'Imprimir',
                                        className: 'btn btn-warning'
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
                                    { title: "Nombres" },
                                    { title: "Perfil" },
                                    { title: "Centro de Costos" },
                                    { title: "Estado" },
                                    { title: "Dias para Vcto" },


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




                    }




                //} else {

                //}





            });
            //alert('mensaje');

            //-------------Empieza
            Swal.fire(
                'Cargado datos!!',
                'Se puede demorar unos segundos...',
                'success'
            )

            //--------------termina


        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    //-------------------------------------



}



