// 导入axios模块
import axios from "axios";

// axios实例和模块封装:
// axios本身就是返回一个promoise对象，

// 最终方法:
export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    // 设置axios的基本配置
    baseURL: "https://www.baidu.com/",
    timeout: 3000,
    headers: "",
  });

  // 2. axios的拦截器（修饰器）
  // 2.1  请求拦截
  instance.interceptors.request.use(
    (config) => {
      console.log("请求拦截成功");
      console.log(config);
      // 添加需求的操作
      // 比如 1. config中有一些信息不符合服务器的要求，则在这里面进行修改
      // 比如 2. 每次发送网络请求时，都希望在界面中显示一个请求的图标（loading）
      // 比如 3. 某些网络请求（比如登录（token）），必须携带一些特殊的信息
      return config;
    },
    // 拦截失败时的操作
    (err) => {
      console.log("请求拦截失败");
      console.log(err);
    }
  );

  // 2.2  响应拦截
  instance.interceptors.response.use(
    (res) => {
      console.log("响应拦截成功");
      console.log(res);
      //   添加需要的操作，同上
      //   拦截下响应返回的res时，只需要返回出去他的数据 data 就行了
      return res.data;
    },
    // 拦截失败时的操作
    (err) => {
      console.log("响应拦截失败");
      console.log(err);
    }
  );

  // 3. 发送真正的网络请求 （直接返回值，该返回值就是promise）
  return instance(config);
}

// 方案1 普通方式封装
// export function request(config, success, failure) {
//   // 1. 创建 axios 实例
//   const instance = axios.create({
//     baseURL: "",
//     timeout: 3000,
//   });

//   // 发送真正的网络请求
//   instance(config)
//     .then((res) => {
//       //  console.log(res);
//       success(res);
//     })
//     .catch((err) => {
//       //  console.log(err);
//       failure(err);
//     });
// }

// 方案2 promise封装 （多次一举法，因为axios本身就是返回的promise对象）
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //   1. 创建axios实例
//     const instance = axios.create({
//       baseURL: "",
//       timeout: 3000,
//     });

//     // 发送真正的网络请求
//     instance(config.baseConfig)
//       .then((res) => {
//         // console.log(res);
//         resolve(res);
//       })
//       .catch((err) => {
//         // console.log(err);
//         reject(err);
//       });
//   });
// }
