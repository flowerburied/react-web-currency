// 把所有的模块统一处理
// 导出一个统一的方法useStore
import React from "react";
import LoginStore from "./login.Store";
import UserStore from "./user.Store";
class RootStore {
  constructor() {
    this.loginStore = new LoginStore();
    this.userStore = new UserStore();
    //...
  }
}

// 实例化跟
// 导出useStore context

const rootStore = new RootStore();
const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export { useStore };
