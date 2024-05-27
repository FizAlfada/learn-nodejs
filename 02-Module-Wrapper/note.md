## Module Wrapper

Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:

```bash
  (function(exports, require, module, __filename, __dirname) {
    // Module code actually lives in here
  });
```

### By doing this, Node.js achieves a few things:

1. It keeps top-level variables (defined with var, const, or let) scoped to the module rather than the global object.
2. It helps to provide some global-looking variables that are actually specific to the module, such as:
   - The module and exports objects that the implementor can use to export values from the module.
   - The convenience variables **filename and **dirname, containing the module's absolute filename and directory path.

## The Module Scope

### \_\_dirname

- string

The directory name of the current module. This is the same as the path.dirname() of the \_\_filename.
Example: running node example.js from /Users/mjr

```js
console.log(__dirname);
// Prints: /Users/mjr
console.log(path.dirname(__filename));
// Prints: /Users/mjr
```

### \_\_filename

- string

The file name of the current module. This is the current module file's absolute path with symlinks resolved.

For a main program this is not necessarily the same as the file name used in the command line.

See `__dirname` for the directory name of the current module.

Examples:

Running `node example.js` from `/Users/mjr`

```js
console.log(__filename);
// Prints: /Users/mjr/example.js
console.log(__dirname);
// Prints: /Users/mjr
```

Given two modules: `a` and `b`, where `b` is `a` dependency of `a` and there is a directory structure of:

`/Users/mjr/app/a.js`
`/Users/mjr/app/node_modules/b/b.js`

References to `__filename` within b.js will return `/Users/mjr/app/node_modules/b/b.js` while references to `__filename` within `a.js` will return `/Users/mjr/app/a.js.`

exports
