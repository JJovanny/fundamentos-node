let personal = {
  docentes : { 
  sueldo : '1500',
  horario : '07:34/5:56',
  },
    administradores : {
        sueldo : '2300',
        horario : '09:34/5:56',
      
    },
      limpieza : {
        sueldo : '800',
        horario : '07:34/5:56',
      
      },
       directiva : {
        sueldo : '3600',
        horario : '09:34/5:56',
       
       },
        getCargos: function() {
              
                return `sueldo y horaro ${this.sueldo} ${this.horario} `;
             }


}


let autosDeportivos = {

camaro : {
 modelo : {
    cobra :{
       año : {
         2008 : {
         precio : '3500',
         kilometraje : '12.0000 km'
         },
         2009 : {
         precio : '4500',
         kilometraje : '10.0000 km'
         }
           },

},
            Lanzer : {
              año : {
              2012 : {
              precio : '50.000',
              kilometraje : '50.0000 km',
              },
              2025 : {
                precio : '350.000',
                kilometrjae : '12.0000 km',
              }

              },
            
            
            },


},


},
Bugatti : {

  modelo : {
    Toro :{
       año : {
         2010 : {
         precio : '3500',
         kilometraje : '12.0000 km'
         },
         2018 : {
         precio : '4500',
         kilometraje : '10.0000 km'
         }
           },

},
            KASYN : {
              año : {
              2015 : {
              precio : '50.000',
              kilometraje : '50.0000 km',
              },
              2023 : {
                precio : '700.000',
                kilometrjae : '12.0000 km',
              }

              },
            
            
            },


},

}


}


// Destructuracion
let {docentes,administradores,limpieza,directiva} = personal;
let {camaro, Bugatti} = autosDeportivos;


console.log('Docentes:',docentes,'Adminis:',administradores,'Limpieza:',limpieza,'Diretiva:',directiva);

// console.log('Bugatti:',Bugatti.modelo,'Camaro:',camaro.modelo);