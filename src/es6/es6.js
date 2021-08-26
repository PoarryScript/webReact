var funcs = [];

/* for (let index = 0; index < 10; index++) {
    funcs.push(function () { console.log(index) });

}

funcs.forEach(function (func) {
    func();//正常输出0-9 相比使用立即调用函数表达式和使用var来说更简洁，在for of 或者for in 都同样适用
})

for (var index = 0; index < 10; index++) {
    funcs.push(function () { console.log(index) });
}

funcs.forEach(function (func) {
    func();//输出数值10 十次
}) */

for (var index = 0; index < 10; index++) {
    funcs.push(function (index) {
        return function () {
            console.log(index);
        }
    }(index));
    //使用立即调用函数表达式 以便在每次迭代中强制创建变量的一个新副本
}

funcs.forEach(function (func) {
    func();//输出数值10 十次
})


var funcarray = [],
    object = {
        a: true,
        b: true,
        c: true,
    };
for (let key in object) {
    funcarray.push(function () {
        console.log(key);
    })
}


funcarray.forEach(function (func) {
    func(); //依次输出abc
})


var text = "we";

console.log("length=" + text.length);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charCodeAt(-1));
console.log(text.charCodeAt(0));
console.log(text.charCodeAt(1));
console.log(text.codePointAt(1));
//codePointAt 和charCodeAt 返回值相同
//识别字符串的方法
let testa = "sadhasdhsadaf";
let testAll = "qw312sadhasdhsadafase211";
console.log(testAll.includes(testa))//给定文本是否存在字符串任意位置
console.log(testAll.startsWith(testa))//给定文本是否存在字符串在开始位置
console.log(testAll.endsWith(testa))//给定文本是否存在字符串在结束位置

console.log(testAll.includes(testa, 34))//给定文本是否存在字符串任意位置 第二个参数表示开始的位置，减少了搜索字符串的次数
console.log(testAll.startsWith(testa, 5))//给定文本是否存在字符串在开始位置
console.log(testAll.endsWith(testa, 6))//给定文本是否存在字符串在结束位置


console.log('xyz'.repeat(4))//参数代表字符串重复次数，返回初始字符串重复指定次数之后的新字符串


let message = `hwllo world!`;
console.log(message);
console.log(typeof message);

var multMessage = "Multiline \n\ String";
console.log(multMessage)
var multMessage = "Multiline \n String";
console.log(multMessage);

let flag = 0;
opyions = { flag: 3 }
var res = opyions.flag || 900
var res = (typeof opyions.flag !== "undefined") ? opyions.flag : 900
var testR = true && (false || 30)
console.log(testR)
console.log("----" + res);


let value = 5;
function getValue() {
    return value++;
}
function add(first, second = getValue()) {
    return first + second;
}

console.log(add(1, 1))
console.log(add(1))
console.log(add(1))

//箭头函数
var reflect = value => value
console.log('===>' + reflect(2));

var sum = (num1, num2) => num1 + num2;
console.log(sum(3, 2))


var getName = () => "RTeasds";
console.log(getName())

var doNothing = () => { };

var getTempItem = id => ({ id: id, name: "Temp" });
console.log(getTempItem(1324123123))

let personT = ((name) => {
    return {
        getName: function () {
            return name;
        }
    };
})("Nicholas");

let person = function (name) {
    return {
        getName: function () {
            return name;
        }
    };
}("TestName");
console.log(personT.getName())
console.log(person.getName())


var PageHandler = {

    id: "123456",
    init: function () {
        document.addEventListener("click", function (event) {
            this.doSomethings(event.type);
        }, false);
    },

    doSomethings: function (type) {
        console.log("Handling " + type + " for " + this.id);
    }
};

console.log(PageHandler)

var comparator = (a,b)=>a-b;

console.log(typeof comparator)