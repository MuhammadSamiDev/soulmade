/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react";

export const ProductDetail = createContext<any>({});

export const useProductDetail = () => {
  return useContext(ProductDetail);
};

export const SideBarActive=createContext<any>(true)
export const useSideBarActive=()=>{
  return useContext(SideBarActive);
}