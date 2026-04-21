const axios = require("axios");

async function run() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1", {
    timeout: 10000,
  });

  console.log("Todo title from axios:", response.data.title);
}

run().catch((error) => {
  console.error("Axios example failed:", error.message);
  process.exitCode = 1;
});