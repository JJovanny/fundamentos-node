let empleados = [
    {id : 1, nombre : 'jovanny'},
    {id : 2, nombre : 'Granados'},
    {id : 3, nombre : 'chacao'}];
    
    
    let salarios = [
    {id : 1, salario : 1000},
    {id : 2, salario : 1500}];


let getEmpleado = (id) => {

return new Promise( (resolve, reject) => {

let empleadosDb = empleados.find(empleado => empleado.id === id);
 
if(!empleadosDb){

    reject('no existe un empleado con ese id');

}else{

    resolve(empleadosDb);
}


});


}


let getSalario = (empleado) => {


return new Promise( (resolve, reject) => {


 let salarioDb = salarios.find(salario => salario.id === empleado.id);

 if(!salarioDb){

reject('lo siento, no existe un salario para ese empleado');

 }else{
     resolve({
         nombre : empleado.nombre,
         saldo : salarioDb.salario
     });
 }

}); 


}



getEmpleado(3).then(empleado => {

return getSalario(empleado);


}).then( res => {

console.log(`el salario es de ${res.saldo}`);

}).catch(err => {

    console.log(err);
});

