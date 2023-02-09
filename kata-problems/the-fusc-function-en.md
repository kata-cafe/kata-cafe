# Encryption

Create 'The fusc' function is defined recursively as follows:

> 1. fusc(0) = 0
> 2. fusc(1) = 1
> 3. fusc(2 * n) = fusc(n). (input is even)
> 4. fusc(2 * n + 1) = fusc(n) + fusc(n + 1) (input is odd)

```js
1. fusc(10) = fusc(5)
```

```
1. fusc(10) = fusc(5)
``` by rule 3.

## Test Cases

```js
  fusc(10) = fusc(5) --> fusc(5) = fusc(2) + fusc(3) --> fusc(2) + fusc(3) = fusc(1) + fusc(1) + fusc(2) --> fusc(1) + fusc(1) + fusc(1)
```

## Contributors

- Pann (@ketsune)
