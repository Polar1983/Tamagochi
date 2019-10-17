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
  
        else { let food = prompt("¿Qué quieres darle de comer, spaguettis o chuces?");
       
         if (food === "chuches"){ document.write("ha comido una chuche");this.sc+=30;}
         else if (food === "spaguettis"){ document.write("ha comido spaguettis");this.sc+=30;this.energia += 30}
         else{document.write("ooooh que pena, no tenemos esa comida.")}

        }

        document.write(time.getSc)
   return this.sc;
         
   }

   get getSc(){return this.sc;} 

   get getFelicidad(){return this.felicidad;}
   get getEnergia(){return this.energia;}



    
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
    let winOrLoose = (random) => {
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


    
}

var varName = function(tamagochi){
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
       
       tamagochi.ocio();

        break;
        case 'comer':
       
       tamagochi.come(100,100);

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




let tamagochi = new Tamagochi(100,100,100)
tamagochi.tiempo(tamagochi)




  













    


















  

