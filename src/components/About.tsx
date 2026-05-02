import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
          About {site.business}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
          <p>
            {site.business} is a family-run landscaping business based in{" "}
            {site.city}, {site.state}. {site.ownerFirstName} and his crew take
            pride in showing up when promised, doing thorough work, and treating
            every yard like it&rsquo;s their own.
          </p>
          <p>
            We serve {site.serviceArea}. If you&rsquo;re nearby and need lawn
            care, mulch, or hardscaping, give us a call &mdash; we&rsquo;re
            happy to come take a look and put together a no-pressure quote.
          </p>
        </div>
      </div>
    </section>
  );
}
