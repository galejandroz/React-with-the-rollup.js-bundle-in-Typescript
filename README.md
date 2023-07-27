# React with the rollup.js bundle in Typescript

## [rollupjs.org](https://rollupjs.org/)

## Initialize npm package

```js
npm init -y
```

## Install dependencies

```js
npm i --save-dev rollup @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```

## Install rollup.js plugins

[Rollup.js Plugins](https://github.com/rollup/plugins)

```js
npm i --save-dev @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-replace @rollup/plugin-typescript
```

## Install React types

```js
npm i --save-dev @types/react @types/react-dom
```

## Install React

```js
npm i react react-dom
```

## Start TypeScript configuration:

```js
npx tsc --init
```

Check tsconfig.json and set up the configuration.

## Install ESlint

```js
npx eslint --init
```

```js
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · Yes
√ Where does your code run? · browser, node **(select node and press 'a' to keep both selected)**
√ How would you like to define a style for your project? · prompt
√ What format do you want your config file to be in? · JavaScript
√ What style of indentation do you use? · 4
√ What quotes do you use for strings? · single
√ What line endings do you use? · unix **(or win32 if you're on Windows)**
√ Do you require semicolons? » Yes
√ Would you like to install them now? · Yes
√ Which package manager do you want to use? · npm
```

## Install Prettier

```js
npm i --save-dev --save-exact prettier
```

### Configure prettier:

```js
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 4
}
```

## Configurations

Create a _config_ folder (for js configurations).

Create the _config\globalConfig.js_ file and add the constants exports.

Create the _config\rollup.config.js_ file and set up the plugins configurations.

Create the _config\rollup.prod.config.js_ file and set up the plugins configurations for production.

Add the build script in package.json:

```js
"build": "rollup --bundleConfigAsCjs --config ./config/rollup.prod.config.js"
```

## Install and configure live reload, dev, and html plugin

### [Awesome Plugins](https://github.com/rollup/awesome)

```js
npm i --save-dev @rollup/plugin-html rollup-plugin-livereload rollup-plugin-dev
```

Create the _config\rollup.dev.config.js_ file and set up the plugins configurations for development.

Create _src\index.dev.html_ as a template (see code).

Create _config\htmlTemplate.js_ to import the template and replace the _${script}_.

Finish the devPlugins in _config\rollup.dev.config.js_.

Add the build script in package.json:

```js
"build:dev": "rollup --bundleConfigAsCjs --config ./config/rollup.dev.config.js --w"
```

```js
npm run build:dev
```
