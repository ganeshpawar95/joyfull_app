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

function Footer() {
  return (
    <>
      <div className="bg-[#41C2EC] py-10 px-4 sm:px-20 flex justify-between sm:flex-row gap-y-5 flex-wrap">
        <div className="sm:basis-1/3">
          <h3 className="text-white text-2xl">About Us</h3>
          <p className="text-sm font-medium mt-1 text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero
            nisi suscipit hic incidunt repellendus quis aliquam illum explicabo
            minima dolorem quia in ex dignissimos, sunt vitae consequatur error
            optio.
          </p>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h4 className="text-white/90 font-medium text-lg">Information</h4>
          <ul className="mt-2">
            <li>
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li className="mt-1">
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li className="mt-1">
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="#"
              >
                Refund Policy
              </a>
            </li>
            <li className="mt-1">
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="#"
              >
                Shipping Policy
              </a>
            </li>
            <li className="mt-1">
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h4 className="text-white/90 font-medium text-lg">Quick Links</h4>
          <ul className="mt-2">
            <li>
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mt-1">
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="#"
              >
                Products
              </a>
            </li>
            <li className="mt-1">
              <a
                className="!text-white/70 font-medium text-sm text-center inline"
                href="#"
              >
                Find Your Star
              </a>
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
      <div className="py-1  items-center justify-center">
        <h3 className="text-center text-blue-400 text-sm">
          Copyright © {new Date().getFullYear()} Joyful Surprises. All Rights
          Reserved.
        </h3>
      </div>
    </>
  );
}

export default Footer;
