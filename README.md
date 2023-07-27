# React con el bundle rollup.js en Typescript

## Iniciar npm package

```js
npm init -y
```

## Instalar dependencias

```js
npm i --save-dev rollup @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```

## Istalar plugins de rollup.js

[Plugins rollup.js](https://github.com/rollup/plugins)

```js
npm i --save-dev @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-replace @rollup/plugin-typescript
```

## Instalar React types

```js
npm i --save-dev @types/react @types/react-dom
```

## Instalar React

```js
npm i react react-dom
```

## Iniciar la configuración de typescript:

```js
npx tsc --init
```

Revisar tsconfig.json y establecer la configuración

## Instalar ESlint

```js
npx eslint --init
```

√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · Yes
√ Where does your code run? · browser, node **(seleccionar node y presionar a para dejar ambos seleccionados)**
√ How would you like to define a style for your project? · prompt
√ What format do you want your config file to be in? · JavaScript
√ What style of indentation do you use? · 4
√ What quotes do you use for strings? · single
√ What line endings do you use? · unix **(o win32 si estas en windows)**
√ Do you require semicolons? » Yes
√ Would you like to install them now? · Yes
√ Which package manager do you want to use? · npm

## Instalar Prettier

```js
npm i --save-dev --save-exact prettier
```

### Configurar prettier:

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

## Configuraciones

Crear carpeta config (para configuraciones js)

Crear archivo _config\globalConfig.js_ y agregar las exportaciones de las constantes

Crear archivo _config\rollup.config.js_ y generar las configuraciones de los plugins

Crear archivo _config\rollup.prod.config.js_ generar las configuraciones de los plugins para producción

Agregar el script build en package.json:

```js
"build": "rollup --bundleConfigAsCjs --config ./config/rollup.prod.config.js"
```

## Instalar y configurar live reload, dev y html plugin

```js
npm i --save-dev @rollup/plugin-html rollup-plugin-livereload rollup-plugin-dev
```

Crear archivo _config\rollup.dev.config.js_ generar las configuraciones de los plugins para desarrollo

Crear _src\index.dev.html_ como template (ver codigo)

Crear _config\htmlTemplate.js_ para importar el template y reemplazar el ${script}

Finalizar devPlugins de _config\rollup.dev.config.js_
