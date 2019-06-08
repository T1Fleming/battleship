// generate board
function generatePlayerTargetBoard() {
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

function generateEnemyTargetBoard() {
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

function generateEnemyShipBoard() {
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


module.exports = {
    generateEnemyShipBoard,
    generatePlayerTargetBoard,
    generateEnemyTargetBoard
};