
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(
        "https://formspree.io/f/xppqgjqa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            message: message.trim(),
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#F8F0E5] text-[#87351E]">

      {/* NAVIGATION */}
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 border-b border-[#87351E]/20 px-5 py-4">

        <Link
          href="/"
          className="shrink-0 font-serif text-3xl"
        >
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
            className="border-b border-transparent pb-1 hover:border-[#87351E]"
          >
            RÉSUMÉ
          </Link>

          <Link
            href="/contact"
            className="border-b border-[#87351E] pb-1"
            aria-current="page"
          >
            CONTACT
          </Link>

        </div>
      </nav>

      {/* CONTACT CONTENT */}
      <section className="mx-auto w-full max-w-5xl flex-1 px-6 py-8 sm:py-12">

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">

          {/* CONTACT INFORMATION */}
          <div>

            <h1 className="whitespace-nowrap font-serif text-[clamp(2rem,8vw,3.5rem)] leading-tight">
              GET IN TOUCH
            </h1>

            <div className="my-5 h-px w-16 bg-[#87351E]/50" />

            <p className="max-w-sm text-[15px] leading-6 text-[#98533E]">
              Currently seeking new opportunities in
              Chicago&apos;s hospitality industry. I&apos;m
              always happy to connect, discuss potential
              positions, or learn more about your team.
              Let&apos;s get in touch!
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-6 space-y-4">

              <div>
                <p className="mb-1 text-xs font-semibold tracking-widest">
                  EMAIL
                </p>

                <a
                  href="mailto:tylerbatten06@gmail.com"
                  className="break-all underline underline-offset-4"
                >
                  tylerbatten06@gmail.com
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold tracking-widest">
                  PHONE
                </p>

                <a
                  href="tel:+13199319605"
                  className="underline underline-offset-4"
                >
                  (319) 931-9605
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold tracking-widest">
                  LOCATION
                </p>

                <p>Chicago, Illinois</p>
              </div>

            </div>
          </div>

          {/* MESSAGE SECTION */}
          <div className="border border-[#D8B8A3] bg-[#FFF9F2] p-5 sm:p-6">

            <h2 className="mb-3 font-serif text-2xl sm:text-3xl">
              LEAVE A MESSAGE
            </h2>

            <p className="mb-4 text-sm leading-6 text-[#98533E]">
              Feel free to leave a message with your email
              address or phone number, and I&apos;ll reach out
              to you as soon as possible. I look forward
              to connecting!
            </p>

            {/* CONTACT FORM */}
            <form onSubmit={handleSubmit}>

              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold tracking-widest"
              >
                YOUR MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                required
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);

                  if (
                    status === "success" ||
                    status === "error"
                  ) {
                    setStatus("idle");
                  }
                }}
                placeholder="Write your message and contact information here..."
                className="w-full resize-y border border-[#D8B8A3] bg-transparent p-4 text-[#87351E] outline-none placeholder:text-[#A77C6A] focus:border-[#87351E]"
              />

              {/* SEND BUTTON */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 min-h-12 w-full bg-[#87351E] px-6 text-sm font-semibold tracking-widest text-[#FFF5E8] transition hover:bg-[#6F2B18] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? "SENDING..."
                  : "SEND MESSAGE"}
              </button>

              {/* SUCCESS MESSAGE */}
              {status === "success" && (
                <p
                  role="status"
                  className="mt-4 text-center text-sm font-medium text-green-700"
                >
                  Message sent successfully! Thank you
                  for reaching out. I&apos;ll be in touch soon.
                </p>
              )}

              {/* ERROR MESSAGE */}
              {status === "error" && (
                <p
                  role="alert"
                  className="mt-4 text-center text-sm font-medium text-red-700"
                >
                  Something went wrong. Please try again
                  or email me directly.
                </p>
              )}

            </form>

            <p className="mt-3 text-center text-xs leading-5 text-[#98533E]">
              Your message will be sent directly and securely.
            </p>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-4 text-center text-xs tracking-wider text-[#87351E]/70">
        © 2026 Tyler Batten
      </footer>

    </main>
  );
}
