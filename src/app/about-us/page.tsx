import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About Card Rummy - Pakistan\'s Premier Card Gaming Platform',
  description: 'Learn about Card Rummy, our history, mission, and vision for creating the best card gaming platform in Pakistan with Teen Patti, Rummy and more.',
  keywords: ['Card Rummy about', 'about us', 'gaming company Pakistan', 'Card Rummy history', 'card gaming platform', 'Teen Patti', '3 Patti'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://cardrummygame.com.pk/about-us",
  },
  openGraph: {
    title: 'About Card Rummy - Pakistan\'s Premier Card Gaming Platform',
    description: 'Learn about Card Rummy, our history, mission, and vision for creating the best card gaming platform in Pakistan with real cash rewards.',
    url: "https://cardrummygame.com.pk/about-us",
    siteName: "Card Rummy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp",
        width: 1200,
        height: 630,
        alt: "About Card Rummy - Premier Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Card Rummy - Pakistan\'s Premier Card Gaming Platform',
    description: 'Learn about Card Rummy, our history, mission, and vision for creating the best card gaming platform in Pakistan with real cash rewards.',
    images: ["https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp"],
  },
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-full px-4 py-1 text-[#FFC107] text-sm font-medium mb-4">
              Pakistan&apos;s #1 Card Gaming Resource
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Us</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Independent reviewers and developers dedicated to honest, tested information about Card Rummy for Pakistani players.
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                <Link href="/" className="block">
                  <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] mx-auto rounded-2xl overflow-hidden bg-[#0A1029] border border-gray-800">
                    <Image
                      src="/card-rummy-game-2026.webp"
                      alt="Card Rummy – Pakistan's Premier Card Gaming Platform"
                      title="About Card Rummy – Pakistan's #1 Card Game App"
                      width={300}
                      height={300}
                      sizes="(max-width: 768px) 260px, 300px"
                      className="object-contain p-4 w-full h-full"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="md:w-2/3 space-y-5">
                <h2 className="text-2xl font-bold text-white">Who We Are</h2>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">cardrummygame.com.pk</strong> is an independent review and resource platform built by a small team of Pakistani developers and gaming enthusiasts. We exist for one reason: to give Pakistani players honest, verified, and up-to-date information about <Link href="/" className="text-[#FFC107] hover:underline font-semibold">Card Rummy</Link> — without the fluff.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Every guide on this site is based on real testing. Our 14-day live test on a <strong className="text-white">Vivo Y200</strong> involved depositing <strong className="text-white">PKR 1,000</strong>, playing Mines, Dragon vs Tiger, and Crash, and completing <strong className="text-white">2× PKR 500 withdrawals</strong> via JazzCash and EasyPaisa — so you know exactly what to expect before you play.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {[
                    { stat: '500K+', label: 'Active Users' },
                    { stat: '41', label: 'In-Depth Guides' },
                    { stat: '14 Days', label: 'Live Test Period' },
                  ].map(({ stat, label }) => (
                    <div key={label} className="bg-[#0A1029] border border-gray-800 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#FFC107]">{stat}</div>
                      <div className="text-xs text-gray-400 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="bg-gradient-to-r from-[#0A1029] to-[#0d1540] border border-gray-700 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-center max-w-2xl mx-auto mb-6">
              We believe Pakistani players deserve clear, reliable answers — not marketing copy. Our mission is to be the most trustworthy independent source for Card Rummy information: from download guides and payment tutorials to honest safety reviews and responsible gaming advice.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { icon: '✓', title: 'Always Honest', desc: 'We publish pros and cons, not just praise.' },
                { icon: '✓', title: 'Always Tested', desc: 'Real money, real withdrawals, real results.' },
                { icon: '✓', title: 'Always Updated', desc: 'Guides reflect the latest version and limits.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-[#06091F] border border-gray-800 rounded-xl p-4 text-center">
                  <div className="text-[#FFC107] font-bold text-lg mb-1">{icon} {title}</div>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">
              Have a question or found something inaccurate?{' '}
              <Link href="/contact-us" className="text-[#FFC107] hover:underline font-semibold">Contact us</Link> — we read and respond to every message.
            </p>
          </div>
          
          {/* Team Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">Meet Our Team</h2>
            <p className="text-center text-gray-400 mb-10">The people behind cardrummygame.com.pk — testing, reviewing, and writing every guide you read.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Ali Anwar — Senior */}
              <div className="bg-secondary rounded-2xl border border-gray-800 p-8 flex flex-col items-center text-center hover:border-accent/30 transition-colors">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent mb-5 shadow-xl">
                  <Image
                    src="/ali-anwar.webp"
                    alt="Ali Anwar — Senior Developer & Lead Reviewer at cardrummygame.com.pk"
                    title="Ali Anwar — Senior Developer, Card Rummy Game Pakistan"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Ali Anwar</h3>
                <span className="inline-block bg-accent/10 border border-accent/30 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Senior Developer &amp; Lead Reviewer
                </span>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Ali Anwar is the senior developer and lead content reviewer at cardrummygame.com.pk. With over 5 years of experience in Android gaming apps and real-money platforms, Ali oversees all technical content, verifies withdrawal claims, and ensures every guide published on the site is accurate and up to date. He personally approved the 14-day Card Rummy test results featured on the homepage. Ali&apos;s expertise covers app security, payment integrations, and the Pakistani gaming market.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  {['App Security', 'Payment Systems', 'Content Review', 'Android Dev'].map(tag => (
                    <span key={tag} className="bg-[#0A1029] text-gray-400 text-xs px-3 py-1 rounded-full border border-gray-700">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Sohail Ahmed — Junior */}
              <div className="bg-secondary rounded-2xl border border-gray-800 p-8 flex flex-col items-center text-center hover:border-accent/30 transition-colors">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#60a5fa] mb-5 shadow-xl">
                  <Image
                    src="/sohail-ahmed.webp"
                    alt="Sohail Ahmed — Junior Developer & Gaming App Reviewer at cardrummygame.com.pk"
                    title="Sohail Ahmed — Junior Developer, Card Rummy Game Pakistan"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Sohail Ahmed</h3>
                <span className="inline-block bg-blue-900/20 border border-blue-700/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Junior Developer &amp; App Reviewer
                </span>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Sohail Ahmed is the junior developer and hands-on app reviewer at cardrummygame.com.pk. He is the person behind the real-world testing you read across this site — including the 14-day Card Rummy test where he deposited PKR 1,000 on a Vivo Y200, played Mines, Dragon vs Tiger, and Crash, and requested 2 live PKR 500 withdrawals to measure real payout speeds. Sohail specialises in user experience testing, writing step-by-step guides, and making complex gaming topics easy to understand for Pakistani players.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  {['App Testing', 'UX Review', 'Content Writing', 'Game Guides'].map(tag => (
                    <span key={tag} className="bg-[#0A1029] text-gray-400 text-xs px-3 py-1 rounded-full border border-gray-700">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We&apos;re here to help! Contact our team for any information or queries about Card Rummy.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Card Rummy",
              "alternateName": "3 Patti Card Rummy",
              "url": "https://cardrummygame.com.pk",
              "logo": "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp",
              "description": "Card Rummy is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and more with real cash rewards.",
              "foundingDate": "2024",
              "foundingLocation": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "sameAs": [
                "https://facebook.com/cardrummy",
                "https://twitter.com/cardrummy"
              ],
              "founder": {
                "@type": "Person",
                "name": "Erio Card Rummy Dev"
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "Ali Anwar",
                  "jobTitle": "Senior Developer & Lead Reviewer",
                  "image": "https://cardrummygame.com.pk/ali-anwar.webp",
                  "description": "Senior developer and lead content reviewer at cardrummygame.com.pk with 5+ years of experience in Android gaming apps and real-money platforms.",
                  "worksFor": { "@type": "Organization", "name": "Card Rummy Game", "url": "https://cardrummygame.com.pk" }
                },
                {
                  "@type": "Person",
                  "name": "Sohail Ahmed",
                  "jobTitle": "Junior Developer & App Reviewer",
                  "image": "https://cardrummygame.com.pk/sohail-ahmed.webp",
                  "description": "Junior developer and hands-on app reviewer who conducted the 14-day Card Rummy real-money test featured on cardrummygame.com.pk.",
                  "worksFor": { "@type": "Organization", "name": "Card Rummy Game", "url": "https://cardrummygame.com.pk" }
                }
              ]
            },
            "about": {
              "@type": "Thing",
              "name": "Card Gaming Platform",
              "description": "Online card gaming platform with real cash rewards serving Pakistani users"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://cardrummygame.com.pk/about-us"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cardrummygame.com.pk" },
                  { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://cardrummygame.com.pk/about-us" }
                ]
              },
              {
                "@type": "Person",
                "@id": "https://cardrummygame.com.pk/about-us#sohail-ahmed",
                "name": "Sohail Ahmed",
                "jobTitle": "Gaming App Reviewer",
                "image": "https://cardrummygame.com.pk/sohail-ahmed.webp",
                "worksFor": { "@type": "Organization", "name": "Card Rummy Game Pakistan", "url": "https://cardrummygame.com.pk" },
                "url": "https://cardrummygame.com.pk/about-us"
              },
              {
                "@type": "Person",
                "@id": "https://cardrummygame.com.pk/about-us#ali-anwar",
                "name": "Ali Anwar",
                "jobTitle": "Senior Editor",
                "image": "https://cardrummygame.com.pk/ali-anwar.webp",
                "worksFor": { "@type": "Organization", "name": "Card Rummy Game Pakistan", "url": "https://cardrummygame.com.pk" },
                "url": "https://cardrummygame.com.pk/about-us"
              },
              {
                "@type": "AboutPage",
                "name": "About Card Rummy Game Pakistan",
                "url": "https://cardrummygame.com.pk/about-us",
                "author": { "@id": "https://cardrummygame.com.pk/about-us#sohail-ahmed" },
                "reviewedBy": { "@id": "https://cardrummygame.com.pk/about-us#ali-anwar" }
              }
            ]
          })
        }}
      />
    </article>
  );
} 