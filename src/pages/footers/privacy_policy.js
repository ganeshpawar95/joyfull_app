import { Spin } from "antd";
import { NavLink } from "react-router-dom";
function PrivacyPolicy() {
  return (
    <>
      <div className="py-14 bg-[url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat relative z-10">
        <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">
                Privacy policy
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="w-full">
          <div class="w-full sm:w-1/2 md:w-full text-justify">
            <p class="mb-4">
              This Privacy Policy describes how your personal information is
              collected, used, and shared when you visit or make a purchase from{" "}
              <NavLink to={"/"} class="text-blue-600 underline">
                support@joyfulsurprises.in
              </NavLink>{" "}
              (the “Site”).
            </p>

            <h4 class="text-xl font-semibold mb-2 text-[#2e3368]">
              Personal Information We Collect
            </h4>
            <p class="mb-4">
              When you visit the Site, we automatically collect certain
              information about your device, including information about your
              web browser, IP address, time zone, and some of the cookies that
              are installed on your device. Additionally, as you browse the
              Site, we collect information about the individual web pages or
              products that you view, what websites or search terms referred you
              to the Site, and information about how you interact with the Site.
              We refer to this automatically-collected information as “Device
              Information”.
            </p>

            <p class="font-bold mb-2">
              We collect Device Information using the following technologies:
            </p>
            <ul class="list-disc list-inside mb-4 space-y-2">
              <li>
                “Cookies” are data files that are placed on your device or
                computer and often include an anonymous unique identifier. For
                more information about cookies, and how to disable cookies,
                visit{" "}
                <a
                  href="http://www.allaboutcookies.org"
                  class="text-blue-600 underline"
                >
                  http://www.allaboutcookies.org
                </a>
                .
              </li>
              <li>
                “Log files” track actions occurring on the Site, and collect
                data including your IP address, browser type, Internet service
                provider, referring/exit pages, and date/time stamps.
              </li>
              <li>
                “Web beacons”, “tags”, and “pixels” are electronic files used to
                record information about how you browse the Site.
              </li>
            </ul>

            <p class="mb-4">
              Additionally, when you make a purchase or attempt to make a
              purchase through the Site, we collect certain information from
              you, including your name, billing address, shipping address,
              payment information (including credit card numbers), email
              address, and phone number. We refer to this information as “Order
              Information”.
            </p>

            <p class="mb-4">
              When we talk about “Personal Information” in this Privacy Policy,
              we are talking both about Device Information and Order
              Information.
            </p>

            <h4 class="text-xl font-semibold mb-2 text-[#2e3368]">
              How Do We Use Your Personal Information?
            </h4>
            <p class="mb-4">
              We use the Order Information that we collect generally to fulfill
              any orders placed through the Site (including processing your
              payment information, arranging for shipping, and providing you
              with invoices and/or order confirmations). Additionally, we use
              this Order Information to:
            </p>

            <ul class="list-disc list-inside mb-4 space-y-2">
              <li>Communicate with you;</li>
              <li>Screen our orders for potential risk or fraud; and</li>
              <li>
                When in line with the preferences you have shared with us,
                provide you with information or advertising relating to our
                products or services.
              </li>
            </ul>

            <p class="mb-4">
              We use the Device Information that we collect to help us screen
              for potential risk and fraud (in particular, your IP address), and
              more generally to improve and optimize our Site (for example, by
              generating analytics about how our customers browse and interact
              with the Site, and to assess the success of our marketing and
              advertising campaigns).
            </p>

            <h4 class="text-xl font-semibold mb-2 text-[#2e3368]">
              Contact Us
            </h4>
            <p class="mb-20">
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by e‑mail at
              <a
                href="mailto:joyfulsuprises@gmail.com"
                class="text-blue-600 underline"
              >
                support@joyfulsurprises.in
              </a>
              or by mail using the details provided below.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
