# clouddrift
_soft clouds drifting across your terminal..._

![](https://github.com/thrly/clouddrift/blob/main/clouddrift.gif)

## install
Install the npm package:
`npm install clouddrift`

Run clouddrift from your terminal:
`clouddrift`

End the animation with `Ctrl + C`

## about
- clouddrift generates a simplex-noise grid to populate its clouds
- by default it uses a colour palette loosely inspired by [catppuccin's 'mocha'](https://catppuccin.com/palette)

### requirements
clouddrift uses the following npm packages:
- [chalk](https://www.npmjs.com/package/chalk) - for styling
- [simplex-noise.js](https://www.npmjs.com/package/simplex-noise) - for creating a 3D noise space to generate the clouds

if they're not already on your system, the install process will add them for you.

### roadmap
I hope to add some more customisation in future:
- varied palettes and colour schemes
- cloud control -- parameter control for cloud size and density
- date/clock

written by @thrly, january 2025
