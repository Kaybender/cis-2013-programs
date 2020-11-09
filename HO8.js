/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */
/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

var intMax, intMin, intRandom, intGuess, intCount, intPoints;
do{
intMin= parseInt(prompt("Choose the lower number in the range. It must be at least 0")); // prompt to have the person put in the number 
while (isNaN(intMin)||intMin<0) // conditions that need to be checked to see if the number chosen is valid
    {
        intMin = parseInt(prompt("Invalid entry. Please enter a number greater or equal to 0 for your minimum number")); //prompts user input for a minimum 
    }//while
/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

   intMax = parseInt(prompt("Please enter a number at least "+(intMin +2)+" as your maximum number"));
while (isNaN(intMax)||intMax < (intMin +2))
    {
        intMax = parseInt(prompt("Invalid entry. Please enter a number greater than " + (intMin + 2) + " as your maximum number"));           
    }//while
    

intGuess = parseInt(prompt("Please enter a number between "+(intMax)+ " and " +(intMin))); // Prompts user to enter a guess between min and max
while (isNaN(intGuess)||intGuess<intMin||intGuess>intMax) // Conditions that make the entry invalid
    {
      intGuess = parseInt(prompt("Invalid entry. Choose a number between " +intMin+ " and "+intMax));
    }//while

 /*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);// math.floor rounds the random number down to the nearest integer 


/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
var intCount = 1;
while (intGuess!=intRandom){ // while the player's guess is not equal to the random number 
   if (intGuess< intRandom){ // if the guess is smaller than the random number 
      intGuess = parseInt(prompt("Your guess of " +intGuess + " is too low. Guess again"));
      while (isNaN(intGuess)|| intGuess<intMin||intGuess>intMax){ //if the guess is not a number, is smaller than min, or larger than max 
         intGuess = parseInt(prompt("Sorry, you need to choose a number between " + intMin+ " and " +intMax)); 
}
   } else{
      intGuess = parseInt(prompt("Your guess of "+ intGuess + " is too high. Guess again"));
      while(isNaN(intGuess)||intGuess<intMin||intGuess>intMax) {
      intGuess = parseInt(prompt("Sorry, you need to choose a number between " + intMin + " and " + intMax));
   }
   } //while 
intCount++; //counts the number of attempts a user makes
}

intPoints = 11- intCount; //gives user more points with less attempts, with a max of 10 points 


// alerts final output guess and awards points to the user
alert("Congratulations!! You guessed the correct number (" + intRandom +")\n" +
		" and it took you " + intCount + " attempts!\n You get " + intPoints + " points!");
      
    intQuit= parseInt(prompt("Enter any number to quit, enter any letter to play again")); //prompts user to quit game 
      
}     
while (isNaN(intQuit)); // end of do loop if intQuit is not a number