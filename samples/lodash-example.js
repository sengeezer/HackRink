const _ = require("lodash");

const orders = [
  { id: 1, customer: "Ava", total: 24.9 },
  { id: 2, customer: "Max", total: 99.4 },
  { id: 3, customer: "Ava", total: 44.0 },
  { id: 4, customer: "Lia", total: 14.5 },
];

const totalsByCustomer = _.mapValues(_.groupBy(orders, "customer"), (rows) =>
  _.sumBy(rows, "total")
);

console.log("Lodash grouped totals:", totalsByCustomer);