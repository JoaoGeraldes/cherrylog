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
 * currylog("a", "b", "c")("green");
 * currylog("a", 1, 2)("red");
 */
export function currylog(...args: unknown[]) {
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

currylog("a", "b", "c")("green");
currylog("a", 1, 2)("red");
currylog("b", 1, 2)("orange");
currylog("logging", {
  name: "John",
})("yellow");


