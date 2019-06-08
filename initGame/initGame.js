var prompt = require('prompt-sync')();

function validateShipPlacement(gameBoard, elem) {
    let iterateBaseSquare = JSON.parse(JSON.stringify(elem.choice));

    for (i = 0; i < elem.length; i++) {
        if (iterateBaseSquare[0] > 9 || iterateBaseSquare[1] > 9) {
            console.log('Ship out of game boundary!')
            return 1;
        }

        if ((gameBoard[iterateBaseSquare[0]][iterateBaseSquare[1]]) != '-') {
            console.log('Ships cannot overlap other ships!')
            return 1;
        }
        if (elem.orientation === 'v') {
            iterateBaseSquare[0] += 1
        }
        if (elem.orientation === 'h') {
            iterateBaseSquare[1] += 1
        }
    }

    return 0;
}

// generate board
function generateBoard() {
    let row = []
    let gameBoard = []

    for (i = 0; i < 10; i++) {
        row.push('-')
    }
    for (j = 0; j < 10; j++) {
        gameBoard.push(JSON.parse(JSON.stringify(row)))
    }


    return gameBoard
}

function placeShip(gameBoard, { choice, orientation, length, marker }) {

    //column, row
    let target = [choice[0], choice[1]]

    for (i = 0; i < length; i++) {

        gameBoard[target[0]][target[1]] = marker
        if (orientation === 'v') {
            target[0] += 1
        }
        if (orientation === 'h') {
            target[1] += 1
        }
    }

    return gameBoard;

}

function newGame() {
    console.log('#===================#')
    console.log('Lets play battleship!')
    console.log('#===================#\n')

    let gameBoard = generateBoard()
    let shipPool = {}

    // Define Ships Here! (Should be a seperate JSON)
    shipPool['s_b'] = {
        choice: [0, 0],
        orientation: '',
        length: 4,
        marker: 's_b',
        name: 'battleship',
        health: 4
    }

    shipPool['s_a'] = {
        choice: [0, 0],
        orientation: '',
        length: 5,
        marker: 's_a',
        name: 'aircraft carrier',
        health: 5
    }

    for(elem in shipPool){
        let statusValidateShipPlacement;
        do {
            console.log(`Lets place your ${shipPool[elem].name}! (${shipPool[elem].length}) spaces`)
            let baseSquare = prompt('Choose your base square > ')
            baseSquare = [parseInt(baseSquare[0]), parseInt(baseSquare[1])]
            shipPool[elem].choice = baseSquare

            let orientation = prompt("orientation: (v) vertical (h) horizontal > ")
            shipPool[elem].orientation = orientation
            statusValidateShipPlacement = validateShipPlacement(gameBoard, shipPool[elem])

        } while (statusValidateShipPlacement == 1)

        placeShip(gameBoard, shipPool[elem])
    }
    return {gameBoard, shipPool}

}

// Start the game
module.exports = newGame;