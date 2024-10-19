import { PlusOutlined } from "@ant-design/icons";
import { Card, Col, Row, Skeleton} from "antd";
import { ProductsProps } from "../../../types/interface";
import { useProductDetail } from "../../../hooks/generalHooks";
import { scrollTo } from "../../../function";
import { Suspense } from "react";

interface Props {
  data: ProductsProps;
}

const ProductCard = ({ data }: Props) => {
  const { setIsProductDetail } = useProductDetail();

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col lg={8} md={8} sm={8} xs={24}>
          <div className="relative w-full">
            <Suspense fallback={<Skeleton.Image/>}>
              <img
                src={data?.img}
                alt=""
                className="w-full h-[123.25px] rounded-lg object-cover"
              />
            </Suspense>
            {data?.badge && (
              <span className="px-2 bg-[#FFB319] text-white absolute top-2 left-2 text-[9px] uppercase rounded-[4px]">
                {data?.badge}
              </span>
            )}
          </div>
        </Col>
        <Col
          lg={16}
          md={16}
          sm={16}
          xs={24}
          className="flex justify-between flex-col"
        >
          <div className="flex flex-col justify-between">
            <h1
              className="font-bold text-base cursor-pointer hover:underline"
              onClick={() => {
                setIsProductDetail(data);
                setTimeout(() => scrollTo("top"), 200);
              }}
            >
              {data?.title}
            </h1>
            <p className="text-xs desc">{data?.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#075929] font-bold text-base">
              {data?.price}
            </div>
            <div className="bg-[#075929] text-[#fff] w-8 h-8 text-xl text-center rounded-lg">
              <PlusOutlined />
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
