const n = 4;

const staircase = (n) => {
    for (let i = 0; i < n; i++) {
        let whitespaces = n - i - 1;
        let steps = "";
        for (let j = 0; j < whitespaces; j++) {
            steps += " ";
        }
        for (let j = 0; j < i + 1; j++) {
            steps += "#";
        }
        console.log(steps);
    }
};

console.log(staircase(n));
