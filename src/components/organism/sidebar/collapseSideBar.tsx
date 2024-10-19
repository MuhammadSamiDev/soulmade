import { Menu } from "antd";
import { useSideBarActive } from "../../../hooks/generalHooks";
import { sideBarItems, sideBarItems2 } from "./items";

const CollapseSideBar = () => {
  const { sidebarActive } = useSideBarActive();
  return (
    <div className="transition-all duration-500 ease-in-out">
      <div className="flex justify-center w-full pt-10 mb-2">
        <img src="assets/logo.png" alt="" className="rounded-full w-10" />
      </div>
      <div className="sideBarItems1">
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          inlineCollapsed={sidebarActive}
          items={sideBarItems}
        />
      </div>
      <div className="sideBarItems2">
        <Menu
          defaultSelectedKeys={["3"]}
          mode="inline"
          inlineCollapsed={sidebarActive}
          items={sideBarItems2}
          className="mt-[50%]"
        />
      </div>
    </div>
  );
};

export default CollapseSideBar;
