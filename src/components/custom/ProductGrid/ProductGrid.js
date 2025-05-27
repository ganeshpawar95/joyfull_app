import ProductImage1 from "../../../assets/images/products/1.jpg";
import ProductImage2 from "../../../assets/images/products/2.jpg";
import ProductImage3 from "../../../assets/images/products/3.jpg";
import ProductImage4 from "../../../assets/images/products/4.jpg";
import ProductImage5 from "../../../assets/images/products/5.jpg";

import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProductGrid() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".product-grid-image");
      images.forEach((img, index) => {
        gsap.fromTo(
          img,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-4 px-0" ref={containerRef}>
      <div className="grid sm:grid-cols-3 gap-2 md:gap-4">
        <div className="grid grid-cols-2 gap-2 md:gap-4 sm:block">
          <div>
            <NavLink to="/category/special_gift/">
              <img
                className="rounded-md h-[200px] md:h-[400px] sm:h-[340px] w-full product-grid-image"
                src={ProductImage2}
                alt="product"
              />
            </NavLink>
          </div>
          <div className="sm:mt-4">
            <NavLink to="/">
              <img
                className="rounded-md h-[200px] md:h-[400px] sm:h-[340px] w-[800] w-full product-grid-image"
                src={ProductImage3}
                alt="product"
              />
            </NavLink>
          </div>
        </div>
        <div className={isMobile ? "order-2" : ""}>
          <NavLink to="/">
            <img
              className="h-full rounded-md product-grid-image"
              src={ProductImage1}
              alt="product"
            />
          </NavLink>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4 sm:block">
          <div>
            <NavLink to="/">
              <img
                className="rounded-md h-[200px] md:h-[400px] sm:h-[340px] w-full product-grid-image"
                src={ProductImage4}
                alt="product"
              />
            </NavLink>
          </div>
          <div className="sm:mt-4">
            <NavLink to="/">
              <img
                className="rounded-md h-[200px] md:h-[400px] sm:h-[340px] w-full product-grid-image"
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
