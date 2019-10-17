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
  
        else { 
            let food = prompt("¿Qué quieres darle de comer, spaguettis o chuches?\n el menu dusponible es\n 1-spaguettis\n 2-chuches \n 3-grilos \n 0-no darle de comer prefiero jugar");
       
         if (food === "1"){ alert("ha comido una chuche");this.sc+=15;this.energia += 7;this.felicidad+=20}
         else if (food === "2"){ this.sc+=5;this.energia += 3;this.felicidad +=30 ; alert("ha comido spaguettis");}
         else if (food === "3"){ this.sc+=2;this.energia += 30;this.felicidad += 5;alert("ha comido grillos");}
         else if (food === "0"){ alert("no ha comido y vas a jugar");tamagochi.ocio();}
         else{alert("ooooh que pena, no tenemos esa comida.")}

        }

   return this.sc;
         
   }

   get getSc(){return this.sc;} 

   get getFelicidad(){return this.felicidad;}
   get getEnergia(){return this.energia;}

   set restahambre(sc){ this.sc-= Math.floor(this.sc*0.07); }
   set restaenergia(energia){ this.energia-= Math.floor(this.sc*0.07);  }
   set restafelicidad(felicidad){ this.felicidad-= Math.floor(this.sc*0.07);  }
   set incr_ociofelicidad(felicidad){this.felicidad += 30}


    
    ocio(felicidad,energia){
        let opc = prompt("1. winOrLoose,2. numbers,3. riddles");
    
    
    if(opc ==='1'){}
    else if(opc ==='2'){numbers()}
    else if(opc ==='3'){}
        
        }
    

     
  
     
    
    
    
    
  
    
}   
    



    




function numbers (tamagochi)  {


    document.write("cuanto es 5 + 5?")
    
    tamagochi.getfelicidad = tamagochi.incr_ociofelicidad ;
    return tamagochi.getfelicidad;
    
    
    /* switch(operator){
         case '+':
             let sum = num1 + num2;
             return document.write(`Estas sumando ${num1} + ${num2}, y  es igual a ${sum}`);
             this.felicidad += 10;
             this.energia -= 1;
             break;

         case '-':
             let rest = num1 - num2;
             return document.write(`Estas restando ${num1} - ${num2}, y  es igual a ${rest}`);
             this.felicidad += 10;
             this.energia -= 1;
             break;

         case '/':
                let div = num1 / num2;
             if(num1 % num2 === 0){
                  document.write(`Estas dividiendo ${num1} / ${num2}, y  es igual a ${div}`);
                  this.felicidad -= 10;
                  this.energia -= 1;
             } else if (num1 === 0 || num2 === 0){
                  document.write('La division no se puede realizar');
                  this.felicidad -= 10;
                  this.energia -= 1;
                  break;
             }
               
         case '*' :
             let mult = num1 * num2;
             document.write(`Estas multiplicando ${num1} * ${num2}, y  es igual a ${mult}`);
             break;*/
         
       
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
          else if (tamagochi.getFelicidad < 70)
         {
      
       
       tamagochi.ocio();

        
           }
      document.write("<br/>Son las " ,varCounter)
      document.write("<br/>Nivel de hambre: ", tamagochi.getSc)
      document.write("<br/>Nivel de energia: ", tamagochi.getEnergia)
      document.write("<br/>Nivel de felicidad: ", tamagochi.getFelicidad)
      
      
      ;varCounter++;tamagochi.restahambre = tamagochi.getSc; tamagochi.restaenergia = tamagochi.getEnergia; tamagochi.restafelicidad = tamagochi.getFelicidad}, 1000);


}


/*let select=1;

let hambre = new Tamagochi (100,30,40);
var tam = new Tamagochi(20,30,20);
let time = new Tamagochi(100,100,100)
console.log("Nivel de hambre: " + this.sc)*/


let tamagochi = new Tamagochi(100,100,100)
tamagochi.tiempo(tamagochi)







  













    


















  














    


















  

