import { notification } from "antd";

import { SmileOutlined } from "@ant-design/icons";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineError, MdInfo } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";

function getDiscount(price, offerPrice) {
  if (price <= 0 || offerPrice < 0) return 0; // Avoid division by zero
  return ((price - offerPrice) / price) * 100;
}

function getAverageRating(reviews) {
  if (!reviews.length) return 0; // Return 0 if no reviews

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / reviews.length).toFixed(1); // Round to 1 decimal place
}

function HtmlRenderer(htmlString) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

function Notifications(
  type = null,
  module = null,
  action = null,
  description = null,
  customMessage = null
) {
  const actionMessages = {
    create: "created successfully.",
    update: "updated successfully.",
    delete: "deleted successfully.",
    info: "module action info message.",
    warning: "module action warning message.",
    error: "module action error.",
  };

  const message =
    customMessage || `${module} ${actionMessages[action] || "action on"}`;

  const iconTypes = {
    success: <FaCircleCheck size={25} style={{ color: "#fff" }} />,
    info: <MdInfo size={30} style={{ color: "#fff" }} />,
    warning: <RiErrorWarningFill size={30} style={{ color: "#fff" }} />,
    error: <MdOutlineError size={30} style={{ color: "#fff" }} />,
  };

  const icon = iconTypes[type] || (
    <SmileOutlined style={{ color: "#108ee9" }} />
  );

  notification.open({
    icon,
    closeIcon: <IoCloseSharp size={22} style={{ color: "#fff" }} />,
    type,
    message,
    description,
    duration: 3,
  });
}

function transformCertificateData(input, product_details, callback) {
  const result = {
    certificate_color: input.certificate_color,
    frame_color: input.frame_color,
    frame_size: input.frame_size,
    frame_thickness: input.frame_thickness,
    tag_options: [],
  };

  const excludedKeys = [
    "certificate_color",
    "frame_color",
    "frame_size",
    "frame_thickness",
  ];
  const entries = Object.entries(input).filter(
    ([key]) => !excludedKeys.includes(key)
  );

  const promises = entries.map(async ([key, value]) => {
    var product_tag = product_details?.product_tag_options?.filter(
      (master) => master.name == key
    );
    if (product_tag.length != 0) {
      if (
        ["File Upload", "Upload photo"].includes(product_tag[0].tag) &&
        Array.isArray(value) &&
        value.length > 0
      ) {
        const file = value[0].originFileObj;
        const base64 = await getBase64(file);
        return {
          name: key,
          data: base64,
        };
      } else {
        return Promise.resolve({
          name: key,
          data: value,
        });
      }
    } else {
      return Promise.resolve({
        name: key,
        data: value,
      });
    }
  });

  Promise.all(promises).then((tagOptions) => {
    result.tag_options = tagOptions;
    callback(result);
  });
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(file);
  });
}

function getOrCreateSessionId() {
  const sessionKey = "session_id";

  // Check if a session ID already exists
  let sessionId = localStorage.getItem(sessionKey);
  if (sessionId) {
    return sessionId;
  }

  // Generate a random session ID (UUID v4-like)
  sessionId = "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );

  // Save to localStorage
  localStorage.setItem(sessionKey, sessionId);

  return sessionId;
}

function get_india_state() {
  return [
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { label: "Assam", value: "Assam" },
    { label: "Bihar", value: "Bihar" },
    { label: "Chhattisgarh", value: "Chhattisgarh" },
    { label: "Goa", value: "Goa" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Haryana", value: "Haryana" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
    { label: "Jharkhand", value: "Jharkhand" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Kerala", value: "Kerala" },
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Manipur", value: "Manipur" },
    { label: "Meghalaya", value: "Meghalaya" },
    { label: "Mizoram", value: "Mizoram" },
    { label: "Nagaland", value: "Nagaland" },
    { label: "Odisha", value: "Odisha" },
    { label: "Punjab", value: "Punjab" },
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Sikkim", value: "Sikkim" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Telangana", value: "Telangana" },
    { label: "Tripura", value: "Tripura" },
    { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { label: "Uttarakhand", value: "Uttarakhand" },
    { label: "West Bengal", value: "West Bengal" },
  ];
}

function getTotalAmountWithShipping(cartItems) {
  var total_amount = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  if (
    cartItems.filter((master) => master.is_digital == false) &&
    parseInt(total_amount) < 2500
  ) {
    total_amount = parseInt(total_amount) + 99;
  }

  return total_amount;
}

function getTotalAmount(cartItems) {
  var total_amount = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return total_amount;
}

function getShipping(cartItems) {
  var total_amount = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);
  if (cartItems.filter((master) => master.is_digital == true).length != 0) {
    return 0;
  }
  if (parseInt(total_amount) < 2500) {
    return 99;
  }

  return 0;
}

function formatSlug(slug) {
  if (slug != undefined) {
    return slug
      ?.split("_") // Split by underscores
      ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      ?.join(" ");
  }
  return ""; // Join with spaces
}

function get_is_prod_env() {
  const IS_DEBUG = process.env.NODE_ENV;
  console.log("IS_DEBUG1", IS_DEBUG);
  if (IS_DEBUG == "production") {
    return true;
  }
  return false;
}

export {
  getDiscount,
  getAverageRating,
  HtmlRenderer,
  saveCartToLocalStorage,
  getCartFromLocalStorage,
  Notifications,
  transformCertificateData,
  getOrCreateSessionId,
  get_india_state,
  getTotalAmountWithShipping,
  getTotalAmount,
  getShipping,
  formatSlug,
  get_is_prod_env,
};
