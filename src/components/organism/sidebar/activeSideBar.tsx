import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import SidebarBtn from "./sidebarBtn";
import { sideBarItems2 } from "./items";
import { Badge } from "antd";

const ActiveSideBar = () => {
  return (
    <div className="transition-all duration-200 ease-in-out">
      <div className="flex justify-end gap-5 px-5 mt-4 transition-all duration-200 ease-in-out">
        <UserOutlined style={{ fontSize: "18px", color: "#fff" }} />
        <Badge count="2" size="small" color="#FFB319">
          <ShoppingCartOutlined style={{ fontSize: "18px", color: "#fff" }} />
        </Badge>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="flex flex-col gap-5 justify-center items-center">
          <img
            src="assets/logo.png"
            alt=""
            className="w-[100px] h-[100px] rounded-full transition-all duration-200 ease-in-out"
          />
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Soulmade</h1>
            <p className="text-sm mt-3 w-52">
              Enjoy a hearty and wholesome meal at home anytime with our
              convenient selections.
            </p>
          </div>
          <SidebarBtn data={sideBarItems2} activeKey={"3"} />
        </div>
      </div>
    </div>
  );
};

export default ActiveSideBar;
