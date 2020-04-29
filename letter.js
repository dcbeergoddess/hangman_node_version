//create class
class Letter {
    //create constructor 
    constructor(character) {
        this.character = character;
        //set isGuessed to false to start
        this.isGuessed = false;
    }
    // FUNCTION/METHOD 
    //* returns underlying character if the letter has been guessed correctly 
    //* or a placeholder/underscore if the letter has not been guessed */

    showLetter() {
        if(this.isGuessed) {
            return this.character;
        } else {
            return "_"
        }
    }
    //* FUNCTION/METHOD
    /* takes a character as an argument and checks it against the underlying character
    * updates the stored boolean value to true 
      * if guessed correctly */
    guessLetter(letterGuessed){
        if(letterGuessed === this.character){
            this.isGuessed = true;
        }

        this.showLetter()
    } 
}
/**
 * Constructor End
    * display underlying character or blank placeholder(i.e underscore) 
    * above depends on whether or not the user has guessed the letter correctly
  * Constructor defines
      * string value 
          * stores underlying character for the letter
      * A boolean value 
          * stores whether letter has been guessed yet
      * FUNCTION/METHOD 
          * returns underlying character if the letter has been guessed correctly 
          * or a placeholder/underscore if the letter has not been guessed
      * FUNCTION/METHOD
          * takes a character as an argument and checks it against the underlying character
          * updates the stored boolean value to true 
            * if guessed correctly
 *  */ 

 module.exports = Letter