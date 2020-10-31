const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
    let result = [];
    if (array.length === 0) return array;
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === '--discard-prev') {
                result.pop();
            } else if (array[i] === '--discard-next') {
                if (array[i + 2] === '--double-prev' || array[i + 2] === '--discard-prev') {
                    i += 2;
                } else i++;
            } else if (array[i] === '--double-next') {
                if (array[i + 1] !== undefined) {
                    result.push(array[i + 1]);
                }
            } else if (array[i] === '--double-prev') {
                if (array[i - 1] !== undefined) {
                    result.push(array[i - 1])
                }
            } else {
                result.push(array[i]);
            }
        }
    } else throw new Error();
    return result;
};
