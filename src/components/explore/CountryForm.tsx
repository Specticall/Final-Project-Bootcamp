import { useEffect, useState } from "react";
import Badge from "../general/Badge";
import SearchBar from "../ui/SearchBar";
import { Filters } from "@/pages/Explore";
import Dropdown from "../ui/Dropdown";
import useDebounce from "@/hooks/useDebounce";
const categories = ["Name", "Region", "Language"] as const;

export type CountryFormValues = {
  search: string;
  category: (typeof categories)[number];
  filters: Filters[];
};

type Props = {
  onChange: (value: CountryFormValues) => void;
};

export default function CountryForm({ onChange }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("Name");
  const [filters, setFilters] = useState<Filters[]>([]);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    if (typeof debouncedSearch === "string") {
      onChange({ search: debouncedSearch, filters, category });
    }
  }, [debouncedSearch]);
  const handleSearch = (value: string) => {
    setSearch(value);
    // onChange handled in useEffect to accomodate debounces
  };

  const handleFilter = (type: Filters) => () => {
    setFilters((current) => {
      let newValue: Filters[] = [];

      if (current?.includes(type)) {
        newValue = current.filter((item) => item !== type);
      } else {
        newValue = [...current, type];
      }
      onChange({ search, filters: newValue, category });
      return newValue;
    });
  };

  const handleSetCategory = (category: (typeof categories)[number]) => {
    setCategory(category);
    setSearch("");
    onChange({ search: "", filters, category });
  };

  return (
    <>
      <div className="items-end grid grid-cols-[2fr_1fr] gap-8 pb-6 max-md:grid-cols-1 max-md:gap-6 max-md:mb-2">
        <SearchBar
          onSearch={handleSearch}
          value={search}
          placeholder="Search by Name"
          label={"Name"}
        />
        <div>
          <p className="mb-2 text-white">Search Category</p>
          <Dropdown
            placeholder="Select Category"
            data={categories}
            onSelect={handleSetCategory}
          />
        </div>
      </div>
      <div className="flex gap-4 items-center max-sm:flex-col max-sm:items-start">
        <div>
          <p className="text-white">Filters</p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Badge
            hoverable
            onClick={handleFilter("independent")}
            highlight={filters.includes("independent")}
          >
            Independent
          </Badge>
          <Badge
            hoverable
            onClick={handleFilter("not independent")}
            highlight={filters.includes("not independent")}
          >
            Not Independent
          </Badge>
        </div>
      </div>{" "}
    </>
  );
}
