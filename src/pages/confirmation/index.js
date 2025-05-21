import WorkProcess from "../../components/custom/WorkProcess/WorkProcess";
import { useOrderConfirmationsPageHook } from "../../utils/hooks";

export default function ConfirmationOrderPage() {
  const { order_id, secondsLeft } = useOrderConfirmationsPageHook();
  return (
    <>
      <div className="bg-[#EBF8FD] py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="border-b-2 border-gray-500 md:w-max mx-auto text-2xl md:text-4xl font-bold pb-3 text-gray-700">
              Payment successful
            </h1>
            <h4 className="mt-3 text-xl sm:text-2xl font-medium text-gray-900">
              Order Id:{" "}
              <span className="font-semibold text-red-500">#{order_id}</span>
            </h4>
            <h4 className="text-xl sm:text-2xl mt-4 font-medium text-gray-700">
              We will notify you of all the details via email. <br /> Thank you!
            </h4>
            <h4 className="text-xl sm:text-2xl mt-4 font-medium text-gray-700">
              You will be redirected to Order Page in <br />{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                {secondsLeft}
              </span>{" "}
              Seconds
            </h4>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-10 mt-10 pb-10">
        <WorkProcess />
      </div>
    </>
  );
}
