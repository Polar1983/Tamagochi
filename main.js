class Tamagochi{

    constructor(sc, felicidad, energia){
  
      this.sc= sc
      this.felicidad= felicidad;
      this.energia =energia;
    }
    duerme(energia){}
    come(sc, energia){}
    ocio(felicidad,energia){
    /*let opc = '';
    do {
    console.log('1. winOrLoose');
    console.log('2. numbers');
    console.log('3. riddles');
    //console.log('4. ');
    switch(opc){
        case '1' :
            console.log('Jugar a winOrLoose');
            break;
        case '2' :
            console.log('Jugar a numbers');
            break;
        case '3' :
            console.log('Jugar a riddles');
            break;
        default :
            console.log('Opcion erronea');
            break;
    }
    opc = opc.toString(Math.floor((Math.random() * 3) +1)) ;
    } while(opc != '1'); */
        var winOrLoose = (random) => {
            let rand = Math.floor(Math.random() * 11);
            for(let i = 0; i < 10; i++){
                if(i === rand){
                    this.felicidad += 50;
                    this.energia -= 1;
                    console.log('Win');
                } else {
                    this.felicidad -= 50;
                    this.energia -= 1;
                    console.log('Try again');
                }
            }
            return 
        }
         winOrLoose(); 
        
        
         let input1 = Math.floor(Math.random() * 10);
         let input2 = Math.floor(Math.random() * 10);
         let op = ['+','-','/','*'];
         let randomOp = Math.floor(Math.random() * op.length);
         for(let i = 0; i < op.length; i++){
             if(op[0] === op[randomOp]){
                 let operator = '+';
             }else if (op[1] === op[randomOp]){
                let operator = '-';
             }else if (op[2] === op[randomOp]) {
                let operator = '/';
             }else if (op[3] === op[randomOp]){
                let operator = '*';
             }
         }
         var numbers = (num1,num2,operator) => {
            
             switch(operator){
                 case '+':
                     let sum = num1 + num2;
                     return console.log(`Estas sumando ${num1} + ${num2}, y  es igual a ${sum}`);
                     break;
                 case '-':
                     let rest = num1 - num2;
                     return console.log(`Estas restando ${num1} - ${num2}, y  es igual a ${rest}`);
                     break;
                 case '/':
                        let div = num1 / num2;
                     if(num1 % num2 === 0){
                         return console.log(`Estas dividiendo ${num1} / ${num2}, y  es igual a ${div}`);
                     } else if (num1 === 0 || num2 === 0){
                         return console.log('La division no se puede realizar');
                     }
                       
                 case '*' :
                     let mult = num1 * num2;
                     return console.log(`Estas multiplicando ${num1} * ${num2}, y  es igual a ${mult}`);
                     break;
                 default :
                    return console.log('No has introducido un operador correcto : +,-,/,*,');
          
                }
                this.felicidad += 50;
                this.energia -= 1;
         }
         //numbers(input1,input2,operator);
         //console.log(randomOp);
        
        
        
        
        var riddles = (adiv,answ) => {
            let riddle = [{guest :'Mi tía Cuca tiene una mala racha, ¿quién será esta muchacha?', answer: 'cucaracha'},{guest :'Canto en la orilla, vivo en el agua, no soy pescado, ni soy cigarra.', answer : 'rana'},{guest :'¿Qué animal tiene las cinco vocales?', answer : 'murcielago'},{guest :'Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.', answer: 'pera' }];
            let randomRiddle = Math.floor(Math.random() * riddle.length);
            for(let i = 0; i < riddle.length; i++){
                if(riddle[i].answer === riddle[randomRiddle].answer){
                    console.log(`La solucion a la adivinanza ${riddle[i].guest} Es : ${riddle[i].answer}`);
                    console.log('You win 1 riddle');
                    this.felicidad += 50;
                    this.energia -= 1;
                } else {
                    console.log('Try again another riddle answer');
                    this.felicidad -= 50;
                    this.energia -= 1;
                }
            }
        }
        
        riddles(); 
        
    }
    /*get getFelicidad(){}
    get getEnergia(){}
    get getSc(){} 
    
    set setFelicidad(){}
    set setEnergia(){}
    set setSc(){} */
}

var tam = new Tamagochi(20,30,20);
tam.ocio(30,50);










    


















  

