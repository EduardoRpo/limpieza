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
      window.location.href = 'index.html'

  }



})

info2daParte=function () {



  //-----------------------------------


  var fecha1 = document.getElementById('fechaInfo').value;
  var fecha2 = document.getElementById('fechaInfo2').value;
  var tabl23 = document.getElementById("tabla4");
  

  dataSet = new Array();
  var i = 1;

  db.collection("RegistroInforme").where("Fecha", ">=", fecha1).where("Fecha", "<=", fecha2)
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
        EstatusInforme1 =Number(`${doc.data().EstatusInforme1}`) ;
        EstatusInforme2 = Number(`${doc.data().EstatusInforme2}`);
        EstatusInforme3 =Number(`${doc.data().EstatusInforme3}`) ;
        EstatusInforme4 =Number( `${doc.data().EstatusInforme4}`);
        EstatusInforme5 =Number( `${doc.data().EstatusInforme5}`);
        EstatusInforme6 = Number( `${doc.data().EstatusInforme6}`);
        EstatusInforme7 = Number(`${doc.data().EstatusInforme7}`) ;
        EstatusInforme8 =Number(`${doc.data().EstatusInforme8}`) ;
        EstatusInforme9 =Number (`${doc.data().EstatusInforme9}`);

        EstatusInforme10 = Number(`${doc.data().EstatusInforme10}`) ;
        EstatusInforme11 = Number( `${doc.data().EstatusInforme11}`);
        EstatusInforme12 = Number( `${doc.data().EstatusInforme12}`);

       
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

        
        contador=0;
       if(EstatusInforme1!=0 ){
        contador++;
       }
       if(EstatusInforme2!=0){
        contador++;
       }
       if(EstatusInforme3!=0){
        contador++;
       }
       if(EstatusInforme4!=0){
        contador++;
       }
       if(EstatusInforme5!=0){
        contador++;
       }
       if(EstatusInforme6!=0){
        contador++;
       }
       if(EstatusInforme7!=0){
        contador++;
       }
       if(EstatusInforme8!=0){
        contador++;
       }
       if(EstatusInforme9!=0){
        contador++;
       }
       if(EstatusInforme10!=0){
        contador++;
       }
       if(EstatusInforme11!=0){
        contador++;
       }
       if(EstatusInforme12!=0){
        contador++;
       }

       //console.log('el numero es'+contador);
       var promedio = (EstatusInforme1 + EstatusInforme2 + EstatusInforme3 + EstatusInforme4 + EstatusInforme5 + EstatusInforme6 + EstatusInforme7 + EstatusInforme8 + EstatusInforme9 + EstatusInforme10 + EstatusInforme11 + EstatusInforme12)/contador;

       //console.log('el total 1 es' + promedio);

        //-------------------2 parte-------------------------, Reposi1
        /*if (modificadoX == 'undefined') {
          modificadoX = '';
        }*/

        dataSet.push([Fecha,
          Nombre,
          Nit, CentroCostos,promedio, concepto1, EstatusInforme1, concepto2, EstatusInforme2, concepto3, EstatusInforme3, concepto4, EstatusInforme4, concepto5, EstatusInforme5, concepto6, EstatusInforme6, concepto7, EstatusInforme7, concepto8, EstatusInforme8, concepto9, EstatusInforme9, concepto10, EstatusInforme10, concepto11, EstatusInforme11, concepto12, EstatusInforme12]);
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
                  template:'header_blue'
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

function Prueba(){
  info2daParte();

}


function consultarFechasInfo() {



  //-----------------------------------
  //info2daParte();


  var fecha1 = document.getElementById('fechaInfo').value;
  var fecha2 = document.getElementById('fechaInfo2').value;
  var tabl23 = document.getElementById("tabla3");
  

  dataSet = new Array();
  var i = 1;

  db.collection("RegistroInforme").where("Fecha", ">=", fecha1).where("Fecha", "<=", fecha2)
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
        Estado1 =Number(`${doc.data().Estado1}`) ;
        Estado2 = Number(`${doc.data().Estado2}`);
        Estado3 =Number(`${doc.data().Estado3}`) ;
        Estado4 =Number( `${doc.data().Estado4}`);
        Estado5 =Number( `${doc.data().Estado5}`);
        Estado6 = Number( `${doc.data().Estado6}`);
        Estado7 = Number(`${doc.data().Estado7}`) ;
        Estado8 =Number(`${doc.data().Estado8}`) ;
        Estado9 =Number (`${doc.data().Estado9}`);

        Estado10 = Number(`${doc.data().Estado10}`) ;
        Estado11 = Number( `${doc.data().Estado11}`);
       
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

        
        contador=0;
       if(Estado1!=0){
        contador++;
       }
       if(Estado2!=0){
        contador++;
       }
       if(Estado3!=0){
        contador++;
       }
       if(Estado4!=0){
        contador++;
       }
       if(Estado5!=0){
        contador++;
       }
       if(Estado6!=0){
        contador++;
       }
       if(Estado7!=0){
        contador++;
       }
       if(Estado8!=0){
        contador++;
       }
       if(Estado9!=0){
        contador++;
       }
       if(Estado10!=0){
        contador++;
       }
       if(Estado11!=0){
        contador++;
       }

       //console.log('el numero es'+contador);
       var promedio = (Estado1 + Estado2 + Estado3 + Estado4 + Estado5 + Estado6 + Estado7 + Estado8 + Estado9 + Estado10 + Estado11)/contador;

       //console.log('el total 1 es' + promedio);

        //-------------------2 parte-------------------------, Reposi1
        /*if (modificadoX == 'undefined') {
          modificadoX = '';
        }*/

        dataSet.push([Fecha,
          Nombre,
          Nit, CentroCostos,promedio, Zona1, Estado1, Zona2, Estado2, Zona3, Estado3, Zona4, Estado4, Zona5, Estado5, Zona6, Estado6, Zona7, Estado7, Zona8, Estado8, Zona9, Estado9, Zona10, Estado10, Zona11, Estado11]);
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
                  template:'header_blue'
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
queryIndicadores2 = function () {
  var tabl2 = document.getElementById("example3"), sumVal2 = 0;

  for (var i = 1; i < tabl2.rows.length; i++) {
    console.log('valores' + i);

    if (isNaN(sumVal2)) {
      sumVal2 = 0;
    }

    sumVal2 = sumVal2 + parseFloat(tabl2.rows[i].cells[47].innerHTML);
  }

  //document.getElementById("sumaTiempoTra").value = sumVal2.toFixed(2);
  console.log('el total es' + sumVal2);
  var sumaTotal = document.getElementById('SumaTotal').value = sumVal2;

  var valorFijado = document.getElementById('valorFijado').value;

  var Porce = (sumaTotal * 100) / valorFijado;

  document.getElementById('porcenProduc').value = Porce.toFixed(2) + '%';
}
queryFijar2 = function () {
  var tabl2 = document.getElementById("example3"), sumVal2 = 0;

  for (var i = 1; i < tabl2.rows.length; i++) {
    console.log('valores' + i);

    if (isNaN(sumVal2)) {
      sumVal2 = 0;
    }

    sumVal2 = sumVal2 + parseFloat(tabl2.rows[i].cells[47].innerHTML);
  }

  //document.getElementById("sumaTiempoTra").value = sumVal2.toFixed(2);

  document.getElementById('valorFijado').value = sumVal2;
}
function fijar2() {
  queryFijar2();
}
function indicadores2() {
  queryIndicadores2();
}



function consultarFechasEPP() {



  //-----------------------------------


  var fecha1 = document.getElementById('fechaEPP').value;
  var fecha2 = document.getElementById('fechaEPP2').value;
  var tabl23 = document.getElementById("tablaEPP");
  

  dataSet = new Array();
  var i = 1;

  db.collection("RegistroEPP").where("Fecha", ">=", fecha1).where("Fecha", "<=", fecha2)
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
        documento = `${doc.data().Documento}`;


        Nit = `${doc.data().Nit}`;
        CentroCostos = `${doc.data().CentroCostos}`;
        Elemento1 = `${doc.data().Elemento1}`;
        Elemento2 = `${doc.data().Elemento2}`;
        Elemento3 = `${doc.data().Elemento3}`;
        Elemento4 = `${doc.data().Elemento4}`;
        Elemento5 = `${doc.data().Elemento5}`;
        Elemento6 = `${doc.data().Elemento6}`;
        Elemento7 = `${doc.data().Elemento7}`;
        Elemento8 = `${doc.data().Elemento8}`;

        Elemento9 = `${doc.data().Elemento9}`;
        Elemento10 = `${doc.data().Elemento10}`;



        Elemento11 = `${doc.data().Elemento11}`;
        Cantidad1 =Number(`${doc.data().Cantidad1}`) ;
        Cantidad2 = Number(`${doc.data().Cantidad2}`);
        Cantidad3 =Number(`${doc.data().Cantidad3}`) ;
        Cantidad4 =Number( `${doc.data().Cantidad4}`);
        Cantidad5 =Number( `${doc.data().Cantidad5}`);
        Cantidad6 = Number( `${doc.data().Cantidad6}`);
        Cantidad7 = Number(`${doc.data().Cantidad7}`) ;
        Cantidad8 =Number(`${doc.data().Cantidad8}`) ;
        Cantidad9 =Number (`${doc.data().Cantidad9}`);

        Cantidad10 = Number(`${doc.data().Cantidad10}`) ;
        Cantidad11 = Number( `${doc.data().Cantidad11}`);
       
        

        dataSet.push([Fecha, documento,
          Nombre,
          Nit, CentroCostos,Elemento1, Cantidad1, Elemento2, Cantidad2, Elemento3, Cantidad3, Elemento4, Cantidad4, Elemento5, Cantidad5, Elemento6, Cantidad6, Elemento7, Cantidad7, Elemento8, Cantidad8, Elemento9, Cantidad9, Elemento10, Cantidad10, Elemento11, Cantidad11]);
        //console.log('usuario:' + usuario + '-' + 'modificado:' + modificadoX + '-' + 'fecha' + Fecha);

        i = i + 1;


        $(document).ready(function () {
          var tablaSuma = $('#example2').DataTable({

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
                  template:'header_blue'
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
              { title: "Documento" },
              { title: "Nombre" },
              { title: "Nit" },
              { title: "Centro Costos" },
              { title: "Elemento1" },
              { title: "Cantidad1" },
              { title: "Elemento2" },
              { title: "Cantidad2" },
              { title: "Elemento3" },
              { title: "Cantidad3" },
              { title: "Elemento4" },

              { title: "Cantidad4" },
              { title: "Elemento5" },
              { title: "Cantidad5" },
              { title: "Elemento6" },
              { title: "Cantidad6" },
              { title: "Elemento7" },
              { title: "Cantidad7" },
              { title: "Elemento8" },
              { title: "Cantidad8" },

              { title: "Elemento9" },
              { title: "Cantidad9" },
              { title: "Elemento10" },
              { title: "Cantidad10" },
              { title: "Elemento11" },
              { title: "Cantidad11" },
              
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


function consultarFechas() {



      //-----------------------------------


      var fecha1 = document.getElementById('fecha').value;
      var fecha2 = document.getElementById('fecha2').value;
      var tabl23 = document.getElementById("tabla");
      

      dataSet = new Array();
      var i = 1;

      db.collection("RegistroFQ").where("Fecha", ">=", fecha1).where("Fecha", "<=", fecha2)
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
            Estado1 =Number(`${doc.data().Estado1}`) ;
            Estado2 = Number(`${doc.data().Estado2}`);
            Estado3 =Number(`${doc.data().Estado3}`) ;
            Estado4 =Number( `${doc.data().Estado4}`);
            Estado5 =Number( `${doc.data().Estado5}`);
            Estado6 = Number( `${doc.data().Estado6}`);
            Estado7 = Number(`${doc.data().Estado7}`) ;
            Estado8 =Number(`${doc.data().Estado8}`) ;
            Estado9 =Number (`${doc.data().Estado9}`);

            Estado10 = Number(`${doc.data().Estado10}`) ;
            Estado11 = Number( `${doc.data().Estado11}`);
           
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

            
            contador=0;
           if(Estado1!=0){
            contador++;
           }
           if(Estado2!=0){
            contador++;
           }
           if(Estado3!=0){
            contador++;
           }
           if(Estado4!=0){
            contador++;
           }
           if(Estado5!=0){
            contador++;
           }
           if(Estado6!=0){
            contador++;
           }
           if(Estado7!=0){
            contador++;
           }
           if(Estado8!=0){
            contador++;
           }
           if(Estado9!=0){
            contador++;
           }
           if(Estado10!=0){
            contador++;
           }
           if(Estado11!=0){
            contador++;
           }

           //console.log('el numero es'+contador);
           var promedio = (Estado1 + Estado2 + Estado3 + Estado4 + Estado5 + Estado6 + Estado7 + Estado8 + Estado9 + Estado10 + Estado11)/contador;

           //console.log('el total 1 es' + promedio);

            //-------------------2 parte-------------------------, Reposi1
            /*if (modificadoX == 'undefined') {
              modificadoX = '';
            }*/

            dataSet.push([Fecha,
              Nombre,
              Nit, CentroCostos,promedio, Zona1, Estado1, Zona2, Estado2, Zona3, Estado3, Zona4, Estado4, Zona5, Estado5, Zona6, Estado6, Zona7, Estado7, Zona8, Estado8, Zona9, Estado9, Zona10, Estado10, Zona11, Estado11]);
            //console.log('usuario:' + usuario + '-' + 'modificado:' + modificadoX + '-' + 'fecha' + Fecha);

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
                      template:'header_blue'
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





          });
          

        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

      //-------------------------------------


    






}


queryIndicadores = function () {
  var tabl2 = document.getElementById("example"), sumVal2 = 0;

  for (var i = 1; i < tabl2.rows.length; i++) {
    console.log('valores' + i);

    if (isNaN(sumVal2)) {
      sumVal2 = 0;
    }

    sumVal2 = sumVal2 + parseFloat(tabl2.rows[i].cells[47].innerHTML);
  }

  //document.getElementById("sumaTiempoTra").value = sumVal2.toFixed(2);
  console.log('el total es' + sumVal2);
  var sumaTotal = document.getElementById('SumaTotal').value = sumVal2;

  var valorFijado = document.getElementById('valorFijado').value;

  var Porce = (sumaTotal * 100) / valorFijado;

  document.getElementById('porcenProduc').value = Porce.toFixed(2) + '%';
}

queryFijar = function () {
  var tabl2 = document.getElementById("example"), sumVal2 = 0;

  for (var i = 1; i < tabl2.rows.length; i++) {
    console.log('valores' + i);

    if (isNaN(sumVal2)) {
      sumVal2 = 0;
    }

    sumVal2 = sumVal2 + parseFloat(tabl2.rows[i].cells[47].innerHTML);
  }

  //document.getElementById("sumaTiempoTra").value = sumVal2.toFixed(2);

  document.getElementById('valorFijado').value = sumVal2;
}


function fijar() {
  queryFijar();
}
function indicadores() {
  queryIndicadores();
}

function limpiar() {
  document.getElementById('valorFijado').value = '';
}

function consultas() {

      var tabl23 = document.getElementById("tabla");

      dataSet = new Array();
      var i = 1;

      var nit = document.getElementById('nit').value;
      db.collection("PQRS").where("Nit", "==", nit)
        .get()
        .then(function (querySnapshot) {
          tabl23.innerHTML = "";
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            Swal.fire(
              'Consulta exitosa!!!',
              '',
              'success'
            )
            FechaVersion = `${doc.data().FechaVersion}`;
            Estado = Number(`${doc.data().Estado}`);

            Muestra = `${doc.data().Muestra}`;
            Codigo = `${doc.data().Codigo}`;
            Version = `${doc.data().Version}`;
            Fecha = `${doc.data().Fecha}`;
            Caso = `${doc.data().Caso}`;
            Cliente = `${doc.data().Cliente}`;
            Numero = `${doc.data().Numero}`;
            Nit = `${doc.data().Nit}`;
            Ubicacion = `${doc.data().Ubicacion}`;
            Asesor = `${doc.data().Asesor}`;

            usuario = `${doc.data().Usuario}`;
            modificadoX = `${doc.data().Modificado}`;



            Ref1 = `${doc.data().Ref1}`;
            Ref2 = `${doc.data().Ref2}`;
            Ref3 = `${doc.data().Ref3}`;
            Ref4 = `${doc.data().Ref4}`;
            Ref5 = `${doc.data().Ref5}`;
            Ref6 = `${doc.data().Ref6}`;
            Ref7 = `${doc.data().Ref7}`;
            Ref8 = `${doc.data().Ref8}`;
            Ref9 = `${doc.data().Ref9}`;
            Ref10 = `${doc.data().Ref10}`;

            Produ1 = `${doc.data().Produ1}`;
            Produ2 = `${doc.data().Produ2}`;
            Produ3 = `${doc.data().Produ3}`;
            Produ4 = `${doc.data().Produ4}`;
            Produ5 = `${doc.data().Produ5}`;
            Produ6 = `${doc.data().Produ6}`;
            Produ7 = `${doc.data().Produ7}`;
            Produ8 = `${doc.data().Produ8}`;
            Produ9 = `${doc.data().Produ9}`;
            Produ10 = `${doc.data().Produ10}`;

            Canti1 = Number(`${doc.data().Canti1}`);
            Canti2 = Number(`${doc.data().Canti2}`);
            Canti3 = Number(`${doc.data().Canti3}`);
            Canti4 = Number(`${doc.data().Canti4}`);
            Canti5 = Number(`${doc.data().Canti5}`);
            Canti6 = `${doc.data().Canti6}`;
            Canti7 = `${doc.data().Canti7}`;
            Canti8 = `${doc.data().Canti8}`;
            Canti9 = `${doc.data().Canti9}`;
            Canti10 = `${doc.data().Canti10}`;

            Lote1 = `${doc.data().Lote1}`;
            Lote2 = `${doc.data().Lote2}`;
            Lote3 = `${doc.data().Lote3}`;
            Lote4 = `${doc.data().Lote4}`;
            Lote5 = `${doc.data().Lote5}`;
            Lote6 = `${doc.data().Lote6}`;
            Lote7 = `${doc.data().Lote7}`;
            Lote8 = `${doc.data().Lote8}`;
            Lote9 = `${doc.data().Lote9}`;
            Lote10 = `${doc.data().Lote10}`;

            Fact1 = `${doc.data().Fact1}`;
            Fact2 = `${doc.data().Fact2}`;
            Fact3 = `${doc.data().Fact3}`;
            Fact4 = `${doc.data().Fact4}`;
            Fact5 = `${doc.data().Fact5}`;
            Fact6 = `${doc.data().Fact6}`;
            Fact7 = `${doc.data().Fact7}`;
            Fact8 = `${doc.data().Fact8}`;
            Fact9 = `${doc.data().Fact9}`;
            Fact10 = `${doc.data().Fact10}`;

            Motivo1 = `${doc.data().MotivoSeg1}`;
            Motivo2 = `${doc.data().MotivoSeg2}`;
            Motivo3 = `${doc.data().MotivoSeg3}`;
            Motivo4 = `${doc.data().MotivoSeg4}`;
            Motivo5 = `${doc.data().MotivoSeg5}`;
            Motivo6 = `${doc.data().Motivo6}`;
            Motivo7 = `${doc.data().Motivo7}`;
            Motivo8 = `${doc.data().Motivo8}`;
            Motivo9 = `${doc.data().Motivo9}`;
            Motivo10 = `${doc.data().Motivo10}`;

            Reposi1 = `${doc.data().Reposi1}`;
            Reposi2 = `${doc.data().Reposi2}`;
            Reposi3 = `${doc.data().Reposi3}`;
            Reposi4 = `${doc.data().Reposi4}`;
            Reposi5 = `${doc.data().Reposi5}`;
            Reposi6 = `${doc.data().Reposi6}`;
            Reposi7 = `${doc.data().Reposi7}`;
            Reposi8 = `${doc.data().Reposi8}`;
            Reposi9 = `${doc.data().Reposi9}`;
            Reposi10 = `${doc.data().Reposi10}`;

            Valor1 = Number(`${doc.data().Valor1}`);
            Valor2 = Number(`${doc.data().Valor2}`);
            Valor3 = Number(`${doc.data().Valor3}`);
            Valor4 = Number(`${doc.data().Valor4}`);
            Valor5 = Number(`${doc.data().Valor5}`);

            var total1 = Valor1 * Canti1;
            var total2 = Valor2 * Canti2;
            var total3 = Valor3 * Canti3;
            var total4 = Valor4 * Canti4;
            var total5 = Valor5 * Canti5;

            var Destruccion1 = `${doc.data().Destruccion1}`;
            var Destruccion2 = `${doc.data().Destruccion2}`;
            var Destruccion3 = `${doc.data().Destruccion3}`;
            var Destruccion4 = `${doc.data().Destruccion4}`;
            var Destruccion5 = `${doc.data().Destruccion5}`;

            var TotalSuma = Number(total1 + total2 + total3 + total4 + total5);

            //-------------------2 parte-------------------------
            if (modificadoX == 'undefined') {
              modificadoX = '';
            }

            dataSet.push([Caso,
              Cliente,
              Ref1, Produ1, Canti1, Valor1, Lote1, Fact1, Motivo1, Reposi1, Destruccion1,
              Ref2, Produ2, Canti2, Valor2, Lote2, Fact2, Motivo2, Reposi2, Destruccion2,
              Ref3, Produ3, Canti3, Valor3, Lote3, Fact3, Motivo3, Reposi3, Destruccion3,
              Ref4, Produ4, Canti4, Valor4, Lote4, Fact4, Motivo4, Reposi4, Destruccion4,
              Ref5, Produ5, Canti5, Valor5, Lote5, Fact5, Motivo5, Reposi5, Destruccion5, TotalSuma

              , usuario, modificadoX, Fecha]);
            i = i + 1;


            $(document).ready(function () {
              var tablaSuma = $('#example').DataTable({

                dom: "Bfrtip",
                buttons: {
                  dom: {
                    button: {
                      className: 'btn'
                    }
                  },
                  buttons: [
                    {
                      extend: 'excel',
                      text: 'Exportar a excel',
                      className: 'btn btn-outline-success',
                      excelStyles: {
                        template: 'header_blue'
                      }

                    }
                  ]
                },




                data: dataSet,
                "bDestroy": true,
                columns: [
                  { title: "N°" },
                  { title: "Cliente" },
                  { title: "Referencia" },
                  { title: "Producto" },
                  { title: "Cantidad" },
                  { title: "Valor" },
                  { title: "Lote" },
                  { title: "Factura" },
                  { title: "Motivo" },
                  { title: "Reposición" },
                  { title: "Destrucción" },

                  { title: "Referencia2" },
                  { title: "Producto2" },
                  { title: "Cantidad2" },
                  { title: "Valor2" },
                  { title: "Lote2" },
                  { title: "Factura2" },
                  { title: "Motivo" },
                  { title: "Reposición2" },
                  { title: "Destrucción2" },

                  { title: "Referencia3" },
                  { title: "Producto3" },
                  { title: "Cantidad3" },
                  { title: "Valor3" },
                  { title: "Lote3" },
                  { title: "Factura3" },
                  { title: "Motivo" },
                  { title: "Reposición3" },
                  { title: "Destrucción3" },

                  { title: "Referencia4" },
                  { title: "Producto4" },
                  { title: "Cantidad4" },
                  { title: "Valor4" },
                  { title: "Lote4" },
                  { title: "Factura4" },
                  { title: "Motivo" },
                  { title: "Reposición4" },
                  { title: "Destrucción4" },

                  { title: "Referencia5" },
                  { title: "Producto5" },
                  { title: "Cantidad5" },
                  { title: "Valor5" },
                  { title: "Lote5" },
                  { title: "Factura5" },
                  { title: "Motivo" },
                  { title: "Reposición5" },
                  { title: "Destrucción5" },
                  { title: "Total" },


                  { title: "Registrado por" },
                  { title: "Modificado por" },

                  { title: "Fecha" },







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



            //--------------------------------------------------











          });

          

        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });




}