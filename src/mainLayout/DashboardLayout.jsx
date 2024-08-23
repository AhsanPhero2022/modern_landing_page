import { Layout, Menu } from "antd";
import { brainwave } from "../assets";
import { Link, NavLink, Outlet } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

const items = [
  {
    key: 4,
    label: <NavLink to="/dashboard">Profile</NavLink>,
  },

  {
    key: 5,
    label: <NavLink to="/dashboard/dashboard">Dashboard</NavLink>,
  },
];

const DashboardLayout = () => {
  return (
    <Layout className="min-h-screen ">
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className=" mx-auto my-5 ">
          <Link to="/">
            <img src={brainwave} alt="" />
          </Link>
        </div>
        <Menu
          theme="dark"
          className="px-2  "
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Content>
          <div
            style={{
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer className="text-center bg-n-8 text-n-1">
          Charity website ©{new Date().getFullYear()} Created by Sharif
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
