function currylog(...args) {


  return function(color) {
    const palette = {
      red: {
        background: "red",
        text: "white"
      },
      green: {
        background: "green",
        text: "white"
      }
    }
    const css = `background: ${palette?.[color]?.background || "black"}; color: ${palette?.[color]?.text || "white"}; padding: 2px; border-radius:2px`;

    if (typeof args[0] === "string") {
      const clonedArgs = [...args];
      clonedArgs.shift();
      console.log(`%c${args[0]}`, css, ...clonedArgs);
      return;
    }
    console.log("%c", css, ...args);
  }



}

currylog("aaa", "bbb", "ccc")("green");
currylog("num", 1, 2)("red");
currylog("logging", {
  name: "John"
})("yellow")
