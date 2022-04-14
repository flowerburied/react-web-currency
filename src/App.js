import "./App.css";

import {unstable_HistoryRouter as HistoryRouter, Route, Routes } from "react-router-dom";
import { history } from "./utils/history";

import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

import AuthComponent from "./components/AuthComponent";
// import { Button } from "antd";
import Article from "./pages/Article";
import Public from "./pages/Publish";
import Home from "./pages/Home";

function App() {
  return (
    //路由配置
    <HistoryRouter history={history}>
      <div className="App">
        {/* <Button type="primary">Button</Button> */}
        {/* 出口 */}
        <Routes>
          {/* 创建路由path和组件对应关系 */}
          {/* layout需要鉴权处理 */}
          <Route
            path="/"
            element={
              <AuthComponent>
                <Layout></Layout>
              </AuthComponent>
            }
          >
            <Route index element={<Home />}></Route>
            <Route path="article" element={<Article />}></Route>
            <Route path="publish" element={<Public />}></Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
