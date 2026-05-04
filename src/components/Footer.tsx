import { site } from "@/lib/site";
import PhoneLink from "./PhoneLink";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="border-t border-brand-700/40 bg-brand-900 text-brand-50"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:grid-cols-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-brand-100/80">
            Get in touch
          </p>
          <PhoneLink variant="footerLarge" />
          <p className="mt-3 text-sm text-brand-100/80">
            Call or text. We answer evenings too.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-brand-100/80">
            Service area
          </p>
          <p className="mt-3 text-base">{site.serviceArea}</p>
          <p className="mt-1 text-sm text-brand-100/80">
            {site.city}, {site.state} {site.zip}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-brand-100/80">
            Find us
          </p>
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-base hover:text-white"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
            </svg>
            Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-brand-700/40">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-brand-100/60 sm:px-6">
          &copy; {year} {site.business}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
