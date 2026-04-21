
# Hackrink

Hackrink is a personal Node.js playground designed to replicate the utility of HackerRank's JavaScript REPL locally. The repository keeps a pinned runtime, a fixed dependency set, and a collection of small runnable examples so it is easy to probe language behavior, compare library APIs, and experiment in a controlled environment that is close to an online coding sandbox.

## Purpose

This repo exists to provide a lightweight local stand-in for the HackerRank JavaScript environment:

- quick feedback from small, self-contained scripts
- a stable and repeatable Node runtime
- a convenient place to try package behavior without scaffolding a full app
- a personal scratchpad for REPL-style experiments and coding challenge ideas

## What this repo includes

- Runtime pinned to Node `20.15.1`
- Package management pinned via Volta to npm `10.7.0`
- Individual samples for HTTP clients, utility libraries, transpilation, and TypeScript
- One combined sample that exercises multiple installed packages together

The current dependency set includes:

- `axios`
- `babel-cli` and `babel-preset-latest`
- `bignumber.js`
- `coffeescript`
- `jquery`
- `lodash`
- `node-fetch`
- `request`
- `typescript`
- `underscore`

## Prerequisites

- Node `20.15.1`
- npm `10.7.0`

If you use `nvm`, switch to the expected runtime with:

```bash
nvm use
```

If you use Volta, the pinned versions in `package.json` will be picked up automatically.

## Install

```bash
npm install
```

## Run the samples

Each sample is exposed as an npm script:

- Axios: `npm run sample:axios`
- Babel CLI: `npm run sample:babel`
- BigNumber: `npm run sample:bignumber`
- CoffeeScript: `npm run sample:coffee`
- node-fetch: `npm run sample:fetch`
- lodash: `npm run sample:lodash`
- request: `npm run sample:request`
- TypeScript: `npm run sample:ts`
- underscore: `npm run sample:underscore`
- Combined example: `npm run sample:combo`

The jQuery sample is browser-based rather than script-based:

```bash
open samples/jquery-example.html
```

## Project structure

```text
.
├── package.json
├── README.md
└── samples/
	├── axios-example.js
	├── babel-source.js
	├── babel-output.js
	├── bignumber-example.js
	├── coffeescript-example.coffee
	├── combined-example.js
	├── jquery-example.html
	├── lodash-example.js
	├── node-fetch-example.js
	├── request-example.js
	├── typescript-example.ts
	└── underscore-example.js
```

## Notes

- This repository is a personal playground, not an application or publishable package.
- The samples are intentionally small so they can behave more like REPL probes than production code.
- Some dependencies here are intentionally older or legacy tools, which makes the repo useful for quick compatibility checks and API experiments.
- `npm test` is currently a placeholder and does not run an automated test suite.

## License

MIT
