import { CountriesFields } from "@/pages/Explore";
import CountryDetail from "../explore/CountryDetail";
import { Button } from "../ui/button";
import Badge from "./Badge";
import { formatNumber } from "../utils/util";
import { useNavigate } from "react-router-dom";

type Props = {
  country: CountriesFields;
};

export default function CountryCard({ country }: Props) {
  const navigate = useNavigate();
  return (
    <article className="border border-slate-700 p-5 rounded-md max-sm:p-4">
      <div className="overflow-hidden h-[16rem] max-sm:h-[12rem] w-full bg-slate-900 rounded-md">
        <img
          src={country.flags.svg || country.flags.png}
          className="h-full w-full object-cover"
        ></img>
      </div>
      <div className="grid grid-cols-[1fr_auto] mt-6">
        <h3 className="text-white text-3xl">{country.name.common}</h3>
        {country.independent ? <Badge>Independent</Badge> : <div></div>}
        <p className="mt-1 text-slate-400">{country.continents[0]}</p>
      </div>
      <div className="mt-6 grid gap-2">
        <CountryDetail
          data={{
            icon: "bx-user",
            title: "Population",
            value: formatNumber(country.population),
          }}
        />
        <CountryDetail
          data={{
            icon: "bx-flag",
            title: "Territory",
            value: `${formatNumber(country.area)} km^2`,
          }}
        />
      </div>
      <Button
        className="mt-8"
        variant={"light"}
        onClick={() => navigate(`/detail/${country.name.common}`)}
      >
        View Details
      </Button>
    </article>
  );
}
