const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    const cat = "^^";
    let result = 0;
    matrix.splice(',').map(item => item.splice(',').map((item) => {
        if (item === cat) {
            result = result + 1;
        }
    }))
    return result;
};
