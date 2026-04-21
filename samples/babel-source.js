const summarizeUsers = (users = []) => users.map(({ name, age = 0 }) => `${name} (${age})`).join(", ");

class Report {
  constructor(items = []) {
    this.items = items;
  }

  print() {
    console.log(`Transpiled report: ${summarizeUsers(this.items)}`);
  }
}

const users = [
  { name: "Ava", age: 31 },
  { name: "Max" },
  { name: "Lia", age: 27 },
];

new Report(users).print();