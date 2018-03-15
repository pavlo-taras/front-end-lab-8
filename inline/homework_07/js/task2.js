const NUMBER_COEFFICIENT = 2
const PRIZE_COEFFICIENT = 3

const START_NUM_MAX = 5
const START_NUM_PRIZE = 10

const game = {
    attempts: 3,
    prize: START_NUM_PRIZE,
    min: 0,
    max: START_NUM_MAX,
    type: {
        play: 1,
        continue: 2,
        again: 3
    }
}

const USER_MESSAGE_GAME = {
    0: "play a game",
    1: "play a game",
    2: "continue a game",
    3: "play a game again"
}

const user = {
    game : 0,
    play: false,
    prize : 0
}

let message = "You did not become a millionaire"

do {
    user.play = confirm(`Do you want to ${USER_MESSAGE_GAME[user.game]}?`)

    if (user.play) {    
        if (user.game == game.type.again) {
            user.prize = 0
        }
    
        user.game = game.type.play
        user.attempts = 0

        let report = ''

        // +1 for include max number
        let randomNum = Math.floor(Math.random() * (game.max - game.min)) + game.min + 1
        let currentPrize = 0

        while (user.attempts < game.attempts) {
            user.attempts++
        
            currentPrize = Math.trunc(game.prize/Math.pow(2, user.attempts - 1))

            report = `Enter a number from ${game.min} to ${game.max}\n` +
                `Attempts left: ${game.attempts - user.attempts + 1}\n` +
                `Total prize: ${user.prize}$\n` +
                `Possible prize on current attempt: ${currentPrize}$`

            let userNum = parseFloat(prompt(report, '0'))

            if (parseInt(userNum) === userNum && game.min <= userNum && userNum <= game.max) {
                if (userNum == randomNum) {
                    user.prize += currentPrize
                    user.game = game.type.continue

                    game.prize *= PRIZE_COEFFICIENT
                    game.max *= NUMBER_COEFFICIENT

                    break
                }
            }
        }

        if (user.attempts == game.attempts && user.game == game.type.play) {
            user.game = game.type.again

            game.max = START_NUM_MAX
            game.prize = START_NUM_PRIZE
        }

        message = `Thank you for a game. Your prize is: ${user.prize}$`
    } 

    console.log(message)
} while (user.play)