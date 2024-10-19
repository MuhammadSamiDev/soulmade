import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sidebar from "../components/organism/sidebar";
import ShopHeader from "../components/organism/header";
import Shop from "../components/pages/shop";
import { SideBarActive } from "../hooks/generalHooks";
import { useState } from "react";

const Template: React.FC = () => {
  const [sidebarActive, setSidebarActive] = useState();
  return (
    <SideBarActive.Provider value={{ sidebarActive, setSidebarActive }}>
      <Layout hasSider>
        <Sidebar />
        <Layout
          style={{ marginInlineStart: !sidebarActive ? 290 : 80 }}
          className="transition-all duration-200 ease-in-out"
        >
          <ShopHeader />
          <Content className="layout">
            <Shop />
          </Content>
        </Layout>
      </Layout>
    </SideBarActive.Provider>
  );
};

export default Template;
