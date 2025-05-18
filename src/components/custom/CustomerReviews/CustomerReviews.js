import SingleReviews from "./SingleReviews";
import { Button } from "../../ui/button";
import { useState } from "react";

function CustomerReviews({ results = [] }) {
  const [is_show_more, set_is_show_more] = useState(false);
  // Show only 4 products when is_show_more is false
  const displayedProducts = is_show_more ? results : results?.slice(0, 5);

  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl md:text-3xl font-semibold">Customer Reviews</h3>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 md:gap-5 mt-3 md:mt-5">
        {displayedProducts.map((res) => (
          <SingleReviews item={res} />
        ))}
      </div>
      {/* Show More / Show Less Button */}
      {results?.length > 5 && (
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

export default CustomerReviews;
