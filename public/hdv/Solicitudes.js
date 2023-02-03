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
        document.getElementById('usuarioIni').value = email;
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

limpiar = function () {
    document.getElementById('codigo').value="";
    document.getElementById('version').value="";
    document.getElementById('fechaVer').value="";
    document.getElementById('caso').value="";
    document.getElementById('vacante').value="";
    document.getElementById('cargo').value="";
    document.getElementById('descripcion').value="";
    document.getElementById('horario').value="";
    document.getElementById('finicio').value="";
    document.getElementById('hombre').value="";
    document.getElementById('mujer').value="";
    document.getElementById('indiferente').value="";
    document.getElementById('aseo').value="";
    document.getElementById('residuos').value="";
    document.getElementById('piscinero').value="";
    document.getElementById('quimicos').value="";
    document.getElementById('guadana').value="";
    document.getElementById('hidro').value="";
    document.getElementById('locativo').value="";
    document.getElementById('alturas').value="";
    document.getElementById('electricidad').value="";
    document.getElementById('mantePis').value="";
     document.getElementById('salvavida').value="";
    document.getElementById('reemplazo').value="";
    document.getElementById('centrocostos').value="";
    document.getElementById('vobo').value="";
    document.getElementById('area').value="";
    
  };

regis = function () {
    let codigo =document.getElementById('codigo').value;
    let version =document.getElementById('version').value;
    let fechaVer =document.getElementById('fechaVer').value;
    let caso =document.getElementById('caso').value;
    let vacante =document.getElementById('vacante').value;
    let cargo =document.getElementById('cargo').value;
    let descripcion =document.getElementById('descripcion').value;
    let horario =document.getElementById('horario').value;
    let finicio =document.getElementById('finicio').value;
    let hombre =false;
    let mujer =false;
    let indiferente =false;
    let aseo=false;
    let residuos=false;
    let piscinero=false;
    let quimicos=false;
    let guadana=false;
    let hidro=false;
    let locativo=false;
    let alturas=false;
    let electricidad=false;
    let mantePis=false;
    //let salvavida =document.getElementById('salvavida').checked;
    let salvavida=false;
    let reemplazo =document.getElementById('reemplazo').value;
    let centrocostos =document.getElementById('centrocostos').value;
    let vobo =document.getElementById('vobo').value;
    let area =document.getElementById('area').value;

    // Radio buttons configurations
    if (document.getElementById('hombre').checked) {
        hombre = true;
    }
    if (document.getElementById('mujer').checked) { 

        mujer = true;
    }
    if (document.getElementById('indiferente').checked) {
        indiferente = true;
    }

    // check box configurations
    if (document.getElementById('aseo').checked) {
        aseo = true;
    }
    if (document.getElementById('residuos').checked) { 

        residuos = true;
    }
    if (document.getElementById('piscinero').checked) {
        piscinero = true;
    }

    if (document.getElementById('quimicos').checked) {
        quimicos = true;
    }
    if (document.getElementById('guadana').checked) { 

        guadana = true;
    }
    if (document.getElementById('hidro').checked) {
        hidro = true;
    }
    

    if (document.getElementById('locativo').checked) {
        locativo = true;
    }
    if (document.getElementById('alturas').checked) { 

        alturas = true;
    }
    if (document.getElementById('electricidad').checked) {
        electricidad = true;
    }

    if (document.getElementById('mantePis').checked) {
        mantePis = true;
    }
    if (document.getElementById('salvavida').checked) { 

        salvavida = true;
    }
    
    
    db.collection("Requisiones")
    .add({
      Codigo: codigo,
      Version: version,
      Numero: Number(caso),
      FechaVer: fechaVer,
      Vacante: vacante,
      Cargo: cargo,
      Descripcion: descripcion,
      Horario: horario,
      Finicio: finicio,
      Hombre: hombre,
      Mujer: mujer,
      Indiferente: indiferente,
      Aseo: aseo,
      Residuos: residuos,
      Piscinero: piscinero,
      Quimicos: quimicos,
      Guadana:guadana,
      Hidro:hidro,
      Locativo:locativo,
      Alturas:alturas,
      Electricidad:electricidad,
      MantePis:mantePis,
      Salvavida:salvavida,
      Reemplazo:reemplazo,
      Centrocostos:centrocostos,
      Vobo:vobo,
      Area:area,


    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      Swal.fire(
        "Registro Exitoso!!!",
        "Ha completado el registro del formato..",
        "success"
      );
      limpiar();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("No se pudo completar el registro");
    });
}


function Registrar() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            if (
                /*document.getElementById("usuarioIni").value !=
                  "practicante.desarrollo@samaracosmetics.com" &&
                document.getElementById("usuarioIni").value !=
                  "auxiliar.calidad@samaracosmetics.com" &&*/
                document.getElementById("usuarioIni").value !=
                "prueba@mail.com" &&
                document.getElementById("usuarioIni").value != "eduardo@mail.com"
            ) {
                Swal.fire("No tienes permiso para esta acción", "", "error");
            } else {
                if (confirm("Seguro que desea continuar con el registro?")) {
                    if (document.getElementById("vacante").value != "" && document.getElementById("cargo").value != "" && document.getElementById("horario").value != "" && document.getElementById("finicio").value != "" && document.getElementById("centrocostos").value != "") {
                        regis();
                    } else {
                        Swal.fire("Complete los campos", "", "error");
                    }
                } else {
                }
            }
        } else {
            console.log("loguese por favor");
            Swal.fire("Debe Loguearse", "", "error");
        }
    });
}