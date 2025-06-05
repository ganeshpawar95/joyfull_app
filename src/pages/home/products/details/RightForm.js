import {
  ShoppingBag,
  ShoppingCart,
  Star,
  StarHalf,
  Star as StarOutline,
} from "lucide-react";
import { getDiscount, getAverageRating } from "../../../../utils/helpers";
import React from "react";
import { DatePicker, Radio, Form } from "antd";

import { get_certificate_color, capitalizeFirstLetter } from "./helpers";
import DynamicForm from "./Dynamic_form";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating); // Full stars
  const hasHalfStar = rating % 1 !== 0; // Half star if decimal exists
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="text-yellow-400 flex">
      {/* Render Full Stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Star key={`full-${index}`} className="fill-current" size={20} />
        ))}

      {/* Render Half Star */}
      {hasHalfStar && <StarHalf className="fill-current" size={20} />}

      {/* Render Empty Stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <StarOutline
            key={`empty-${index}`}
            className="stroke-current"
            size={20}
          />
        ))}
    </div>
  );
}

function RightForm(props) {
  const { product_details } = props;
  const [date, setDate] = React.useState(null);
  return (
    <>
      <div>
        <h3 className="text-3xl font-semibold text-gray-800">
          {product_details?.product_name}
        </h3>
        <div className="mt-3 flex items-center gap-x-3">
          <StarRating
            rating={getAverageRating(product_details.product_ratings)}
          />
          <h4 className="text-gray-700 font-semibold text-base">
            {getAverageRating(product_details.product_ratings)}{" "}
            <span className="ml-2 text-gray-500 font-medium">
              {" "}
              {product_details.product_ratings.length} Reviews
            </span>
          </h4>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-medium text-gray-800">
            ₹{product_details?.price}
            <span className="text-base ml-2 line-through text-gray-400">
              ₹{product_details?.offer_price}
            </span>
            <span className="text-orange-500 ml-3 font-semibold text-base">
              (
              {getDiscount(
                product_details.offer_price,
                product_details.price
              ).toFixed(1)}
              % OFF)
            </span>
          </h3>
        </div>
      </div>
      {/* form part start */}
      <div className="mt-5">
        {/* single item */}
        {product_details?.certificate_colors.length != 0 && (
          <div>
            <h5>Select Certificate Color:</h5>
            <div className="flex gap-x-5"></div>

            <Form.Item
              name="certificate_color"
              rules={[
                {
                  required: true,
                  message: "Please select a certificate color!",
                },
              ]}
            >
              <Radio.Group
                className="selectRadioBoxCustom"
                options={get_certificate_color(
                  product_details?.certificate_colors,
                  product_details?.thumbnail
                )}
              />
            </Form.Item>
          </div>
        )}
        {product_details?.frame_colors.length != 0 && (
          <div className="mt-3">
            <h5>Select Frame Color:</h5>
            <div className="flex gap-x-5"></div>
            <Form.Item
              name="frame_color"
              rules={[
                { required: true, message: "Please select a frame color!" },
              ]}
            >
              <Radio.Group
                size="large"
                className="mt-2 buttonStyleRadio"
                buttonStyle="solid"
                optionType="button"
              >
                {product_details?.frame_colors.map((master) => (
                  <Radio.Button key={master.name} value={master.name}>
                    {capitalizeFirstLetter(master.name)}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
          </div>
        )}
        {product_details?.frame_size.length != 0 && (
          <div className="mt-3">
            <h5>Select Frame Size (INCH):</h5>
            <div className="flex gap-x-5"></div>
            <Form.Item
              name="frame_size"
              rules={[
                { required: true, message: "Please select a frame size!" },
              ]}
            >
              <Radio.Group
                size="large"
                className="mt-2 buttonStyleRadio"
                buttonStyle="solid"
              >
                {product_details?.frame_size.map((master) => (
                  <Radio.Button value={master.name}>
                    {capitalizeFirstLetter(master.name)}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
          </div>
        )}
        {product_details?.frame_thickness.length != 0 && (
          <div className="mt-3">
            <h5>Select Thickness:</h5>
            <div className="flex gap-x-5"></div>
            <Form.Item
              name="frame_thickness"
              rules={[
                { required: true, message: "Please select a frame thickness!" },
              ]}
            >
              <Radio.Group
                defaultValue="c"
                size="large"
                className="mt-2 buttonStyleRadio"
                buttonStyle="solid"
              >
                {product_details?.frame_thickness.map((master) => (
                  <Radio.Button value={master.name}>
                    {capitalizeFirstLetter(master.name)}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
          </div>
        )}

        {product_details?.product_tag_options.length != 0 && (
          <DynamicForm data={product_details?.product_tag_options} />
        )}
      </div>
    </>
  );
}

export default RightForm;
