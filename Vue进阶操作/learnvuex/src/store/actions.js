// store 中的 actions
export default {
  // 普通方式的actions方法提交 mutation的方法
  // actions中的方法接收context参数
  // context：上下文
  aUpdateInfo(context, payload) {
    // 用setTimeout模拟异步任务，并且在异步任务中提交 changeDateInfo 方法
    setTimeout(() => {
      context.commit("changeDateInfo");
      console.log(payload.message);
      payload.success();
    }, 1000);
  },
  // actions里面的函数还可以返回 promise 对象，
  bUpdateInfo(context, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        context.commit("changeDateInfo");
        console.log(payload);
        resolve("promise返回成功");
      }, 1000);
    });
  },
};
