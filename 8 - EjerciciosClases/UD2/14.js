let message;
if(login=='Empleado'){
    message='Hola';
}else if(login=='Director'){
    message='Felicidades';
}else if(login==''){
    meddage='Sin sesión';
}else{
    message='';
}

//Con ternario
let mensaje = (login == 'Empleado') ? 'Hola' : (login == 'Director') ? 'Felicidades' : (login == '') ? 'Sin sesión': '';