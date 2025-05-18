function TopHeader() {
  return (
    <div className="py-2 bg-gray-100 overflow-hidden">
      {/* Marquee for mobile screens */}
      <div className="block sm:hidden">
        <div className="animate-marquee">
          <span className="inline-block w-auto text-blue-400 mr-8">
            100% Satisfaction Guarantee
          </span>
          <span className="inline-block w-auto text-blue-400 mr-8">
            Free Delivery on orders above 2000
          </span>
          <span className="inline-block w-auto text-blue-400 mr-8">
            Dispatch on Same Day
          </span>
          {/* </marquee> */}
        </div>
      </div>

      {/* Fixed version for larger screens */}
      <div className="hidden sm:flex justify-around text-blue-400">
        <h3 className="text-sm">100% Satisfaction Guarantee</h3>
        <h3 className="text-sm">Free Delivery on orders above 2000</h3>
        <h3 className="text-sm">Dispatch on Same Day</h3>
      </div>
    </div>
  );
}

export default TopHeader;
