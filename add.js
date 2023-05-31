const add = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    if (a < 0 || b < 0) {
        return "no negatives";
    } else {
        return a * b;
    }
};
const subtract = (a, b) => {
    if (a - b < 0) {
        return "no negative differences";
    } else {
        return a - b;
    }
};
module.exports = {
    multiply,
    add,
    subtract,
};
