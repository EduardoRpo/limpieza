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





        dataSet.push([Cedula, Empleado, Cargo, Centro_de_costo, Estado]);
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

