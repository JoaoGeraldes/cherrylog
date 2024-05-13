![logo](cherrylog_logo.png)
## 📙Description

Turn debugging from a chore into a carnival with colorized logs that’ll make bugs dance away!

A refined console.log for coders with a taste for elegance.

_Light, Clean & Simple_

## 💾 Install

`npm install cherrylog --save-dev`

## 🛠️ Usage

```js
cherrylog("I'm blue Da ba dee da ba di")("blue");
cherrylog("It ain't easy being green.", true)("green");
cherrylog("Simply red!", 1, 2)("red");
cherrylog("Logging an object...", { name: "John" })(); // defaults to the delicious cherry color
```

![image info](https://raw.githubusercontent.com/JoaoGeraldes/cherrylog/2.0.0/example.jpg?token=GHSAT0AAAAAACQFCSPTZFXVZL7UDO7UT6RGZR7QQTA)

# Development

### 📦 BUILD (builds to /dist directory)

npm run build

### 🔂 Increment version before publishing package

npm version patch

#### Test locally, before publish

- (within the project's directory)
   - `npm run build`
   - `npm link`
- (outside the project's directory - somewhere else to test our latest package changes)
  - `npm link cherrylog` (equivalent to npm install cherrylog)
  - `import cherrylink from "cherryling"`
