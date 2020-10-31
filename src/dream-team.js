const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return members instanceof Array ? members.map((item) => {
    if(typeof item === 'string'){
      item = item.trim();
      return item[0].toUpperCase();
    }
  }).sort().join('') : false;
};
