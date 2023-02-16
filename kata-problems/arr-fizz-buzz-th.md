# Array Fizz Buzz

สร้าง function ชื่อ `arrFizzBuzz` ที่รับตัวแปร `x` ที่เป็น Array ของ `integer` โดยนำสมาชิกแต่ละตัวใน Array นั้นมาเช็คตามเงื่อนไข โดยมีเงื่อนไขดังนี้

- เมื่อ `x` หารด้วย 3 และ 5 ลงตัว ต้อง return `"FizzBuzz"`
- เมื่อ `x` หารด้วย 3 ลงตัว ต้อง return `"Fizz"`
- เมื่อ `x` หารด้วย 5 ลงตัว ต้อง return `"Buzz"`
- นอกนั้นให้ return ตัวแปร `x` ที่เป็น `string`

หาก `x` นั้นเป็น Array เปล่าจะต้อง return `string` เปล่า

## Test Cases

```js
  fizzBuzz([3, 5, 15]) -->  ["Fizz", "Buzz", "FizzBuzz"]
```

```js
  fizzBuzz([3, 7]) -->  ["Fizz", "7"]
```

```js
  fizzBuzz([5, -1]) -->  ["Buzz", "-1"]
```

```js
  fizzBuzz([]) -->  ""
```

## Contributors

- World (@runyasak)
