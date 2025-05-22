import WorkProcess from "../../components/custom/WorkProcess/WorkProcess";
import { Button } from "../../components/ui/button";
import { Spin, Steps } from "antd";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { DownloadIcon, Truck } from "lucide-react";
import QrcodeImage from "../../assets/images/qrcode.png";

import { useOrderDetailsHook } from "../../utils/hooks";
import { IMAGE_BASE_URL } from "../../utils/constants";

export default function OrderTrackingPage() {
  const { order_details, loading, router_nav, update_loader_state } =
    useOrderDetailsHook();
  return (
    <Spin spinning={loading}>
      {order_details != null && (
        <div className="bg-[#EBF8FD] py-10">
          <div className="container mx-auto">
            <div className="flex justify-between items-center flex-wrap gap-y-3">
              <h4 className="text-2xl font-semibold text-gray-700">
                Thank you for your order{" "}
                <span className="text-red-500">#{order_details?.txn_id}</span>
              </h4>
              <div className="flex gap-3 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={async () => {
                    try {
                      update_loader_state(true);
                      const response = await fetch(order_details?.invoice_url, {
                        method: "GET",
                      });

                      if (!response.ok) {
                        throw new Error("Failed to fetch file");
                      }

                      const blob = await response.blob();
                      const url = window.URL.createObjectURL(blob);
                      const link = document.createElement("a");
                      link.href = url;
                      link.setAttribute("download", "invoice.pdf"); // You can name it as needed
                      document.body.appendChild(link);
                      link.click();
                      link.remove();
                      window.URL.revokeObjectURL(url);
                      update_loader_state(false);
                    } catch (err) {
                      console.error("Download failed:", err);
                      update_loader_state(false);
                    }
                  }}
                >
                  <DownloadIcon />
                  Download Invoice
                </Button>
                <Button onClick={() => router_nav("/")} size="sm">
                  Continue Shopping
                </Button>
              </div>
            </div>
            <div className="mt-4 border border-gray-500 p-3 sm:p-10 pb-0 rounded-md">
              <h4 className="text-xl sm:text-2xl font-medium flex items-center gap-2 flex-wrap">
                <div className="h-10 w-10 bg-brand rounded-full flex items-center justify-center text-white">
                  <Truck />
                </div>
                <span>We will send you tracking information over Whatsapp</span>
              </h4>
              <div className="mt-3 sm:mt-5">
                <Row>
                  <Col xl={7}>
                    <Row>
                      <Col xl={6}>
                        <div>
                          <h4 className="text-xl font-semibold border-b pb-2">
                            Order Placed
                          </h4>
                          <h5 className="mt-2 font-medium text-md text-blue-400">
                            Contact information
                          </h5>
                          {order_details?.shipping_address != null && (
                            <ul className="mt-2 flex flex-col gap-y-1">
                              <li className="text-sm font-medium text-gray-600">
                                Full name:{" "}
                                {order_details?.shipping_address?.user_fname}{" "}
                                {order_details?.shipping_address?.user_lname}
                              </li>
                              <li className="text-sm font-medium text-gray-600">
                                Email:{" "}
                                {order_details?.shipping_address?.user_email}
                              </li>
                              <li className="text-sm font-medium text-gray-600">
                                Phone: +91
                                {
                                  order_details?.shipping_address
                                    ?.contact_mobile
                                }
                              </li>
                              <li className="text-sm font-medium text-gray-600">
                                Whatsapp: +91
                                {
                                  order_details?.shipping_address
                                    ?.contact_mobile
                                }
                              </li>
                            </ul>
                          )}
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div>
                          <h4 className="text-xl font-semibold border-b pb-2">
                            Shipping Address
                          </h4>
                          <h5 className="mt-2 font-medium text-md text-blue-400">
                            Full address for shipped
                          </h5>
                          <p className="mt-2 text-sm max-w-[50%]">
                            {order_details?.shipping_address.user_address}
                            {", "}
                            {order_details?.shipping_address.city}
                            {", "}
                            {order_details?.shipping_address.pincode}
                            {", "}
                            {order_details?.shipping_address.state}
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="detailsTable mt-4 mb-4">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-blue-400 text-center hover:bg-blue-400">
                              <TableHead className="text-white text-center border-r border-gray-300">
                                Image
                              </TableHead>
                              <TableHead className="text-white text-center border-r border-gray-300">
                                Product Name
                              </TableHead>
                              <TableHead className="text-white text-center border-r border-gray-300">
                                Quantity
                              </TableHead>
                              <TableHead className="text-white text-center">
                                Total
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {order_details?.products != null &&
                              order_details?.products.map((master) => (
                                <TableRow className="text-center">
                                  <TableCell className="border-r border-gray-300">
                                    <img
                                      className="h-10 w-10 rounded-sm mx-auto"
                                      src={IMAGE_BASE_URL + master.thumbnail}
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </TableCell>
                                  <TableCell className="border-r border-gray-300">
                                    <span>{master.product_name}</span>
                                  </TableCell>
                                  <TableCell className="border-r border-gray-300">
                                    <span>1</span>
                                  </TableCell>
                                  <TableCell>
                                    <span>₹{master.price}</span>
                                  </TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                        </Table>
                      </div>
                    </Row>
                  </Col>
                  <Col xl={5}>
                    <div className="mt-3 sm:mt-0 sm:pl-10">
                      <Steps
                        progressDot
                        current={1}
                        direction="vertical"
                        items={order_details.order_status}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="mt-4">
              <Row>
                <Col xl={4}>
                  <h4 className="text-base font-semibold border-b pb-2 text-gray-700 px-2">
                    Order Summary
                  </h4>
                  <div className="border-b py-2 px-2">
                    <div className="flex justify-between items-center gap-x-2 font-medium text-sm mb-1">
                      <div>Subtotal</div>
                      <div>
                        {order_details?.total_amount -
                          parseInt(order_details?.shipping_fee)}
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-x-2 font-medium text-sm mb-1">
                      <div>CGST (9%)</div>
                      <div>00.00</div>
                    </div>
                    <div className="flex justify-between items-center gap-x-2 font-medium text-sm mb-1">
                      <div>SGST (9%)</div>
                      <div>00.00</div>
                    </div>
                    <div className="flex justify-between items-center gap-x-2 font-medium text-sm mb-1">
                      <div>Shipping Charges</div>
                      <div>{order_details?.shipping_fee}</div>
                    </div>
                  </div>
                  <div className="px-2 py-1">
                    <div className="flex justify-between items-center gap-x-2 font-medium text-base text-brand mb-1">
                      <div>Total</div>
                      <div>{order_details?.total_amount}</div>
                    </div>
                  </div>
                </Col>
                <Col xl={4}>
                  <h4 className="text-base font-semibold border-b pb-2 text-gray-700 px-2 text-center">
                    Payment Type
                  </h4>
                  <h4 className="px-2 py-2 font-medium text-xl text-brand">
                    Payment type: Card
                  </h4>
                </Col>
                <Col xl={4}>
                  <h4 className="text-base font-semibold border-b pb-2 text-gray-700 px-2 text-center">
                    Billing Information
                  </h4>
                  <h4 className="text-center py-2 text-gray-900 font-medium">
                    {order_details?.shipping_address.user_address}
                    {", "}
                    {order_details?.shipping_address.city}
                    {", "}
                    {order_details?.shipping_address.pincode}
                    {", "}
                    {order_details?.shipping_address.state}
                  </h4>
                </Col>
              </Row>
            </div>
            <div className="flex items-center mt-4 flex-col gap-y-2">
              <img className="h-28 w-28" src={QrcodeImage} alt="" />
              <h4 className="text-xl font-semibold text-gray-700 mt-2">
                Scan the QR code to give review
              </h4>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#3DC2EE]">
        <div className="container mx-auto">
          <h4 className="text-center font-medium text-xl py-3 text-white">
            Send us the Opening video to our whatsapp (+91 9966558383) and get
            INR 100/- Cash back Instantly
          </h4>
        </div>
      </div>
      <div className="px-4 sm:px-10 mt-10 pb-10">
        <WorkProcess />
      </div>
    </Spin>
  );
}
