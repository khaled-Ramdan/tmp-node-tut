import { sayHi ,obj } from "./module.mjs";
import {readFile,writeFile} from "fs/promises";

sayHi('khaled')
console.log(obj)
const read = await readFile(new URL('value.txt',import.meta.url),'utf-8')
await writeFile(new URL("textfile.txt", import.meta.url),read,'utf-8');
console.log(read)



// using function form lodash which is intalled by npm
import _ from "lodash";
const items = [1, [2, [3, [4]]]];
const newitems = _.flattenDeep(items)
console.log(newitems);