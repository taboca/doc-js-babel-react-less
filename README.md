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


## Webpack dev server

For reloading...

```
npm install webpack-dev-server --save-dev
```
