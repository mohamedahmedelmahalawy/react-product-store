import { useParams } from "react-router-dom";
import useFetchProduct from "../../customhooks/useFetchProduct";
import { range } from "../../funcs/funcs";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useCart } from "../../context/cartcontext/useCart";

function ProductDetails() {
  const { handleIncrease, handleDecrease, itemCount } = useCart();
  const params = useParams();
  const { product } = useFetchProduct(params.id);

  const { thumbnail, title, stock, description, rating } = product;
  return (
    <div className="flex md:flex-row flex-col gap-4 bg-[#030712] p-8 text-yellow-200 transition-colors duration-200">
      <figure className="flex-5/12">
        <img src={thumbnail} alt={title} className="w-full" />
      </figure>
      <div className="flex-7/12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-between items-start gap-8 w-full font-bold items">
            <div className="flex flex-col gap-8 pt-10">
              <h3 className="text-6xl">{title}</h3>
              <ul className="flex gap-1 text-4xl">
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
            <div className="flex items-center gap-1 min-w-[60px] text-center">
              <span className="bg-[#030712] px-4 py-2 rounded-2xl text-yellow-200 text-2xl">
                {stock}
              </span>
              <span className="text-white text-2xl">in stock</span>
            </div>
          </div>

          <p className="text-sm">{description}</p>
        </div>
        <div className="mt-8">
          {itemCount(product.id) === 0 ? (
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
              <h4 className="px-4 font-bold">{itemCount(product.id)}</h4>
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
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
