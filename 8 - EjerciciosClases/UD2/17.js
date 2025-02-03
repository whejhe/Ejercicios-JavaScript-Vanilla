let user = prompt("Introduce tu usuario");
if(user == "Admin"){
    let password = prompt("Introduce tu contraseña");
    if(password == "TheMaster"){
        alert("Bienvenido");
    }else{
        alert("Contraseña incorrecta");
    }
}else if(user=="" || user==null){
    alert("Cancelado");
}else{
    alert("No te conozco");
}
