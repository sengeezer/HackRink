const axios = require("axios");
const fetch = require("node-fetch");
const lodash = require("lodash");
const underscore = require("underscore");
const BigNumber = require("bignumber.js");
const request = require("request");

function requestJson(url) {
  return new Promise((resolve, reject) => {
    request({ url, json: true, timeout: 10000 }, (error, response, body) => {
      if (error) {
        reject(error);
        return;
      }

      if (response.statusCode < 200 || response.statusCode >= 300) {
        reject(new Error(`Status ${response.statusCode}`));
        return;
      }

      resolve(body);
    });
  });
}

async function run() {
  const users = (await axios.get("https://jsonplaceholder.typicode.com/users", { timeout: 10000 })).data;
  const posts = await (
    await fetch("https://jsonplaceholder.typicode.com/posts", { timeout: 10000 })
  ).json();

  const postsByUser = lodash.groupBy(posts, "userId");
  const topFiveUsers = underscore.first(users, 5);

  const summary = topFiveUsers.map((user) => ({
    name: user.name,
    posts: (postsByUser[user.id] || []).length,
  }));

  const totalPosts = summary.reduce((acc, row) => acc.plus(row.posts), new BigNumber(0));
  const averagePosts = summary.length ? totalPosts.div(summary.length) : new BigNumber(0);
  const legacyTodo = await requestJson("https://jsonplaceholder.typicode.com/todos/1");

  console.table(summary);
  console.log("Legacy request todo title:", legacyTodo.title);
  console.log("Average posts among first 5 users:", averagePosts.toFixed(2));
}

run().catch((error) => {
  console.error("Combined example failed:", error.message);
  process.exitCode = 1;
});