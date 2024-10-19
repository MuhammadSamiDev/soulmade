import {Fragment, useEffect, useState} from "react";
import { Tab } from "../../../types/interface";

interface Props {
  items: Tab[];
  defaultActiveKey?: number;
}
const CustomTabs = ({items, defaultActiveKey}: Props) => {
  const styleTab: React.CSSProperties = {
    margin: "10px 20px 10px 0",
    fontSize: "16px",
    minWidth: "max-content",
    cursor: "pointer",
    fontWeight:400,
    paddingBottom:16,
    borderBottom: "2px solid #f5f5f5",
  };
  const styleActive: React.CSSProperties = {
    color: "#075929",
    borderBottom: "2px solid #075929",
  };
  const [id, setId] = useState(defaultActiveKey);

  useEffect(()=>{setId(defaultActiveKey)},[defaultActiveKey])
  const activeData=items?.filter((item:Tab)=>item?.key===id)
  console.log(activeData,"hello")
  return (
    <>
      <div className="tab">
        {items?.map((item: Tab) => {
          return (
            <Fragment key={item?.key}>
              <div
                style={{...styleTab, ...(id === item?.key ? styleActive : "")}}
                onClick={() => setId(item?.key)}
              >
                {item?.label}
              </div>
            </Fragment>
          );
        })}
      </div>
      {activeData&&activeData[0]?.children&&activeData[0]?.children}
    </>
  );
};

export default CustomTabs;
