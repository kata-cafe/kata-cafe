# Fizz Buzz

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

## Test Cases

```js
  autoComplete(
    'a',
    [
      'imagine',
      'air',
      'impressive',
      'doll',
      'car',
      'eagle',
      'champion',
      'figure',
      'internal',
      'internal'
    ]
  ) --> ['imagine', 'air', 'car', 'eagle', 'champion']
```

```js
  autoComplete(
    'ai',
    [
      'imagine',
      'air',
      'impressive',
      'doll',
      'car',
      'eagle',
      'champion',
      'figure',
      'internal',
      'internal'
    ]
  ) --> ['air']
```

```js
  autoComplete(
    'k',
    [
      'imagine',
      'air',
      'impressive',
      'doll',
      'car',
      'eagle',
      'champion',
      'figure',
      'internal',
      'internal'
    ]
  ) --> []
```
## Ref
* https://www.codewars.com/kata/5389864ec72ce03383000484

## Contributors
* World (@runyasak)
