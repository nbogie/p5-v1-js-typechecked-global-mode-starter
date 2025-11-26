## Your p5.js JavaScript project with type-checking

You can delete what's currently written here and instead use this file to describe your project however you want, with notes, credits, ideas, helpful instructions for those who want to remix your work or collaborate on it, or for your future self.

At the moment it contains some useful information about the basics that have been put in place to get you started.

### What are all the files?

You can ignore most of the files. Here's a breakdown of what's what:

#### Files you SHOULD edit

Make the following files your own!

-   `index.html` - links to your sketch file and the p5.js library
-   `src/sketch.js` - the main file for your p5 sketch
-   add other javascript files in `src/` (optional)
    -   of course you can create more javascript files under the src/ directory, and link to them in `index.html`
-   `readme.md` (optional) - this file!

#### Files you _don't_ need to edit:

You don't need to edit, read, or understand these at all!

-   `jsconfig.json`
    -   this tells vscode to type-check your files
    -   and lets it know that your JS will be run in the browser, specifically, giving it access to the DOM types (like HTMLElement ), global variables like `document` and `console` and the types of the built-in functions from a modern javascript specification.
    -   if you want to turn off type-checking _entirely_ you can change the `checkJs` setting here.
-   `global.d.ts`
    -   tells vscode and typescript where to find the types describing the functions and global variables provided by typescript (v1.x).
    -   you _definitely_ don't need to understand this file!
-   `more-examples/`
    -   you can delete this folder if you like. It contains some longer p5.js examples that are intended:
        -   to help check that the type-checking is correctly set up.
        -   to show you how to do some useful things with jsdoc comments.

## About the template used

This project was created from the template found at TODO

The template provides a p5.js javascript starter project intended for editing in vscode.
In that environment you'll get

-   type-checking for your javascript code
    -   against the p5.js functions and other values
    -   against your own functions - more accurately for the ones you document with jsdoc comments
-   autocompletion...
    -   of p5.js function calls like circle() and variable names like mouseX or windowWidth
    -   of any of your own functions and variables
-   in-place display of documentation on hover-over
    -   for any p5.js functions and values
    -   for any of your own functions or values that you document with a jsdoc comment (completely optional!)

It will also type-check your own code, and you can help it do so by writing jsdoc comments for your functions, though that is completely optional!

### template credits

The global.d.ts used here to get p5.js v1.x types came from [Gareth Williams' p5 typescript starter project](https://github.com/Gaweph/p5-typescript-starter)
