function attackSquare(gameObject, entityShipYard, entityTargetBoard, entityShipBoard, choice) {
    if (entityTargetBoard[choice[0]][choice[1]] != '-') {
        console.log('You already selected that target dummy!')

        return 1;
    }

    let entityShipBoardString = entityShipBoard[choice[0]][choice[1]];
    if (entityShipBoardString === '-') {
        console.log('Total Miss!')
        entityTargetBoard[choice[0]][choice[1]] = 'o'

        return 0;
    }
    if (entityShipBoardString[0] === 's') {
        console.log('HIT CONFIRMED')
        entityTargetBoard[choice[0]][choice[1]] = 'x'
        entityShipYard[entityShipBoardString].health -= 1

        if (entityShipYard[entityShipBoardString].health == 0) {
            console.log(`YOU SUNK THE ENEMY ${entityShipYard[entityShipBoardString].name}`)
            gameObject.enemyShipCount -= 1 // This neeeds to be generic so you can lose ;)
            if (gameObject.enemyShipCount == 0) {
                console.log('YOU WIN!')
                return 'END_GAME'
            }
        }

        return 0;
    }

    return 1;
}





module.exports = { attackSquare }