
# Encryption

สร้าง function ชื่อ `encryption` ที่รับตัวแปร `s` ที่เป็น `string` และมี output เป็น `string` ที่ทำการ encrypt แล้ว โดยมีเงื่อนไขดังนี้

* ให้ remove whitespace ออกจาก `s` แล้วให้หาจำนวนเต็มสองจำนวนที่ใกล้ที่สุดของ square root ของ `s.len`
* กล่าวคือ floor(sqrt(s.len)) <= row <= column <= ceiling(sqrt(s.len))
> เช่น `if man was meant to stay on the ground god would have given us roots` ถ้าเอา remove whitespace จะได้ความยาว 54 ตัวอักษร
> จะได้ว่า square root ของ 54 มีค่าอยู่ระหว่างจำนวนเต็มสองค่า คือ 5 และ 6
> เพราะฉะนั้นจะได้ว่า row = 5 และ column = 6
> จากนั้นนำ s มายัดลง matrix ที่มีมิติ 5x6 (row x column) จะได้ว่า  
> 
>> ifmanwas  
>> meanttos          
>> tayonthe  
>> groundgo  
>> dwouldha  
>> vegivenu  
>> sroots
>
> เสร็จแล้วนำตัวอักษรมาเรียงใหม่จาก `บนลงล่าง` จะได้ผลลัพธ์ที่ต้องการเป็น `imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau`

## Test Cases

```
  encryption("if man was meant to stay on the ground god would have given us roots") -->  "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau"
```

```
  encryption("have a nice day") -->  "hae and via ecy"
```

```
  encryption("feed the dog) -->  "fto ehg ee dd"
```

```
  encryption("chill out") -->  "clu hlt io"
```

## Contributors
* Pann (@ketsune)
