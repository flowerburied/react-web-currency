import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import "antd/dist/antd.min.css";

// 修改后的ReactDom方法
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // StrictMode 严格模式
);
