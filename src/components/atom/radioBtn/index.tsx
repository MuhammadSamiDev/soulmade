import { Radio } from "antd";
import { RadioInterface } from "../../../types/interface";
import { ReactNode } from "react";

interface Props {
  data: [] | RadioInterface[];
  heading?: string | ReactNode;
  headingClassName?: string;
}
const RadioBtns = ({ data, heading, headingClassName }: Props) => {
  return (
    <div>
      {heading && (
        <div className={`font-bold text-md ${headingClassName}`}>
          {heading}
        </div>
      )}
      <Radio.Group defaultValue={data[0]?.value}>
        {data?.map((item: RadioInterface, index: number) => {
          return (
            <Radio.Button value={item?.value} key={index}>
              {item?.label}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </div>
  );
};

export default RadioBtns;
