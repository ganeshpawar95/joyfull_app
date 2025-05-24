import "bootstrap/dist/css/bootstrap.min.css";

import GlobalEx from "./utils/global_export";
import { NotFoundComponent, BasicLayout } from "./components";
import {
  HomePages,
  ProductDetailsPage,
  CartPage,
  CheckoutPage,
  ConfirmationOrderPage,
  OrderTrackingPage,
  CategoryPage,
  PrivacyPolicy,
  TermsServices,
  RefundPolicy,
  ShippingPolicy,
  ContactUS,
  FindYourStart,
} from "./pages";
function App() {
  return (
    <GlobalEx.Suspense fallback={<div>Loading...</div>}>
      <GlobalEx.Routes>
        <GlobalEx.Route path="/" element={<BasicLayout />}>
          <GlobalEx.Route path="/" element={<HomePages />} />

          <GlobalEx.Route
            path="/products/details/:id"
            element={<ProductDetailsPage />}
          />

          <GlobalEx.Route path="/cart" element={<CartPage />} />
          <GlobalEx.Route path="/checkout" element={<CheckoutPage />} />
          <GlobalEx.Route
            path="/confirmation/:order_id"
            element={<ConfirmationOrderPage />}
          />

          <GlobalEx.Route
            path="/order-tracking/:order_id"
            element={<OrderTrackingPage />}
          />

          <GlobalEx.Route path="/category/:slug" element={<CategoryPage />} />

          {/* #footer  */}
          <GlobalEx.Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <GlobalEx.Route
            path="/terms-of-service"
            element={<TermsServices />}
          />
          <GlobalEx.Route path="/refund-policy" element={<RefundPolicy />} />
          <GlobalEx.Route
            path="/shipping-policy"
            element={<ShippingPolicy />}
          />

          <GlobalEx.Route path="/contact-us" element={<ContactUS />} />
          <GlobalEx.Route path="/find-your-star" element={<FindYourStart />} />

          {/* FindYourStart */}

          <GlobalEx.Route path="*" element={<NotFoundComponent />} />
        </GlobalEx.Route>
      </GlobalEx.Routes>
    </GlobalEx.Suspense>
  );
}

export default App;
