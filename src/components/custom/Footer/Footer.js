import { Facebook, Instagram } from "lucide-react";
import Gpay from "../../../assets/images/payments/1.png";
import Ppay from "../../../assets/images/payments/2.png";
import Paytm from "../../../assets/images/payments/3.png";
import Visa from "../../../assets/images/payments/4.png";
import MCard from "../../../assets/images/payments/5.png";
import Rupay from "../../../assets/images/payments/6.png";

import APay from "../../../assets/images/payments/7.png";
import Paypal from "../../../assets/images/payments/8.png";
import Mestro from "../../../assets/images/payments/9.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-[#41C2EC] py-10 px-4 sm:px-20 flex justify-between sm:flex-row gap-y-5 flex-wrap">
        <div className="sm:basis-1/3">
          <h3 className="text-white text-2xl">About Us</h3>
          <p className="text-sm font-medium mt-1 text-white/80">
            Joyfulsurprises is a unit of M B Traders which designs and sells
            Personalised Gifts and star on premium quality. We are the official
            partners star-registry.com. Secure online payment via Razorpay. 24*7
            customer support.{" "}
          </p>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h4 className="text-white/90 font-medium text-lg">Information</h4>
          <ul className="mt-2">
            <li>
              <NavLink
                className="!text-white/70 font-medium text-sm text-center inline"
                to="/privacy-policy"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink
                className="!text-white/70 font-medium text-sm text-center inline"
                to="/terms-of-service"
              >
                Terms of Service
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink
                className="!text-white/70 font-medium text-sm text-center inline"
                to={"/refund-policy"}
              >
                Refund Policy
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink
                className="!text-white/70 font-medium text-sm text-center inline"
                to={"/shipping-policy"}
              >
                Shipping Policy
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink
                className="!text-white/70 font-medium text-sm text-center inline"
                to={"/contact-us"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h4 className="text-white/90 font-medium text-lg">Quick Links</h4>
          <ul className="mt-2">
            <li>
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="mt-1">
              <NavLink
                className="!text-white/70 font-medium text-sm text-center inline"
                to={"/find-your-star"}
              >
                Find Your Star
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h4 className="text-white/90 font-medium text-lg">Follow Us</h4>
          <ul className="mt-2 flex items-center gap-3">
            <li>
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="#"
              >
                <Instagram />
              </a>
            </li>
            <li className="mt-1">
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="#"
              >
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h4 className="text-white/90 font-medium text-lg">Payments</h4>
          <ul className="mt-2 flex items-center gap-3">
            <li>
              <img src={Gpay} alt="" width={50} height={50} />
            </li>
            <li className="mt-1">
              <img src={Ppay} alt="" width={50} height={50} />
            </li>
            <li className="mt-1">
              <img src={Paytm} alt="" width={50} height={50} />
            </li>
          </ul>
          <ul className="mt-2 flex items-center gap-3">
            <li>
              <img src={Rupay} alt="" width={50} height={50} />
            </li>
            <li className="mt-1">
              <img src={Visa} alt="" width={50} height={50} />
            </li>
            <li className="mt-1">
              <img src={MCard} alt="" width={50} height={50} />
            </li>
          </ul>
          <ul className="mt-2 flex items-center gap-3">
            <li>
              <img src={APay} alt="" width={50} height={50} />
            </li>
            <li className="mt-1">
              <img src={Paypal} alt="" width={50} height={50} />
            </li>
            <li className="mt-1">
              <img src={Mestro} alt="" width={50} height={50} />
            </li>
          </ul>
        </div>
      </div>
      <div className="py-1 items-center justify-center !pb-[50px] sm:pb-0">
        <h3 className="text-center text-blue-400 text-sm">
          Copyright © {new Date().getFullYear()} Joyful Surprises. All Rights
          Reserved.
        </h3>
      </div>
    </>
  );
}

export default Footer;
