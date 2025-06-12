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
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = gsap.utils.toArray(".footer-title");
      const paragraph = gsap.utils.toArray(".footer-paragraph");
      const links = gsap.utils.toArray(".footer-link");

      gsap.fromTo(
        title,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            // start: "top 100%",
            // end: "bottom 140%",
            markers: false,
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraph,
            // start: "top 80%",
            // end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      links.forEach((link, index) => {
        gsap.fromTo(
          link,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.4 + index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: link,
              // start: "top 80%",
              // end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="bg-[#41C2EC] py-10 px-4 sm:px-20 flex justify-between sm:flex-row gap-y-5 flex-wrap"
      >
        <div className="sm:basis-1/3">
          <h3 className="text-white text-2xl footer-title">About Us</h3>
          <p className="text-sm font-medium mt-1 text-white/80 footer-paragraph">
            Joyfulsurprises is a unit of M B Traders which designs and sells
            Personalised Gifts and star on premium quality. We are the official
            partners star-registry.com. Secure online payment via Razorpay. 24*7
            customer support.{" "}
          </p>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h4 className="text-white/90 font-medium text-lg footer-title">
            Information
          </h4>
          <ul className="mt-2">
            <li>
              <NavLink
                className="!text-white/70 font-medium text-sm footer-link block"
                to="/privacy-policy"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink
                className="!text-white/70 font-medium text-sm block footer-link"
                to="/terms-of-service"
              >
                Terms of Service
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink
                className="!text-white/70 font-medium text-sm block footer-link"
                to={"/refund-policy"}
              >
                Refund Policy
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink
                className="!text-white/70 font-medium text-sm block footer-link"
                to={"/shipping-policy"}
              >
                Shipping Policy
              </NavLink>
            </li>
            <li className="mt-1">
              <NavLink
                className="!text-white/70 font-medium text-sm block footer-link"
                to={"/contact-us"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h4 className="text-white/90 font-medium text-lg footer-title">
            Quick Links
          </h4>
          <ul className="mt-2">
            <li>
              <a
                className="!text-white/70 font-medium text-sm block footer-link"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="mt-1">
              <NavLink
                className="!text-white/70 font-medium text-sm block footer-link"
                to={"/find-your-star"}
              >
                Find Your Star
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h4 className="text-white/90 font-medium text-lg footer-title">
            Follow Us
          </h4>
          <ul className="mt-2 flex items-center gap-3">
            <li>
              <a
                className="!text-white/70 font-medium text-sm block footer-link"
                href="#"
              >
                <Instagram />
              </a>
            </li>
            <li className="mt-1">
              <a
                className="!text-white/70 font-medium text-sm block footer-link"
                href="#"
              >
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h4 className="text-white/90 font-medium text-lg footer-title">
            Payments
          </h4>
          <ul className="mt-2 flex items-center gap-3">
            <li>
              <img
                src={Gpay}
                alt=""
                width={50}
                height={50}
                className="footer-link"
              />
            </li>
            <li className="mt-1">
              <img
                src={Ppay}
                alt=""
                width={50}
                height={50}
                className="footer-link"
              />
            </li>
            <li className="mt-1">
              <img
                src={Paytm}
                alt=""
                width={50}
                height={50}
                className="footer-link"
              />
            </li>
          </ul>
          <ul className="mt-2 flex items-center gap-3">
            <li>
              <img
                src={Rupay}
                alt=""
                width={50}
                height={50}
                className="footer-link"
              />
            </li>
            <li className="mt-1">
              <img
                src={Visa}
                alt=""
                width={50}
                height={50}
                className="footer-link"
              />
            </li>
            <li className="mt-1">
              <img
                src={MCard}
                alt=""
                width={50}
                height={50}
                className="footer-link"
              />
            </li>
          </ul>
          <ul className="mt-2 flex items-center gap-3">
            <li>
              <img
                src={APay}
                alt=""
                width={50}
                height={50}
                className="footer-link"
              />
            </li>
            <li className="mt-1">
              <img
                src={Paypal}
                alt=""
                width={50}
                height={50}
                className="footer-link"
              />
            </li>
            <li className="mt-1">
              <img
                src={Mestro}
                alt=""
                width={50}
                height={50}
                className="footer-link"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="py-1 items-center justify-center !pb-[50px] sm:!pb-[0px]">
        <h3 className="text-center text-blue-400 text-sm">
          Copyright © {new Date().getFullYear()} Joyfulsurprises. All Rights
          Reserved.
        </h3>
      </div>
    </>
  );
}

export default Footer;
