const readFile = require("../readFile");

async function day02() {
    /* Read file */
    const rawData = await readFile("./data.txt");

    /* Parse data */
    const data = rawData
        .split("\n")
        .map((x) => x)
        .map((game) => game.split(' '));

    prioValues = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
        A: 27,
        B: 28,
        C: 29,
        D: 30,
        E: 31,
        F: 32,
        G: 33,
        H: 34,
        I: 35,
        J: 36,
        K: 37,
        L: 38,
        M: 39,
        N: 40,
        O: 41,
        P: 42,
        Q: 43,
        R: 44,
        S: 45,
        T: 46,
        U: 47,
        V: 48,
        W: 49,
        X: 50,
        Y: 51,
        Z: 52,
    };
    let totalSumOfPrio = 0;

    const compareTwoItems = (firstCompartment, secondCompartment) => {
        let firstCompartmentArray = firstCompartment.split("");
        let doubleItem = '';
        
        firstCompartmentArray.forEach(char => {
            if (secondCompartment.includes(char)) {
                doubleItem = char;
            }
        });
        return doubleItem;
    };
    
    const compareThreeItems = (firstItems, secondItems, thridItems) => {
        let firstItemsArray = firstItems.split("");
        let doubleItem = '';
        
        console.log(secondItems);

        firstItemsArray.forEach(char => {
            if (secondItems.includes(char) && thridItems.includes(char)) {
                doubleItem = char;
            }
        });
        return doubleItem;
    };

    const getTotalSum = () => {
        data.forEach((items) => {
            let centerIndex = items[0].length / 2;
            firstCompartment = items[0].substring(0, centerIndex);
            secondCompartment = items[0].substring(centerIndex);
            
            let doubleItem = compareTwoItems(firstCompartment, secondCompartment);      
            totalSumOfPrio = prioValues[doubleItem] + totalSumOfPrio;
        });
    }

    const getTotalPerThreeElves = () => {
        for (i = 0; i < data.length; i += 3) {
            let threeElves = data.slice(i, i + 3);
            
            let trippleItem = compareThreeItems(threeElves[0][0], threeElves[1][0], threeElves[2][0]);
            totalSumOfPrio = prioValues[trippleItem] + totalSumOfPrio;
        }
    };
    

    //** To get the total of all elves */
    // getTotalSum(data);

    /** To get the total per threeElves */
    getTotalPerThreeElves();

    console.log(totalSumOfPrio);
};

day02();
