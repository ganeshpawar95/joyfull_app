import ProductImage1 from "../../../assets/images/products/1.jpg";
import ProductImage2 from "../../../assets/images/products/2.jpg";
import ProductImage3 from "../../../assets/images/products/3.jpg";
import ProductImage4 from "../../../assets/images/products/4.jpg";
import ProductImage5 from "../../../assets/images/products/5.jpg";

import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function ProductGrid() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <div className="py-4 px-0">
      <div className="grid sm:grid-cols-3 gap-2 md:gap-4">
        <div className="grid grid-cols-2 gap-2 md:gap-4 sm:block">
          <div>
            <NavLink to="/category/special_gift/">
              <img
                className="rounded-md h-[200px] md:h-[400px] sm:h-[340px] w-full"
                src={ProductImage2}
                alt="product"
              />
            </NavLink>
          </div>
          <div className="sm:mt-4">
            <NavLink to="/">
              <img
                className="rounded-md h-[200px] md:h-[400px] sm:h-[340px] w-[800] w-full"
                src={ProductImage3}
                alt="product"
              />
            </NavLink>
          </div>
        </div>
        <div className={isMobile ? "order-2" : ""}>
          <NavLink to="/">
            <img
              className="h-full rounded-md"
              src={ProductImage1}
              alt="product"
            />
          </NavLink>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4 sm:block">
          <div>
            <NavLink to="/">
              <img
                className="rounded-md h-[200px] md:h-[400px] sm:h-[340px] w-full"
                src={ProductImage4}
                alt="product"
              />
            </NavLink>
          </div>
          <div className="sm:mt-4">
            <NavLink to="/">
              <img
                className="rounded-md h-[200px] md:h-[400px] sm:h-[340px] w-full"
                src={ProductImage5}
                alt="product"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
