import { services, type ServiceIcon } from "@/lib/site";

function Icon({ name }: { name: ServiceIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-7 w-7",
    "aria-hidden": true,
  };
  if (name === "mower") {
    return (
      <svg {...common}>
        <path d="M3 14h13l2-4h3" />
        <circle cx="6" cy="18" r="2.2" />
        <circle cx="17" cy="18" r="2.2" />
        <path d="M9 10V6h5v4" />
      </svg>
    );
  }
  if (name === "leaf") {
    return (
      <svg {...common}>
        <path d="M5 19c0-8 6-14 16-14 0 10-6 16-14 16-1 0-2 0-2-2z" />
        <path d="M5 19c4-4 8-7 14-9" />
      </svg>
    );
  }
  // stone
  return (
    <svg {...common}>
      <path d="M3 18h18" />
      <rect x="3" y="14" width="6" height="4" rx="1" />
      <rect x="10" y="14" width="5" height="4" rx="1" />
      <rect x="16" y="14" width="5" height="4" rx="1" />
      <rect x="5" y="10" width="5" height="4" rx="1" />
      <rect x="11" y="10" width="6" height="4" rx="1" />
      <rect x="7" y="6" width="6" height="4" rx="1" />
      <rect x="14" y="6" width="5" height="4" rx="1" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            What we do
          </h2>
          <p className="mt-3 text-base text-zinc-600 sm:text-lg">
            Three core services. All done right, on time, and at a fair price.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-zinc-200 bg-brand-50/40 p-6 transition-colors hover:border-brand-500/30 hover:bg-brand-50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Icon name={s.icon} />
              </div>
              <h3 className="text-lg font-semibold text-brand-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
