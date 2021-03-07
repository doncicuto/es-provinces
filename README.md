# ES-Provinces

Spanish provinces names and codes as shown in INE (Spain's National Statistics Institute)

Reference: [https://www.ine.es/daco/daco42/codmun/cod_ccaa_provincia.htm](https://www.ine.es/daco/daco42/codmun/cod_ccaa_provincia.htm)

## Install

```bash
yarn add @doncicuto/es-provinces
```

or

```bash
npm install @doncicuto/es-provinces --save
```

## Usage

The default export is an array of objects with the following structure:

| Property   | Type     | Description                   | Example           |
| ---------- | -------- | ----------------------------- | ----------------- |
| `code`     | `string` | province INE code             | `47`              |
| `name`     | `string` | province name                 | `Valladolid`      |
| `commCode` | `string` | INE Autonomous community code | `07`              |
| `commName` | `string` | Autonomous Community name     | `Castilla y León` |

Example (Browser):

```ts
import provinces from "@doncicuto/es-provinces";

const names = provinces.map((p) => p.name);
console.log(names);

const filtered = provinces.filter((p) => p.commName === "Castilla y León");
console.log(filtered);
```

Example (NodeJS):

```js
const provinces = require("@doncicuto/es-provinces").default;

const names = provinces.map((p) => p.name);
console.log(names);

const filtered = provinces.filter((p) => p.commName === "Castilla y León");
console.log(filtered);
```
