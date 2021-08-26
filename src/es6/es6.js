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