# Validate an email => true | false

One **straight** *forward* `email` validator ***function*** ~~that~~ <mark>returns</mark> <sup>a</sup> <sub>boolean</sub> 😍

## Install
```shell
npm i @ssts/email
```
## Import
```js
import seniorEMAIL from "@ssts/email";
```
## Use
```ts
const isEmail: boolean = seniorEMAIL("example@test.com");
```

## Arguments
> Returns a boolean

| Order | Parameter |  Type  | Default  |
| :---: | :-------: | :----: | :------: |
|   1   |   email   | string | required |

## Examples

```ts
import seniorEMAIL from "@ssts/email";

console.log(seniorEMAIL("example@gmail.com"));          // true
console.log(seniorEMAIL("user123@yahoo.com"));          // true
console.log(seniorEMAIL("valid.email@domain.com"));     // true
console.log(seniorEMAIL("contact@mydomain.org"));       // true
console.log(seniorEMAIL("info@business.info"));         // true

console.log(seniorEMAIL(""));                           // false
console.log(seniorEMAIL("abc"));                        // false
console.log(seniorEMAIL("user@.com"));                  // false
console.log(seniorEMAIL("user@@domain.com"));           // false
console.log(seniorEMAIL("&user@email.com"));            // false
console.log(seniorEMAIL("can----t@gmail.com"));         // false
console.log(seniorEMAIL("user@gmail..com"));            // false
```

___
---
---
---
***
>   Made With Chocolate By Senior Sedo 😎
>>  Be Chocolateful 💙😍
>>
>>  **ssts** stands for **s**enior-**s**edo-**t**ype**s**cript 💙
>>
>>  So instead of ~~@senior-sedo-typescript/is-email~~
>>> `@ssts/email` for simplicity sake 😍
***
---
---
---
___