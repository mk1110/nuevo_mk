function logear(){
    let user=document.getElementById("name").value;
    let password=document.getElementById("password").value;

    if(user=="mk1110" && password==240314){
        window.location="./crud-ingresos.html";
    }
    else{
        alert("Ingrese usuario y contraseña correcto")
    }
}