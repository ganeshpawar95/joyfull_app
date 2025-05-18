import CustomerReviews from "../../components/custom/CustomerReviews/CustomerReviews";
import HeroSlider from "../../components/custom/HeroSlider/HeroSlider";
import ProductGrid from "../../components/custom/ProductGrid/ProductGrid";
import ProductListing from "../../components/custom/ProductListing/ProductListing";
import WorkProcess from "../../components/custom/WorkProcess/WorkProcess";
import { useHomePageHook } from "../../utils/hooks/index";
function Home() {
  const { banner_list, best_selling, trending, reviews_all } =
    useHomePageHook();
  return (
    <>
      <HeroSlider banner_list={banner_list} />
      <ProductGrid />
      <div className="px-2 sm:px-10">
        <div className="md:py-4">
          <ProductListing title="Best Selling Product" results={best_selling} />
        </div>
        <div className="py-4">
          <ProductListing title="Trending Product" results={trending} />
        </div>
      </div>
      <div className="px-2 md:px-4 sm:px-10 mt-2 md:mt-5">
        <CustomerReviews results={reviews_all} />
      </div>
      <div className="px-4 sm:px-10 mt-10 pb-10">
        <WorkProcess />
      </div>
    </>
  );
}

export default Home;
