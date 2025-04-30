To create a node.js proeject using typeScript, first create a folder and move to the folder using the command;

```
cd ./folder-name
```

Then run npm init to initialize your project

```
npm init -y
```

Then install neceessary pacakges for using typeScript using the following command;

```
npm install typescript ts-node-dev @types/node --save-dev
```

Here, "ts-node-dev" runs typeScript files without compiling it into javaScript during development mode. And "@types/node" package provides type definitions for built-in Node.js modules (like "fs", "path", "http").

Then initialize your typeScript compiler using the following command;

```
npx tsc --init
```

Now create a "src" folder inside the root directory and inside the "src" folder, create "index.ts" file.

Then configure your "package.json" file to run it in the development mode;

```
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
}
```

Here, "--respawn" starts the process after each file changes and "--transpile-only" skips type checking for faster development.

To build your project, add this to the "package.json" file;

```
"scripts": {
  "build": "tsc"
}
```

To start your built app, add this to the "package.json" file;

```
"scripts": {
  "start": "node dist/index.js"
}
```

To type check your typeScript file, add it to the scripts in your "package.json" file

```
"scripts": {
    "check-type": "tsc --noEmit"
}
```

Then run type check using the following command;

```
npm run check-type
```

For checking linting of even better quality, install the following packages;

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

Then add the following scrits in your "package.json" file;

```
"scripts": {
    "lint": "eslint . --ext .ts"
}
```

To run eslint in all of your typeScript files, run the following command;

```
npm run lint
```

During development mode, run the app using the following command;

```
npm run dev
```

Build your app using the following command;

```
npm run build
```

Start your production ready app using the following command;

```
npm run start
```

To enforce type-checking in CI/CD pipeline, create a folder named ".github" inside which create another folder named "workflows" inside of which you can create your ".yml".
<br> Now add the following script in your ".yml" file;

```
name: CI

on:
  push:
    branches: [main] # Specify the branch where we want to trigger the workflow
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 23 # Specify the node.js version, you are working with

      - name: Install Dependencies
        run: npm ci

      - name: Type Check
        run: npm run type-check

      - name: Build
        run: npm run build
```

This ensures no code is deployed with type errors.
