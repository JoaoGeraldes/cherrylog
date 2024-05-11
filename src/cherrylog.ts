import { COLORS, CSSColors } from "./colors";

/**
 *
 * @param args
 * @returns
 *
 * @example
 * cherrylog("I'm blue Da ba dee da ba di")("blue");
 * cherrylog("It ain't easy being green.", true)("green");
 * cherrylog("Simply red!", 1, 2)("red");
 * cherrylog("Logging an object...", { name: "John" })(); // logs with default cherry color
 */
function cherrylog(...args: unknown[]) {
  function logger(color?: CSSColors) {
    const hasValidColor = COLORS.has(color);
    const textColor = calculateTextColor(color);

    const css = `
         background: ${(hasValidColor && color) || "#B62625"}; 
         color: ${(hasValidColor && textColor) || "white"}; 
         padding: 3px; 
         border-radius: 3px;
         text-shadow: 0px 0.5px 0px black;
     `;

    if (typeof args[0] === "string") {
      const clonedArgs = [...args];
      clonedArgs.shift();
      console.log(`%c${args[0]}`, css, ...clonedArgs);
      return;
    }
    console.log("%c", css, ...args);
  }

  return logger;
}

/**
 *
 * @param backgroundColor
 * @returns
 *
 * Calculates the best text color (either white or black)
 * based on a given background color,
 * for better contrast.
 */
function calculateTextColor(backgroundColor: CSSColors) {
  try {
    let colorInHex = colorNameToHex(backgroundColor);
    colorInHex = colorInHex.replace("#", "");

    // Parse hex color to integer RGB values
    const r = parseInt(colorInHex.substring(0, 2), 16) / 255;
    const g = parseInt(colorInHex.substring(2, 4), 16) / 255;
    const b = parseInt(colorInHex.substring(4, 6), 16) / 255;

    // Convert sRGB to linear RGB
    const toLinear = (c: number) => {
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    };

    // Convert RGB to linear RGB
    const rLinear = toLinear(r);
    const gLinear = toLinear(g);
    const bLinear = toLinear(b);

    // Calculate luminance
    const luminance = 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;

    // Determine the best contrasting color (black or white)
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  } catch {
    return "#FFFFFF";
  }
}

/**
 *
 * @param colorName
 * @returns
 *
 * Converts a color name into its equivalent hex.
 * @example
 *
 * colorNameToHex("blue") // returns "#0000ff"
 * colorNameToHex("green") // returns "#008000"
 *
 */
function colorNameToHex(colorName: CSSColors) {
  try {
    // Create a temporary DOM element
    const dummyElement = document.createElement("p");

    // Set the color
    dummyElement.style.color = colorName;

    // Append element to the body to ensure styles are computed
    document.body.appendChild(dummyElement);

    // Get computed color
    const computedColor = window.getComputedStyle(dummyElement).color;

    // Remove the element from the document
    document.body.removeChild(dummyElement);

    // Convert RGB to HEX
    const rgb = computedColor.match(/\d+/g).map(Number);
    const hex = rgb.reduce(
      (acc, val) => acc + ("0" + val.toString(16)).slice(-2),
      "#"
    );

    return hex;
  } catch {
    return "#000000";
  }
}

cherrylog("I'm blue Da ba dee da ba di")("blue");
cherrylog("It ain't easy being green.", true)("green");
cherrylog("Simply red!", 1, 2)("red");
cherrylog("Logging an object...", { name: "John" })();
