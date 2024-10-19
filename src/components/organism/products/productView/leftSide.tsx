import { ShareAltOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import ReadMore from "./readMore";
import { useProductDetail } from "../../../../hooks/generalHooks";

const LeftSide = () => {
  const { isProductDetail } = useProductDetail();
  return (
    <Col lg={12} sm={24}>
      <div className="relative">
        <img
          src={isProductDetail?.img}
          alt=""
          className="h-[255px] object-cover rounded-lg w-full"
        />
        {isProductDetail?.badge&&<span className="px-2 py-1 bg-[#FFB319] text-white absolute font-bold top-3 right-4 text-[10px] leading-4 uppercase rounded-[4px]">
          {isProductDetail?.badge}
        </span>}
      </div>
      <Row className="justify-between items-center mt-3 mb-3">
        <Col>
          <div className="font-bold text-md">Description</div>
        </Col>
        <Col>
          <span className="px-2 py-1 bg-[#F5F5F5] font-bold text-[10px] uppercase rounded-[4px] cursor-pointer">
            Share <ShareAltOutlined />
          </span>
        </Col>
      </Row>
      <p
        className="text-xs text-[#595D62] font-normal mb-3"
        dangerouslySetInnerHTML={{
          __html: isProductDetail?.description?.length > 452 ? isProductDetail?.description?.slice(0, 452) + "..." : isProductDetail?.description,
        }}
      />
      {isProductDetail?.description?.length > 400 && <ReadMore desc={isProductDetail?.description} title={isProductDetail?.title} />}
      <p className="text-xs font-normal italic text-[#075929] cursor-pointer mb-3">
        *All our prices are inclusive of GST
      </p>
    </Col>
  );
};

export default LeftSide;
