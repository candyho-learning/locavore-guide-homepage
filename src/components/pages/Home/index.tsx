import BrandsDirectory from "./BrandsDirectory";
import BrochureSection from "./BrochureSection";
import DescriptionSection from "./DescriptionSection";
import HeroSection from "./HeroSection";
import RequestFormSection from "./RequestFormSection";
import StickySubNav from "./StickySubNav";
import { BrandsDirectory as BrandsDirectoryData } from "@/types/brands";

interface HomePageProps {
  brandsDirectory: BrandsDirectoryData;
}

function HomePage({ brandsDirectory }: HomePageProps) {
  // Post to the fetch brand API:
  // const brands = await fetchBrands();
  return (
    <div className="bg-brand-green min-w-97.5">
      <HeroSection />
      <StickySubNav />
      <DescriptionSection />
      <BrochureSection />
      <BrandsDirectory brands={brandsDirectory} />
      <RequestFormSection />
    </div>
  );
}
export default HomePage;
