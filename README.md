Initialize variables:
- reel1, reel2, reel3 = Arrays of symbols on each reel
- result = Array to store the current combination
- win = Boolean to track if the player has won 1. set to false) 2. then when matches to true 
- Dom elements to cache 

Create a function spinReels():
- Generate random numbers to select symbols on each reel
- Update the result array with the selected symbols
- Display the symbols on the reels


Create a function checkWin():( every function) 
- Check for winning combinations in the result array
- Set win to true if there's a winning combination 

Create a function updateDisplay():
- Display the current result and win status

Create event listener for:
- Button to spin the reels:
  - Call spinReels()
  - Call checkWin()
  - Call updateDisplay()

Display the buttons, reels, and result on the HTML page

While the player hasn't won: (while function) 
  - Allow the player to spin the reels
  - Check for wins and display the result

If the player wins:
- Display a win message