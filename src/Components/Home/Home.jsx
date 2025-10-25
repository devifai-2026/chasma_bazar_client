import AffiliateMarketer from "./AffiliateMarketer";
import Banner from "./Banner";
import BestSellers from "./BestSellers";
import ExploreCollection from "./ExploreCollection";
import ForEveryOne from "./ForEveryOne";
import HappyCustomer from "./HappyCustomer";
import NewArrivals from "./NewArrivals";
import TryBanner from "./TryBanner";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BestSellers></BestSellers>
           <TryBanner></TryBanner>
           <NewArrivals></NewArrivals>
           <ExploreCollection></ExploreCollection>
           <WhyChooseUs></WhyChooseUs>
           <ForEveryOne></ForEveryOne>
           <AffiliateMarketer></AffiliateMarketer>
           <HappyCustomer></HappyCustomer>
        </div>
    );
};

export default Home;