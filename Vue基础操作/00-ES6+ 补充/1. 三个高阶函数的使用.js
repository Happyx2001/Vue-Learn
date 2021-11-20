// 三个高阶函数的使用 filter、map、reduce

// 实现：
let Arr = [10, 20, 30, 50, 110, 210];
// 需求1：将数组中小于100的数去除
// 需求2：再将数组中的数都乘以2
// 需求3：再将数组中使用的数相加

// 一、普通函数式写法(不使用高阶函数)
{
    // 1.
    let new1Arr = [];
    for (let n of Arr) {
        if (n < 100) {
            new1Arr.push(n)
        }
    }
    console.log(new1Arr);
    // 2.
    let new2Arr = [];
    for (let n of new1Arr) {
        new2Arr.push(n * 2);
    }
    console.log(new2Arr);
    // 3. 
    let new3Arr = 0;
    for (let n of new2Arr) {
        new3Arr += n;
    }
    console.log(new3Arr);
}

 
// 二、高阶函数式写法（函数式编程）
{
    console.log('');
    // 1. filter的用法
    // filter()的括号里面是一个回调函数，是一种判断条件函数，返回的值是布尔值。
    // 调用的数组中每一个值，都会在这个函数中进行一次判断。
    // 若判断结果为true，则保留这个值。
    // 若判断结果为false，则去除这个值。
    // 遍历完数组之后，保留下来值会生成一个新的数组。
    let new1Arr = Arr.filter(function (n) {
        // 这里的n接收的就是数组中的每一个值
        return n < 100;
        // 如果这个值小于100, 则返回给新数组
    })
    console.log(new1Arr);

    // 2.map的用法
    // map()的括号里面是一个函数
    // map() 方法返回一个新数组
    // 数组中的元素为原始数组元素调用函数处理后的值。
    let new2Arr = new1Arr.map(function (n) {
        // 这里的n接收的就是数组中的每一个值
        return n * 2;
        // 将每一个值乘以2, 再返回给新数组
    })
    console.log(new2Arr);

    // 3.reduce的用法
    // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    let new3Arr = new2Arr.reduce(function (preValue, n) {
        // preValue是初始值 和 每次计算结束之后的返回值
        // n是数组的当前元素(从第一个开始，依次往后)
        return preValue + n;
        // 这一次的 preValue+n => 下一次的 preValue
    }, 0)
    // 这个0是初始值，因此函数第一次执行时 preValue 的值为0
    console.log(new3Arr);
}


// 三、简洁式写法(运用高阶函数)
{
    console.log('');
    let newArr = Arr.filter(function (n) {
        return n < 100;
    }).map(function (n) {
        return n * 2;
    }).reduce(function (preValue, n) {
        return preValue + n;
    }, 0)
    console.log(newArr);
}


// 四、超级简洁式写法(高阶函数结合箭头函数)
{
    console.log('');
    let newArr = Arr.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n);
    console.log(newArr);
}