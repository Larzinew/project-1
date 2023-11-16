Welcome to the Slot Machine game!

This simple slot machine is built using JavaScript and HTML, allowing players to spin the reels and aim for winning combinations of symbols. Here's a guide to understanding and playing the game:

Game Structure:

Initialization:
reel1, reel2, reel3: Arrays containing symbols on each reel.
result: Array storing the current combination of symbols.
win: Boolean variable tracking the player's winning status (initially set to false).
Cached DOM elements for smooth rendering and update of the game interface.
Game Functions:

spinReels() Function:

Generates random numbers to select symbols on each reel.
Updates the result array with the selected images.
Displays the selected images on the reels.
checkWin() Function:

Checks for winning combinations within the result array.
Sets the win variable to true if there's a winning combination.
updateDisplay() Function:

Responsible for updating the display with the current result and win status.
User Interaction:

Event Listeners:
Spin Button:
Triggers the spinReels() function to initiate the spinning animation.
Calls the checkWin() function to check for winning combinations after spinning.
Winning Condition:

If the player achieves a winning combination:
Displays a win message to notify the player about their win.
How to Play:

Click the spin button to start spinning the reels.
The spinReels() function will randomly select symbols for each reel and display them.
After spinning, the checkWin() function will determine if you've won.
If you win, a message will appear to celebrate your victory.
Enjoy the Game!

Have fun playing the Slot Machine! Try your luck and see if you can hit the jackpot by matching winning combinations of symbols. Feel free to explore the code and make modifications to enhance your gaming experience!g