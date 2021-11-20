# Vuex 的概念：

    Vuex是一个专为Vue.js应用程序开发的 “状态管理模式”。

    采用 “集中式存储管理” 应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

# 状态管理、集中式存储管理：

    简单来说，就是将需要多个组件共享的变量全部存储在一个对象里面，然后将这个对象放在顶层的Vue实例中，让其他组件可以调用。

    Vuex就是 响应式 的 组件状态共享插件

# Vuex 的核心概念：

    State：保存公共对象
        State是单一状态树（一个项目中只需要一个 store 对象，项目全部共享的数据都存储于此）

    Getters：保存对公共数据进行操作的函数
        如果State中的数据需要先进行一些计算再使用, 则应该在getters中设置函数对其进行操作

    Mutation：保存公共方法，“同步方法”(Vuex中的store状态的更新唯一方式: 提交mutation)
        重点：只能在mutation中对state中的对象、数据、属性进行修改！！！

        Mutation 有两种提交风格：
        1. 普通提交风格：提交的参数就是count本身
        this.$store.commit("incrementCount", count);

        2. 特殊提交风格：提交的参数是一个包含了 type 和 count 的参数对象
        this.$store.commit({
            type: "decrementCount",
            count,
        });

        Mutation的类型常量：

    Action：actions类似于mutation，是用来替代mutation进行 异步操作的。例如：网络请求

    Module：store的模块
        当应用变得复杂的时候，store对象就有可能变得相对臃肿，为了解决这个问题，Vuex运行我们将store分割成模块（Module），而每个模块拥有自己的state、mutations、actions、getters等

# Vuex 数据的响应式原理：

    响应式前提：提前在store中初始化好所需的属性。

    Vuex state中的数据(属性)都会被加入到响应式系统中，而响应式系统会监听watch()数据(属性)的变化。当数据(属性)发生变化时，会通知所以界面中用到该属性的地方，让界面发生刷新。

    没有前提的情况下，添加、删除响应式属性的方法：（在mutations中进行）
      Vue.set(state.目标属性, 属性名, 属性值);
      Vue.delete(state.目标属性, 属性名);

# Vuex-store 的文件目录组织

    随着项目需求的增加，store中的代码会越来越多，导致观感不好而且不容易维护。
    因此，可以将store中的各个核心分割成不同的文件。
    将文件导入到index.js中即可
