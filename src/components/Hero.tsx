import Image from "next/image";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-brand-900 text-white"
    >
      <Image
        src={asset("/images/hero.jpg")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-brand-900/40 via-brand-900/60 to-brand-900/85"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-100">
          {site.city}, {site.state} · {site.serviceArea}
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {site.heroHeadline}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-brand-50/90 sm:text-xl">
          {site.heroSubhead}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call {site.phoneDisplay}
          </a>
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
            </svg>
            Message on Facebook
          </a>
        </div>
        <p className="text-sm text-brand-50/80">{site.ctaNote}</p>
      </div>
    </section>
  );
}
