// var isValidSudoku = (board) => {
//     const horizontalSet = new Set();
//     const verticalSet = new Set();
//     const threeByThreeGridSet = new Set(); // (row/3, col/3) will give you the grid locations.

//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board.length; j++) {
//             if (board[i][j] === ".") continue;
//             if (
//                 horizontalSet.has(board[i][j]) ||
//                 verticalSet.has(board[j][i]) ||
//                 threeByThreeGridSet.has([
//                     [Math.floor(i / 3), Math.floor(j / 3)],
//                     board[i][j],
//                 ])
//             ) {
//                 return false;
//             }
//             horizontalSet.add(board[i][j]);
//             verticalSet.add(board[j][i]);
//             threeByThreeGridSet.add([
//                 [Math.floor(i / 3), Math.floor(j / 3)],
//                 board[i][j],
//             ]);
//         }
//         // [(Math.floor(i / 3), Math.floor(j / 3))]
//         // horizontalSet.clear();
//         // verticalSet.clear();
//     }
//     return true;
// };

// const board = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// console.log(isValidSudoku(board));

var isValidSudoku = function (board) {
    var map = {};
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            if (board[i][j] === ".") continue;
            if (
                map["hor" + i + board[i][j]] ||
                map["vert" + j + board[i][j]] ||
                map[
                    "grid" + Math.floor(i / 3) + Math.floor(j / 3) + board[i][j]
                ]
            )
                return false;
            map["hor" + i + board[i][j]] = 1;
            map["vert" + j + board[i][j]] = 1;
            map[
                "grid" + Math.floor(i / 3) + Math.floor(j / 3) + board[i][j]
            ] = 1;
        }
    }
    return true;
};

const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
