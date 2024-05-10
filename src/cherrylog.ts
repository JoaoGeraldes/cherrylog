const palette: Record<string, Record<string, string>> = {
  red: {
    background: "red",
    text: "white",
  },
  green: {
    background: "green",
    text: "white",
  },
  yellow: {
    background: "yellow",
    text: "black",
  },
  orange: {
    background: "orange",
    text: "white",
  },
};

/**
 *
 * @param args
 * @returns
 *
 * @example
 * cherrylog("a", "b", "c")("green");
 * cherrylog("a", 1, 2)("red");
 */
export function cherrylog(...args: unknown[]) {
  return function (color: string) {
    const css = `
    background: ${palette?.[color]?.background || "black"}; 
    color: ${palette?.[color]?.text || "white"}; 
    padding: 2px; 
    border-radius:2px`;

    if (typeof args[0] === "string") {
      const clonedArgs = [...args];
      clonedArgs.shift();
      console.log(`%c${args[0]}`, css, ...clonedArgs);
      return;
    }
    console.log("%c", css, ...args);
  };
}

cherrylog("a", "b", "c")("green");
cherrylog("a", 1, 2)("red");
cherrylog("b", 1, 2)("orange");
cherrylog("logging", {
  name: "John",
})("yellow");
