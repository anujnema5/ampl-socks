import { OfferBanner } from "@/components/banners";
import { CategoriesSection, ItemsSection, PopularProductSection } from "@/components/sections/global";
import { AboutUs, EcoManifestoSection, HeroSection } from "@/components/sections/home";

export default function Home() {

  const HomePageSections = [
    { Comp: HeroSection },
    { Comp: CategoriesSection, heading: 'Categories' },
    { Comp: PopularProductSection, heading: 'Popular products' },
    { Comp: OfferBanner },
    { Comp: EcoManifestoSection },
    { Comp: AboutUs }
  ]

  return (
    <div className="flex flex-col space-y-16 justify-center items-center w-full min-h-screen">
      {HomePageSections?.map((Page, i) => (
        <Page.Comp key={i} heading={Page.heading} />
      ))}
    </div>
  );
}
