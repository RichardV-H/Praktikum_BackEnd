function multiply(a, b) { return a * b; }
function square(a) { return a ** 2; }
function divide (a, b) { return a / b; }

// module.exports digunakan agar bisa diakses
module.exports = {
    multiply,
    square,
    divide,
};