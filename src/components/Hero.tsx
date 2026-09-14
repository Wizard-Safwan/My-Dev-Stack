import bannerStack from "../assets/banner-stack.png";

function Hero() {
  const scrollToTechnologies = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        {/* Hero Content */}
        <div className="w-full">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-5xl xl:text-6xl">
            Build Your Ideal
            <span className="mt-1 block">
              <span className="brand-gradient-text inline-block whitespace-nowrap">
                Development Stack
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Hero Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={scrollToTechnologies}
              className="brand-gradient rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore Technologies
            </button>

            <button
              type="button"
              onClick={scrollToTechnologies}
              className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Development technology stack illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;