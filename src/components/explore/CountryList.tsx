import CountryCard from "../general/CountryCard";
import { CountriesFields } from "@/pages/Explore";
import Skeleton from "react-loading-skeleton";

type Props = {
  isLoading?: boolean;
  countries?: CountriesFields[];
};

export default function CountryList({ isLoading, countries }: Props) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 mt-16 gap-12 max-lg:grid-cols-2 max-xl:gap-6 max-md:grid-cols-1">
        {new Array(9).fill("x").map((_, i) => (
          <Skeleton
            height={"30rem"}
            width={"100%"}
            key={i}
            className="rounded-md"
          />
        ))}
      </div>
    );
  }

  if (countries && countries.length === 0) {
    return (
      <div className="w-full py-40 flex items-center justify-center flex-col">
        <h1 className="text-white text-4xl">No Countries Found</h1>
        <p className="text-slate-400 mt-2">
          There wasn't any matching results to your expected search
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 mt-16 gap-12 max-lg:grid-cols-2 max-xl:gap-6 max-md:grid-cols-1">
      {countries?.map((country, i) => {
        return <CountryCard key={i} country={country} />;
      })}
    </div>
  );
}
