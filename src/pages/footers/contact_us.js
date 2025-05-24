import { Spin } from "antd";
import { NavLink } from "react-router-dom";
function ContactUS() {
  return (
    <>
      <div className="py-14 bg-[url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat relative z-10">
        <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-4 pt-14 pb-14">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="col-span-1 sm:col-span-2">
            <ul class="list-disc list-inside space-y-3 text-gray-700">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@joyfulsurprises.in"
                  class="text-blue-600 hover:underline"
                >
                  support@joyfulsurprises.in
                </a>
              </li>
              <li>
                Phone number:{" "}
                <a href="tel:9966558383" class="text-blue-600 hover:underline">
                  +91 9966558383
                </a>
              </li>
              <li>
                Address: 73, Road No7, Samathapuri Colony, Nagole, Hyderabad,
                Telangana 500035
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
