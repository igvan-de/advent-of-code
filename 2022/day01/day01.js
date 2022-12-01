const readFile = require("../readFile");

async function day01() {
    /* Read file */
    // const rawData = await readFile("2022/day-1/data.test.txt");
    const rawData = await readFile("./day01/data.txt");

    /* Parse data */
    const data = rawData
        .split("\n\n")
        .map((x) => x.split("\n").map((n) => parseInt(n)));

    const totalCals = (elfs) => {
        let total = 0;
        elfs.forEach(cal => {
            total = cal + total;
        });
        return total;
    };

    let totalCalsArray = data.map((elfs) => {return totalCals(elfs)});
    totalCalsArray.sort((a,b) => {
        return b - a;
    });

    const highestTotalCals = totalCalsArray[0];
    const highestThreeCals = totalCals(totalCalsArray.splice(0, 3));

    console.log(highestTotalCals);
    console.log(highestThreeCals);
};

day01();
