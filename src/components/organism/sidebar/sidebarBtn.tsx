import { useState } from "react";
import { SideBarProps } from "../../../types/interface";

interface Props {
  data: SideBarProps[];
  activeKey?:string|number
}
const SidebarBtn = ({ data,activeKey }: Props) => {
    const [selectBtn,setSelectBtn]=useState(activeKey)
  return (
    <div className="flex flex-col gap-2">
      {data?.map((item: SideBarProps) => (
        <button className={`border-[1px] border-white rounded-lg py-2 px-6 w-52 transition-all duration-200 ease-in ${item?.key===selectBtn?"bg-white text-[#075929]":"text-white"}`} key={item?.key} onClick={()=>setSelectBtn(item?.key)}>
          {item?.icon} {item?.label}
        </button>
      ))}
    </div>
  );
};

export default SidebarBtn;
