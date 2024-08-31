export default function WhyUs() {
  return (
    <section className="section mt-24">
      <h2 className="text-4xl text-white mb-12 border-b-[1px] border-slate-700 pb-8">
        What Do We Offer?
      </h2>
      <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <article>
          <i className="bx bx-search text-xl text-white p-3 border border-slate-500 w-12 h-12 flex items-center justify-center rounded-md "></i>
          <h3 className="text-xl text-white mt-6">World Wide Search.</h3>
          <p className="mt-4 text-slate-500 leading-[200%]">
            Discover detailed insights about countries worldwide with an
            easy-to-use platform designed for students
          </p>
        </article>
        <article>
          <i className="bx bx-filter text-xl text-white p-3 border border-slate-500 w-12 h-12 flex items-center justify-center rounded-md "></i>
          <h3 className="text-xl text-white mt-6">Advanced Filtering.</h3>
          <p className="mt-4 text-slate-500 leading-[200%]">
            Find the country information you need quickly and efficiently with
            our advanced filtering options.
          </p>
        </article>
        <article>
          <i className="bx bx-map text-xl text-white p-3 border border-slate-500 w-12 h-12 flex items-center justify-center rounded-md "></i>
          <h3 className="text-xl text-white mt-6">Built In Map</h3>
          <p className="mt-4 text-slate-500 leading-[200%]">
            Explore countries around the world with our built-in map feature,
            providing a visual representation of data.
          </p>
        </article>
      </div>
    </section>
  );
}
