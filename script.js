let gameItem = document.querySelector('.game-item');
let allGameItems = document.querySelectorAll('.game-item');
let gameTurnInfo = document.querySelector('.infor-box');
let resetGameButton = document.querySelector('.reset-game');
let alterTurnButton = document.querySelector('.alter-game');

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let options = [" " , " ", " ", " " , " ", " ", " " , " ", " "];

let itemX = "X";
let isRunning = false;

const alterGamer = () => {
    itemX = itemX == "X" ? "O" : "X"; 
    let html = `<h1>${itemX} Turns</h1>`
    gameTurnInfo.innerHTML = `${html}`;
}


const checkWinCondition = () => {
    for(let i = 0; i < winCondition.length ; i++){

        let win = winCondition[i];
        let A   = options[win[0]];
        let B   = options[win[1]];
        let C   = options[win[2]]

       if(A == " " || B == " " || C == " "){
            continue;
       }
       if( A == B && B == C ){
            isRunning = false;
            let html = `<h1>${A} Win!</h1>`
            gameTurnInfo.innerHTML = `${html}`;
            break;
       }

        let checkDraw = options.find(option => option == " ");
        if(!checkDraw){
            isRunning = false;
            let html = `<h1>Draw!</h1>`
            gameTurnInfo.innerHTML = `${html}`;
        } 
    }
}

const insertItem = (item, index) => {
    
    if(isRunning) {
        item.innerText = itemX;
        options = options.map((option, i) => option == " " && i == index ? option = itemX : option); 
        alterGamer();
        checkWinCondition();
    }
}

const initialGame = () => {
    isRunning = true;
    allGameItems.forEach((item) => item.innerText = "");
   
    alterGamer();

    allGameItems.forEach((item, index) => {
        item.addEventListener("click", () => insertItem(item, index));
    });
}

initialGame();



const resetGame = () => {
    allGameItems.forEach((item) => item.innerText = "");
    options = [" " , " ", " ", " " , " ", " ", " " , " ", " "];
    isRunning = true;
    alterGamer();
}

alterTurnButton.addEventListener('click', alterGamer);
resetGameButton.addEventListener('click', resetGame);





