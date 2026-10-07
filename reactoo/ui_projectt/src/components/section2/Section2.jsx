const Section2 = () => {
  return (
    <section className="min-h-screen bg-[#dfe5eb] px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1250px] overflow-hidden rounded-[28px] bg-white px-6 py-6 shadow-[0_25px_70px_rgba(0,0,0,0.12)] md:px-10 md:py-8">
        {/* Top information */}
        <div className="mb-12 flex items-center justify-between">
          <div className="rounded-full bg-black px-4 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              Market Trends
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Digital Banking Platform
            </span>

            <span className="text-sm">↘</span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="max-w-[500px] text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-black sm:text-5xl md:text-[58px]">
                E-com market
                <br />
                is expected
                <br />
                to grow
              </h2>

              <p className="mt-7 max-w-[360px] text-sm leading-6 text-neutral-500">
                The digital banking and e-commerce ecosystem continues to
                evolve as customers increasingly expect simple, accessible
                and personalized financial experiences.
              </p>
            </div>

            <div className="mt-12 text-5xl">↗</div>
          </div>

          {/* Right visual */}
          <div className="relative min-h-[450px] overflow-hidden rounded-[28px] bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
              alt="Digital banking"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Digital Economy
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black">
                  2026
                </span>
              </div>

              <h3 className="max-w-[500px] text-3xl font-semibold leading-tight text-white md:text-4xl">
                A new generation of digital financial experiences.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;