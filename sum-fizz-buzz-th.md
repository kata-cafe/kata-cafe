# Sum Fizz Buzz

สร้าง function ชื่อ `sumFizzBuzz` ที่รับตัวแปร `x` ที่เป็น Array ของ `integer` โดยนำผลรวมของสมาชิกใน Array นั้นมาเช็คตามเงื่อนไข โดยมีเงื่อนไขดังนี้

* เมื่อ `x` หารด้วย 3 และ 5 ลงตัว ต้อง return `"FizzBuzz"`
* เมื่อ `x` หารด้วย 3 ลงตัว ต้อง return `"Fizz"`
* เมื่อ `x` หารด้วย 5 ลงตัว ต้อง return `"Buzz"`
* นอกนั้นให้ return ตัวแปร `x` ที่เป็น `string`

หาก `x` นั้นเป็น Array เปล่าจะต้อง return `string` เปล่า 

## Test Cases

```js
  fizzBuzz([10, 5]) -->  "FizzBuzz"
```

```js
  fizzBuzz([2, 3]) -->  "Buzz"
```

```js
  fizzBuzz([4, -1]) -->  "Fizz"
```

```js
  fizzBuzz([7, 4]) -->  "11"
```

## Contributors
* World (@runyasak)
