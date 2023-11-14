	/*----- constants -----*/
//array of strings - image names 
const IMAGES = [1,2,3.4]

	/*----- state variables -----*/
let result = [null, null,null]

	/*----- cached elements  -----*/
const reel1 = document.getElementById('reel1')
const reel2 = document.getElementById('reel2')
const reel3 = document.getElementById('reel3')
const win = document.getElementById('win-message')
const spinButton = document.querySelector('.spin-button')

	/*----- event listeners -----*/
spinButton.addEventListener('click', initSpin)

	/*----- functions -----*/
function initSpin() {
    result = [];
    result.push(getRandomNumber(0,IMAGES.length))
    result.push(getRandomNumber(0,IMAGES.length))
    result.push(getRandomNumber(0,IMAGES.length))

    render()
    renderJackpot()
}