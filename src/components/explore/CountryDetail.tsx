import { cn } from "@/lib/utils";
import Skeleton from "react-loading-skeleton";

type Props = {
  data: {
    icon: string;
    title: string;
    value?: string;
  };
};

export default function CountryDetail({ data }: Props) {
  return (
    <div className="grid grid-cols-[auto_5.5rem_1fr] items-center gap-2">
      <i
        className={cn("bx text-slate-400 text-lg", data.icon || "bx-user")}
      ></i>
      <p className="text-slate-400">{data.title}</p>
      <p className="text-white">
        {data?.value || <Skeleton className="min-w-[10rem]" />}
      </p>
    </div>
  );
}
