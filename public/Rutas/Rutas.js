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

function Documento(val) {

    auth.onAuthStateChanged(user => {
        if (user) {

            val2 = String(val);

            //tabl = document.getElementById("resul11");


            db.collection("Empleados").where("Cedula", "==", val2)
                .get()
                .then(function (querySnapshot) {
                    //tabl.innerHTML = "";
                    querySnapshot.forEach(function (doc) {

                        console.log(doc.id, " => ", doc.data());
                        /* var mq = `${doc.data().MAQUINA}`;*/
                        var nombre = `${doc.data().Empleado}`;
                        //var centroC = `${doc.data().Centro_de_costo}`;


                        //opciones = document.createElement('option');
                        //opciones.setAttribute('value','value1');

                        document.getElementById('empleado').value = nombre;
                        //document.getElementById('centroco').value = centroC;
                        //document.getElementById('numero').value = tlfno;
                        //document.getElementById('ubicacion').value = dire
                        //document.getElementById('codLista').value = listaPrec;

                        /*  tabl.innerHTML += `
                              <tr>
                              <option value="${mq}" >${mq}</option>
                              
                              
                         
                  
                        
                          </tr>
                          `*/



                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });

            //-----------------------------------------


            //-----------------------------------------

        } else {

            console.log('loguese por favor');
            Swal.fire(
                'Debe Loguearse',
                '',
                'error'
            )

        }



    })








    //-----------------------------------------


}

function Registrar() {

    let documento = document.getElementById('documento').value;
    let empleado = document.getElementById('empleado').value;
    let fecIni = document.getElementById('fecIni').value;
    let fecFin = document.getElementById('fecFin').value;
    let observa = document.getElementById('observa').value;

    let cc1 = document.getElementById('cc1').value;
    let cc2 = document.getElementById('cc2').value;
    let cc3 = document.getElementById('cc3').value;
    let cc4 = document.getElementById('cc4').value;
    let cc5 = document.getElementById('cc5').value;
    let cc6 = document.getElementById('cc6').value;
    let cc7 = document.getElementById('cc7').value;
    let cc8 = document.getElementById('cc8').value;
    let cc9 = document.getElementById('cc9').value;
    let cc10 = document.getElementById('cc10').value;
    let cc11 = document.getElementById('cc11').value;
    let cc12 = document.getElementById('cc12').value;
    let cc13 = document.getElementById('cc13').value;
    let cc14 = document.getElementById('cc14').value;
    let cc15 = document.getElementById('cc15').value;
    let cc16 = document.getElementById('cc16').value;
    let cc17 = document.getElementById('cc17').value;
    let cc18 = document.getElementById('cc18').value;
    let cc19 = document.getElementById('cc19').value;
    let cc20 = document.getElementById('cc20').value;

    let vis1 = document.getElementById('vis1').value;
    let vis2 = document.getElementById('vis2').value;
    let vis3 = document.getElementById('vis3').value;
    let vis4 = document.getElementById('vis4').value;
    let vis5 = document.getElementById('vis5').value;
    let vis6 = document.getElementById('vis6').value;
    let vis7 = document.getElementById('vis7').value;
    let vis8 = document.getElementById('vis8').value;
    let vis9 = document.getElementById('vis9').value;
    let vis10 = document.getElementById('vis10').value;
    let vis11 = document.getElementById('vis11').value;
    let vis12 = document.getElementById('vis12').value;
    let vis13 = document.getElementById('vis13').value;
    let vis14 = document.getElementById('vis14').value;
    let vis15 = document.getElementById('vis15').value;
    let vis16 = document.getElementById('vis16').value;
    let vis17 = document.getElementById('vis17').value;
    let vis18 = document.getElementById('vis18').value;
    let vis19 = document.getElementById('vis19').value;
    let vis20 = document.getElementById('vis20').value;

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    let num4 = document.getElementById('num4').value;
    let num5 = document.getElementById('num5').value;
    let num6 = document.getElementById('num6').value;
    let num7 = document.getElementById('num7').value;
    let num8 = document.getElementById('num8').value;
    let num9 = document.getElementById('num9').value;
    let num10 = document.getElementById('num10').value;
    let num11 = document.getElementById('num11').value;
    let num12 = document.getElementById('num12').value;
    let num13 = document.getElementById('num13').value;
    let num14 = document.getElementById('num14').value;
    let num15 = document.getElementById('num15').value;
    let num16 = document.getElementById('num16').value;
    let num17 = document.getElementById('num17').value;
    let num18 = document.getElementById('num18').value;
    let num19 = document.getElementById('num19').value;
    let num20 = document.getElementById('num20').value;
    let tipoUser=document.getElementById('tipoUser').value;



    db.collection("Rutas").add({
        TipoUser:tipoUser,
        Documento: documento,
        Empleado: empleado,
        FecIni: fecIni,
        FecFin: fecFin,
        Observaciones: observa,
        Costos1: cc1,
        Costos2: cc2,
        Costos3: cc3,
        Costos4: cc4,
        Costos5: cc5,
        Costos6: cc6,
        Costos7: cc7,
        Costos8: cc8,
        Costos9: cc9,
        Costos10: cc10,
        Costos11: cc11,
        Costos12: cc12,
        Costos13: cc13,
        Costos14: cc14,
        Costos15: cc15,
        Costos16: cc16,
        Costos17: cc17,
        Costos18: cc18,
        Costos19: cc19,
        Costos20: cc20,
        Visita1: vis1,
        Visita2: vis2,
        Visita3: vis3,
        Visita4: vis4,
        Visita5: vis5,
        Visita6: vis6,
        Visita7: vis7,
        Visita8: vis8,
        Visita9: vis9,
        Visita10: vis10,
        Visita11: vis11,
        Visita12: vis12,
        Visita13: vis13,
        Visita14: vis14,
        Visita15: vis15,
        Visita16: vis16,
        Visita17: vis17,
        Visita18: vis18,
        Visita19: vis19,
        Visita20: vis20,
        Nempleado1: num1,
        Nempleado2: num2,
        Nempleado3: num3,
        Nempleado4: num4,
        Nempleado5: num5,
        Nempleado6: num6,
        Nempleado7: num7,
        Nempleado8: num8,
        Nempleado9: num9,
        Nempleado10: num10,
        Nempleado11: num11,
        Nempleado12: num12,
        Nempleado13: num13,
        Nempleado14: num14,
        Nempleado15: num15,
        Nempleado16: num16,
        Nempleado17: num17,
        Nempleado18: num18,
        Nempleado19: num19,
        Nempleado20: num20,


    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            Swal.fire(
                'Registro Exitoso!!!',
                'Ha completado el registro del formato..',
                'success'
            )
            setInterval("location.reload()", 3000);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);

        });




}

function Consultar() {

    let documento = document.getElementById('documento').value;
    let fechaIni= document.getElementById('fecIni').value;


    db.collection("Rutas").where("Documento", "==", documento).where("FecIni","==",fechaIni)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
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
                var Nempleado1 = `${doc.data().Nempleado1}`;
                var Nempleado2 = `${doc.data().Nempleado2}`;
                var Nempleado3 = `${doc.data().Nempleado3}`;
                var Nempleado4 = `${doc.data().Nempleado4}`;
                var Nempleado5 = `${doc.data().Nempleado5}`;
                var Nempleado6 = `${doc.data().Nempleado6}`;
                var Nempleado7 = `${doc.data().Nempleado7}`;
                var Nempleado8 = `${doc.data().Nempleado8}`;
                var Nempleado9 = `${doc.data().Nempleado9}`;
                var Nempleado10 = `${doc.data().Nempleado10}`;
                var Nempleado11 = `${doc.data().Nempleado11}`;
                var Nempleado12 = `${doc.data().Nempleado12}`;
                var Nempleado13 = `${doc.data().Nempleado13}`;
                var Nempleado14 = `${doc.data().Nempleado14}`;
                var Nempleado15 = `${doc.data().Nempleado15}`;
                var Nempleado16 = `${doc.data().Nempleado16}`;
                var Nempleado17 = `${doc.data().Nempleado17}`;
                var Nempleado18 = `${doc.data().Nempleado18}`;
                var Nempleado19 = `${doc.data().Nempleado19}`;
                var Nempleado20 = `${doc.data().Nempleado20}`;
                var Observaciones = `${doc.data().Observaciones}`;

                var Visita1 = `${doc.data().Visita1}`;
                var Visita2 = `${doc.data().Visita2}`;
                var Visita3 = `${doc.data().Visita3}`;
                var Visita4 = `${doc.data().Visita4}`;
                var Visita5 = `${doc.data().Visita5}`;
                var Visita6 = `${doc.data().Visita6}`;
                var Visita7 = `${doc.data().Visita7}`;
                var Visita8 = `${doc.data().Visita8}`;
                var Visita9 = `${doc.data().Visita9}`;
                var Visita10 = `${doc.data().Visita10}`;
                var Visita11 = `${doc.data().Visita11}`;
                var Visita12 = `${doc.data().Visita12}`;
                var Visita13 = `${doc.data().Visita13}`;
                var Visita14 = `${doc.data().Visita14}`;
                var Visita15 = `${doc.data().Visita15}`;
                var Visita16 = `${doc.data().Visita16}`;
                var Visita17 = `${doc.data().Visita17}`;
                var Visita18 = `${doc.data().Visita18}`;
                var Visita19 = `${doc.data().Visita19}`;
                var Visita20 = `${doc.data().Visita20}`;

                var TipoUser = `${doc.data().TipoUser}`;

                document.getElementById('tipoUser').value=TipoUser;


                document.getElementById('empleado').value = Empleado;
                document.getElementById('fecIni').value = FecIni;
                document.getElementById('fecFin').value = FecFin;
                document.getElementById('observa').value = Observaciones;

                document.getElementById('cc1').value = Costos1;
                document.getElementById('cc2').value = Costos2;
                document.getElementById('cc3').value = Costos3;
                document.getElementById('cc4').value = Costos4;
                document.getElementById('cc5').value = Costos5;
                document.getElementById('cc6').value = Costos6;
                document.getElementById('cc7').value = Costos7;
                document.getElementById('cc8').value = Costos8;
                document.getElementById('cc9').value = Costos9;
                document.getElementById('cc10').value = Costos10;
                document.getElementById('cc11').value = Costos11;
                document.getElementById('cc12').value = Costos12;
                document.getElementById('cc13').value = Costos13;
                document.getElementById('cc14').value = Costos14;
                document.getElementById('cc15').value = Costos15;
                document.getElementById('cc16').value = Costos16;
                document.getElementById('cc17').value = Costos17;
                document.getElementById('cc18').value = Costos18;
                document.getElementById('cc19').value = Costos19;
                document.getElementById('cc20').value = Costos20;

                document.getElementById('vis1').value = Visita1;
                document.getElementById('vis2').value = Visita2;
                document.getElementById('vis3').value = Visita3;
                document.getElementById('vis4').value = Visita4;
                document.getElementById('vis5').value = Visita5;
                document.getElementById('vis6').value = Visita6;
                document.getElementById('vis7').value = Visita7;
                document.getElementById('vis8').value = Visita8;
                document.getElementById('vis9').value = Visita9;
                document.getElementById('vis10').value = Visita10;
                document.getElementById('vis11').value = Visita11;
                document.getElementById('vis12').value = Visita12;
                document.getElementById('vis13').value = Visita13;
                document.getElementById('vis14').value = Visita14;
                document.getElementById('vis15').value = Visita15;
                document.getElementById('vis16').value = Visita16;
                document.getElementById('vis17').value = Visita17;
                document.getElementById('vis18').value = Visita18;
                document.getElementById('vis19').value = Visita19;
                document.getElementById('vis20').value = Visita20;

                document.getElementById('num1').value = Nempleado1;
                document.getElementById('num2').value = Nempleado2;
                document.getElementById('num3').value = Nempleado3;
                document.getElementById('num4').value = Nempleado4;
                document.getElementById('num5').value = Nempleado5;
                document.getElementById('num6').value = Nempleado6;
                document.getElementById('num7').value = Nempleado7;
                document.getElementById('num8').value = Nempleado8;
                document.getElementById('num9').value = Nempleado9;
                document.getElementById('num10').value = Nempleado10;
                document.getElementById('num11').value = Nempleado11;
                document.getElementById('num12').value = Nempleado12;
                document.getElementById('num13').value = Nempleado13;
                document.getElementById('num14').value = Nempleado14;
                document.getElementById('num15').value = Nempleado15;
                document.getElementById('num16').value = Nempleado16;
                document.getElementById('num17').value = Nempleado17;
                document.getElementById('num18').value = Nempleado18;
                document.getElementById('num19').value = Nempleado19;
                document.getElementById('num20').value = Nempleado20;

                elimi = function () {

                    db.collection("Rutas").doc(doc.id).delete().then(function () {
                        // alert("Ha eliminado el Registro");


                        console.log("Document successfully deleted!");
                        Swal.fire(
                            'Registro eliminado!!!',
                            '',
                            'success'
                        )
                        setInterval("location.reload()", 3000);

                    }).catch(function (error) {

                        console.error("Error removing document: ", error);
                    });

                }



                actuali = function () {

                    let empleado = document.getElementById('empleado').value;
                    let fecIni = document.getElementById('fecIni').value;
                    let fecFin = document.getElementById('fecFin').value;
                    let observa = document.getElementById('observa').value;

                    let cc1 = document.getElementById('cc1').value;
                    let cc2 = document.getElementById('cc2').value;
                    let cc3 = document.getElementById('cc3').value;
                    let cc4 = document.getElementById('cc4').value;
                    let cc5 = document.getElementById('cc5').value;
                    let cc6 = document.getElementById('cc6').value;
                    let cc7 = document.getElementById('cc7').value;
                    let cc8 = document.getElementById('cc8').value;
                    let cc9 = document.getElementById('cc9').value;
                    let cc10 = document.getElementById('cc10').value;
                    let cc11 = document.getElementById('cc11').value;
                    let cc12 = document.getElementById('cc12').value;
                    let cc13 = document.getElementById('cc13').value;
                    let cc14 = document.getElementById('cc14').value;
                    let cc15 = document.getElementById('cc15').value;
                    let cc16 = document.getElementById('cc16').value;
                    let cc17 = document.getElementById('cc17').value;
                    let cc18 = document.getElementById('cc18').value;
                    let cc19 = document.getElementById('cc19').value;
                    let cc20 = document.getElementById('cc20').value;

                    let vis1 = document.getElementById('vis1').value;
                    let vis2 = document.getElementById('vis2').value;
                    let vis3 = document.getElementById('vis3').value;
                    let vis4 = document.getElementById('vis4').value;
                    let vis5 = document.getElementById('vis5').value;
                    let vis6 = document.getElementById('vis6').value;
                    let vis7 = document.getElementById('vis7').value;
                    let vis8 = document.getElementById('vis8').value;
                    let vis9 = document.getElementById('vis9').value;
                    let vis10 = document.getElementById('vis10').value;
                    let vis11 = document.getElementById('vis11').value;
                    let vis12 = document.getElementById('vis12').value;
                    let vis13 = document.getElementById('vis13').value;
                    let vis14 = document.getElementById('vis14').value;
                    let vis15 = document.getElementById('vis15').value;
                    let vis16 = document.getElementById('vis16').value;
                    let vis17 = document.getElementById('vis17').value;
                    let vis18 = document.getElementById('vis18').value;
                    let vis19 = document.getElementById('vis19').value;
                    let vis20 = document.getElementById('vis20').value;

                    let num1 = document.getElementById('num1').value;
                    let num2 = document.getElementById('num2').value;
                    let num3 = document.getElementById('num3').value;
                    let num4 = document.getElementById('num4').value;
                    let num5 = document.getElementById('num5').value;
                    let num6 = document.getElementById('num6').value;
                    let num7 = document.getElementById('num7').value;
                    let num8 = document.getElementById('num8').value;
                    let num9 = document.getElementById('num9').value;
                    let num10 = document.getElementById('num10').value;
                    let num11 = document.getElementById('num11').value;
                    let num12 = document.getElementById('num12').value;
                    let num13 = document.getElementById('num13').value;
                    let num14 = document.getElementById('num14').value;
                    let num15 = document.getElementById('num15').value;
                    let num16 = document.getElementById('num16').value;
                    let num17 = document.getElementById('num17').value;
                    let num18 = document.getElementById('num18').value;
                    let num19 = document.getElementById('num19').value;
                    let num20 = document.getElementById('num20').value;
                    let tipoUser=document.getElementById('tipoUser').value;

                    var washingtonRef = db.collection("Rutas").doc(doc.id);
                    return washingtonRef.update({
                        
                        TipoUser:tipoUser,

                        Documento: documento,
                        Empleado: empleado,
                        FecIni: fecIni,
                        FecFin: fecFin,
                        Observaciones: observa,
                        Costos1: cc1,
                        Costos2: cc2,
                        Costos3: cc3,
                        Costos4: cc4,
                        Costos5: cc5,
                        Costos6: cc6,
                        Costos7: cc7,
                        Costos8: cc8,
                        Costos9: cc9,
                        Costos10: cc10,
                        Costos11: cc11,
                        Costos12: cc12,
                        Costos13: cc13,
                        Costos14: cc14,
                        Costos15: cc15,
                        Costos16: cc16,
                        Costos17: cc17,
                        Costos18: cc18,
                        Costos19: cc19,
                        Costos20: cc20,
                        Visita1: vis1,
                        Visita2: vis2,
                        Visita3: vis3,
                        Visita4: vis4,
                        Visita5: vis5,
                        Visita6: vis6,
                        Visita7: vis7,
                        Visita8: vis8,
                        Visita9: vis9,
                        Visita10: vis10,
                        Visita11: vis11,
                        Visita12: vis12,
                        Visita13: vis13,
                        Visita14: vis14,
                        Visita15: vis15,
                        Visita16: vis16,
                        Visita17: vis17,
                        Visita18: vis18,
                        Visita19: vis19,
                        Visita20: vis20,
                        Nempleado1: num1,
                        Nempleado2: num2,
                        Nempleado3: num3,
                        Nempleado4: num4,
                        Nempleado5: num5,
                        Nempleado6: num6,
                        Nempleado7: num7,
                        Nempleado8: num8,
                        Nempleado9: num9,
                        Nempleado10: num10,
                        Nempleado11: num11,
                        Nempleado12: num12,
                        Nempleado13: num13,
                        Nempleado14: num14,
                        Nempleado15: num15,
                        Nempleado16: num16,
                        Nempleado17: num17,
                        Nempleado18: num18,
                        Nempleado19: num19,
                        Nempleado20: num20,



                    })
                        .then(function () {


                            console.log("Document successfully updated!");
                            Swal.fire(
                                'Registro Actualizado!!!',
                                '',
                                'success'
                            )
                            setInterval("location.reload()", 3000);
                        })
                        .catch(function (error) {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });
                }





            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



}



function Actualizar() {

    //----------------------------------------------
    /* if (document.getElementById('usuarioIni').value == 'luisa.villa@samaracosmetics.com' || document.getElementById('usuarioIni').value == 'karina.hernandez@samaracosmetics.com' || document.getElementById('usuarioIni').value == 'estefania.mona@samaracosmetics.com' || document.getElementById('usuarioIni').value == 'eduardo@mail.com') {*/


    if (confirm("Seguro que desea continuar con el registro?")) {
        actuali();
    }
    else {

    }



    /*} else {

        Swal.fire(
            'Este usuario no tiene permiso para esta acción',
            '',
            'error'
        )


    }*/
    //----------------------------------------------
    /*if (confirm("Seguro que desea actualizar el registro?")) {
        actuali();
    } else {

    }*/
}

function Eliminar() {

    if (confirm("Seguro que desea ELIMINAR el registro?")) {
        elimi();
    } else {

    }
}