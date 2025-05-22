import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useCartsHook } from "../../utils/hooks";
import { Divider, Select, Form, Spin } from "antd";
import {
  get_india_state,
  getTotalAmountWithShipping,
  getTotalAmount,
  getShipping,
} from "../../utils/helpers";

export default function CheckoutPage() {
  const {
    loading,
    router_nav,
    form,
    onSubmitShipping,
    carts,
    shipping,
    total_amount,
  } = useCartsHook();

  return (
    <Spin spinning={loading}>
      <div className="py-14 bg-[url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat relative z-10">
        <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">Checkout</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="px-2 sm:px-10 mt-10 pb-10">
          <div className="grid xl:grid-cols-5 gap-5">
            <div className="xl:col-span-3">
              <Form form={form} onFinish={onSubmitShipping}>
                <div>
                  <h3 className="text-2xl">Contact Information</h3>
                  <div className="grid sm:grid-cols-2 gap-3 mt-2">
                    <div>
                      <Form.Item
                        name={"username"}
                        label={""}
                        rules={[
                          { required: true, message: `Please enter username` },
                        ]}
                      >
                        <Input placeholder="Name" className="px-3" />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name={"phone"}
                        label={""}
                        rules={[
                          {
                            required: true,
                            message: `Please enter mobile number`,
                          },
                        ]}
                      >
                        <Input placeholder="Mobile number" className="px-3" />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name={"email"}
                        label={""}
                        rules={[
                          {
                            required: true,
                            message: `Please enter your email`,
                          },
                        ]}
                      >
                        <Input placeholder="Email" className="px-3" />
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-blue-700">
                    ★ We will contact to this number if there is any issue with
                    the order.
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl">Delivery Information</h3>
                  <div className="mt-2">
                    <Form.Item
                      name={"user_email"}
                      label={""}
                      rules={[
                        {
                          required: true,
                          message: `Please enter email address`,
                        },
                      ]}
                    >
                      <Input placeholder="Email address" className="px-3" />
                    </Form.Item>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div>
                      <Form.Item
                        name={"user_fname"}
                        label={""}
                        rules={[
                          {
                            required: true,
                            message: `Please enter first name`,
                          },
                        ]}
                      >
                        <Input placeholder="First Name" className="px-3" />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name={"user_lname"}
                        label={""}
                        rules={[
                          {
                            required: true,
                            message: `Please enter last name`,
                          },
                        ]}
                      >
                        <Input placeholder="Last Name" className="px-3" />
                      </Form.Item>
                    </div>
                  </div>
                  <div>
                    <Form.Item
                      name={"user_address"}
                      label={""}
                      rules={[
                        {
                          required: true,
                          message: `Please enter full address`,
                        },
                      ]}
                    >
                      <textarea
                        placeholder="H.No / street / locality"
                        className="px-3 w-full resize-none mt-3 bg-transparent border border-gray-200 rounded-md py-2 focus:!border-gray-200 outline-none"
                      />
                    </Form.Item>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <div>
                      <Form.Item
                        name={"landmark"}
                        label={""}
                        rules={[
                          {
                            required: true,
                            message: `Please enter landmark`,
                          },
                        ]}
                      >
                        <Input placeholder="Landmark" className="px-3" />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name={"city"}
                        label={""}
                        rules={[
                          {
                            required: true,
                            message: `Please enter city`,
                          },
                        ]}
                      >
                        <Input placeholder="City" className="px-3" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                    <div>
                      <Form.Item
                        name={"country"}
                        label={""}
                        initialValue={"India"}
                        rules={[
                          {
                            required: true,
                            message: `Please select country`,
                          },
                        ]}
                      >
                        <Select
                          placeholder="Select City"
                          size="large"
                          options={[
                            {
                              label: "India",
                              value: "India",
                            },
                          ]}
                          className="border !border-gray-300 !bg-transparent w-full !h-12 font-medium text-sm rounded-md !text-gray-700"
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name={"state"}
                        label={""}
                        rules={[
                          {
                            required: true,
                            message: `Please select state`,
                          },
                        ]}
                      >
                        <Select
                          placeholder="Select state"
                          size="large"
                          options={get_india_state()}
                          className="border !border-gray-300 !bg-transparent w-full !h-12 font-medium text-sm rounded-md !text-gray-700"
                        />
                      </Form.Item>
                    </div>

                    <div>
                      <Form.Item
                        name={"pincode"}
                        label={""}
                        rules={[
                          {
                            required: true,
                            message: `Please enter pin code`,
                          },
                        ]}
                      >
                        <Input placeholder="Pin Code" className="px-3" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="mt-2 w-full">
                    <Form.Item
                      name={"contact_mobile"}
                      label={""}
                      rules={[
                        {
                          required: true,
                          message: `Please enter phone number`,
                        },
                      ]}
                    >
                      <Input
                        placeholder="Phone Number"
                        className="px-3 w-full"
                      />
                    </Form.Item>
                  </div>
                  <div className="mt-3">
                    <Button type="submit" className="uppercase">
                      Continue Shipping
                    </Button>
                  </div>
                </div>
              </Form>
            </div>

            <div className="xl:col-span-2">
              <div className="bg-white p-4 rounded-md shadow-2xl">
                {/* <h3 className="text-xl">Apply Coupon</h3> */}
                {/* <div className="flex justify-between items-center gap-3 mt-2">
                  <div className="flex-1">
                    <Input placeholder="Coupon Code" />
                  </div>
                  <div className="min-w-[120px]">
                    <Button className="uppercase w-full">Apply</Button>
                  </div>
                </div> */}
                <div className="mt-3">
                  <h3 className="text-xl">Payment Details</h3>
                  <div className="mt-3">
                    <div className="flex justify-between items-center">
                      <h6 className="font-medium text-base text-gray-700">
                        Sub total
                      </h6>
                      <h6 className="font-semibold text-base text-gray-800">
                        ₹{total_amount}
                      </h6>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <h6 className="font-medium text-base text-gray-700">
                        Shipping charges
                      </h6>
                      <h6 className="font-semibold text-base text-gray-800">
                        ₹{shipping}
                      </h6>
                    </div>
                    <Divider className="my-3" />
                    <div className="flex justify-between items-center">
                      <h6 className="font-medium text-xl text-brand">
                        Total Amount
                      </h6>
                      <h6 className="font-semibold text-xl text-brand">
                        ₹{getTotalAmountWithShipping(carts)}
                      </h6>
                    </div>
                    <Divider className="my-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
}
