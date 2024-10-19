import { Modal } from "antd";
import { Fragment, useState } from "react";
import ThemeBtn from "../../../atom/themeBtn";

const ReadMore = ({ desc, title }: { title: string; desc: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(false);
  return (
    <>
      <p
        className="text-xs font-medium text-[#075929] underline cursor-pointer mb-3"
        onClick={() => setIsOpen(true)}
      >
        Read More
      </p>
      <Modal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        title={<div className="font-bold text-xl">{title}</div>}
        footer={null}
        width={700}
      >
        <Fragment>
          <div className="font-bold text-sm">Description</div>
          <p
            className="text-sm text-[#595D62] font-normal mb-3"
            dangerouslySetInnerHTML={{
              __html: desc?.slice(452),
            }}
          />
          <div className="text-center"><ThemeBtn label="Back to Shop" onClick={onClick}/></div>
        </Fragment>
      </Modal>
    </>
  );
};

export default ReadMore;
