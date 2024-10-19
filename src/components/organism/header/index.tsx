import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Header } from "antd/es/layout/layout";

const ShopHeader = () => {
  return (
    <Header className="bg-[#f5f5f5] mx-4 p-6" id="top">
      <div className="flex items-center gap-10 justify-between">
        <div className="text-2xl flex gap-5">
          <img src="assets/back.png" alt="" />
          Shop
        </div>
        <Input
          addonBefore={
            <div className="bg-white">
              <SearchOutlined />
            </div>
          }
          placeholder="Search Item"
          className="searchBar"
        />
      </div>
    </Header>
  );
};

export default ShopHeader;
