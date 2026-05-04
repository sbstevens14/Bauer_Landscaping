"use client";

import { useEffect, useState } from "react";

// ASCII codes for the 10 digits of the phone number, stored individually so
// the literal number string never appears in any built JS chunk. Decoded only
// at runtime inside useEffect, which prevents the bundler from constant-folding
// the fragments back into a recognizable phone number.
const CODES = [54, 51, 54, 51, 57, 51, 57, 49, 53, 57];

type Variant = "headerButton" | "heroButton" | "footerLarge";

interface Props {
  variant: Variant;
}

const PhoneIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function PhoneLink({ variant }: Props) {
  const [phone, setPhone] = useState<{ display: string; tel: string } | null>(
    null,
  );

  useEffect(() => {
    const digits = CODES.map((c) => String.fromCharCode(c)).join("");
    setPhone({
      display: `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`,
      tel: `+1${digits}`,
    });
  }, []);

  if (variant === "headerButton") {
    const baseClass =
      "inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700";
    if (!phone) {
      return (
        <span className={baseClass} aria-hidden>
          <PhoneIcon className="h-4 w-4" />
          <span>Call or text</span>
        </span>
      );
    }
    return (
      <a href={`tel:${phone.tel}`} className={baseClass}>
        <PhoneIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Call</span>
        <span>{phone.display}</span>
      </a>
    );
  }

  if (variant === "heroButton") {
    const baseClass =
      "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50";
    if (!phone) {
      return (
        <span className={baseClass} aria-hidden>
          <PhoneIcon className="h-5 w-5" />
          Call or text for a free quote
        </span>
      );
    }
    return (
      <a href={`tel:${phone.tel}`} className={baseClass}>
        <PhoneIcon className="h-5 w-5" />
        Call {phone.display}
      </a>
    );
  }

  // footerLarge
  const baseClass =
    "mt-3 inline-block text-3xl font-bold tracking-tight hover:text-white sm:text-4xl";
  if (!phone) {
    return (
      <span className={baseClass} aria-hidden>
        Call or text
      </span>
    );
  }
  return (
    <a href={`tel:${phone.tel}`} className={baseClass}>
      {phone.display}
    </a>
  );
}
