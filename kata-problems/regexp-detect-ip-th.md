
# Regular Expression (Detect IP address)

สร้าง function ชื่อ `detectIPAddress` ที่รับตัวแปร `s` ที่เป็น `string` และมี output เป็น `string` ที่ทำบอกว่าเป็นเลข ip address หรือไม่
ถ้าใช่ต้องบอกด้วยว่าเป็น ipv4 หรือ ipv6 โดยมีเงื่อนไขดังนี้

* ipv4 จะมีลักษณะดังนี้ `A.B.C.D` โดยที่ A, B, C และ D จะเป็นเลขจำนวนเต็มที่อยู่ในช่วง 0, 255

* ส่วน ipv6 มีลักษณะดังนี้ `A:B:C:D:E:F:G:H` โดยที่ A, B, C, D, E, F, G และ H จะเป็นเลขฐาน 16 จำนวน 4 bit (เช่น `2001:0db8:0000:0005:0000:ff00:0042:8329`)
* นอกจากนั้น `2001:0db8:0000:0005:0000:ff00:0042:8329` สามารถเขียนย่อเป็น `2001:db8:0:5:0:ff00:42:8329`
> เลขฐาน 16 สามารถมีค่าได้ดังนี้ `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]`

## Test Cases 

```
  detectIPAddress("This line has junk text.") -->  "Neither"
```

```
  detectIPAddress("121.18.19.20") -->  "IPv4"
```

```
  detectIPAddress("2001:0db8:0000:0000:0000:ff00:0042:8329") -->  "IPv6"
```

## Contributors
* Pann (@ketsune)
