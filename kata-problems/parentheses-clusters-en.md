# Parentheses Clusters

Write a function that groups a string into parentheses clusters. Each cluster should be balanced.

# Notes

- All input strings will only contain parentheses.
- Balanced: Every opening parens ```(``` must exist with its matching closing parens ```)``` in the same cluster.

# Test Cases

```js
split("()()()")
// Result: ["()", "()", "()"]
```

```js

split("((()))")
// Result: ["((()))"]
```

```js
split("((()))(())()()(()())")
// Result:["((()))", "(())", "()", "()", "(()())"]
```
## Ref

- https://edabit.com/challenge/kKQPf5xTAdnBjqvZ8

## Contributors

- T (@annopud)
