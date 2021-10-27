/* Descrizione
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */



//DOM elements
const timerEl = document.querySelector('.timer');
const resultEl = document.querySelector('.result');

/* RANDOM NUMBERS MUST BE STORED TO LATER CHECK USER MEMORY SKILLS  */
// alert(genRandomArr());
const randomArr = genRandomArr();
console.log(randomArr);
alert(randomArr); 

//timer 30 secs
//variable starting from 30s -> setInterval
let i = 30;

let userArr = [];

const timer = setInterval(() => {
    timerEl.innerHTML = i;
    if (i === 0){
        //show 30sec counter
        timerEl.style.display = 'none';
        //stop timer
        clearInterval(timer);
        

        /* ASK & CHECK USER INPUT */
        //time's up. Get 5 inputs from user
        for (let i = 0; i < randomArr.length; i++) {
            //ask user for nums
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

        //show resulting array.length and values.
        resultEl.innerHTML = `Hai ricordato correttamente ${userArr.length} numeri! <br>
        Questi sono i numeri indovinati: ${userArr}`
    }
    
    i--
}, 1000);



















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