import { Star } from "lucide-react";
import { IMAGE_BASE_URL } from "../../../utils/constants";
function StarRating(props) {
  const { rating } = props;
  const maxStars = 5;
  return (
    <div className="flex gap-1">
      {[...Array(maxStars)].map((_, index) => {
        return (
          <Star
            key={index}
            size={20}
            className={
              index < rating
                ? "fill-green-600 stroke-none"
                : "fill-gray-300 stroke-none"
            }
          />
        );
      })}
    </div>
  );
}

function SingleReviews(props) {
  const { item } = props;

  return (
    <div className="shadow-sm p-3 md:p-4 rounded-md bg-white">
      <StarRating rating={item?.rating} />
      <h4 className="text-gray-600 font-medium mt-2">{item?.title}</h4>
      <p className="text-sm text-gray-500 mt-1">{item?.review}</p>
      <div className="grid grid-cols-3 gap-1 sm:gap-4 mt-3">
        {item?.review_images?.map((res) => (
          <img
            className="h-14 object-cover rounded-sm"
            src={IMAGE_BASE_URL + res}
            width={100}
            height={100}
            alt=""
          />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        <h4 className="text-sm font-medium text-gray-600 truncate w-1/2">
          {item?.user_name}
        </h4>
        <h4 className="text-sm font-medium text-gray-600 w-1/2">
          {item?.created_at}
        </h4>
      </div>
    </div>
  );
}

export default SingleReviews;
