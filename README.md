# clouddrift
_soft clouds drift across your terminal..._

![](https://github.com/thrly/clouddrift/blob/main/clouddrift.gif)

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
**clouddrift** uses the following npm packages:
- [chalk](https://www.npmjs.com/package/chalk) - for styling
- [simplex-noise.js](https://www.npmjs.com/package/simplex-noise) - for creating a 3D noise space to generate the clouds

if they're not already on your system, the install process will add them for you.

### "the colors on mac OS terminal look wrong!"
This is designed to run on a terminal that supports Truecolor, such as Windows'. Some terminals like the mac OS terminal have a more limited color palette, which looks horrible at the moment. I'm working on a check to run a simple black & white version on those terminals. Standby.

### roadmap
I hope to add some more customisation in future:
- fix colours on macOS and other ansi256 color terminals
- varied/custom palettes and colour schemes
- cloud control -- parameter control for cloud size and density
- date/clock

written by [@thrly](https://github.com/thrly), january 2025
