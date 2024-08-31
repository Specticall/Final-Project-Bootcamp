import CountryForm from "@/components/explore/CountryForm";
import CountryList from "@/components/explore/CountryList";
import { useCountry } from "@/context/CountryContext";

export type Filters = "independent" | "not independent";

export type CountriesFields = {
  area: number;
  continents: string[];
  flags: { png: string; svg: string; alt: string };
  independent: boolean;
  name: {
    common: string;
    official: string;
  };
  population: number;
};

export default function Explore() {
  const { filteredCountriesData, setData, countriesQuery } = useCountry();

  return (
    <main className="mt-[4rem] section">
      <h1 className="text-white text-3xl border-b-[1px] border-slate-700 pb-6 mb-10">
        Search Country
      </h1>
      <CountryForm onChange={setData} />
      <CountryList
        countries={filteredCountriesData}
        isLoading={countriesQuery.isLoading}
      />
    </main>
  );
}
