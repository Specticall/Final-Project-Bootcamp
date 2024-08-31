import CountryInfo from "@/components/detail/CountryInfo";
import CountryLocation from "@/components/detail/CountryLocation";
import useFetch from "@/hooks/useFetch";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export type CountryFields = {
  area: number;
  continents: string[];
  flags: { png: string; svg: string; alt: string };
  independent: boolean;
  name: {
    common: string;
    official: string;
  };
  population: number;
  capital: string;
  currencies: Record<string, { name: string }>;
  languages: Record<string, string>;
  latlng: number[];
};

export default function Detail() {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const countryQuery = useFetch({
    fetchFn: () =>
      axios.get<CountryFields[]>(
        `https://restcountries.com/v3.1/name/${countryName}`
      ),
    keys: [countryName],
    enabled: Boolean(countryName),
  });
  const countryData = countryQuery.data?.data?.[0];

  return (
    <main className="mt-[4rem] section">
      <div
        className="flex gap-2 items-center mb-4 group"
        onClick={() => navigate("/explore")}
      >
        <i className="bx bx-chevron-left text-slate-500 group-hover:text-white transition-all duration-100 cursor-pointer text-xl"></i>
        <p className="text-slate-500 group-hover:text-white transition-all duration-100 cursor-pointer">
          Back
        </p>
      </div>
      <h1 className="text-white text-3xl border-b-[1px] border-slate-700 pb-6 mb-10">
        Country Details
      </h1>
      <CountryInfo country={countryData} />
      <CountryLocation
        lat={countryData?.latlng[0]}
        lng={countryData?.latlng[1]}
      />
    </main>
  );
}
