import { tabProps } from "../../../projectData"
import CustomTabs from "../../organism/tabs"

const Shop = () => {
  return (
    <>
    <CustomTabs items={tabProps} defaultActiveKey={1}/>
    </>
  )
}

export default Shop