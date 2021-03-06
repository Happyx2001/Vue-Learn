"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Vue的产品提示
_vue["default"].config.productionTip = false;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  } // render渲染：渲染 App 组件

}).$mount('#app');