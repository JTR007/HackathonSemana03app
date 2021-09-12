
// Ejercicio #0

let arr = ["orange", "grape", "banana", "banana", "orange", "grape", "grape", 34, 15, 43, 34, 15];

let result = arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
  })
  console.log(result);

// Ejercicio #1

let palabrasYPosiblesAnagramas = [
    {
      palabra: "Hola",
      posibleAnagrama: "Aloh"
    },
    {
      palabra: "Frase",
      posibleAnagrama: "Fresa"
    },
    {
      palabra: "Escandalizar",
      posibleAnagrama: "Zascandilear"
    },
    {
      palabra: "Conservadora",
      posibleAnagrama: "Conversadora"
    },
    {
      palabra: "Perro",
      posibleAnagrama: "Gato"
    },
    {
      palabra: "Maggie",
      posibleAnagrama: "Maggie"
    },
  ];

const esAnagrama = (palabra, posibleAnagrama) => 
    palabra.toLowerCase().split("").sort().join("") === posibleAnagrama.toLowerCase().split("").sort().join("");


// Ejercicio #2

let map = new Map();

map.set("name", "John")

//let keys = map.keys();// Error: keys.push isnot a functionkeys.push("more");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); 

// Ejercicio #3

let a = 3;

while (a) {  
    
    alert( a--);

}

// Ejercicio #4


let i = 0;

while (++i < 5){

    console.log( i ); // 1, 2, 3, 4 

}

let y = 0;

while (y++ < 5){ 
    console.log( y ); // 1, 2, 3, 4, 5
}

//// AMBOS BUCLES NO DAN LOS MISMOS VALORES 

// Ejercicio #5

let ask = (question, yes, no) => {

    if (confirm(question)) {
        yes();
    } else {
        no();
    }

}

ask("Do you agree?", () => { 
    
    alert("You agreed."); 

},


() => { 
    
    alert("You canceled the execution."); 

});

// Ejercicio #6

const makeCounter = () => {
    let count = 0;
  
    let counter = () => {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }
makeCounter();

// Ejercicio #7

let num = prompt("Ingrese un numero mayor a 100");

while (num) {
    
    if (num >= 100) {
        
        console.log(num);
        break;

    } else {
        
        while (num < 100) {
            num = prompt("Error ..... Ingrese un numero mayor a 100");
            break;
        }

    }

}

// Ejercicio #8

let list = { 
    
    value: 1,
    next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }

const printList = (list) => {
        let tmp = list;
      
        while (tmp) {
          alert(tmp.value);
          tmp = tmp.next;
        }
      
      }
      
printList(list);
