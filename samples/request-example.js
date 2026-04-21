const request = require("request");

request(
  {
    url: "https://jsonplaceholder.typicode.com/todos/2",
    json: true,
    timeout: 10000,
  },
  (error, response, body) => {
    if (error) {
      console.error("request example failed:", error.message);
      process.exitCode = 1;
      return;
    }

    if (response.statusCode < 200 || response.statusCode >= 300) {
      console.error("request example failed with status:", response.statusCode);
      process.exitCode = 1;
      return;
    }

    console.log("Todo title from request:", body.title);
  }
);