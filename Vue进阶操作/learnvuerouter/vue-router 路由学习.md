# router-link 属性：

    1. to  用于指定跳转的路径
    2. tag  用于指定<router-link>之后要渲染成什么组件
    3. active-class：当<router-link>对应的路由匹配成功时，会自动给当前元素设置一个router-link-active的class，设置active-class可以修改默认的名称

# 动态路由：

    例如：用户界面，不同的用户名对应不同的路由路径，因此要使用动态路由

# 路由的懒加载：

    打包构建应用的时候，JS 包会变得非常大，会影响页面加载，将不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就能更加高效

    路由的懒加载做了什么：
    将路由对应的组件打包成一个个的 JS 代码块
    只有在这个路由被访问到的时候，才加载对应的组件

    路由懒加载应用方式：component: () => import('../views/name.vue')

# 路由的嵌套使用：（顾名思义，路由中的路由）

    步骤 1. 创建对应的子组件，并且在路由映射中配置对应的子路由
    步骤 2. 在组件内部使用<router-view>标签

# 路由的参数传递： params 和 query 形式

    1. params类型：  （动态路由配置方式）
        配置路由格式: /router/:id
        传递的方式: 在path后面跟上对应的值
        传递后形成的路径: /router/123、 /router/abc

    2. query形式：
        配置路由格式: /router，就是普通配置
        传递的方式: 对象中使用query的key作为传递方式
        传递后形成的路径: /router?id=123、 /router?id=abc

    PS1: URL的组成
        协议://主机:端口/路径?查询
        scheme://host:port/path?query#fragment

    PS2: $router 和 $route 的区别
        $router为VueRouter实例，想要导航到不同的URL，则使用$roueter.push方法

        $route为当前router跳转对象，里面可以获取name、path、query、params等

# 全局路由导航守卫

    （生命周期、钩子函数的使用）

# vue-router 中的 keep-alive

    1. keep-alive是Vue内置的一个组件，可以使被包含的组件保留状态，或者避免重新渲染
        属性：
        include - 字符串或正则表达式，只有匹配的组件会被缓存
        exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存

    2. router-view 也是一个组件，如果直接被包在keep-alive里面，所有路径匹配到的视图组件都会被缓存

    PS: Vue每次跳转组件的时候会将 跳转的路由创建、离开的路由销毁，组件的created函数和destroyed函数都会调用。使用keep-alive就能将组件保留状态（缓存），使得组件created函数只会调用一次，且组件不会销毁 destroyed函数不会被调用。
