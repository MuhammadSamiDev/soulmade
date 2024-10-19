import { QuestionCircleOutlined, ShoppingCartOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { BagOutlined, ContactOutlined } from "../../../icon";

export const sideBarItems = [
    { key: "1", icon: <UserOutlined style={{fontSize:"20px"}}/> },
    { key: "2", icon: <ShoppingCartOutlined style={{fontSize:"20px"}}/> },
  ];
  export const sideBarItems2 = [
    { key: "3", icon: <BagOutlined />, label: "Shop" },
    { key: "4", icon: <SmileOutlined />, label: "About Us" },
    { key: "5", icon: <ContactOutlined />, label: "Contact Us" },
    { key: "6", icon: <QuestionCircleOutlined />, label: "FAQ" },
  ];
  