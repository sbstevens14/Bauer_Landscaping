export const site = {
  business: "Bauer Landscaping Services",
  ownerFirstName: "Larry",
  city: "Wildwood",
  state: "MO",
  zip: "63069",
  serviceArea: "Wildwood and surrounding West St. Louis County",
  phoneDisplay: "(636) 393-9159",
  phoneTel: "+16363939159",
  facebookUrl: "https://www.facebook.com/larrybauer62/",
  email: "",
  hours: "",
  yearsInBusiness: "",
  tagline: "Design to maintenance — we handle the entire process.",
  heroHeadline: "Wildwood's trusted landscaping crew.",
  heroSubhead:
    "Family-run, locally-known. From weekly mowing to mulch beds and seasonal cleanups, we get your yard looking its best and keep it that way all season.",
  ctaNote: "Free estimates · call or text",
};

export const services = [
  {
    title: "Lawn mowing & maintenance",
    body:
      "Weekly or biweekly mowing, edging, and trimming. Clean cuts, reliable schedule, no surprises.",
    icon: "mower",
  },
  {
    title: "Mulching & landscape beds",
    body:
      "Mulch installation, bed redefinition, shrub trimming, and seasonal cleanups that keep your beds looking fresh.",
    icon: "leaf",
  },
  {
    title: "Hardscaping",
    body:
      "Patios, walkways, retaining walls, and stone work — built to last and to fit the look of your home.",
    icon: "stone",
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];
