## reactRouter默认状态下 并不支持在组件之外完成路由跳转

https://github.com/remix-run/react-router/issues/8264

import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

let history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      // The rest of your app
    </HistoryRouter>
  );
}

history.push("/foo");

来实现


## 封装自己 AuthRoute 路由鉴权高阶组件，实现未登录拦截，并跳转登录页面
AuthComponent.js
## 安装 mobx 和 mobx-react-lite

yarn add mobx mobx-react-lite

## 安装 axios

yarn add axios

## 修改 react18 报错

17 到 18 写法的变化
https://www.cnblogs.com/maxiaocang/p/16087320.html

严格模式
https://blog.csdn.net/qq_40314318/article/details/105209873
https://segmentfault.com/a/1190000040975322

## 安装 craco 能够配置@路径简化路径处理

yarn add -D @craco/craco
"scripts": {
"start": "craco start",
"build": "craco build",
"test": "craco test",
"eject": "react-scripts eject"
},
接管 package.json
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},

### @别名路径提示！！

vscode 的配置
jsconfig.json

## 安装 ante

yarn add antd
import 'antd/dist/antd.css'; 修改为
import 'antd/dist/antd.min.css';

## 安装 react-router-dom

yarn add react-router-dom

## 安装 sass 使用 scss

使用 sass 安装 sass yarn add sass
https://create-react-app.dev/docs/adding-a-sass-stylesheet

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
