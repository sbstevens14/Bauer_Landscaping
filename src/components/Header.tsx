import Image from "next/image";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import PhoneLink from "./PhoneLink";

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
        <PhoneLink variant="headerButton" />
      </div>
    </header>
  );
}
