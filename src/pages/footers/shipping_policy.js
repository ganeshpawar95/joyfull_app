import { Spin } from "antd";
import { NavLink } from "react-router-dom";
function ShippingPolicy() {
  return (
    <>
      <div className="py-14 bg-[url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat relative z-10">
        <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">
                Shipping Policy
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto max-w-6xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="col-span-1 sm:col-span-2 text-justify">
            <ul class="list-disc list-inside space-y-3 text-gray-700">
              <li>
                Provided that your ordered item is in stock, it will usually
                take 7 business days to deliver your order to you after it has
                been processed and payment is received and cleared.
              </li>
              <li>Currently, we do not ship to addresses outside of India.</li>
              <li>Delivery of all orders is currently free of charge.</li>
              <li>
                We are associated with Indian Post and DTDC. Based on your
                pincode, your product will be shipped with the respective
                courier partner.
              </li>
              <li>
                Once the order is shipped, you will receive the tracking ID on
                your WhatsApp.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-8"></div>
    </>
  );
}

export default ShippingPolicy;
