import { Layout, Menu, Popconfirm, message } from "antd";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { useStore } from "@/store";
import { useEffect } from "react";

const { Header, Sider } = Layout;
const GeekLayout = () => {
  // console.log("应该重新高亮了");
  const { pathname } = useLocation();

  const { userStore, loginStore } = useStore();

  useEffect(() => {
    userStore.getUserInfo();
  }, [userStore]);

  const navigate = useNavigate();
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
    loginStore.loginOut();
    navigate("/login");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm
              title="是否确认退出？"
              onConfirm={confirm}
              onCancel={cancel}
              okText="退出"
              cancelText="取消"
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          {/* 高亮原理：defaultSelectedKeys === item key */}
          {/* 获取当前激活的path路径？ */}
          {/* 
             defaultSelectedKeys: 初始化渲染的时候生效一次
             selectedKeys: 每次有值更新时都会重新渲染视图
          */}
          <Menu
            mode="inline"
            theme="dark"
            style={{ height: "100%", borderRight: 0 }}
            defaultSelectedKeys={[pathname]}
          >
            <Menu.Item icon={<HomeOutlined />} key="/">
              <Link to="/">数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/article">
              <Link to="/article">内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/publish">
              <Link to="/publish"> 发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default observer(GeekLayout);
