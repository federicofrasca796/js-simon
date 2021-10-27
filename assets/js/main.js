/* Descrizione
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */



//DOM elements


/* RANDOM NUMBERS MUST BE STORED TO LATER CHECK USER MEMORY SKILLS  */
// alert(genRandomArr());
const randomArr = genRandomArr();
console.log(randomArr);
alert(randomArr); 

//timer 30 secs
//variable starting from 30s -> setInterval
let i = 1;

let userArr = [];

const timer = setInterval(() => {
    console.log(i);
    if (i === 0){
        //stop timer
        clearInterval(timer);

        //time's up. Get 5 inputs from user
        for (let i = 0; i < randomArr.length; i++) {
            const userNum = parseInt(prompt('Scrivi un numero che ricordi di quelli che hai visto.')); 
            
            //store user input in array if matching with randomArray
            if (randomArr.includes(userNum)) {
                userArr.push(userNum);
            }


            //THIS DOESN'T WORK
            //filter array for matching numbers. Exclude wrong guesses. 
            /* userArr.push(userNum);
            const matching = userArr.filter(() => { 
                return randomArr.includes(userNum);
            })
             */
        }
        
        console.log(userArr);

        alert(`Hai ricordato correttamente ${userArr.length} numeri!`);
        alert(`Questi sono i numeri indovinati: ${userArr}`);

    }
    
    i--
}, 1000);


//alert must be visibile for 30sec then it shall be overwrited by prompt.
//show 30sec counter? OPTIONAL






/* ASK & CHECK USER INPUT */
//ask user for the same 5 numbers after 30 secs
// setTimeout(function(){prompt('Riscrivi i numeri che hai visto, separati da una virgola.');}, 3000)
//store user input in array

//filter array for matching numbers. Exclude wrong guesses.

//show resulting array.length and values.









////// FUNCTIONS /////
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

//generate 5 random numbers

/**
 * Generate 5 random numbers and push them in a Array.
 * @returns {Array} Returns array containing 5 random number.
 */
function genRandomArr (){
    let i = 0;
    const randomNumArr = [];
    while (i < 5){
        // generate random numbers
        let randomNum = getRandomIntInclusive(1, 20);
        //push random numbers in array (only if not duplicate)
        if (!randomNumArr.includes(randomNum)){
            randomNumArr.push(randomNum);

            //increment
            i++
        } 
    
    }
    
    //show array numbers in alert()
    return randomNumArr;
}