// 先把所有的工具函数导出的模块在这里导入
// 然后再统一导出

import { http } from "./http";

import { setToken, getToken, removeToken } from "./token";

export { http, setToken, getToken, removeToken };

// 导入的实例写法
// import {http} from '@/utils'
