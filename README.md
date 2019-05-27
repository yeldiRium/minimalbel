# Minimalbel

A very minimal setup for using babel in legacy projects.

To add a new file named `myFile.js` in which you can use babel, create it at `./src/myFile.js` and in your project include the file `./dist/myFile.js`.

As a prerequisite for a few features you also need to include `./node_modules/@babel/polyfill/dist/polyfill.min.js`.

## Transpiling your code

If you have added a javascript file in `src` and want to transpile it, run the command `npm run build`. If you want babel to watch your input file and update the output file as you write, use `npm run watch` instead.

## Commit or not?

In the best case you add the `dist` folder to your gitignore and run the build command in your deployment process.

If that option is not available or too complicated, you can commit the `dist` folder. This might result in merge conflicts when multiple people collaborate on the javascript.

Resolve these conflicts not by fixing the files in `dist` by hand! Never touch them yourself! Always fix the conflicts in the source files and then build again.

## This might not be up to date

If you've copied `minimalbel`s source into your project or if I am lazy and do not update it, you should regularly check whether the versions here are still up to date.

With npm's semver functionality you should be able to safely run `npm update` without breaking your code.
