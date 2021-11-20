const app = new Vue({
    el: '#app',
    data: {
        books:[{
            id:101,
            bookname: '《book1》',
            date: '2001-1',
            price: 73,
            count: 1
        },
        {
            id:102,
            bookname: '《book2》',
            date: '2004-5',
            price: 54,
            count: 1
        },
        {
            id:103,
            bookname: '《book3》',
            date: '2012-5',
            price: 81,
            count: 1
        },
        {
            id:104,
            bookname: '《book4》',
            date: '2009-7',
            price: 69,
            count: 1
        }]
    },
    methods: {
        down(i) {
            this.books[i].count--
        },
        up(i) {
            this.books[i].count++
        },
        // 移除模块
        clearBtn(i) {
            this.books.splice(i, 1)
        }
    },
    computed: {
        // 计算总价格
        totalPrice() {
            // 1. 普通函数写法：
            // let allPrice = 0;
            // for(let i =0; i<this.books.length; i++) {
            //     allPrice += this.books[i].price * this.books[i].count
            // }
            // return allPrice

            // 2.1 for of写法
            // let allPrice = 0;
            // for(let n of this.books) {
            //     allPrice += n.price * n.count
            // }
            // return allPrice

            // 2.2 for in写法
            // let allPrice = 0;
            // for(let n in this.books) {
            //     const book = this.books[n];
            //     allPrice += book.price * book.count;
            // }
            // return allPrice

            // 3. 高阶函数 reduce 写法：
            return this.books.reduce(function(preValue, book){
                return preValue + book.price * book.count
            },0)
        }
    },
    // 过滤器函数
    filters: {
        showPrice(price) {
            // .toFixed() 把数值四舍五入为指定小数位数的数字
            return '￥' + price.toFixed(2)
        }
    }
});