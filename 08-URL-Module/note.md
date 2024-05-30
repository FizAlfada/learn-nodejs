## URL

The node:url module provides utilities for URL resolution and parsing. It can be accessed using:

```js
import url from "url";
```

### base URL

```js
const myURL = new URL("https://example.org");
```

### new URL(input[,base])

- input <string> The absolute or relative input URL to parse. If input is relative, then base is required. If input is absolute, the base is ignored. If input is not a string, it is converted to a string first.

- base <string> The base URL to resolve against if the input is not absolute. If base is not a string, it is converted to a string first.

Creates a new URL object by parsing the input relative to the base. If base is passed as a string, it will be parsed equivalent to new URL(base).

```js
const myURL = new URL("/foo", "https://example.org/");
// https://example.org/foo
```

### url.hash

Gets and sets the fragment portion of the URL.

```js
const myURL = new URL("https://example.org/foo#bar");
console.log(myURL.hash);
// Prints #bar

myURL.hash = "baz";
console.log(myURL.href);
// Prints https://example.org/foo#baz
```

Invalid URL characters included in the value assigned to the hash property are percent-encoded. The selection of which characters to percent-encode may vary somewhat from what the url.parse() and url.format() methods would produce.

### url.host

Gets and sets the host portion of the URL.

```js
const myURL = new URL("https://example.org:81/foo");
console.log(myURL.host);
// Prints example.org:81

myURL.host = "example.com:82";
console.log(myURL.href);
// Prints https://example.com:82/foo
```

### url.hostname

Gets and sets the host name portion of the URL. The key difference between url.host and url.hostname is that url.hostname does not include the port.

```js
const myURL = new URL("https://example.org:81/foo");
console.log(myURL.hostname);
// Prints example.org

// Setting the hostname does not change the port
myURL.hostname = "example.com";
console.log(myURL.href);
// Prints https://example.com:81/foo

// Use myURL.host to change the hostname and port
myURL.host = "example.org:82";
console.log(myURL.href);
// Prints https://example.org:82/foo
```

Invalid host name values assigned to the hostname property are ignored.

### url.href

Gets and sets the serialized URL.

```js
const myURL = new URL("https://example.org/foo");
console.log(myURL.href);
// Prints https://example.org/foo

myURL.href = "https://example.com/bar";
console.log(myURL.href);
// Prints https://example.com/bar
```

Getting the value of the href property is equivalent to calling url.toString().

Setting the value of this property to a new value is equivalent to creating a new URL object using new URL(value). Each of the URL object's properties will be modified.

If the value assigned to the href property is not a valid URL, a TypeError will be thrown.

### url.origin

Gets the read-only serialization of the URL's origin.

```js
const myURL = new URL("https://example.org/foo/bar?baz");
console.log(myURL.origin);
// Prints https://example.org
```

### url.password

Gets and sets the password portion of the URL.

```js
const myURL = new URL("https://abc:xyz@example.com");
console.log(myURL.password);
// Prints xyz

myURL.password = "123";
console.log(myURL.href);
// Prints https://abc:123@example.com/
```

Invalid URL characters included in the value assigned to the password property are percent-encoded. The selection of which characters to percent-encode may vary somewhat from what the `url.parse()` and `url.format()` methods would produce.

### url.pathname

Gets and sets the path portion of the URL.

```js
const myURL = new URL("https://example.org/abc/xyz?123");
console.log(myURL.pathname);
// Prints /abc/xyz

myURL.pathname = "/abcdef";
console.log(myURL.href);
// Prints https://example.org/abcdef?123
```

Invalid URL characters included in the value assigned to the pathname property are percent-encoded. The selection of which characters to percent-encode may vary somewhat from what the url.parse() and url.format() methods would produce.

### url.port

Gets and sets the port portion of the URL.

The port value may be a number or a string containing a number in the range 0 to 65535 (inclusive). Setting the value to the default port of the URL objects given protocol will result in the port value becoming the empty string ('').

The port value can be an empty string in which case the port depends on the protocol/scheme:
protocol port
"ftp" 21
"file"
"http" 80
"https" 443
"ws" 80
"wss" 443

Upon assigning a value to the port, the value will first be converted to a string using .toString().

If that string is invalid but it begins with a number, the leading number is assigned to port. If the number lies outside the range denoted above, it is ignored.

```js
const myURL = new URL("https://example.org:8888");
console.log(myURL.port);
// Prints 8888
```

### url.protocol

Gets and sets the protocol portion of the URL.

```js
const myURL = new URL("https://example.org");
console.log(myURL.protocol);
// Prints https:

myURL.protocol = "ftp";
console.log(myURL.href);
// Prints ftp://example.org/
```

Invalid URL protocol values assigned to the protocol property are ignored.

### url.search

Gets and sets the serialized query portion of the URL.

```js
const myURL = new URL("https://example.org/abc?123");
console.log(myURL.search);
// Prints ?123

myURL.search = "abc=xyz";
console.log(myURL.href);
// Prints https://example.org/abc?abc=xyz
```

Any invalid URL characters appearing in the value assigned the search property will be percent-encoded. The selection of which characters to percent-encode may vary somewhat from what the url.parse() and url.format() methods would produce.

### url.searchParams

Gets the URLSearchParams object representing the query parameters of the URL. This property is read-only but the URLSearchParams object it provides can be used to mutate the URL instance; to replace the entirety of query parameters of the URL, use the url.search setter. See URLSearchParams documentation for details.

Use care when using .searchParams to modify the URL because, per the WHATWG specification, the URLSearchParams object uses different rules to determine which characters to percent-encode. For instance, the URL object will not percent encode the ASCII tilde (~) character, while URLSearchParams will always encode it:

```js
const myURL = new URL("https://example.org/abc?foo=~bar");

console.log(myURL.search); // prints ?foo=~bar
```

### url.username

Gets and sets the username portion of the URL.

```js
const myURL = new URL("https://abc:xyz@example.com");
console.log(myURL.username);
// Prints abc
```

Any invalid URL characters appearing in the value assigned the username property will be percent-encoded. The selection of which characters to percent-encode may vary somewhat from what the url.parse() and url.format() methods would produce.

### url.toString()

The toString() method on the URL object returns the serialized URL. The value returned is equivalent to that of url.href and url.toJSON().

### url.toJSON()

The toJSON() method on the URL object returns the serialized URL. The value returned is equivalent to that of url.href and url.toString().

This method is automatically called when an URL object is serialized with JSON.stringify().

```js
const myURLs = [
  new URL("https://www.example.com"),
  new URL("https://test.example.org"),
];
console.log(JSON.stringify(myURLs));
// Both are looking the same
// Prints ["https://www.example.com/","https://test.example.org/"]
```

### url.searchParams

The URLSearchParams API provides read and write access to the query of a URL. The URLSearchParams class can also be used standalone with one of the four following constructors. The URLSearchParams class is also available on the global object.

The WHATWG URLSearchParams interface and the querystring module have similar purpose, but the purpose of the querystring module is more general, as it allows the customization of delimiter characters (& and =). On the other hand, this API is designed purely for URL query strings.

```js
const myURL = new URL("https://example.org/?abc=123");
console.log(myURL.searchParams.get("abc"));
// Prints 123
```
