import { HeadsetIcon, PlaneTakeoff, ShoppingCart, Smile } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function WorkProcess() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".work-process-item");
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid sm:grid-cols-4 gap-4">
      <div className="flex items-center gap-7 work-process-item">
        <div>
          <ShoppingCart size={60} className="text-red-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700">
            Secure Checkout
          </h3>
          <p className="text-sm font-medium text-gray-500 mt-1">
            Your order is just a few steps away!
          </p>
        </div>
      </div>
      <div className="flex items-center gap-7 work-process-item">
        <div>
          <HeadsetIcon size={60} className="text-red-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700">
            Customer Support
          </h3>
          <p className="text-sm font-medium text-gray-500 mt-1">
            We are here to help you!
          </p>
        </div>
      </div>
      <div className="flex items-center gap-7 work-process-item">
        <div>
          <Smile size={60} className="text-red-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Satisfaction</h3>
          <p className="text-sm font-medium text-gray-500 mt-1">
            We guarantee your 100% satisfaction
          </p>
        </div>
      </div>
      <div className="flex items-center gap-7 work-process-item">
        <div>
          <PlaneTakeoff size={60} className="text-red-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700">
            International Shipment
          </h3>
          <p className="text-sm font-medium text-gray-500 mt-1">
            Orders are shiped seamlessly between countries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
