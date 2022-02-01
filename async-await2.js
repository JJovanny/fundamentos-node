let empleados = [
    {id : 1, nombre : 'jovanny'},
    {id : 2, nombre : 'Granados'},
    {id : 3, nombre : 'chacao'}];
    
    
    let salarios = [
    {id : 1, salario : 1000},
    {id : 2, salario : 1500}];



let getEmpleado = async (id) => {

let empleadosDb = empleados.find(empleado => empleado.id === id);
 
if(!empleadosDb){

    throw new Error('no existe un empleado con ese id');

}else{

    return empleadosDb;
}


}


let getSalario = async (empleado) => {

 let salarioDb = salarios.find(salario => salario.id === empleado.id);

 if(!salarioDb){

throw new Error('lo siento, no existe un salario para ese empleado');

 }else{
     return {
         nombre : empleado.nombre,
         saldo : salarioDb.salario
     };
 }

}



let getMsj = async (id) => {


let empleado = await getEmpleado(id);
let salario = await getSalario(empleado);

return `${salario.nombre} tiene un salario de $${salario.saldo}`;

}


getMsj(1)
.then(msj => console.log(msj))
.catch(err => console.log(err));


