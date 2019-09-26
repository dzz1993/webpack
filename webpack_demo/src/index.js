//项目的入口文件
//import _ from "lodash";
let _ = require("lodash");
import './css/index.css';
import './css/new.scss';

//简单demo，使用一下lodash的join方法
function createElement() {
    let str = _.join(["dzz","is",'so',"good"]," ");
    console.log(str);
}
//写一个es6 class
class Animal{
    constructor(name,color){
        this.name=name;
        this.color = color;
    }
    //static type = "animal";//这个才是真正高级的语法，没有babel处理不了
    getAnimal(){
        console.log("name is "+this.name+" ,color is "+this.color+" type is"+type);
    }
}
let whiteDog = new Animal('dog','white');
whiteDog.getAnimal();
createElement();
console.log(222);
