import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";

type Props<T extends string> = {
  data: readonly T[];
  placeholder?: string;
  onSelect?: (value: T) => void;
  className?: string;
};

export default function Dropdown<T extends string>({
  data,
  placeholder,
  onSelect,
  className,
}: Props<T>) {
  const [selected, setSelected] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger
        className={cn(
          "bg-transparent border border-slate-700 rounded-md px-5 py-3 h-fit w-full text-white outline-none hover:border-white flex items-center justify-between transition-all duration-100 ",
          className
        )}
      >
        <p>{selected || placeholder || "Select Value"}</p>
        <i className="text-2xl bx bx-chevron-down leading-[100%]"></i>
      </PopoverTrigger>
      <PopoverContent
        style={{ width: "var(--radix-popover-trigger-width)" }}
        className="bg-black border-slate-700 py-0 px-0 p-2 rounded-md"
      >
        {data.map((item, i) => {
          return (
            <div
              key={`${i}${item}`}
              className={cn(
                "text-slate-500 py-2 px-4 rounded-sm transition-all duration-100 cursor-pointer",
                item === selected
                  ? "text-white bg-gray-800"
                  : "hover:bg-gray-900"
              )}
              onClick={() => {
                if (onSelect) onSelect(item);
                setSelected(item);
                setIsOpen(false);
              }}
            >
              {item}
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
