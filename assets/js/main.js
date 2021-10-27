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
    console.log(randomNumArr);

    return alert(randomNumArr);
}
//show array numbers in alert()
//alert must be visibile for 30sec then it shall be overwrited by prompt.
//show 30sec counter? OPTIONAL






/* ASK & CHECK USER INPUT */
//ask user for the same 5 numbers
//store user input in array

//filter array for matching numbers. Exclude wrong guesses.

//show resulting array.length and values.









////// FUNCTIONS /////
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }