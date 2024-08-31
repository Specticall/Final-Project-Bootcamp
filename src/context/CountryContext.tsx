import { CountryFormValues } from "@/components/explore/CountryForm";
import useFetch, { UseFetchReturnType } from "@/hooks/useFetch";
import { fieldsQuery } from "@/lib/countryQueries";
import { CountriesFields } from "@/pages/Explore";
import axios, { AxiosResponse } from "axios";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

type TCountryContextValues = {
  setData: React.Dispatch<React.SetStateAction<CountryFormValues>>;
  filteredCountriesData: CountriesFields[];
  countriesQuery: UseFetchReturnType<AxiosResponse<CountriesFields[]>>;
};

const CountryContext = createContext<TCountryContextValues | null>(null);

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

export function CountryProvider({ children }: { children: ReactNode }) {
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
    <CountryContext.Provider
      value={{ countriesQuery, filteredCountriesData, setData }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (!context)
    throw new Error("useCountry must be used inside of it's Provider's scope");
  return context;
}
