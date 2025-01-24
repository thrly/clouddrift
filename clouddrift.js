#!/usr/bin/env node

// CLOUD DRIFT
// soft drifting clouds across your terminal...
// oliver thurley, jan 2025

import chalk from "chalk";
import supportsColor from "supports-color";
import { createNoise3D } from "simplex-noise";

const noise3D = createNoise3D(); // init noise function

// possible character sets:
// shades = ["░", "▒", "▓", "█"];
// smallBlocks = ["▖", "▗", "▘", "▙", "▚", "▛", "▜", "▝", "▞", "▟", "█"]; // https://en.wikipedia.org/wiki/Block_Elements

const scaleNoise = 2; // this val scales the cloud 'size'
let frameCount = 0; // init for the animation frame counter...
console.clear(); // clear the console
process.stderr.write("\x1B[?25l"); // hide cursor
const pause = () => new Promise((resolve) => setTimeout(resolve, 1000)); // pause loop for 1000 ms

// TODO: it would be nice to print the time and date in a corner
// I can't get this to play nice with the redraw loop at the moment so it flickers

// const writeTime = () => {
//   let time = new Date();
//   process.stdout.write(
//     time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
//   );
// };

const main = async () => {
  const columns = process.stdout.columns; // gets the width of the terminal
  const rows = process.stdout.rows;

  for (let y = 0; y < rows; y++) {
    // move across each cell of the terminal...
    for (let x = 0; x < columns; x++) {
      process.stdout.cursorTo(x, y); // move cursor to each cell...

      let randomVal = noise3D(
        // get the random value from the 3D noise space (and scale)
        (frameCount * 0.01 + x / columns) * scaleNoise, // TODO: set a random direction on load?
        (frameCount * 0.02 + y / rows) * scaleNoise,
        frameCount * 0.02
      );
      randomVal = randomVal * 0.5 + 0.5; // scale -1 1 to 0 1

      // uses the Catppuccin Mocha palette: https://catppuccin.com/palette
      // I really wish Chalk had HSL, so I could vary the lightness based on the noise value for a lovely gradient...
      // TODO: write an HSL to RGB/HEX function...
      if (supportsColor.stderr.has16m) {
        if (randomVal < 0.2) {
          process.stdout.write(chalk.hex("#a6adc8")("█"));
        } else if (randomVal >= 0.2 && randomVal < 0.25) {
          process.stdout.write(chalk.bgHex("#1e1e2e").hex("#9399b2")("█")); // "▓"
        } else if (randomVal >= 0.25 && randomVal < 0.3) {
          process.stdout.write(chalk.bgHex("#1e1e2e").hex("#7f849c")("▓")); // "▒"
        } else if (randomVal >= 0.3 && randomVal < 0.325) {
          process.stdout.write(chalk.hex("#6c7086")("▓")); // "░"
        } else {
          process.stdout.write(chalk.hex("#1e1e2e")("█"));
        }
      } else {
        if (randomVal < 0.2) {
          process.stdout.write(chalk.ansi256(212)("█"));
        } else if (randomVal >= 0.2 && randomVal < 0.25) {
          process.stdout.write(chalk.ansi256(218)("▓")); // "▓"
        } else if (randomVal >= 0.25 && randomVal < 0.3) {
          process.stdout.write(chalk.ansi256(224)("▒")); // "▒"
        } else if (randomVal >= 0.3 && randomVal < 0.325) {
          process.stdout.write(chalk.ansi256(230)("░")); // "░"
        } else {
          process.stdout.write(" ");
        }
      }
      // } else { // pink + teal color palette
      //   if (randomVal < 0.2) {
      //     process.stdout.write(chalk.ansi256(206)("█"));
      //   } else if (randomVal >= 0.2 && randomVal < 0.25) {
      //     process.stdout.write(chalk.ansi256(207)("█")); // "▓"
      //   } else if (randomVal >= 0.25 && randomVal < 0.3) {
      //     process.stdout.write(chalk.ansi256(213)("█")); // "▒"
      //   } else if (randomVal >= 0.3 && randomVal < 0.325) {
      //     process.stdout.write(chalk.ansi256(219)("█")); // "░"
      //   } else {
      //     process.stdout.write(chalk.ansi256(45)("█"));
      //   }
      // }
    }
  }
  frameCount++;
};

// kill the app with Ctrl + C:
process.on("SIGINT", () => {
  console.clear();
  process.stderr.write("\x1B[?25h"); // show cursor
  process.exit();
});

while (true) {
  // until the SIGINT ends the program with Ctrl+C
  main(); // keep redrawing...
  // writeTime();
  await pause();
}
