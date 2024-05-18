![logo](https://raw.githubusercontent.com/JoaoGeraldes/cherrylog/main/cherrylog_logo.png)

## 📙Description

Turn debugging from a chore into a carnival with colorized logs that’ll make bugs dance away!

A refined console.log for coders with a taste for elegance.

_Light, Clean & Simple_

## 💾 Install

`npm install cherrylog --save-dev`

## 🛠️ Usage

```js
import cherrylog from "cherrylog";

cherrylog("I'm blue Da ba dee da ba di")("blue");
cherrylog("It ain't easy being green.", true)("green");
cherrylog("Simply red!", 1, 2)("red");
cherrylog("Logging an object...", { name: "John" })(); // defaults to the delicious cherry color
```

![image info](https://raw.githubusercontent.com/JoaoGeraldes/cherrylog/2.0.0/example.jpg?token=GHSAT0AAAAAACQFCSPTZFXVZL7UDO7UT6RGZR7QQTA)

# Development

# 1. 📦 Build (`/dist`)

1. **Without compression/minification**

   `npm run build`

2. **With compression/minification**

   `npm-run-all build minify`

   By default, your compiled version goes to `/dist` directory.

# 2. 🚀 Publish

### 1. Test locally (before publish)

_within the project's directory_

1. `npm run build` or `npm-run-all build minify`
1. `npm link`

   _outside the project's directory - somewhere else to test our latest package changes_

1. `npm link my-package` (mimics the _npm install my-package_)

1. ```js
   import myPackage from "my-package";
   ```

### 2. Deploy to npm (https://www.npmjs.com/)

1. Increment version before publishing

   `npm version patch`

1. Build (with or without compression)

   `npm-run-all build minify` or `npm run build`

1. Deploy to npm

   `npm publish`
