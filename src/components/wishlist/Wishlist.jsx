import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../store/wishlistSlice.js";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist({ id: productId }));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="mb-4 font-bold text-2xl">Your Wishlist</h2>
        <p className="text-gray-600">Your wishlist is empty!</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="mb-6 font-bold text-2xl">
        Your Wishlist ({wishlistItems.length} items)
      </h2>

      <div className="flex flex-col gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-8 bg-white shadow-sm hover:shadow-md p-4 border rounded-lg transition-shadow"
          >
            <figure>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="mb-4 rounded w-full object-cover"
              />
            </figure>
            <div className="flex flex-col">
              <div className="flex gap-4">
                <h3 className="mb-2 font-bold text-lg">{item.title}</h3>
                <span className="font-bold text-lg">${item.price}</span>
              </div>
              <p className="mb-4 text-gray-600 text-sm line-clamp-2">
                {item.description}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
