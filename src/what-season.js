const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    const SEASONS = {
        1: 'winter',
        2: 'winter',
        3: 'spring',
        4: 'spring',
        5: 'spring',
        6: 'summer',
        7: 'summer',
        8: 'summer',
        9: 'autumn',
        10: 'autumn',
        11: 'autumn',
        12: 'winter'
    }
    if (date === undefined) {
        return "Unable to determine the time of year!";
    } else if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error();
    } else {
        return SEASONS[new Date(date).getMonth() + 1];
    }
};
