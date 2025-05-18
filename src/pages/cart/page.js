import CartTable from "./components/CartTable";
import { Button } from "../../components/ui/button";
import WorkProcess from "../../components/custom/WorkProcess/WorkProcess";
import { useCartsHook } from "../../utils/hooks";
import { Spin } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";

function CartPage() {
  const { carts, delete_cart_items, loading, router_nav, total_amount } =
    useCartsHook();
  return (
    <Spin spinning={loading}>
      <div className="bg-[#41C2EC] py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">Cart</h3>
            </div>
          </div>
        </div>
      </div>
      {carts?.length != 0 ? (
        <div>
          <CartTable carts={carts} delete_cart_items={delete_cart_items} />
          <div className="sm:mt-3 container mx-auto">
            <div className="sm:w-1/2 ml-auto border">
              <div className="bg-blue-400 py-3 px-6">
                <h4 className="text-white font-medium">Cart Total</h4>
              </div>
              <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                  <h6 className="font-semibold text-sm text-gray-600">Total</h6>
                  <h6 className="font-bold text-sm text-gray-800">
                    ₹{total_amount}
                  </h6>
                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-x-2 gap-y-2 mt-5">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => router_nav("/")}
                  >
                    Continue Shopping
                  </Button>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => router_nav("/checkout")}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        !loading && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <MdOutlineErrorOutline className="text-6xl mb-4 text-gray-400" />
            <h2 className="text-2xl font-semibold">No Data Found</h2>
            <p className="text-sm text-gray-400 mt-2">
              Try again later or check your filters.
            </p>
          </div>
        )
      )}

      <div className="px-4 sm:px-10 mt-10 pb-10">
        <WorkProcess />
      </div>
    </Spin>
  );
}

export default CartPage;
