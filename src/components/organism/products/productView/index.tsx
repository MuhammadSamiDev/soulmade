import { CloseOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import RightSide from "./rightSide";
import LeftSide from "./leftSide";
import { useProductDetail } from "../../../../hooks/generalHooks";

const ProductView = () => {
  const { isProductDetail, setIsProductDetail } = useProductDetail();
  return (
    <Card>
      <Row className="justify-between items-center mb-3">
        <Col>
          <div className="font-bold text-xl">{isProductDetail?.title}</div>
        </Col>
        <Col>
          <div
            className="cursor-pointer"
            onClick={() => setIsProductDetail(null)}
          >
            <CloseOutlined />
          </div>
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        <LeftSide />
        <RightSide />
      </Row>
    </Card>
  );
};

export default ProductView;
