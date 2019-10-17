class Tamagochi{

    constructor(sc, felicidad, energia)/* Inicializamos ya los valores aqui?*/{
  
      this.sc= sc;
      this.felicidad= felicidad;
      this.energia =energia;
    }

    set setEnergia (level) {
        this.energia += level;
    }
    
    set setFelicidad (level) {
        this.felicidad += level;
    }
    
    get getSc () {
        return this.sc;
    } 
    get getFelicidad () {
        return this.felicidad;
    }
    
    get getEnergia () {
        return this.energia;
    }

    tiempo(sc,energia){
        
        varName()
        
        
        
        
    }

    come(sc, energia){

        if(this.sc===100){console.log("el tamagochi ya no tiene hambre")}
  
        else { let food = prompt("¿Qué quieres darle de comer, spaguettis o chuces?");
       
         if (food === "chuches"){ console.log("ha comido una chuche");this.sc+=15;this.energia += 10}
         else if (food === "spaguettis"){ console.log("ha comido spaguettis");this.sc+=30;this.energia += 30}
         else{console.log("ooooh que pena, no tenemos esa comida.")}

        }
   
         /*console.log("Nivel de hambre: " + this.sc)
         console.log("Nivel de energia: " + this.energia)*/
   }


    
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

var varName = function(){
    let fun = new Tamagochi()
    let hungry = new Tamagochi()
    var varCounter = 0;
    let hambre = 100;
    setInterval(function(){
       if( varCounter>24)
      {console.log('finish');varCounter=0;}
       if (varCounter === 5)
         {
      let usuario = prompt('si jugar juegas, si comer comer')
      switch (usuario){
        case 'jugar':
       
       fun.ocio();

        break;
        case 'comer':
       
       hungry.come();

        break;
                   }
           }
      console.log("Son las " ,varCounter);varCounter++;}, 1000);


}


/*let select=1;

let hambre = new Tamagochi (100,30,40);
var tam = new Tamagochi(20,30,20);
let time = new Tamagochi(100,100,100)
console.log("Nivel de hambre: " + this.sc)*/
const time = new Tamagochi(100,100,100);
time.tiempo(100,100);

function winOrLoose () {
    let rand = prompt('Introduce un numero entre el 1 y 10')
    for(let i = 0; i < 10; i++){
        if(i === rand){
            let win = console.log('Win');
            time.setFelicidad = 50;
             time.setEnergia = 1;
             console.log(`Tu Felicidad es de : ${time.getFelicidad} y tu Energia es de : ${time.energia}`);
            return win;
        } else {
            let loose = console.log('Try again');
            time.setFelicidad = -50;
             time.setEnergia = -1;
             console.log(`Tu Felicidad es de : ${time.getFelicidad} y tu Energia es de : ${time.energia}`);
             return loose;
        }
    }
    
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


