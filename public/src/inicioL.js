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

//----------------login-----------------
const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', (e) => {

    e.preventDefault();
 
    const email = document.querySelector('#login-email').value;
    const pasword = document.querySelector('#login-password').value;

    //console.log(email, pasword);

    auth.signInWithEmailAndPassword(email, pasword)
        .then(userCredential => {

            signinForm.reset();
            //onclick="$(location).attr('href','home.html');"
            //$('#signinModal').modal('hide');
            window.location.href='home.html'
            console.log('si funciona');
            //document.getElementById('entrar').style.display = 'none';

        })


});

