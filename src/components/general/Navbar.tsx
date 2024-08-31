import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const paths = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Explore",
    path: "/explore",
  },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="sticky left-0 bg-black z-[9999] right-0 top-0 h-[5rem] ">
      <div className="section flex items-center gap-6 h-full max-sm:justify-between">
        <div
          className="flex gap-2 items-center mr-4 max-sm:flex-1 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <i className="bx bx-globe text-white text-2xl"></i>
          <p className="text-white text-lg max-sm:hidden">World University</p>
        </div>
        {paths.map((item) => {
          return (
            <div key={item.display}>
              <p
                onClick={() => navigate(item.path)}
                className={cn(
                  "text-slate-400 hover:text-slate-200 transition-all duration-200 cursor-pointer",
                  pathname === item.path && "text-white"
                )}
              >
                {item.display}
              </p>
              <div
                className={cn(
                  "w-full h-[1px] bg-white mt-[1px] scale-0 origin-left transition-all duration-200",
                  pathname === item.path && "scale-100"
                )}
              ></div>
            </div>
          );
        })}{" "}
      </div>
    </nav>
  );
}
