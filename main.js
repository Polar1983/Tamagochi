class Tamagochi{

    constructor(sc, felicidad, energia)/* Inicializamos ya los valores aqui?*/{
  
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
        let opc = '';
    do {
    console.log('1. winOrLoose');
    console.log('2. numbers');
    console.log('3. riddles');
    switch(opc){
        case '1' :
            console.log('Jugar a winOrLoose');
            winOrLoose();
            break;
        case '2' :
            console.log('Jugar a numbers');
            numbers();
            break;
        case '3' :
            console.log('Jugar a riddles');
            riddles();
            break;
            
    }
    opc = prompt('Introduce un numero entre 1 y 3 : ') ;
    } while(opc === '1' || opc === '2' || opc === '3'); 
    
}


    
}



var varName = function(tamagochi){
    var varCounter = 0;
    let hambre = 100;
    setInterval(function(){
        document.body.innerHTML = ''
       if( varCounter>24)
      {console.log('finish');varCounter=0;}
       if (tamagochi.getSc < 40)
         {
      
       
       tamagochi.come();

        
           }
      document.write("<br/>Son las " ,varCounter)
      document.write("<br/>Nivel de hambre: ", tamagochi.getSc)
      document.write("<br/>Nivel de energia: ", tamagochi.getEnergia)
      document.write("<br/>Nivel de felicidad: ", tamagochi.getFelicidad)
      
      
      ;varCounter++;tamagochi.restahambre = tamagochi.getSc; tamagochi.restaenergia = tamagochi.getEnergia; tamagochi.restafelicidad = tamagochi.getFelicidad}, 1000);


}


 
function numbers (num1,num2,operator) {
    let input1 = parseInt(prompt('Introduce un numero : '));
    let input2 = parseInt(prompt('Introduce un numero : '));
    let randomOp = prompt('Introduce un operador : +,-,*,/');
    var op = ['+','-','/','*'];
    for(let i = 0; i < op.length; i++){
        if(op[0] === randomOp){
            let operator = '+';
        }else if (op[1] === op[randomOp]){
           let operator = '-';
        }else if (op[2] === op[randomOp]) {
           let operator = '/';
        }else if (op[3] === op[randomOp]){
           let operator = '*';
        }
    }
     switch(randomOp){
         case '+':
             var sum = input1 + input2;
             var answersum = console.log(`Estas sumando ${input1} + ${input2}, y  es igual a ${sum}`);
             time.setFelicidad = 50;
             time.setEnergia = 1;
             console.log(`Tu Felicidad es de : ${time.getFelicidad} y tu Energia es de : ${time.energia}`);
             return answersum;
             break;
         case '-':
             let rest = input1 - input2;
             let answerrest = console.log(`Estas restando ${input1} - ${input2}, y  es igual a ${rest}`);;
             time.setFelicidad = 50;
             time.setEnergia = 1;
             console.log(`Tu Felicidad es de : ${time.getFelicidad} y tu Energia es de : ${time.energia}`);
             return answerrest;
             break;
         case '/':
                let div = input1 / input2;
                let answerdiv = console.log(`La division no tiene resultado}`);
                if(input1 % input2 === 0){
                time.setFelicidad = -50;
                time.setEnergia = -1;
                console.log(`Tu Felicidad es de : ${time.getFelicidad} y tu Energia es de : ${time.energia}`);
                return answerdiv;
                break;
             } else if (input1 === 0 || input2 === 0){
                time.setFelicidad = -50;
                time.setEnergia = -1;
                console.log(`Tu Felicidad es de : ${time.getFelicidad} y tu Energia es de : ${time.energia}`);
                 return answer;
             }
               
         case '*' :
             let mult = input1 * input2;
             let answer = console.log(`Estas multiplicando ${input1} * ${input2}, y  es igual a ${mult}`);
             time.setFelicidad = 50;
                time.setEnergia = 1;
                console.log(`Tu Felicidad es de : ${time.getFelicidad} y tu Energia es de : ${time.energia}`);
             return answer;
             break;
         default :
            return console.log('No has introducido un operador correcto : +,-,/,*,');
  
        }
        
 }

 function riddles (adiv,answ) {
    let riddle = [{guest :'Mi tía Cuca tiene una mala racha, ¿quién será esta muchacha?', answer: 'cucaracha'},{guest :'Canto en la orilla, vivo en el agua, no soy pescado, ni soy cigarra.', answer : 'rana'},{guest :'¿Qué animal tiene las cinco vocales?', answer : 'murcielago'},{guest :'Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.', answer: 'pera' }];
    let randomRiddle = Math.floor(Math.random() * riddle.length);
    for(let i = 0; i < riddle.length; i++){
        let rid = console.log(riddle[i].guest);
        let ans = prompt('Introduce tu respuesta : ');
        if(riddle[i].answer === ans){
            console.log(`La solucion a la adivinanza ${riddle[i].guest} Es : ${riddle[i].answer}`);
            console.log('You win 1 riddle');
            time.setFelicidad = 50;
            time.setEnergia = 1;
            console.log(`Tu Felicidad es de : ${time.getFelicidad} y tu Energia es de : ${time.energia}`);
            
        } else {
            console.log('Try again another riddle answer');
            time.setFelicidad = -50;
            time.setEnergia = -1;
            console.log(`Tu Felicidad es de : ${time.getFelicidad} y tu Energia es de : ${time.energia}`);
            
        }
    }
}


