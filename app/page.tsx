
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#87351E] text-[#FFF5E8]">

      {/* NAVIGATION */}
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 border-b border-white/20 px-5 py-4">
        <Link
          href="/"
          className="shrink-0 font-serif text-3xl"
        >
          TB
        </Link>

        <div className="flex items-center gap-4 text-[11px] tracking-wider sm:gap-8 sm:text-sm">
          <Link
            href="/"
            className="border-b border-white pb-1"
          >
            HOME
          </Link>

          <Link
            href="/resume"
            className="border-b border-transparent pb-1 transition hover:border-white"
          >
            RÉSUMÉ
          </Link>

          <Link
            href="/contact"
            className="border-b border-transparent pb-1 transition hover:border-white"
          >
            CONTACT
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-8 sm:py-12">

        {/* PROFESSION */}
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#F0CCB8]">
          Chicago · Hospitality Professional
        </p>

        {/* MAIN TITLE */}
        <h1 className="font-serif text-[clamp(3.4rem,13vw,6.5rem)] leading-[0.95] tracking-tight">
          TYLER
          <br />
          BATTEN
        </h1>

        {/* DIVIDER */}
        <div className="my-5 h-px w-16 bg-[#E7BFA9]" />

        {/* INTRODUCTION */}
        <p className="max-w-md text-[15px] leading-6 text-[#F4DDD0] sm:text-base sm:leading-7">
          Hospitality professional with over six years of
          experience in upscale craft cocktail bars and
          high-volume restaurants. Skilled in bartending,
          guest service, and bar operations. Currently
          seeking new opportunities in Chicago where I can
          bring my experience, passion for hospitality,
          and commitment to exceptional service.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">

          <Link
            href="/resume"
            className="flex min-h-12 items-center justify-center bg-[#FFF5E8] px-7 text-sm font-semibold tracking-widest text-[#87351E] transition hover:bg-white"
          >
            VIEW RÉSUMÉ
          </Link>

          <Link
            href="/contact"
            className="flex min-h-12 items-center justify-center border border-[#FFF5E8] px-7 text-sm tracking-widest transition hover:bg-white/10"
          >
            CONTACT ME
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-4 text-center text-xs tracking-wider text-[#E7BFA9]">
        © 2026 Tyler Batten
      </footer>

    </main>
  );
}
