import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = {
  placeholder: string;
  value: string;
  onSearch: (value: string) => void;
  label?: string;
};

export default function SearchBar({
  placeholder,
  value,
  label,
  onSearch,
  ...props
}: Props & HTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <p className="text-white mb-3">{label}</p>
      <div className="relative">
        <input
          {...props}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
          className={cn(
            "bg-transparent border border-slate-700 rounded-md px-5 pl-12 py-3 w-full text-white outline-none focus:border-white transition-all duration-100",
            props.className
          )}
        ></input>
        <i className="bx bx-search-alt-2 text-slate-400 text-lg absolute left-5 top-[50%] translate-y-[-50%]"></i>
      </div>
    </div>
  );
}
