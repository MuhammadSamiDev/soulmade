import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <div className="font-bold text-md mb-2">Quantity</div>
      <div className="flex items-center text-[#075929] text-lg font-bold gap-5">
        <button
          className={`border-[#075929] border-2 text-[#075929] w-8 h-8 text-xl rounded-lg ${
            quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={quantity === 1}
          onClick={handleDecrement}
        >
          <MinusOutlined />
        </button>
        <div>{quantity}</div>
        <button
          className="bg-[#075929] text-[#fff] border-[#075929] border-2 w-8 h-8 text-xl rounded-lg cursor-pointer"
          onClick={() => setQuantity(quantity + 1)}
        >
          <PlusOutlined />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
