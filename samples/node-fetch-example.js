const fetch = require("node-fetch");

async function run() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    timeout: 10000,
  });

  if (!response.ok) {
    throw new Error(`Unexpected status: ${response.status}`);
  }

  const user = await response.json();
  console.log("User email from node-fetch:", user.email);
}

run().catch((error) => {
  console.error("node-fetch example failed:", error.message);
  process.exitCode = 1;
});