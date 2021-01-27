function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        let result = Math.pow(Math.sqrt(sq) + 1, 2);
        return result;
    } else {
        return -1;
    }
}
