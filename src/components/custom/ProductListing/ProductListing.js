import SingleProductCard from "./SingleProductCard";
import { Button } from "../../ui/button";
import { useEffect, useRef, useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProductListing(props) {
  const { title, results } = props;
  const [is_show_more, set_is_show_more] = useState(false);
  // Show only 4 products when is_show_more is false
  const displayedProducts = is_show_more ? results : results?.slice(0, 4);

  // for animation
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".product-card");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [displayedProducts]);

  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
      </div>

      {displayedProducts?.length != 0 ? (
        <div
          ref={containerRef}
          className="grid grid-cols-2 gap-3 md:gap-5 mt-3 md:mt-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {displayedProducts?.map((product, index) => (
            <SingleProductCard
              key={index}
              product={product}
              className="product-card"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <MdOutlineErrorOutline className="text-6xl mb-4 text-gray-400" />
          <h2 className="text-2xl font-semibold">No Data Found</h2>
          <p className="text-sm text-gray-400 mt-2">
            Try again later or check your filters.
          </p>
        </div>
      )}
      {/* Show More / Show Less Button */}
      {results?.length > 4 && (
        <div className="text-center mt-6">
          <Button
            className="w-full md:w-auto"
            onClick={() => set_is_show_more(!is_show_more)}
          >
            {is_show_more ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProductListing;
