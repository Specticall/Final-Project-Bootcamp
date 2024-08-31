import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <section className="section relative">
        <h1 className="text-[clamp(3rem,7vw,5rem)] relative z-10 text-white leading-[120%] max-w-[60rem]">
          Explore the World with <br className="max-md:hidden"></br> World
          University.
        </h1>
        <div className="h-[50rem] w-[1px] absolute bg-slate-600 right-[29.5rem] top-[-20rem] rotate-[-15deg] max-xl:right-[15rem]"></div>
        <div className="h-[50rem] w-[1px] absolute bg-slate-600 right-[29.5rem] top-[-20rem] rotate-[-35deg] max-xl:right-[15rem]"></div>
        <Button
          variant={"light"}
          className="w-fit rounded-full mt-10 px-12 relative z-10"
          onClick={() => navigate("/explore")}
        >
          Get Started
        </Button>
      </section>
      <section className="h-[40rem]  grid grid-cols-4 grid-rows-2 mt-24 relative z-10 [&>img]:w-full [&>img]:h-full [&>img]:object-cover max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:h-[35rem]">
        <img
          src="https://images.unsplash.com/photo-1468950487387-88b8240b0166?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="row-span-2 col-span-2 max-xl:col-span-1 max-md:hidden"
        ></img>
        <img src="https://images.unsplash.com/photo-1547566420-c0036b49cb8d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <img src="https://images.unsplash.com/photo-1522547902298-51566e4fb383?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <img src="https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      </section>
    </>
  );
}
