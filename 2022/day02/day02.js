const readFile = require("../readFile");

async function day02() {
    /* Read file */
    const rawData = await readFile("./data.txt");

    /* Parse data */
    const data = rawData
        .split("\n")
        .map((x) => x)
        .map((game) => game.split(' '));

    /** Starting values */
    let yourTotal = 0;
    const scores = {
        A:      1, //rock,
        B:      2, //papper,
        C:      3, //scissor,
        X:      1, //rock,
        Y:      2, //papper,
        Z:      3, //sciccor,
    };
    results = {
        loss:   0,
        draw:   3,
        win:    6,
    }

    const getScore = (handPlayed) => {
        return scores[handPlayed];
    }

    const manipulateGameWinner = (game) => {
        if (game[1] == 'X') {
            if (game[0] == 'A') {
                return 'Z'; 
            }
            if (game[0] == 'B') {
                return 'X';
            }
            if (game[0] == 'C') {
                return 'Y';
            }
        }
        if (game[1] == 'Y') {
            if (game[0] == 'A') {
                return 'X';
            }
            if (game[0] == 'B') {
                return 'Y';
            }
            if (game[0] == 'C') {
                return 'Z'; 
            }
        }
        if (game[1] == 'Z') {
            if (game[0] == 'A') {
                return 'Y';
            }
            if (game[0] == 'B') {
                return 'Z'; 
            }
            if (game[0] == 'C') {
                return 'X';
            }
            
        }
    };

    const getGameWinner = (game) => {
        if (game[0] == 'A' && game[1] == 'X' 
        || game[0] == 'B' && game[1] == 'Y'
        || game[0] == 'C' && game[1] == 'Z') {
            yourTotal = results.draw + yourTotal + getScore(game[1]);
        }
        if (game[0] == 'A' && game[1] == 'Y' 
        || game[0] == 'B' && game[1] == 'Z'
        || game[0] == 'C' && game[1] == 'X') {
            yourTotal = results.win + yourTotal + getScore(game[1]);
        }
        if (game[0] == 'B' && game[1] == 'X' 
        || game[0] == 'A' && game[1] == 'Z'
        || game[0] == 'C' && game[1] == 'Y') {
            yourTotal = results.loss + yourTotal + getScore(game[1]);
        }
    };

    data.forEach(game => {
        game[1] = manipulateGameWinner(game);
        getGameWinner(game);
    });

    console.log(yourTotal);
};

day02();
