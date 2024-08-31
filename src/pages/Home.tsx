import Hero from "@/components/home/Hero";
import PopularCountries from "@/components/home/PopularCountries";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <main className="pt-[8rem]">
      <Hero />
      <WhyUs />
      <PopularCountries />
    </main>
  );
}
