/* Descrizione
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */



/* RANDOM NUMBERS MUST BE STORED TO LATER CHECK USER MEMORY SKILLS  */
//generate 5 random numbers

/**
 * Generate 5 random numbers and push them in a Array.
 * @returns {Array} Returns array containing 5 random number.
 */
function genRandomArr (){
    let i = 0;
    const randomNumArr = [];
    while (i < 5){
        //push random numbers in array
        randomNumArr.push(getRandomIntInclusive(1, 20));
    
        //increment
        i++
    }
    
    //show array numbers in alert()
    return randomNumArr;
}

// alert(genRandomArr());

//timer 30 secs
//variable starting from 30s -> setInterval
let i = 2;

let userArr = [];

const timer = setInterval(() => {
    console.log(i);
    if (i === 0){
        clearInterval(timer);

        //time's up. Get 5 inputs from user
        for (let i = 0; i < genRandomArr().length; i++) {
            const userNum = parseInt(prompt('Scrivi il primo numero che ricordi di quelli che hai visto.'));

            userArr.push(userNum);   
        }
        console.log(userArr);


    }
    
    i--
}, 1000);


//alert must be visibile for 30sec then it shall be overwrited by prompt.
//show 30sec counter? OPTIONAL
// console.log(genRandomArr());
// alert(genRandomArr());





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