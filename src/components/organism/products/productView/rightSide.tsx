import { Col } from "antd";
import Quantity from "./quantity";
import RadioBtns from "../../../atom/radioBtn";
import ThemeBtn from "../../../atom/themeBtn";
import { useProductDetail } from "../../../../hooks/generalHooks";

const RightSide = () => {
  const { isProductDetail } = useProductDetail();
  return (
    <Col lg={12} sm={24} className="flex flex-col justify-between gap-4">
      <Quantity />
      {isProductDetail?.variation && (
        <RadioBtns data={isProductDetail?.variation} heading={"Variation"} />
      )}
      {isProductDetail?.addOns && (
        <RadioBtns data={isProductDetail?.addOns} heading={"Add-Ons"} />
      )}
      <div className="font-bold text-2xl text-[#075929]">{isProductDetail?.price}</div>
      <div className="text-center">
        <ThemeBtn label="Add To Cart" className="w-full py-3 text-base" />
      </div>
    </Col>
  );
};

export default RightSide;
