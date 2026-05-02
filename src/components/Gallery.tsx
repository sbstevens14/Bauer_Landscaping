import Image from "next/image";
import { asset } from "@/lib/asset";

const photos = [
  { src: "/images/work-01.jpg", alt: "Striped backyard with stand-on mower" },
  { src: "/images/work-02.jpg", alt: "Large striped backyard with fence" },
  { src: "/images/work-03.jpg", alt: "Estate lawn beside a brick home" },
];

export default function Gallery() {
  return (
    <section id="work" className="bg-earth-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Recent work
          </h2>
          <p className="mt-3 text-base text-zinc-600 sm:text-lg">
            A small sample from yards around Wildwood.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <div
              key={p.src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200"
            >
              <Image
                src={asset(p.src)}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
