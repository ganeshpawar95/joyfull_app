import { Spin } from "antd";
import { NavLink } from "react-router-dom";
function RefundPolicy() {
  return (
    <>
      <div className="py-14 bg-[url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat relative z-10">
        <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">
                Refund Policy
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="col-span-1 sm:col-span-2">
            <ul class="list-disc list-inside space-y-3 text-gray-700">
              <li>
                If you are not satisfied with what you have received then
                contact us within 3 days and we shall assign you our personal
                consultant to resolve your issue.
              </li>
              <li>Kindly record a video while unboxing the gift.</li>
              <li>
                Refund is initiated only if a genuine manufacturing defect or a
                transit damage is detected in the video.
              </li>
              <li>
                If the return is not eligible for Pickup, a Self-Return option
                will be provided and self return charges will be refunded.
              </li>
              <li>
                Once the Product verification is done and verified refund will
                be processed in 7 working days.
              </li>
              <li>
                Item(s) must be returned in original condition and in original
                packaging including all original tags, any paperwork, manuals or
                accessories. Returned item(s) must be unopened, unused, not
                tried on, unaltered, undamaged, uncut, and unworn.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default RefundPolicy;
