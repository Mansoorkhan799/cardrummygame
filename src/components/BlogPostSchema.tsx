import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { BLOG_SCHEMA_DATA } from "@/lib/blogSchemas";
import { safeJsonLd } from "@/lib/safeJsonLd";

const BASE = "https://cardrummygame.com.pk";

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  breadcrumbOnly?: boolean;
  /** Key summary or first 2-3 paragraphs for AI parsing and articleBody */
  articleBody?: string;
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = `${BASE}/card-rummy-game-win-real-money-2026.webp`,
  breadcrumbOnly = false,
  articleBody,
}: BlogPostSchemaProps) {
  const url = `${BASE}/blog/${slug}`;
  const extras = BLOG_SCHEMA_DATA[slug];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ];

  if (!breadcrumbOnly) {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: title,
      description,
      url,
      image,
      author: { "@type": "Organization", name: "Card Rummy", url: BASE },
      publisher: {
        "@type": "Organization",
        name: "Card Rummy",
        logo: {
          "@type": "ImageObject",
          url: `${BASE}/card-rummy-game-win-real-money-2026.webp`,
          ...imageObjectLicensing,
          creditText: "Card Rummy logo",
        },
      },
      datePublished,
      dateModified: dateModified || datePublished,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: "en-US",
      ...(articleBody && { articleBody }),
    });

    if (extras?.howTo) {
      graph.push({
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: extras.howTo.name,
        description: extras.howTo.description || description,
        ...(extras.howTo.totalTime && { totalTime: extras.howTo.totalTime }),
        step: extras.howTo.steps.map((step) => ({
          "@type": "HowToStep",
          name: step.name,
          text: step.text,
        })),
      });
    }

    if (extras?.faq?.length) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: extras.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      });
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLd({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
