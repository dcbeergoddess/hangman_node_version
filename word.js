// require letter class
const Letter = require("./letter");
/** CREATE CLASS `Word`
 * class depends on `letter` (subclass)
 * create an object representing the curren word the user is attempting to guess
    *  
 */

 class Word extends Letter {
   constructor(constructor, letters) {
     super(constructor);
     //each word start off with an empty array of letters
     this.letters = [];
   }
   //return string representing word
   //create Function

   showWordAsString(){
     //loop through all letters in array
     let str = "";
     this.letters.forEach
     //tap into showLetter method and use it on the letter object to show either a character or a "_"
     (letterObj => { 
       str += letterObj.showLetter()

     })
     //when done
     return str;
   }

  
   //this method takes a character that the user guesses
   //it loops through all the letter objects in the word
   //we call the guessLetter method for each letter, and letter will be displayed;
   //if not, the letter will remain a "_"
   guessLetter(letterGuessed){
     //when use guesses figure out wether we should show the letter or not
     this.letters.forEach( letterObj => {
       letterObj.guessLetter(letterGuessed)
       })
       this.showWordAsString()
   }
 }

 module.exports = Word;