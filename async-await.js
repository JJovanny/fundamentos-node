
// let getNombre = async () => 'jovanny';


let getNombre = (nombre) => {


    return new Promise( (resolve, reject) => {
    
    setTimeout( () => {

        resolve('jovanny');

    },3000);
    
    });
}
    

let saludar = async () => {

let name = await getNombre();

return `hola ${name}`;

}


saludar().then(msj => console.log(msj));
