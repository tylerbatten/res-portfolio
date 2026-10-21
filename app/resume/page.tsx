
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#F8F0E5] text-[#87351E]">

      {/* NAVIGATION */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 border-b border-[#87351E]/20 px-5 py-4">
        <Link href="/" className="shrink-0 font-serif text-3xl">
          TB
        </Link>

        <div className="flex items-center gap-4 text-[11px] tracking-wider sm:gap-8 sm:text-sm">
          <Link
            href="/"
            className="border-b border-transparent pb-1 hover:border-[#87351E]"
          >
            HOME
          </Link>

          <Link
            href="/resume"
            className="border-b border-[#87351E] pb-1"
            aria-current="page"
          >
            RÉSUMÉ
          </Link>

          <Link
            href="/contact"
            className="border-b border-transparent pb-1 hover:border-[#87351E]"
          >
            CONTACT
          </Link>
        </div>
      </nav>

      {/* RÉSUMÉ CONTENT */}
      <section className="mx-auto max-w-5xl px-4 py-7 sm:px-8 sm:py-10">

        {/* PAGE HEADING */}
        <div className="mb-5 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.2em]">
            Professional Experience
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl">
            RÉSUMÉ
          </h1>

          <div className="mx-auto mt-4 h-px w-16 bg-[#87351E]/50" />
        </div>

        {/* PDF FRAME */}
        <div className="mx-auto max-w-3xl border border-[#D8B8A3] bg-white p-1 shadow-lg sm:p-3">
          <iframe
            src="/resume.pdf#toolbar=0"
            title="Tyler Batten Resume"
            className="h-[58svh] min-h-[380px] w-full bg-white sm:h-[780px]"
          />
        </div>

        {/* RESUME BUTTONS */}
        <div className="mt-5 flex flex-col items-center gap-3">
          <a
            href="/resume.pdf"
            download="Tyler_Batten_Resume.pdf"
            className="flex min-h-12 w-full max-w-xs items-center justify-center bg-[#87351E] px-7 text-center text-sm font-semibold tracking-widest text-[#FFF5E8] transition hover:bg-[#6F2B18]"
          >
            DOWNLOAD RÉSUMÉ
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4"
          >
            Open PDF in New Tab
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-4 text-center text-xs tracking-wider text-[#87351E]/70">
        © 2026 Tyler Batten
      </footer>
    </main>
  );
}
