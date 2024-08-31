import CountryForm, {
  CountryFormValues,
} from "@/components/explore/CountryForm";
import CountryList from "@/components/explore/CountryList";
import useFetch from "@/hooks/useFetch";
import { fieldsQuery } from "@/lib/countryQueries";
import axios from "axios";
import { useMemo, useState } from "react";

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

const categoryMap = {
  Language: "lang",
  Region: "region",
  Name: "name",
} as const;

const filterFns = {
  independent: (country: CountriesFields) => {
    return country.independent;
  },
  "not independent": (country: CountriesFields) => {
    return !country.independent;
  },
} as const;

export default function Explore() {
  const [data, setData] = useState<CountryFormValues>({
    category: "Name",
    filters: [],
    search: "",
  });

  const query = useMemo(() => {
    const category = categoryMap[data.category];
    const search = data.search.toLowerCase();
    if (!search) {
      return `https://restcountries.com/v3.1/all?${fieldsQuery}`;
    }
    return `https://restcountries.com/v3.1/${category}/${search}?${fieldsQuery}`;
  }, [data]);

  const countriesQuery = useFetch({
    fetchFn: () => axios.get<CountriesFields[]>(query),
    keys: [query],
  });

  const countriesData = useMemo(
    () => countriesQuery.data?.data || [],
    [countriesQuery]
  );

  const filteredCountriesData = useMemo(() => {
    if (data.filters.length > 0) {
      return countriesData.filter((country) => {
        return data.filters.some((filter) => {
          return filterFns[filter](country);
        });
      });
    }
    return countriesData;
  }, [countriesData, data]);

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
