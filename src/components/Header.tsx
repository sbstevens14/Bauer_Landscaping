import Image from "next/image";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label={site.business}>
          <Image
            src={asset("/images/logo.jpg")}
            alt={site.business}
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
          <span className="hidden text-xs font-medium uppercase tracking-widest text-zinc-500 sm:inline">
            {site.city}, {site.state}
          </span>
        </a>
        <a
          href={`tel:${site.phoneTel}`}
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="hidden sm:inline">Call</span>
          <span>{site.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
