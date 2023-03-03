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




function Comparar() {
    /*var $elementoParaConvertir = document.body;
    html2pdf().set({
        margin: 1,
        filename: 'informe.pdf',
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 3,
            letterRendering: true,

        },
        jsPDF:{
            unit: "in",
            format: "a3",
            orientation: "portrait"
        }
    })
    .from($elementoParaConvertir).save().catch(err => console.log(err)); */

    event.preventDefault();
    //boton.style.display = "none";
    window.print();

}

function Consultar() {

    caso = document.getElementById('numberQuery').value;
    //var fecha2 = document.getElementById('fecha2').value;
    //var tabl23 = document.getElementById("tabla");
    /* exisEstado1="";
     exisZona1="";
     exisEstado2="";
     exisZona2="";
     exisEstado3="";
     exisZona3="";
     exisEstado4="";
     exisZona4="";
     exisEstado5="";
     exisZona5="";*/

    dataSet = new Array();
    //var i = 1;
    Zona1 = "";
    Estado1 = "";
    var andenes = document.getElementById('andenes').value;
    var calefacc = document.getElementById('calefacc').value;
    var cerra = document.getElementById('cerra').value;
    var cuarto = document.getElementById('cuarto').value;
    var cuartQuimi = document.getElementById('cuartQuimi').value;
    var desnatadores = document.getElementById('desnatadores').value;
    var Duchas = document.getElementById('Duchas').value;
    var Implementos = document.getElementById('Implementos').value;
    var Inyectores = document.getElementById('Inyectores').value;
    var lava = document.getElementById('lava').value;

    var rejilla = document.getElementById('rejilla').value;
    var rompe = document.getElementById('rompe').value;
    var succiones = document.getElementById('succiones').value;
    var vaso = document.getElementById('vaso').value;



    db.collection("RegistroInforme").where("Id", "==", caso)//.where("FecIni", "<=", fecha2)
        .get()
        .then(function (querySnapshot) {
            //tabl23.innerHTML = "";
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                /*Swal.fire(
                  'Consulta exitosa!!!',
                  '',
                  'success'
                )*/
                var Estado1 = `${doc.data().Estado1}`;
                var Estado2 = `${doc.data().Estado2}`;
                var Estado3 = `${doc.data().Estado3}`;
                var Estado4 = `${doc.data().Estado4}`;
                var Estado5 = `${doc.data().Estado5}`;
                var Estado6 = `${doc.data().Estado6}`;
                var Estado7 = `${doc.data().Estado7}`;
                var Estado8 = `${doc.data().Estado8}`;
                var Estado10 = `${doc.data().Estado10}`;
                var Estado11 = `${doc.data().Estado11}`;
                var Estado12 = `${doc.data().Estado12}`;
                var Estado13 = `${doc.data().Estado13}`;
                var Estado14 = `${doc.data().Estado14}`;
                var Zona1 = `${doc.data().Zona1}`;
                var Zona2 = `${doc.data().Zona2}`;
                var Zona3 = `${doc.data().Zona3}`;
                var Zona4 = `${doc.data().Zona4}`;
                var Zona5 = `${doc.data().Zona5}`;
                var Zona6 = `${doc.data().Zona6}`;
                var Zona7 = `${doc.data().Zona7}`;
                var Zona8 = `${doc.data().Zona8}`;
                var Zona9 = `${doc.data().Zona9}`;
                var Zona10 = `${doc.data().Zona10}`;
                var Zona11 = `${doc.data().Zona11}`;
                var Zona12 = `${doc.data().Zona12}`;
                var Zona13 = `${doc.data().Zona13}`;
                var Zona14 = `${doc.data().Zona14}`;

                //------------------conceptos-----------

                var concepto1 = `${doc.data().concepto1}`;
                var concepto2 = `${doc.data().concepto2}`;
                var concepto3 = `${doc.data().concepto3}`;
                var concepto4 = `${doc.data().concepto4}`;
                var concepto5 = `${doc.data().concepto5}`;
                var concepto6 = `${doc.data().concepto6}`;
                var concepto7 = `${doc.data().concepto7}`;
                var concepto8 = `${doc.data().concepto8}`;
                var concepto9 = `${doc.data().concepto9}`;
                var concepto10 = `${doc.data().concepto10}`;
                var concepto11 = `${doc.data().concepto11}`;
                var concepto12 = `${doc.data().concepto12}`;

                var EstatusInforme1 = `${doc.data().EstatusInforme1}`;
                var EstatusInforme2 = `${doc.data().EstatusInforme2}`;
                var EstatusInforme3 = `${doc.data().EstatusInforme3}`;
                var EstatusInforme4 = `${doc.data().EstatusInforme4}`;
                var EstatusInforme5 = `${doc.data().EstatusInforme5}`;
                var EstatusInforme6 = `${doc.data().EstatusInforme6}`;
                var EstatusInforme7 = `${doc.data().EstatusInforme7}`;
                var EstatusInforme8 = `${doc.data().EstatusInforme8}`;
                var EstatusInforme9 = `${doc.data().EstatusInforme9}`;
                var EstatusInforme10 = `${doc.data().EstatusInforme10}`;
                var EstatusInforme11 = `${doc.data().EstatusInforme11}`;
                var EstatusInforme12 = `${doc.data().EstatusInforme12}`;

                var Nombre = `${doc.data().Nombre}`;

                var observaciones = `${doc.data().observaciones}`;  

                var CentroCostos = `${doc.data().CentroCostos}`; 

                document.getElementById('centrocostos').value=CentroCostos;





                /*dataSet.push([Zona1,
                    Zona2,Zona3,
                    Zona4,Zona5,
                    Zona6,Zona7,
                    Zona8,Zona9,
                    Zona10,Zona11]); */
                //console.log(dataSet)

                /*for (i = 0; i < dataSet.length; i++) {
                    console.log('--------------')
                    console.log(dataSet[i]);
                    console.log('--------------')

                  } */
                /*dataSet.forEach(element => {
                  console.log(element[0]==andenes)
                  if(element[0]==andenes){
                      document.getElementById('estado1').value = Estado1;
                  }
                });*/

                /*var andenes=document.getElementById('andenes').value;
                var calefacc=document.getElementById('calefacc').value;
                var cerra=document.getElementById('cerra').value;
                var cuarto=document.getElementById('cuarto').value;
                var cuartQuimi=document.getElementById('cuartQuimi').value;
                var desnatadores=document.getElementById('desnatadores').value;
                var Duchas=document.getElementById('Duchas').value;
                var Implementos=document.getElementById('Implementos').value;
                var Inyectores=document.getElementById('Inyectores').value;
                var lava=document.getElementById('lava').value; 
    
                var rejilla=document.getElementById('rejilla').value;
                var rompe=document.getElementById('rompe').value;
                var succiones=document.getElementById('succiones').value;
                var vaso=document.getElementById('vaso').value; */
                if (Zona1 != '') {
                    document.getElementById('andenes').value = Zona1;
                    document.getElementById('estado1').value = Estado1;
                }
                if (Zona2 != '') {
                    document.getElementById('calefacc').value = Zona2;
                    document.getElementById('estado2').value = Estado2;
                }
                if (Zona3 != '') {
                    document.getElementById('cerra').value = Zona3;
                    document.getElementById('estado3').value = Estado3;
                }
                if (Zona4 != '') {
                    document.getElementById('cuarto').value = Zona4;
                    document.getElementById('estado4').value = Estado4;
                }
                if (Zona5 != '') {
                    document.getElementById('cuartQuimi').value = Zona5;
                    document.getElementById('estado5').value = Estado5;
                }
                if (Zona6 != '') {
                    document.getElementById('desnatadores').value = Zona6;
                    document.getElementById('estado6').value = Estado6;
                }
                if (Zona7 != '') {
                    document.getElementById('Duchas').value = Zona7;
                    document.getElementById('estado7').value = Estado7;
                }
                if (Zona8 != '') {
                    document.getElementById('Implementos').value = Zona8;
                    document.getElementById('estado8').value = Estado8;
                }
                if (Zona9 != '') {
                    document.getElementById('Inyectores').value = Zona9;
                    document.getElementById('estado9').value = Estado9;
                }
                if (Zona10 != '') {
                    document.getElementById('lava').value = Zona10;
                    document.getElementById('estado10').value = Estado10;
                }
                if (Zona11 != '') {
                    document.getElementById('rejilla').value = Zona11;
                    document.getElementById('estado11').value = Estado11;
                }
                if (Zona12 != '') {
                    document.getElementById('rompe').value = Zona12;
                    document.getElementById('estado12').value = Estado12;
                }
                if (Zona13 != '') {
                    document.getElementById('succiones').value = Zona13;
                    document.getElementById('estado13').value = Estado13;
                }
                if (Zona14 != '') {
                    document.getElementById('vaso').value = Zona14;
                    document.getElementById('estado14').value = Estado14;
                }




                if (concepto1 != '') {
                    document.getElementById('concep1').value = concepto1;
                    document.getElementById('estado01').value = EstatusInforme1;
                }
                if (concepto2 != '') {
                    document.getElementById('concep2').value = concepto2;
                    document.getElementById('estado02').value = EstatusInforme2;
                }
                if (concepto3 != '') {
                    document.getElementById('concep3').value = concepto3;
                    document.getElementById('estado03').value = EstatusInforme3;
                }
                if (concepto4 != '') {
                    document.getElementById('concep4').value = concepto4;
                    document.getElementById('estado04').value = EstatusInforme4;
                }
                if (concepto5 != '') {
                    document.getElementById('concep5').value = concepto5;
                    document.getElementById('estado05').value = EstatusInforme5;
                }
                if (concepto6 != '') {
                    document.getElementById('concep6').value = concepto6;
                    document.getElementById('estado06').value = EstatusInforme6;
                }
                if (concepto7 != '') {
                    document.getElementById('concep7').value = concepto7;
                    document.getElementById('estado07').value = EstatusInforme7;
                }
                if (concepto8 != '') {
                    document.getElementById('concep8').value = concepto8;
                    document.getElementById('estado08').value = EstatusInforme8;
                }
                if (concepto9 != '') {
                    document.getElementById('concep9').value = concepto9;
                    document.getElementById('estado09').value = EstatusInforme9;
                }
                if (concepto10 != '') {
                    document.getElementById('concep10').value = concepto10;
                    document.getElementById('estado010').value = EstatusInforme10;
                }
                if (concepto11 != '') {
                    document.getElementById('concep11').value = concepto11;
                    document.getElementById('estado011').value = EstatusInforme11;
                }
                if (concepto12 != '') {
                    document.getElementById('concep12').value = concepto12;
                    document.getElementById('estado012').value = EstatusInforme12;
                }

                document.getElementById('nombreOperario').value = Nombre;

                document.getElementById('observacionesArea').value = observaciones;



                /*if(Zona12==rompe){
                    document.getElementById('estado12').value=Estado12;

                }
                if(Zona13==succiones){
                    document.getElementById('estado13').value=Estado13;

                }
                if(Zona14==vaso){
                    document.getElementById('estado14').value=Estado14;

                }*/



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


                //codigo consulta imagenes

                db.collection("ImagenesInforme").where("Id", "==", caso)
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            // doc.data() is never undefined for query doc snapshots
                            console.log(doc.id, " => ", doc.data());

                            var Url1 = `${doc.data().Url1}`;
                            var Url2 = `${doc.data().Url2}`;
                            var Url3 = `${doc.data().Url3}`;
                            var Url4 = `${doc.data().Url4}`;
                            var Url5 = `${doc.data().Url5}`;
                            var Url6 = `${doc.data().Url6}`;
                            var Url7 = `${doc.data().Url7}`;
                            var Url8 = `${doc.data().Url8}`;
                            var Url9 = `${doc.data().Url9}`;
                            var Url10 = `${doc.data().Url10}`;
                            var Url11 = `${doc.data().Url11}`;

                            var Zona1 = `${doc.data().Zona1}`;
                            var Zona2 = `${doc.data().Zona2}`;
                            var Zona3 = `${doc.data().Zona3}`;
                            var Zona4 = `${doc.data().Zona4}`;
                            var Zona5 = `${doc.data().Zona5}`;
                            var Zona6 = `${doc.data().Zona6}`;
                            var Zona7 = `${doc.data().Zona7}`;
                            var Zona8 = `${doc.data().Zona8}`;
                            var Zona9 = `${doc.data().Zona9}`;
                            var Zona10 = `${doc.data().Zona10}`;
                            var Zona11 = `${doc.data().Zona11}`;
                            var Fecha = `${doc.data().Fecha}`;

                            var imagen1 = document.getElementById('imagen1');
                            var imagen2 = document.getElementById('imagen2');
                            var imagen3 = document.getElementById('imagen3');

                            var imagen4 = document.getElementById('imagen4');
                            var imagen5 = document.getElementById('imagen5');
                            var imagen6 = document.getElementById('imagen6');

                            var imagen7 = document.getElementById('imagen7');
                            var imagen8 = document.getElementById('imagen8');
                            var imagen9 = document.getElementById('imagen9');

                            var imagen10 = document.getElementById('imagen10');
                            var imagen11 = document.getElementById('imagen11');
                            var imagen12 = document.getElementById('imagen12');


                            imagen1.src = Url1;
                            document.getElementById('titulo1').value = Zona1;

                            imagen2.src = Url2;
                            document.getElementById('titulo2').value = Zona2;

                            imagen3.src = Url3;
                            document.getElementById('titulo3').value = Zona3;

                            imagen4.src = Url4;
                            document.getElementById('titulo4').value = Zona4;

                            imagen5.src = Url5;
                            document.getElementById('titulo5').value = Zona5;

                            imagen6.src = Url6;
                            document.getElementById('titulo6').value = Zona6;

                            imagen7.src = Url7;
                            document.getElementById('titulo7').value = Zona7;

                            imagen8.src = Url8;
                            document.getElementById('titulo8').value = Zona8;

                            imagen10.src = Url10;
                            document.getElementById('titulo10').value = Zona10;

                            imagen11.src = Url11;
                            document.getElementById('titulo11').value = Zona11;
                        });
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                    })

                //fin consulta imagenes



            });

        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    //-------------------------------------



}
