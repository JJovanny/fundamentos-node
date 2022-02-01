

let extraerUser = (id,callback) => {

let usuario = {
    nombre : 'jovanny',
    id,
}

if(id != 1){

    console.log('Lo siento chamaco no tienes acceso');

}else{

    callback(null, usuario.nombre);

}

}


extraerUser(1,(err,usuario) => {

if(err){
    return console.log(err);
}

console.log('Binevenido admin',usuario);




})