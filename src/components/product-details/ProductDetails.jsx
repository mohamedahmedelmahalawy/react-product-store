import { useParams } from "react-router-dom";
import useFetchProduct from "../../customhooks/useFetchProduct";
import { range } from "../../funcs/funcs";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function ProductDetails() {
  const params = useParams();
  const { product } = useFetchProduct(params.id);

  const { thumbnail, title, stock, description, rating } = product;
  return (
    <div className="flex flex-col gap-4 bg-yellow-200 hover:bg-yellow-100 p-8 rounded-2xl text-[#030712] transition-colors duration-200">
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
      <button className="bg-[#030712] hover:bg-green-950 mt-auto p-2 rounded-lg font-bold text-yellow-200 text-2xl transition-all duration-150">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
