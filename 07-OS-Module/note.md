## OS ( Operating System )

The node:os module provides operating system-related utility methods and properties. It can be accessed using:

```js
const os = require("os");
```

### os.arch

```js
console.log(os.arch());
```

Returns the operating system CPU architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc', 'ppc64', 'riscv64', 's390', 's390x', and 'x64'.

### os.cpus

```js
console.log(os.cpus());
```

Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.

### os.freemem

```js
console.log(os.freemem());
```

Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.

### os.hostname

```js
console.log(os.hostname());
```

Returns the host name of the operating system as a string.

### os.homedir

```js
console.log(os.homedir());
```

Returns the string path of the current user's home directory.

### os.machine

```js
console.log(os.machine());
```

Returns the machine type as a string, such as arm, arm64, aarch64, mips, mips64, ppc64, ppc64le, s390, s390x, i386, i686, x86_64.

### os.platform

```js
console.log(os.platform());
```

Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.

### os.totalmem

```js
console.log(os.totalmem());
```

Returns the total amount of system memory in bytes as an integer.

### os.version

```js
console.log(os.version());
```

On POSIX systems, the operating system release is determined by calling uname(3). On Windows, RtlGetVersion() is used, and if it is not available, GetVersionExW() will be used. See https://en.wikipedia.org/wiki/Uname#Examples for more information.
