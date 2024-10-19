import { ReactNode } from "react";

export interface Tab {
  key: number;
  label: string | ReactNode;
  children?: ReactNode;
}

export interface SideBarProps{
  key:string|number,
  icon?:ReactNode,
  label?:string|ReactNode
}

export interface ProductsProps{
  img:string,
  key:number,
  title:string,
  description:string,
  price:string,
  badge?:string,
  variation?:RadioInterface[],
  addOns?:RadioInterface[]
}

export interface RadioInterface{
  value:string,
  label:string
}