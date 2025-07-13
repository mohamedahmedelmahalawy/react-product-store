import { Fragment } from "react";
import { range } from "../../funcs/funcs";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

import { useCart } from "../../context/cartcontext/useCart";
import { useNavigate } from "react-router-dom";

function Product({
  thumbnail,
  title,
  stock,
  description,
  rating,
  id,
  product,
}) {
  const { handleIncrease, handleDecrease, itemCount } = useCart();
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/products/${id}`);
  };

  // console.log(cart);
  return (
    <li
      className="flex flex-col gap-4 bg-yellow-200 hover:bg-yellow-100 p-8 rounded-2xl max-w-80 text-[#030712] transition-colors duration-200"
      onClick={handleDetails}
    >
      <div className="flex flex-col gap-4">
        <figure className="w-full">
          <img src={thumbnail} alt={title} className="w-full" />
        </figure>
        <div className="flex justify-between items-start w-full font-bold items">
          <div className="flex flex-col gap-2">
            <h3>{title}</h3>
            <ul className="flex gap-1">
              {range(Math.round(rating)).map((s) => {
                return (
                  <li key={s}>
                    <FaStar />
                  </li>
                );
              })}
              {range(Math.round(5 - rating)).map((s) => {
                return (
                  <li key={s}>
                    <CiStar />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-1 min-w-[60px] text-center">
            <span className="bg-[#030712] px-4 py-2 rounded-2xl text-yellow-200">
              {stock}
            </span>
            <span className="text-red-800 text-sm">in stock</span>
          </div>
        </div>

        <p className="text-sm">{description}</p>
      </div>
      {itemCount(id) === 0 ? (
        <button
          className="bg-[#030712] hover:bg-green-950 mt-auto p-2 rounded-lg font-bold text-yellow-200 text-2xl transition-all duration-150"
          onClick={(e) => {
            e.stopPropagation();
            handleIncrease(product);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleIncrease(product);
            }}
            className="flex-grow-1 bg-[#030712] hover:bg-green-950 mt-auto p-2 rounded-lg font-bold text-yellow-200 text-2xl transition-all duration-150"
          >
            +
          </button>
          <h4 className="px-4 font-bold">{itemCount(id)}</h4>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDecrease(product);
            }}
            className="flex-grow-1 bg-[#030712] hover:bg-green-950 mt-auto p-2 rounded-lg font-bold text-yellow-200 text-2xl transition-all duration-150"
          >
            -
          </button>
        </div>
      )}
    </li>
  );
}

export default Product;
