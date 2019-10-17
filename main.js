class Tamagochi {

    constructor(sc, felicidad, energia){
  
      this.sc= sc;
      this.felicidad= felicidad;
      this.energia =energia;
    }

    tiempo(tamagochi){
        
    varName(tamagochi) 
        
    }

    come(sc,felicidad){
        if(this.sc >= 100){document.write("el tamagochi ya no tiene hambre")}
  
        else { let food = prompt("¿Qué quieres darle de comer, spaguettis o chuches?");
       
         if (food === "chuches"){ document.write("ha comido una chuche");this.sc+=30;this.energia += 30;this.felicidad+=20}
         else if (food === "spaguettis"){ this.sc+=30;this.energia += 30;document.write("ha comido spaguettis");}
         else{document.write("ooooh que pena, no tenemos esa comida.")}

        }

   return this.sc;
         
   }

   get getSc(){return this.sc;} 

   get getFelicidad(){return this.felicidad;}
   get getEnergia(){return this.energia;}

   set restahambre(sc){ this.sc-= Math.floor(this.sc*0.07); }
   set restaenergia(energia){ this.energia-= Math.floor(this.sc*0.07);  }
   set restafelicidad(felicidad){ this.felicidad-= Math.floor(this.sc*0.07);  }


    
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
        let riddle = [{guest :'Mi tía Cuca tiene una mala racha, ¿quién será esta muchacha?', answer: 'cucaracha'},{guest :'Canto en la orilla, vivo en el agua, no soy pescado, ni soy cigarra.', answer : 'rana'},{guest :'¿Qué animal tiene las cinco vocales?', answer : 'murcielago'},{guest :'Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.', answer: 'pera' }];
        let randomRiddle = Math.floor(Math.random() * riddle.length);
        for(let i = 0; i < riddle.length; i++){
            let rid = alert(riddle[i].guest);
            let ans = prompt('Introduce tu respuesta : ');
            if(riddle[i].answer === ans){
                document.write(`La solucion a la adivinanza ${riddle[i].guest} Es : ${riddle[i].answer}`);
                document.write('You win 1 riddle');
                this.felicidad += 50;
                this.energia += 1;
                
            } else {
                document.write('Try again another riddle answer');
                this.felicidad += -50;
                this.energia += -1;
            }
        }
    }    


    

    
}

var varName = function(tamagochi){
    var varCounter = 0;
    let hambre = 100;
    setInterval(function(){
        document.body.innerHTML = '';
       if( varCounter>24)
      {console.log('finish');varCounter=0;}
       if (tamagochi.getSc < 40)
        {
       tamagochi.come();
           }
        else if (tamagochi.getFelicidad === 70){
            tamagochi.ocio();
        }
      document.write("<br/>Son las " ,varCounter)
      document.write("<br/>Nivel de hambre: ", tamagochi.getSc)
      document.write("<br/>Nivel de energia: ", tamagochi.getEnergia)
      document.write("<br/>Nivel de felicidad: ", tamagochi.getFelicidad)
      
      
      ;varCounter++;tamagochi.restahambre = tamagochi.getSc; tamagochi.restaenergia = tamagochi.getEnergia; tamagochi.restafelicidad = tamagochi.getFelicidad
    }, 1000);}



let tamagochi = new Tamagochi(100,100,100);
tamagochi.tiempo(tamagochi);

    