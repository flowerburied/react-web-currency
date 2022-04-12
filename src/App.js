// import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
function App() {
  return (
    //路由配置
    <BrowserRouter>
      <div>
        {/* 出口 */}
        <Routes>
          {/* 创建路由path和组件对应关系 */}
          <Route path="/" element={<Layout></Layout>}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
