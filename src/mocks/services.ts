export type ServicesDataType = {
  name: string;
  description: string;
  discountedPrice : number;
  price: number;
  type: "one-time" | "monthly" | "yearly",
  role: string;
  included : string[]
}

export const directorySubmission: ServicesDataType = {
  name: 'Directory Submission',
  description: "Building a strong backlink profile is a crucial for SEO Success. Manual directory submissions ensure your website is listed in reputable online directories, signalling credibility to search engines and driving referal traffic.",
  discountedPrice: 500,
  price: 800,
  type: "one-time",
  role: "Boost DR",
  included: ["Manual Submission to 350+ directories", "Improved domain authority", "High quality-relevant backlinks","Increased website visibility and traffic"]
}

export const humanCuratedService: ServicesDataType = {
  name: 'Managed Service',
  description: "AI is great at creating content, but it can't replace the human touch. Our SEO experts understand the subtle nuances of search intent, keep tabs on your competitors, and stay on top algoritm changes.",
  discountedPrice: 990,
  price: 1600,
  type: "monthly",
  role: "Human-powered",
  included: ["Keywords placed strategically by humans", "Content polished by real editors", "Titles and descriptions double checked by SEO Spesialists","Real humans help you boost the SEO"]
}
