class Tamagochi {

    constructor(sc, felicidad, energia){
  
      this.sc= sc;
      this.felicidad= felicidad;
      this.energia =energia;
    }

    tiempo(tamagochi){
        
    time(tamagochi) 
        
    }

    come(sc,felicidad){
        
  
       
let food = prompt("¿Qué quieres darle de comer, spaguettis o chuches?\n el menu dusponible es\n 1-spaguettis\n 2-chuches \n 3-grilos \n 4-Judias verdes \n 0-no darle de comer prefiero jugar")

         if (food === "1"){ this.sc+=15;this.energia += 7;this.felicidad+=6; alert("ha comido spaguettis");}
         else if (food === "2"){ this.sc+=5;this.energia += 3;this.felicidad +=30 ; alert("ha comido chuches");}
         else if (food === "3"){ this.sc+=2;this.energia += 30;this.felicidad += 5;alert("ha comido grillos");}
         else if (food === "4"){ this.felicidad -= 55;alert("ha comido judias verdes");}
         else if (food === "0"){ alert("no ha comido y vas a jugar");tamagochi.ocio();}
         else{alert("ooooh que pena, no tenemos esa comida.")}

       
   return this.sc;
         
   }

   get getSc(){return this.sc;} 

   get getFelicidad(){return this.felicidad;}
   get getEnergia(){return this.energia;}

   set restahambre(sc){ this.sc-= 6; }
   set restaenergia(energia){ this.energia-= 3;  }
   set restafelicidad(felicidad){ this.felicidad-= 5;  }
   set incr_ociofelicidad(felicidad){this.felicidad += 30}


    
    ocio(felicidad,energia){
        let opc = prompt('1. winOrLoose'+ '\n'+'2. numbers'+ '\n'+'3. riddles');
        switch (opc) {
        case '1' :
            this.winOrLoose();
            break;
        case '2' :
            this.numbers();
            break;
        case '3' :
            this.riddles();
            break;
        }

    }  // Fin metodo ocio

    winOrLoose (energia,felicidad) {
        let rand = prompt('Adivina el numero escondido entre el 1 y 10')
        for(let i = 0; i < 1; i++){
            if(i === rand){
                this.felicidad += 30;
                this.energia += 1;
                alert('win');
            } else {
                 this.felicidad += -50;
                 this.energia += -1;
                 alert('loose');
            }
        }
    }


     numbers (energia,felicidad) {
        let input1 = Math.floor(Math.random() * 10);
        let input2 = Math.floor(Math.random() * 10);
        let sum = input1 + input2;
        let answer = parseInt(prompt(`Cuanto es ${input1} + ${input2} `));
         if (answer === sum){
            this.felicidad += 30;
            this.energia += 1;
             alert('win');
         } else {
            this.felicidad -= 30;
            this.energia -= 1;
             alert('loose');
        }
      
    }

    riddles (adiv,answ) {  
        let riddle = [{guest :'¿Cuantos animales caben en una ballena?', answer: 'ninguno'},{guest :'¿Cual fue el último animal creado por Dios?', answer : 'delfin'},{guest :'Un niño y un pato nacieron el mismo día. ¿Al cabo de un año cual de los dos es mayor?', answer : 'pato'},{guest :'¿Donde guarda un superheroe su disfraz?', answer: 'superchera' }];
        let randomRiddle = Math.floor(Math.random() * riddle.length);
        for(let i = 0; i < riddle.length; i++){
            let rid = alert(riddle[i].guest);
            let ans = prompt('Introduce tu respuesta : ');
            if(riddle[i].answer === ans){
                this.felicidad += 50;
                this.energia += 1;
                alert(`La solución a la adivinanza ${riddle[i].guest} Es : ${riddle[i].answer}`);
                alert('Has ganado 1 adivinanza');
                
            } else {
                this.felicidad += -50;
                this.energia += -1;
                alert('Has fallado, prueba otra adivinanza');  
            }
        }
    }    
// answer1 : ninguna (porque esta llena)
// answer2 : delfin
// answer3 : pato (porque tiene un año y pico)
// answer4 : superchera

    

    
}


function numbers (tamagochi)  {


    document.write("cuanto es 5 + 5?")
    
    tamagochi.getfelicidad = tamagochi.incr_ociofelicidad ;
    return tamagochi.getfelicidad;
    
    
    
         
       
 }
 

 

var time = function(tamagochi){
    var varCounter = 0;
    let tableHora =  document.getElementById('hora');
    let tableHambre =  document.getElementById('hambre');
    let tableEnergia =  document.getElementById('energia');
    let tableFelicidad =  document.getElementById('felicidad');
 

    setInterval(function(){
       if( varCounter>24)
      {varCounter=0;}
    if( varCounter < 8){  document.getElementById("sonic").src="dormir.gif"}
    if( varCounter > 8) {document.getElementById("sonic").src="sonic.gif"}
    if(tamagochi.getFelicidad <= 0){  document.getElementById("sonic").src="muerto.gif"}
    if(contadorcomida != 0){  document.getElementById("sonic").src="comiendo.gif";contadorcomida=0;}
    if(contadorjuego != 0) {  document.getElementById("sonic").src="jugar.gif";
        var n = 0;
        window.setInterval(function(){if (n>3){
        contadorjuego=0;}
         n++;
            },1000);
        }
   
    


      /* if (tamagochi.getSc === 20 || varCounter === 14 || varCounter === 20)
        {
       tamagochi.come();
           }
        else if (tamagochi.getFelicidad === 40){
            tamagochi.ocio();
        }*/
       
       
       if (tamagochi.getFelicidad <= 0 && cont === 0){
            //varCounter = 0;
           
            document.getElementById("sonic").src="muerto.gif"
            cont++;
            

            
          
        }

       else if(tamagochi.getSc<=0 && cont === 0){ document.getElementById("sonic").src="muerto.gif"
       cont++;}

        else if (tamagochi.getEnergia<=0 && cont === 0){ document.getElementById("sonic").src="muerto.gif"
        cont++;}
      
      tableHora.innerHTML = varCounter;
      tableHambre.innerHTML = tamagochi.getSc;
      tableEnergia.innerHTML = tamagochi.getEnergia;
      tableFelicidad.innerHTML = tamagochi.getFelicidad;
      
      ;varCounter++;tamagochi.restahambre = tamagochi.getSc; tamagochi.restaenergia = tamagochi.getEnergia; tamagochi.restafelicidad = tamagochi.getFelicidad
    }, 1200);}
function botoncome(){
    contadorcomida++;
    tamagochi.come();
}

function botonjuega(){
    contadorjuego++;
    tamagochi.ocio()
}

function stop(){clearInterval(time)}

let cont = 0;
let contadorcomida=0;
let contadorjuego=0;
let tamagochi = new Tamagochi(100,100,100);
tamagochi.tiempo(tamagochi);

    
