import { CountryFields } from "@/pages/Detail";
import CountryDetail from "../explore/CountryDetail";
import { formatNumber } from "../utils/util";
import Skeleton from "react-loading-skeleton";
import Badge from "../general/Badge";

type Props = {
  country?: CountryFields;
};

export default function CountryInfo({ country }: Props) {
  return (
    <article className="grid grid-cols-[3fr_5fr] gap-8 max-xl:grid-cols-1 ">
      {country?.flags ? (
        <img
          src={country?.flags?.svg || country?.flags?.png}
          className="h-[20rem] w-full object-cover rounded-md max-xl:h-[25rem] max-sm:h-[15rem]"
          alt="flag"
        />
      ) : (
        <Skeleton height={"20rem"} />
      )}
      <div className="flex flex-col justify-center max-xl:mb-12">
        <div className="flex gap-4 items-center">
          <h1 className="text-4xl text-white mb-2">
            {country?.name.common || (
              <Skeleton
                containerClassName="flex-1"
                className="max-w-[20rem]"
                height={"2.25rem"}
                width={"20rem"}
              />
            )}
          </h1>
          {country ? (
            country.independent && <Badge>Independent</Badge>
          ) : (
            <Skeleton
              height={"1.5rem"}
              width={"10rem"}
              borderRadius={"9999px"}
            />
          )}
        </div>
        <p className="text-slate-500">
          {country?.continents || (
            <Skeleton containerClassName="flex-1" className="max-w-[10rem]" />
          )}
        </p>
        <div className="grid grid-cols-[auto_1fr] gap-x-16 gap-y-4 mt-8 max-md:grid-cols-1">
          <CountryDetail
            data={{
              icon: "bx-user",
              title: "Population",
              value: formatNumber(country?.population),
            }}
          />
          <CountryDetail
            data={{
              icon: "bx-flag",
              title: "Territory",
              value: country?.area
                ? `${formatNumber(country.area)} km^2`
                : undefined,
            }}
          />
          <CountryDetail
            data={{
              icon: "bx-globe",
              title: "Language",
              value: country?.languages
                ? Object.values(country.languages)[0]
                : undefined,
            }}
          />
          <CountryDetail
            data={{
              icon: "bx-money",
              title: "Currency",
              value: country?.currencies
                ? Object.values(country.currencies)[0]?.name
                : undefined,
            }}
          />
          <CountryDetail
            data={{
              icon: "bxs-castle",
              title: "Capital",
              value: country?.capital,
            }}
          />
        </div>
      </div>
    </article>
  );
}
