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

  function Mostrar(){

    var tabl23 = document.getElementById("tabla");
    
  
    dataSet = new Array();
    var i = 1;
  
    db.collection("Productos").limit(2000).get().then(function (querySnapshot) {
        tabl23.innerHTML = "";
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          /*Swal.fire(
            'Consulta exitosa!!!',
            '',
            'success'
          )*/
          Codigo = `${doc.data().Codigo}`;
          Producto = `${doc.data().Producto}`;
          Marca = `${doc.data().Marca}`;
          IVA = `${doc.data().IVA}`;
  
          Costo =Number(`${doc.data().Costo}`) ;
          
          var rounded = Math.round((Costo + Number.EPSILON) * 100) / 100;
          
  
        
          dataSet.push([Codigo,Producto,Marca, IVA,rounded]);
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
                    template:'header_blue'
                  }
  
                },
                {
                    extend:    'pdfHtml5',
                    text:      '<i class="fas fa-file-pdf btn btn-danger"></i> ',
                    titleAttr: 'Exportar a PDF',
                    className: 'btn btn-danger'
                },
                {
                    extend:    'print',
                    text:      '<i class="fa fa-print btn btn-warning""></i> ',
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
  
                { title: "Codigo" },
                { title: "Nombre" },
                { title: "Marca" },
                { title: "Iva" },
                { title: "Costo" },
                
                
                
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

 