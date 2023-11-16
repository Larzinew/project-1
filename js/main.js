	/*----- constants -----*/
//array of strings - image names 
const images = ["https://i.ibb.co/MD6bpvp/emoticon-1659234-1280.png","https://i.ibb.co/RB2ywWr/emoticon-1659235-1280.png","https://i.ibb.co/jbH08cH/emoticon-1659551-1280.png"]
	/*----- state variables -----*/
let result = []

	/*----- cached elements  -----*/
const reel1 = document.getElementById('reel1')
const reel2 = document.getElementById('reel2')
const reel3 = document.getElementById('reel3')
const win = document.getElementById('win-message')
const spinButton = document.querySelector('#spin-button')

	/*----- event listeners -----*/
spinButton.addEventListener('click', initSpin)

	/*----- functions -----*/
    // Function to initialize spin
    function initSpin() {
        result = [];
        for (let i = 0; i < 3; i++) {
            result.push(getRandomNumber(0, images.length));
        }
    
        render();
        renderJackpot();
    }
// Function to update render views
function render() {
    reel1.src = images[result[0]];
    reel2.src = images[result[1]];
    reel3.src = images[result[2]];
}
// Function to check for jackpot
const renderJackpot = () => {
    if (result[0] === result[1] && result[0] === result[2]) {
        win.innerText = "JACKPOT!";
        win.style.color = "green"; // Changing the text color to green
    } else {
        win.innerText = "SPIN AGAIN";
        win.style.color = ""; // Resetting the text color to default
    }
};
// Function to generate random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
