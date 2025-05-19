import { IMAGE_BASE_URL } from "../../../utils/constants";

import { NavLink } from "react-router-dom";
import { Image } from "antd";
import { formatSlug } from "../../../utils/helpers";

function SingleProductCard({ product }) {
  const {
    id,
    product_name,
    thumbnail,
    price,
    offer_price,
    product_trading_type,
  } = product;
  console.log("product_trading_type", product_trading_type);
  return (
    <NavLink to={`/products/details/${id}`}>
      <div className="bg-white h-full rounded-md overflow-hidden shadow-sm">
        <div className="relative">
          <Image
            src={IMAGE_BASE_URL + thumbnail}
            width={400}
            height={400}
            className="ant_imgs"
          />
          {product_trading_type?.length != 0 && (
            <div className="w-max bg-red-500 text-white font-semibold text-sm px-3 py-2 rounded-lg absolute top-2 left-2">
              {product_trading_type}
            </div>
          )}
        </div>
        <div className="p-2 md:p-4 text-center">
          <h4 className="text-sm md:text-lg font-medium text-gray-700">
            {product_name}
          </h4>
          <h5 className="text-base font-medium">
            ₹ {offer_price}{" "}
            <span className="text-red-500 line-through ml-1 text-sm">
              ₹ {price}
            </span>
          </h5>
        </div>
      </div>
    </NavLink>
  );
}

export default SingleProductCard;
