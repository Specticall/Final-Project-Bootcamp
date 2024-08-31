import useFetch from "@/hooks/useFetch";
import { fieldsQuery } from "@/lib/countryQueries";
import { CountriesFields } from "@/pages/Explore";
import axios from "axios";
import CountryCard from "../general/CountryCard";
import Skeleton from "react-loading-skeleton";

const countries = ["Indonesia", "Canada", "Japan"];

export default function PopularCountries() {
  const countriesQuery = useFetch({
    fetchFn: () => {
      return Promise.all(
        countries.map((name) => {
          return axios.get<CountriesFields[]>(
            `https://restcountries.com/v3.1/name/${name}?${fieldsQuery}`
          );
        })
      );
    },
    keys: [],
  });
  const countriesData = countriesQuery?.data?.map((country) => {
    return country.data[0];
  });

  return (
    <section className="section mt-36 mb-32">
      <h3 className="text-center text-white text-4xl pb-8 border-b-[1px] border-slate-700">
        Most Searched Countries
      </h3>
      <div className="grid grid-cols-3 gap-8 mt-12 max-xl:grid-cols-2 max-md:grid-cols-1">
        {countriesQuery.isLoading &&
          new Array(3).fill("x").map((_, i) => {
            return (
              <Skeleton
                height={"30rem"}
                width={"100%"}
                key={i}
                className="rounded-md"
              />
            );
          })}
        {countriesData?.map((country, i) => {
          return <CountryCard country={country} key={i} />;
        })}
      </div>
    </section>
  );
}
