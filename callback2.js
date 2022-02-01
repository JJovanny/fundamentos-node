let empleados = [
{id : 1, nombre : 'jovanny'},
{id : 2, nombre : 'Granados'},
{id : 3, nombre : 'chacao'}];


let salarios = [
{id : 1, salario : 1000},
{id : 2, salario : 1500}];


let allEmpleado = (id, callback) => {

let empleadoDb = empleados.find( empleado => empleado.id === id);


if(!empleadoDb){

callback('dele pa fuera mi loco');

}else{

callback(null,empleadoDb);

}

}


allEmpleado(12,(err,empleadoDb) => {

if(err){
    return console.log(err);
}

console.log('bienvenido pito',empleadoDb.nombre);


});


let extraerSalario = (empleado, callback) => {

let salarioDB = salarios.find(salario => salario.id === empleado.id);

    
if(!salarioDB){

callback(`Lo siento, el empleado ${empleado.nombre} no tiene asignado un salario`);


}else{ 


callback(null,{
    nombre : empleado.nombre,
    salario : salarioDB.salario
});


}






}



allEmpleado(3,(err,empleadoDb) => {

    if(err){
        return console.log(err);
    }

    
    extraerSalario(empleadoDb,(err, res) => {

        if(err){
        
            return console.log(err);
        
        }
        
        console.log(`el salario de ${res.nombre} es de ${res.salario}`);
        
        
        })    
    
    });