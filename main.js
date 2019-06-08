const initGame = require("./initGame/initGame");
const generateBoards = require("./initGame/generateBoards")
const runGame = require("./runGame/runGame")
const prompt = require('prompt-sync')();

function gameLoop(playerShipYard, playerTargetBoard, playerShipBoard, enemyShipYard, enemyTargetBoard, enemyShipBoard) {

    // Def Game Object
    gameObject = {
        playerShipCount: Object.keys(playerShipYard).length,
        enemyShipCount: Object.keys(enemyShipYard).length
    }

    while (true) {
        // Display
        console.log('\n\n\n\n\n\n\n')
        console.log(playerTargetBoard)
        console.log('\n')
        console.log(playerShipBoard)
        console.log('\n')

        // Player Choice Phase
        let attackSquareFnState;
        do {
            let playerChoice = prompt('Select a square to attack! > ')
            let choice = [parseInt(playerChoice[0]), parseInt(playerChoice[1])]

            // Player Attack Phase
            attackSquareFnState = runGame.attackSquare(gameObject, enemyShipYard, playerTargetBoard, enemyShipBoard, choice)

            if (attackSquareFnState == 'END_GAME') {
                return 'done'
            }

        } while (attackSquareFnState == 1)
    }
}

// Temporary
let board1 = generateBoards.generatePlayerTargetBoard()
let playerBoardSet = initGame()
let board2 = playerBoardSet.gameBoard
let board3 = generateBoards.generateEnemyTargetBoard()
// let board4 = generateBoards.generateEnemyShipBoard()
let board4 = JSON.parse(JSON.stringify(board2))
let playerShipYard = playerBoardSet.shipPool // This could be an object in the future that containes more info on the game state!
let enemyShipYard = playerBoardSet.shipPool

gameLoop(playerShipYard, board1, board2, enemyShipYard, board3, board4)