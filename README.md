# clouddrift
_soft clouds drifting across your terminal..._

// todo: gif here

## install
Install the npm package with:
`npm install clouddrift` // todo: npm package isn't made yet, this might change

Run clouddrift with:
`npm clouddrift` // todo: npm package isn't made yet, this might change

End the animation with `Ctrl + C`

## about
- clouddrift generates a simplex-noise grid to populate its clouds
- by default it uses a colour palette loosely inspired by catppuccin's 'mocha'

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