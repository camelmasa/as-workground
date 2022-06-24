import "wasi";
import { Console } from "as-wasi/assembly";
import { JSON } from "assemblyscript-json/assembly"; 

const input = Console.readAll();
const jsonObj = <JSON.Obj>(JSON.parse(input));
const worldOrNull = jsonObj.getString("hello"); 
const v = worldOrNull !== null ? worldOrNull!.valueOf() : ""

Console.log(`{"test":"${v}"}`);