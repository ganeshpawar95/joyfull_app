import DetailsSlider from "../../../../components/custom/DetailsPreview/DetailsSlider";
import ProductListing from "../../../../components/custom/ProductListing/ProductListing";
import WorkProcess from "../../../../components/custom/WorkProcess/WorkProcess";
import RightForm from "./RightForm";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "../../../../components/ui/button";

import { Tabs, Form, Spin } from "antd";
import { useProductDetailsHook } from "../../../../utils/hooks/index";
import DOMPurify from "dompurify";

export default function ProductDetailsPage(props) {
  const {
    product_details,
    add_to_cart,
    form,
    isExpanded,
    setIsExpanded,
    isMobile,
    setisCart,
    loading,
  } = useProductDetailsHook();

  const items = [
    {
      key: "1",
      label: "Product description",
      children: (
        <>
          <div
            className={`overflow-hidden ${
              isMobile && !isExpanded ? "max-h-[200px]" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Description
            </h2>
            {/* content */}
            {/* {product_details?.description} */}
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product_details?.description || ""),
              }}
            />
          </div>
          {isMobile && (
            <button
              className="mt-2 text-base text-blue-500 underline"
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show less..." : "Read more..."}
            </button>
          )}
        </>
      ),
    },
    {
      key: "2",
      label: "Delivery Information",
      children: (
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product_details?.delivery_info || ""),
            }}
          />
        </div>
      ),
    },
    {
      key: "3",
      label: "Additional Information",
      children: (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: product_details?.care_instructions,
            }}
          />
        </>
      ),
    },
  ];

  function handleSubmit(values) {
    add_to_cart({ ...product_details, user_data: values });
  }
  return (
    <Spin spinning={loading}>
      <div className="py-14 bg-[url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat relative z-10">
        <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">Details</h3>
            </div>
          </div>
        </div>
      </div>
      {product_details != null && (
        <Form form={form} onFinish={handleSubmit}>
          <div className="px-3 sm:px-10 mt-10 pb-10">
            <Row>
              <Col xl={6}>
                <DetailsSlider
                  product_images={product_details?.product_images}
                />
              </Col>
              <Col xl={6}>
                <div className="max-h-[670px] overflow-y-auto">
                  <RightForm product_details={product_details} />
                </div>
                <div className="mt-5 bg-white fixed bottom-0 left-0 w-full z-40 px-0 pb-0 sm:px-0 sm:relative sm:left-0 ">
                  <div className="grid grid-cols-2 gap-0 sm:gap-4">
                    <div>
                      <Button
                        onClick={() => {
                          setisCart("cart");
                        }}
                        type="submit"
                        className="w-full rounded-none sm:rounded-md bg-[#41C2EC] text-white"
                      >
                        <ShoppingCart />
                        Add to Cart
                      </Button>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          setisCart("buy");
                        }}
                        type="submit"
                        variant="orange"
                        className="w-full rounded-none sm:rounded-md"
                      >
                        <ShoppingBag className="h-5 w-5" />
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="mt-4">
              <Tabs
                className="productDetailsTabCard"
                defaultActiveKey="1"
                type="card"
                items={items}
              />
            </div>
          </div>

          <div className="py-4 px-4 sm:px-10">
            <ProductListing title="" />
          </div>

          <div className="px-4 sm:px-10 mt-10 pb-10">
            <WorkProcess />
          </div>
        </Form>
      )}
    </Spin>
  );
}
