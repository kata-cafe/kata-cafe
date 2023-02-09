# Encryption

Create 'The fusc' function is defined recursively as follows:

> 1. fusc(0) = 0
> 2. fusc(1) = 1
> 3. fusc(2 * n) = fusc(n). (input is even)
> 4. fusc(2 * n + 1) = fusc(n) + fusc(n + 1) (input is odd)

```js
1. fusc(10) = fusc(5) // by rule No.3
2. fusc(5) = fusc(2) + fusc(3) // by rule No.4
3.1 fusc(2) = fusc(1) and then fusc(1) = 1 // by rule No.3 then rule No.2
3.2 fusc(3) = fusc(1) + fusc(2) // by rule No.4
thus
4. fusc(5) = 1 + 1 + 1 = 3

Answer is 3 (return as int)
```

## Test Cases


```js
  fusc(0) --> 0
```

```js
  fusc(3) --> 2
```

```js
  fusc(10) --> 3
```

```js
  fusc(11) --> 5
```

## Contributors

- Pann (@ketsune)
