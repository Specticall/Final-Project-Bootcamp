import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

export default function Badge({
  children,
  highlight,
  hoverable,
  ...props
}: PropsWithChildren<
  { highlight?: boolean; hoverable?: boolean } & HTMLAttributes<HTMLDivElement>
>) {
  return (
    <div
      {...props}
      className={cn(
        "border border-slate-500 text-slate-200 transition-all duration-100 px-6 py-1 rounded-full",
        hoverable && "hover:bg-slate-800 cursor-pointer",
        highlight && "bg-white text-900 border-white hover:bg-white",
        props.className
      )}
    >
      {children}
    </div>
  );
}
