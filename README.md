# Webpack for the basics

```
nvm use 8.6
```

Create your project from the newly created directory:

```
npm init -y
```

## Installing webpack and webpack-cli

```
npm install webpack webpack-cli --save-dev
```

## The Babel, loader and modules?

```
npm install -D babel-loader
```

## Babel support for ES2015 (now preset-env)

What was updated from Marcio's prior doc was https://www.npmjs.com/package/@babel/preset-es2015. Some of the "Babel" npm modules are now of the new name kind "@babel/preset-env"

```
npm install --save-dev @babel/preset-env
```

### Babel support for React

```
npm install --save-dev @babel/preset-react
```

## Webpack css loader

We may need to check what is the https://github.com/webpack-contrib/style-loader.

```
npm install --save-dev css-loader
```

## Webpack config for ES2015 (-dev), CSS, and React

```
var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
    entry: [ SRC_DIR + "/index.js"],
    output: {
        path: DIST_DIR + "/",
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-react", "@babel/preset-env"]
                }
            },
            {
              test: /\.css$/,
              use: [ 'css-loader' ]
            }
        ]
    }
};
module.exports = config;

```

## Webpack dev server

For reloading...

```
npm install webpack-dev-server --save-dev
```

## Testing at this stage

```
npm run babel-start
```

Test with localhost:8080

## Adding Less

```
npm install less -D
npm install less-loader --save-dev

```
