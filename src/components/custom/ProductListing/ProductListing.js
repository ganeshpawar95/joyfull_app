import SingleProductCard from "./SingleProductCard";
import { Button } from "../../ui/button";
import { useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";

function ProductListing(props) {
  const { title, results } = props;
  const [is_show_more, set_is_show_more] = useState(false);
  // Show only 4 products when is_show_more is false
  const displayedProducts = is_show_more ? results : results?.slice(0, 4);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
      </div>

      {displayedProducts?.length != 0 ? (
        <div className="grid grid-cols-2 gap-3 md:gap-5 mt-3 md:mt-5 sm:grid-cols-2 lg:grid-cols-4">
          {displayedProducts?.map((product, index) => (
            <SingleProductCard key={index} product={product} />
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
