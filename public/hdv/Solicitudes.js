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


//------------------logout------------------
const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("ha salido");

    location.reload();
  });
});

//----------------login-----------------
const signinForm = document.querySelector("#signin-form");

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#login-email").value;
  const pasword = document.querySelector("#login-password").value;

  //console.log(email, pasword);

  auth.signInWithEmailAndPassword(email, pasword).then((userCredential) => {
    signinForm.reset();
    $("#signinModal").modal("hide");
    console.log("si funciona");
    document.getElementById("entrar").style.display = "none";
  });
});

//----------------------actualizar consecutivo-----------
auth.onAuthStateChanged((user) => {
    tabl = document.getElementById("tabla");
    let autorizadoPor = user.email;
    console.log("el usuario es" + autorizadoPor);
    document.getElementById("usuario").value = autorizadoPor;
    if (user) {
      db.collection("Requisiones")
        .where("Numero", ">", 2150)
        .orderBy("Numero", "asc")
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            var caso = Number(`${doc.data().Numero}`);
            //var casoNuevo = 0;
            // var casoNuevo = Number(caso + 1);
            //---------------------------------------------------------------------------------.collection("Facturas").where("Caso", ">", 0).orderBy("Caso", "asc")
            //var casoNuevo = 0;
            //var casoNuevo = Number(caso + 1);
            caso++;
  
            console.log(caso);
            //alert(casoNuevo)
            // document.getElementById('caso').value = casoNuevo;
            document.getElementById("caso").value = caso;
          });
        });
  
      /*db.collection("ControlInterno")
        .where("Estado", "==", "En Proceso")
        .limit(200)
        .onSnapshot((querySnapshot) => {
          tabl.innerHTML = "";
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
  
            Numero = Number(`${doc.data().Numero}`);
            Referencia1 = `${doc.data().Referencia}`;
            Nombre = `${doc.data().Nombre}`;
            Lote = `${doc.data().Lote}`;
            Estado = `${doc.data().Estado}`;
  
            document.getElementById("logout").style.display = "block";
  
            tabl.innerHTML += `
                        <tr>
                        <td>${Numero}</td>
                        <td>${Referencia1}</td>
                        <td scope="row">${Nombre}</td>
                   
                    
                          <td>${Lote}</td>
                          <td>${Estado}</td>
                          
                          
                          
                   
      
                  
                    </tr>
      
               
               
                          `;
          });
        }) 
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });*/
    } else {
      console.log("loguese por favor");
  
      document.getElementById("entrar").style.display = "block";
      document.getElementById("logout").style.display = "none";
      Swal.fire("Debe Loguearse", "", "error");
    }
  });
  