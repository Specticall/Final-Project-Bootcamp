import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function About() {
  const navigate = useNavigate();
  return (
    <main className="section mt-24 pb-12">
      <section className="border-b relative border-slate-700 pb-16 mb-32 max-xl:mb-16 max-sm:mb-0">
        <h1 className="text-[clamp(2.5rem,10vw,4rem)] text-white max-w-[50rem] leading-[120%]">
          Helping users discover new wonders around the world.
        </h1>
        <div className="bg-white rounded-full p-8 absolute w-40 aspect-square flex items-center justify-center right-32 bottom-[-4rem] max-xl:hidden">
          <i className="bx bx-globe text-[3.5rem]"></i>
        </div>
      </section>
      <div className="grid grid-cols-[3fr_5fr] gap-8 max-md:grid-cols-1">
        <div className="mt-16">
          <h2 className="text-white text-4xl mb-8">About Us</h2>
          <p className="text-slate-500 leading-[200%] mt-8">
            WorldUniversity is a platform by PT World University that helps
            students access detailed information about countries, including data
            search, flags, locations, and filters. It aims to provide a
            user-friendly and informative experience
          </p>
          <Button
            variant={"light"}
            className="rounded-full w-fit px-12 mt-8 max-sm:mb-12"
            onClick={() => navigate("/explore")}
          >
            Get Started
          </Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1468950487387-88b8240b0166?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-[40rem] object-cover rounded-md max-sm:h-[20rem]"
          alt="img"
        />
      </div>
    </main>
  );
}
