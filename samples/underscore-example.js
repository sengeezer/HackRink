const _ = require("underscore");

const values = [12, 3, 44, 9, 17, 44, 12];
const uniqueSorted = _.chain(values)
  .uniq()
  .sortBy((n) => -n)
  .value();

console.log("Underscore unique descending values:", uniqueSorted);