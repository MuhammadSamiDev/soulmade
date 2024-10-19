import { Fragment } from "react/jsx-runtime";
import { products } from "../../../projectData";
import { ProductsProps } from "../../../types/interface";
import ProductCard from "../../organism/products/productCard";
import ProductView from "../../organism/products/productView";
import { ProductDetail } from "../../../hooks/generalHooks";
import { useState } from "react";

const Products = () => {
  const [isProductDetail,setIsProductDetail]=useState()
  return (
    <ProductDetail.Provider value={{isProductDetail,setIsProductDetail}}>
      {isProductDetail&&<div className="mb-4" id="view">
        <ProductView />
      </div>}
      <div className="gridWrapper">
        {products?.map((item: ProductsProps) => {
          return (
            <Fragment key={item?.key}>
              <ProductCard data={item} />
            </Fragment>
          );
        })}
      </div>
    </ProductDetail.Provider>
  );
};

export default Products;
