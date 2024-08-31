import Navbar from "@/components/general/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="w-full [&>*]:w-full flex flex-col  pb-4 min-h-screen bg-black">
      <Navbar />
      <Outlet />
      <div className="flex-1 "></div>
      <div className="max-sm:flex-col max-sm:text-start max-sm:items-start max-sm:gap-6 flex items-center mt-12 justify-between section">
        <p className="text-slate-700">World Univeristy © 2024 </p>
        <p className="text-slate-700 ">
          Design & Developed by Joseph Christian Yusmita{" "}
        </p>
      </div>
    </div>
  );
}
