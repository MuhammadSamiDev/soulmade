import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Sider from "antd/es/layout/Sider";
import { useSideBarActive } from "../../../hooks/generalHooks";
import CollapseSideBar from "./collapseSideBar";
import ActiveSideBar from "./activeSideBar";

const Sidebar = () => {
  const { sidebarActive, setSidebarActive } = useSideBarActive();
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={sidebarActive}
      className={`siderStyle ${
        !sidebarActive ? "!min-w-[300px]" : "!min-w-[80px]"
      }`}
    >
      {sidebarActive ? <CollapseSideBar />:<ActiveSideBar/>}
      <Button
        type="text"
        icon={sidebarActive ? <RightOutlined /> : <LeftOutlined />}
        onClick={() => setSidebarActive(!sidebarActive)}
        className="text-base w-[30px] h-[50px] absolute pl-[5px]"
        style={{
          top: 97,
          right: -20,
          background: "#075929",
          color: "#fff",
        }}
      />
    </Sider>
  );
};

export default Sidebar;
