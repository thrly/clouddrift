# clouddrift

_soft clouds drift across your terminal..._

![clouddrift](https://github.com/thrly/clouddrift/blob/main/clouddrift.gif)

## install & run

1. Install the npm package: `npm install -g clouddrift`
2. Run **clouddrift** from your terminal: `clouddrift`
3. Enjoy peaceful clouds for a while...
4. End the animation with `Ctrl + C`

(Note: If you didn't install globally (with the `-g` flag), you might need to run with `npx clouddrift`, or check your path.)

## about

**clouddrift** generates a simplex-noise grid to populate its clouds

designed for terminals with truecolor (like Windows powershell), **clouddrift** uses a colour palette loosely inspired by [catppuccin's 'mocha'](https://catppuccin.com/palette)

### requirements

**clouddrift** assumes you already have [node](https://nodejs.org/en)/npm installed and uses the following npm dependencies:

- [chalk](https://www.npmjs.com/package/chalk) - for styling
- [simplex-noise.js](https://www.npmjs.com/package/simplex-noise) - for creating a 3D noise space to generate the clouds
- [supports-color](https://www.npmjs.com/package/supports-color) - checks your terminal for truecolor support

(if they're not already on your system, the npm install process will add them for you.)

### "the colours on mac OS terminal look wrong!"

This is designed to run on a terminal that supports Truecolor, such as Windows'. Some terminals like the mac OS terminal have a more limited colour palette, so I've had to change the palette to more basic colours.

### roadmap

I hope to add some more customisation in future:

- varied/custom palettes and colour schemes
- cloud control -- parameter control for cloud size and density
- date/clock

written by [@thrly](https://github.com/thrly), january 2025
