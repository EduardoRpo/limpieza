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

/*let dato1 = Number(2);
let dato2 = Number(1);
let dato3 = Number(4);
let dato4 = Number(5);
let dato5 = Number(2);
let dato6 = Number(1);

const labels = [
    'dd-mm-aaaa',
    'dd-mm-aaaa',
    'dd-mm-aaaa',
    'dd-mm-aaaa',
    'dd-mm-aaaa',
    'dd-mm-aaaa',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Calificación',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [dato1, dato2, dato3, dato4, dato5, dato6, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
); */

//-----------------------------pie--------------------
let dato7 = Number(2);
let dato8 = Number(1);
let dato9 = Number(4);
let dato10 = Number(5);


const labels2 = [
    'Centro Costos A',
    'Centro Costos B',
    'Centro Costos C',


];

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Visitas',
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
        borderColor: 'rgb(255, 99, 132)',
        data: [dato7, dato8, dato9],
    }]
};

const config2 = {
    type: 'pie',
    data: data2,
    options: {}
};

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);

//------------------------------------barra------------------


const labels0 = [
    'Guantes',
    'Polainas',
    'Respirador 3M',
    'Delantal de carnaza',
    'Gafas de seguridad',
    'Delantal plástico',
];

const data0 = {
    labels: labels0,
    datasets: [{
        label: 'Entregas de EPP',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(255, 99, 132)',
        data: [76, 23, 54, 9, 123, 22],
    }]
};

const config0 = {
    type: 'bar',
    data: data0,
    options: {}
};

const myChart0 = new Chart(
    document.getElementById('myChart0'),
    config0
);


//----------------------------------------------------



valor1 = function () {
    var documento=document.getElementById('documento').value;
    dataSet = new Array();
    db.collection("RegistroInforme").where("Documento", "==", documento).orderBy("Fecha", "asc").limit(1)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
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
                Estado12 = Number(`${doc.data().Estado12}`);
                var Fecha = `${doc.data().Fecha}`;
                console.log(Estado1);
                var EstatusInforme1 = Number(`${doc.data().EstatusInforme1}`);
                var EstatusInforme2 = Number(`${doc.data().EstatusInforme2}`);
                var EstatusInforme3 = Number(`${doc.data().EstatusInforme3}`);
                var EstatusInforme4 = Number(`${doc.data().EstatusInforme4}`);
                var EstatusInforme5 = Number(`${doc.data().EstatusInforme5}`);
                var EstatusInforme6 = Number(`${doc.data().EstatusInforme6}`);
                var EstatusInforme7 = Number(`${doc.data().EstatusInforme7}`);
                var EstatusInforme8 = Number(`${doc.data().EstatusInforme8}`);
                var EstatusInforme9 = Number(`${doc.data().EstatusInforme9}`);

                var EstatusInforme10 = Number(`${doc.data().EstatusInforme10}`);
                var EstatusInforme11 = Number(`${doc.data().EstatusInforme11}`);
                var EstatusInforme12 = Number(`${doc.data().EstatusInforme12}`);


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

                document.getElementById('valorProme').value = promedio;
                document.getElementById('valorFecha').value = Fecha;

                //---------------inicio----------

                //---------------fin-------------

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}
valor20 = function () {
    var documento=document.getElementById('documento').value;
    dataSet = new Array();
    db.collection("RegistroInforme").where("Documento", "==", documento).orderBy("Fecha", "asc").limit(2)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
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
                Estado12 = Number(`${doc.data().Estado12}`);
                var Fecha2 = `${doc.data().Fecha}`;
                console.log(Estado1);
                var EstatusInforme1 = Number(`${doc.data().EstatusInforme1}`);
                var EstatusInforme2 = Number(`${doc.data().EstatusInforme2}`);
                var EstatusInforme3 = Number(`${doc.data().EstatusInforme3}`);
                var EstatusInforme4 = Number(`${doc.data().EstatusInforme4}`);
                var EstatusInforme5 = Number(`${doc.data().EstatusInforme5}`);
                var EstatusInforme6 = Number(`${doc.data().EstatusInforme6}`);
                var EstatusInforme7 = Number(`${doc.data().EstatusInforme7}`);
                var EstatusInforme8 = Number(`${doc.data().EstatusInforme8}`);
                var EstatusInforme9 = Number(`${doc.data().EstatusInforme9}`);

                var EstatusInforme10 = Number(`${doc.data().EstatusInforme10}`);
                var EstatusInforme11 = Number(`${doc.data().EstatusInforme11}`);
                var EstatusInforme12 = Number(`${doc.data().EstatusInforme12}`);


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
                var promedio2 = (EstatusInforme1 + EstatusInforme2 + EstatusInforme3 + EstatusInforme4 + EstatusInforme5 + EstatusInforme6 + EstatusInforme7 + EstatusInforme8 + EstatusInforme9 + EstatusInforme10 + EstatusInforme11 + EstatusInforme12) / contador;

                //console.log('el total 1 es' + promedio);

                document.getElementById('valorProme2').value = promedio2;
                document.getElementById('valorFecha2').value = Fecha2;

                //---------------inicio----------

                //---------------fin-------------

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}

valor3 = function () {
    var documento=document.getElementById('documento').value;
    dataSet = new Array();
    db.collection("RegistroInforme").where("Documento", "==", documento).orderBy("Fecha", "asc").limit(3)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
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
                Estado12 = Number(`${doc.data().Estado12}`);
                var Fecha3 = `${doc.data().Fecha}`;
                console.log(Estado1);
                var EstatusInforme1 = Number(`${doc.data().EstatusInforme1}`);
                var EstatusInforme2 = Number(`${doc.data().EstatusInforme2}`);
                var EstatusInforme3 = Number(`${doc.data().EstatusInforme3}`);
                var EstatusInforme4 = Number(`${doc.data().EstatusInforme4}`);
                var EstatusInforme5 = Number(`${doc.data().EstatusInforme5}`);
                var EstatusInforme6 = Number(`${doc.data().EstatusInforme6}`);
                var EstatusInforme7 = Number(`${doc.data().EstatusInforme7}`);
                var EstatusInforme8 = Number(`${doc.data().EstatusInforme8}`);
                var EstatusInforme9 = Number(`${doc.data().EstatusInforme9}`);

                var EstatusInforme10 = Number(`${doc.data().EstatusInforme10}`);
                var EstatusInforme11 = Number(`${doc.data().EstatusInforme11}`);
                var EstatusInforme12 = Number(`${doc.data().EstatusInforme12}`);


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
                var promedio3 = (EstatusInforme1 + EstatusInforme2 + EstatusInforme3 + EstatusInforme4 + EstatusInforme5 + EstatusInforme6 + EstatusInforme7 + EstatusInforme8 + EstatusInforme9 + EstatusInforme10 + EstatusInforme11 + EstatusInforme12) / contador;

                //console.log('el total 1 es' + promedio);

                document.getElementById('valorProme3').value = promedio3;
                document.getElementById('valorFecha3').value = Fecha3;

                //---------------inicio----------

                //---------------fin-------------

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}
valor4 = function () {
    var documento=document.getElementById('documento').value;
    dataSet = new Array();
    db.collection("RegistroInforme").where("Documento", "==", documento).orderBy("Fecha", "asc").limit(4)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
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
                Estado12 = Number(`${doc.data().Estado12}`);
                var Fecha4 = `${doc.data().Fecha}`;
                console.log(Estado1);
                var EstatusInforme1 = Number(`${doc.data().EstatusInforme1}`);
                var EstatusInforme2 = Number(`${doc.data().EstatusInforme2}`);
                var EstatusInforme3 = Number(`${doc.data().EstatusInforme3}`);
                var EstatusInforme4 = Number(`${doc.data().EstatusInforme4}`);
                var EstatusInforme5 = Number(`${doc.data().EstatusInforme5}`);
                var EstatusInforme6 = Number(`${doc.data().EstatusInforme6}`);
                var EstatusInforme7 = Number(`${doc.data().EstatusInforme7}`);
                var EstatusInforme8 = Number(`${doc.data().EstatusInforme8}`);
                var EstatusInforme9 = Number(`${doc.data().EstatusInforme9}`);

                var EstatusInforme10 = Number(`${doc.data().EstatusInforme10}`);
                var EstatusInforme11 = Number(`${doc.data().EstatusInforme11}`);
                var EstatusInforme12 = Number(`${doc.data().EstatusInforme12}`);


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
                var promedio4 = (EstatusInforme1 + EstatusInforme2 + EstatusInforme3 + EstatusInforme4 + EstatusInforme5 + EstatusInforme6 + EstatusInforme7 + EstatusInforme8 + EstatusInforme9 + EstatusInforme10 + EstatusInforme11 + EstatusInforme12) / contador;

                //console.log('el total 1 es' + promedio);

                document.getElementById('valorProme4').value = promedio4;
                document.getElementById('valorFecha4').value = Fecha4;

                //---------------inicio----------

                //---------------fin-------------

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}

valor5 = function () {
    var documento=document.getElementById('documento').value;
    dataSet = new Array();
    db.collection("RegistroInforme").where("Documento", "==", documento).orderBy("Fecha", "asc").limit(5)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
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
                Estado12 = Number(`${doc.data().Estado12}`);
                var Fecha5 = `${doc.data().Fecha}`;
                console.log(Estado1);
                var EstatusInforme1 = Number(`${doc.data().EstatusInforme1}`);
                var EstatusInforme2 = Number(`${doc.data().EstatusInforme2}`);
                var EstatusInforme3 = Number(`${doc.data().EstatusInforme3}`);
                var EstatusInforme4 = Number(`${doc.data().EstatusInforme4}`);
                var EstatusInforme5 = Number(`${doc.data().EstatusInforme5}`);
                var EstatusInforme6 = Number(`${doc.data().EstatusInforme6}`);
                var EstatusInforme7 = Number(`${doc.data().EstatusInforme7}`);
                var EstatusInforme8 = Number(`${doc.data().EstatusInforme8}`);
                var EstatusInforme9 = Number(`${doc.data().EstatusInforme9}`);

                var EstatusInforme10 = Number(`${doc.data().EstatusInforme10}`);
                var EstatusInforme11 = Number(`${doc.data().EstatusInforme11}`);
                var EstatusInforme12 = Number(`${doc.data().EstatusInforme12}`);


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
                var promedio5 = (EstatusInforme1 + EstatusInforme2 + EstatusInforme3 + EstatusInforme4 + EstatusInforme5 + EstatusInforme6 + EstatusInforme7 + EstatusInforme8 + EstatusInforme9 + EstatusInforme10 + EstatusInforme11 + EstatusInforme12) / contador;

                //console.log('el total 1 es' + promedio);

                document.getElementById('valorProme5').value = promedio5;
                document.getElementById('valorFecha5').value = Fecha5;

                //---------------inicio----------

                //---------------fin-------------

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}

valor6 = function () {
    var documento=document.getElementById('documento').value;
    dataSet = new Array();
    db.collection("RegistroInforme").where("Documento", "==", documento).orderBy("Fecha", "asc").limit(6)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
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
                Estado12 = Number(`${doc.data().Estado12}`);
                var Fecha6 = `${doc.data().Fecha}`;
                console.log(Estado1);
                var EstatusInforme1 = Number(`${doc.data().EstatusInforme1}`);
                var EstatusInforme2 = Number(`${doc.data().EstatusInforme2}`);
                var EstatusInforme3 = Number(`${doc.data().EstatusInforme3}`);
                var EstatusInforme4 = Number(`${doc.data().EstatusInforme4}`);
                var EstatusInforme5 = Number(`${doc.data().EstatusInforme5}`);
                var EstatusInforme6 = Number(`${doc.data().EstatusInforme6}`);
                var EstatusInforme7 = Number(`${doc.data().EstatusInforme7}`);
                var EstatusInforme8 = Number(`${doc.data().EstatusInforme8}`);
                var EstatusInforme9 = Number(`${doc.data().EstatusInforme9}`);

                var EstatusInforme10 = Number(`${doc.data().EstatusInforme10}`);
                var EstatusInforme11 = Number(`${doc.data().EstatusInforme11}`);
                var EstatusInforme12 = Number(`${doc.data().EstatusInforme12}`);


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
                var promedio6 = (EstatusInforme1 + EstatusInforme2 + EstatusInforme3 + EstatusInforme4 + EstatusInforme5 + EstatusInforme6 + EstatusInforme7 + EstatusInforme8 + EstatusInforme9 + EstatusInforme10 + EstatusInforme11 + EstatusInforme12) / contador;

                //console.log('el total 1 es' + promedio);

                document.getElementById('valorProme6').value = promedio6;
                document.getElementById('valorFecha6').value = Fecha6;

                //---------------inicio----------

                //---------------fin-------------

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}

graficaLinea = function () {
    //dataSet.push([promedio]);
    //  console.log("RESTREPO"+uniPre1+"restrepo2"+uniPre2);
    var valorPro = document.getElementById('valorProme').value;
    var valorPro2 = document.getElementById('valorProme2').value;
    var valorPro3 = document.getElementById('valorProme3').value;
    var valorPro4 = document.getElementById('valorProme4').value;
    var valorPro5 = document.getElementById('valorProme5').value;
    var valorPro6 = document.getElementById('valorProme6').value;

    var fecha = document.getElementById('valorFecha').value;
    var fecha2 = document.getElementById('valorFecha2').value;
    var fecha3 = document.getElementById('valorFecha3').value;
    var fecha4 = document.getElementById('valorFecha4').value;
    var fecha5 = document.getElementById('valorFecha5').value;
    var fecha6 = document.getElementById('valorFecha6').value;
    let miCanvas = document.getElementById("myChart").getContext("2d");


    var chart = new Chart(miCanvas, {
        type: 'line',
        data: {
            labels: [fecha, fecha2, fecha3,fecha4,fecha5,fecha6],
            datasets: [

                {
                    label: "Calificación Promedio",
                    // data:tiempo.map(item => item.cantidades)
                    backgroundColor: "	rgb(255, 99, 132) ",



                    data: [valorPro, valorPro2, valorPro3,valorPro4,valorPro5,valorPro6]
                },

            ]

        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        dispaly: false,
                    }
                }]
            },
            title: {
                dispaly: true,
                text: "Indicadores de Produccion por #OP",
            },
            tooltips: {
                backgroundColor: 'rgb(255, 99, 132)',
                titleFontSize: 20,
                xPadding: 20,
                yPadding: 20,
                bodyFontSize: 15,
                bodySpacing: 10,
                mode: 'x',
            }
        },



    })
}
graficaLinea2 = function () {
    //dataSet.push([promedio]);
    //  console.log("RESTREPO"+uniPre1+"restrepo2"+uniPre2);
    var valorPro = document.getElementById('valorProme').value;
    var valorPro2 = document.getElementById('valorProme2').value;
    var valorPro3 = document.getElementById('valorProme3').value;
    //var valorPro4 = document.getElementById('valorProme4').value;
    //var valorPro5 = document.getElementById('valorProme5').value;
    //var valorPro6 = document.getElementById('valorProme6').value;

    var fecha = document.getElementById('valorFecha').value;
    var fecha2 = document.getElementById('valorFecha2').value;
    var fecha3 = document.getElementById('valorFecha3').value;
   // var fecha4 = document.getElementById('valorFecha4').value;
    //var fecha5 = document.getElementById('valorFecha5').value;
   // var fecha6 = document.getElementById('valorFecha6').value;
    let miCanvas = document.getElementById("myChart0").getContext("2d");


    var chart = new Chart(miCanvas, {
        type: 'line',
        data: {
            labels: [fecha, fecha2, fecha3,fecha4,fecha5,fecha6],
            datasets: [

                {
                    label: "Calificación Promedio",
                    // data:tiempo.map(item => item.cantidades)
                    backgroundColor: "	rgb(0, 128, 128) ",



                    data: [valorPro, valorPro2, valorPro3,valorPro4,valorPro5,valorPro6]
                },

            ]

        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        dispaly: false,
                    }
                }]
            },
            title: {
                dispaly: true,
                text: "Indicadores de Produccion por #OP",
            },
            tooltips: {
                backgroundColor: '#0584f6',
                titleFontSize: 20,
                xPadding: 20,
                yPadding: 20,
                bodyFontSize: 15,
                bodySpacing: 10,
                mode: 'x',
            }
        },



    })
}
let chart;
valor2 = function () {

    dataSet = new Array();

    db.collection("RegistroInforme").where("Documento", "==", '39451875').orderBy("Fecha", "asc").limit(2)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
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
                Estado12 = Number(`${doc.data().Estado12}`);
                // console.log(Estado1);
                console.log(Estado1);


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
                if (Estado12 != 0) {
                    contador++;
                }

                var promedio = (Estado1 + Estado2 + Estado3 + Estado4 + Estado5 + Estado6 + Estado7 + Estado8 + Estado9 + Estado10 + Estado11 + Estado12) / contador;

                console.log('promedio #2:  ' + promedio)




                dataSet.push([promedio]);


                let miCanvas = document.getElementById("myChart").getContext("2d");
                if (chart) {
                    chart.destroy();
                }

                var chart = new Chart(miCanvas, {
                    type: 'bar',
                    data: {
                        labels: ["Preparacion 1", "Preparacion 2"],
                        datasets: [

                            {
                                label: "Tiempo Trabajado (min)",
                                // data:tiempo.map(item => item.cantidades)
                                backgroundColor: "	rgb(0, 128, 128) ",



                                data: ['dato 1', 'dato 2']
                            },

                        ]

                    },
                    options: {
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    dispaly: false,
                                }
                            }]
                        },
                        title: {
                            dispaly: true,
                            text: "Indicadores de Produccion por #OP",
                        },
                        tooltips: {
                            backgroundColor: '#0584f6',
                            titleFontSize: 20,
                            xPadding: 20,
                            yPadding: 20,
                            bodyFontSize: 15,
                            bodySpacing: 10,
                            mode: 'x',
                        }
                    },



                })



            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}

function prueba() {
    //valor1(); //trae el ultimo

    valor2();

}

function Documento(val) {

    dataSet = new Array();
    var i = 1;
    db.collection("RegistroInforme").where("Documento", "==", val)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
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
                Estado12 = Number(`${doc.data().Estado12}`);


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
                if (Estado12 != 0) {
                    contador++;
                }

                var promedio = (Estado1 + Estado2 + Estado3 + Estado4 + Estado5 + Estado6 + Estado7 + Estado8 + Estado9 + Estado10 + Estado11 + Estado12) / contador;




                dataSetjr.push([promedio]);
                //console.log('usuario:' + usuario + '-' + 'modificado:' + modificadoX + '-' + 'fecha' + Fecha);

                i = i + 1;

                console.log(dataSetjr);


            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

}



function Test() {

    valor1();
    valor20();
    valor3();
    valor4();
    valor5();
    valor6();
    //graficaLinea();

    setInterval(Test2, 2000);

}

function Test2() {
    graficaLinea();
}
