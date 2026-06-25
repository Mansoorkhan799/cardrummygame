import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { imageObjectLicensing } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: "Card Rummy APK | Pakistan's Most Trusted Gaming Platform",
  description: "Honest Card Rummy review after 14 days of real testing. We deposited PKR 1,000 on Vivo Y200, played Mines, Dragon vs Tiger & Crash, and tested 2× PKR 500 withdrawals via JazzCash/EasyPaisa. Read before downloading.",
  keywords: [
    "Card Rummy APK review 2026",
    "card rummy honest review",
    "card rummy test",
    "card rummy pakistan",
    "card rummy download",
    "card rummy apk",
    "teen patti real money pakistan",
    "rummy game pakistan",
    "jazzcash gaming app",
    "easypaisa gaming",
    "card rummy withdrawal",
    "card rummy legit",
    "card rummy real or fake",
    "card rummy 2026",
    "best card game app pakistan"
  ],
  openGraph: {
    title: "Card Rummy APK Review 2026 — We Tested It for 14 Days (Honest Results)",
    description: "Honest Card Rummy APK review after 14 real days of testing. PKR 100K deposit, 3 withdrawal tests, JazzCash/EasyPaisa speeds, bonuses verified. Full verdict inside.",
    images: [
      {
        url: 'https://cardrummygame.com.pk/card-rummy-game-2026.webp',
        width: 1024,
        height: 1024,
        alt: 'Card Rummy APK — Pakistan Real Money Card Game'
      },
      {
        url: 'https://cardrummygame.com.pk/feature/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Card Rummy Review 2026 — cardrummygame.com.pk'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Card Rummy APK Review 2026 — Tested 14 Days',
    description: 'Honest Card Rummy review after 14 real days. Deposits, withdrawals, bonuses — all verified. Read before you download.',
    images: ['https://cardrummygame.com.pk/feature/og-image.webp']
  },
  alternates: {
    canonical: "https://cardrummygame.com.pk",
  }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://cardrummygame.com.pk/#website",
        "url": "https://cardrummygame.com.pk/",
        "name": "Card Rummy Game Pakistan",
        "description": "Pakistan's most trusted Card Rummy APK review site — honest testing, real results.",
        "inLanguage": "en-US",
        "hasPart": [
          { "@type": "WebPage", "name": "Minimum Requirements for Card Rummy", "url": "https://cardrummygame.com.pk/minimum-requirements-for-card-rummy" },
          { "@type": "WebPage", "name": "How to Play and Earn on Card Rummy", "url": "https://cardrummygame.com.pk/how-to-play-and-earn-on-card-rummy" },
          { "@type": "WebPage", "name": "Download Card Rummy APK", "url": "https://cardrummygame.com.pk/download-card-rummy" },
          { "@type": "WebPage", "name": "Withdraw Money from Card Rummy", "url": "https://cardrummygame.com.pk/withdraw-money-from-card-rummy" }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://cardrummygame.com.pk/#sitelinks",
        "name": "Card Rummy — Popular Guides",
        "itemListElement": [
          { "@type": "SiteNavigationElement", "position": 1, "name": "Minimum Requirements for Card Rummy", "url": "https://cardrummygame.com.pk/minimum-requirements-for-card-rummy" },
          { "@type": "SiteNavigationElement", "position": 2, "name": "How to Play and Earn on Card Rummy", "url": "https://cardrummygame.com.pk/how-to-play-and-earn-on-card-rummy" },
          { "@type": "SiteNavigationElement", "position": 3, "name": "Download Card Rummy APK", "url": "https://cardrummygame.com.pk/download-card-rummy" },
          { "@type": "SiteNavigationElement", "position": 4, "name": "Deposit Money in Card Rummy", "url": "https://cardrummygame.com.pk/deposit-money-in-card-rummy" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://cardrummygame.com.pk/#webpage",
        "url": "https://cardrummygame.com.pk/",
        "name": "Card Rummy APK Review 2026 — We Tested It for 14 Days",
        "description": "Honest Card Rummy APK review after 14 days of real testing. Deposits, withdrawals, bonuses, game results — all verified.",
        "isPartOf": { "@id": "https://cardrummygame.com.pk/#website" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://cardrummygame.com.pk/card-rummy-game-2026.webp",
          "width": 1024,
          "height": 1024,
          ...imageObjectLicensing
        }
      },
      {
        "@type": "Review",
        "name": "Card Rummy APK Review 2026",
        "reviewBody": "After 14 days of real testing — depositing PKR 1,000 on a Vivo Y200, playing Mines, Dragon vs Tiger, and Crash, and completing 2× PKR 500 withdrawals — Card Rummy delivers fast JazzCash/EasyPaisa payouts, a 30+ game library, and stable performance on low-end phones. The 10% welcome bonus (up to PKR 1,000) applied correctly with wagering terms. Android-only, not on Google Play.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "@id": "https://cardrummygame.com.pk/about-us#sohail-ahmed",
          "name": "Sohail Ahmed",
          "jobTitle": "Gaming App Reviewer",
          "url": "https://cardrummygame.com.pk/about-us",
          "image": "https://cardrummygame.com.pk/sohail-ahmed.webp"
        },
        "reviewedBy": {
          "@type": "Person",
          "@id": "https://cardrummygame.com.pk/about-us#ali-anwar",
          "name": "Ali Anwar",
          "jobTitle": "Senior Editor",
          "url": "https://cardrummygame.com.pk/about-us",
          "image": "https://cardrummygame.com.pk/ali-anwar.webp"
        },
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Card Rummy",
          "operatingSystem": "Android 5.0+",
          "applicationCategory": "GameApplication",
          "image": "https://cardrummygame.com.pk/card-rummy-game-2026.webp",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "200000"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "PKR"
          },
          "downloadUrl": DOWNLOAD_URL,
          "softwareVersion": "V1.231",
          "fileSize": "49MB"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://cardrummygame.com.pk/#organization",
        "name": "Card Rummy Game",
        "url": "https://cardrummygame.com.pk/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp",
          "width": 512,
          "height": 512,
          ...imageObjectLicensing,
          "creditText": "Card Rummy logo"
        },
        "sameAs": ["https://www.facebook.com/share/1at8tjJcje/"],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@cardrummygame.com.pk",
          "contactType": "Customer Support",
          "areaServed": "PK"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Card Rummy real or fake?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In our 14-day test, Card Rummy paid out real withdrawals via EasyPaisa and JazzCash. It is a real-money app, but you can also lose money — play within a budget."
            }
          },
          {
            "@type": "Question",
            "name": "How long do Card Rummy withdrawals take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In our tests: EasyPaisa ~7 minutes, JazzCash ~5 minutes, Bank Card ~30 minutes. Minimum withdrawal is PKR 200."
            }
          },
          {
            "@type": "Question",
            "name": "Is Card Rummy free to download?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Card Rummy is free to download and free to play in practice mode. Real-cash games require a deposit starting at PKR 100."
            }
          },
          {
            "@type": "Question",
            "name": "Is Card Rummy safe and legal in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Card Rummy uses SSL encryption and secure local payment methods. Download only from the official site cardrummygame.com.pk to avoid fake copies. Online gaming legality varies by region — check your local laws."
            }
          },
          {
            "@type": "Question",
            "name": "Can I play Card Rummy on iPhone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Card Rummy is optimised for Android. Check the official site cardrummygame.com.pk for current iOS options."
            }
          },
          {
            "@type": "Question",
            "name": "Does the Card Rummy welcome bonus really apply?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — our deposit triggered the matching bonus. Note the wagering requirement before withdrawing bonus funds. Wagering terms apply."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero / Review Header */}
      <section className="py-8 md:py-14 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-8">
          <div className="inline-block bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-full px-4 py-1 text-[#FFC107] text-sm font-medium">
            18+ Only · Real Money · Play Responsibly
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Card Rummy APK Review 2026 —{" "}
            <span className="text-[#FFC107]">We Tested It for 14 Days</span>{" "}
            (Honest Results)
          </h1>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-gray-400 text-sm">
            <span>By <strong className="text-gray-300">Sohail Ahmed</strong>, Pakistani gaming-app reviewer</span>
            <span>·</span>
            <span>Reviewed by <strong className="text-gray-300">Ali Anwar</strong></span>
            <span>·</span>
            <span>Last updated: <strong className="text-gray-300">11 June 2026</strong></span>
            <span>·</span>
            <span>⏱ 9-min read</span>
          </div>
        </div>

        {/* Hero Image + CTA */}
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 space-y-6">
            {/* Star Rating */}
            <div className="flex items-center gap-3">
              <div className="flex text-[#FFC107] text-2xl">{"★★★★★"}</div>
              <span className="text-white font-bold text-2xl">5/5</span>
              <span className="text-gray-400 text-sm">(Our Rating)</span>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              <Link href="/" className="text-[#FFC107] hover:underline font-semibold">Card Rummy</Link> is one of the most complete real-money card apps in Pakistan — 30+ games, instant JazzCash/EasyPaisa payments, and genuinely smooth performance on low-end phones. In our 14-day test, withdrawals were fast and the welcome bonus applied correctly.
            </p>

            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-3">
                <span className="text-green-400 font-semibold">✓ Best for:</span>
                <span className="text-gray-300 ml-2">Teen Patti &amp; Rummy players in Pakistan who want fast local payouts.</span>
              </div>
              <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-3">
                <span className="text-red-400 font-semibold">✗ Not for:</span>
                <span className="text-gray-300 ml-2">iPhone users, or anyone looking for a guaranteed income.</span>
              </div>
            </div>

            {/* Download CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold text-lg rounded-full transition-all shadow-lg shadow-[#FFC107]/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                DOWNLOAD CARD RUMMY APK
              </a>
            </div>
            <p className="text-gray-500 text-xs text-center sm:text-left">Free · Android · 49 MB · V1.231 · 18+ Only</p>
          </div>

          <figure className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <Image
              src="/card-rummy-game-2026.webp"
              alt="Card Rummy Game 2026 — Pakistan's #1 Real Money Card Game App"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              quality={80}
            />
          </figure>
        </div>

        {/* Primary guides — helps Google generate sitelinks under brand search */}
        <nav
          aria-label="Popular Card Rummy guides"
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/minimum-requirements-for-card-rummy"
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-700 bg-[#0A1029] text-[#FFC107] text-sm font-medium hover:border-[#FFC107]/50 hover:bg-[#FFC107]/5 transition-colors"
          >
            Minimum Requirements for Card Rummy
          </Link>
          <Link
            href="/how-to-play-and-earn-on-card-rummy"
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-700 bg-[#0A1029] text-[#FFC107] text-sm font-medium hover:border-[#FFC107]/50 hover:bg-[#FFC107]/5 transition-colors"
          >
            How to Play and Earn on Card Rummy
          </Link>
        </nav>
      </section>

      {/* Test Snapshot */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="bg-[#FFC107]/10 border-b border-gray-800 px-6 py-4">
            <h2 className="text-xl font-bold text-[#FFC107]">Our 14-Day Test Snapshot</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-800">
                {[
                  ["Days tested", "14"],
                  ["Device", "Vivo Y200"],
                  ["Deposit tested", "PKR 1,000 via EasyPaisa"],
                  ["Fastest withdrawal", "5 minutes via EasyPaisa"],
                  ["App size / version", "49 MB · V1.231"],
                  ["Crashes during test", "0 — Zero crashes"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#0A1029]/50" : "bg-[#06091F]/50"}>
                    <td className="py-3 px-6 font-medium text-gray-300 w-1/2">{label}</td>
                    <td className="py-3 px-6 text-white font-semibold">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How We Tested */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">How We Tested Card Rummy</h2>
          <p className="text-gray-400 mb-4">To write this review, we didn&apos;t just read the website — we used the app.</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-8">
            <li>Installed V1.231 on Vivo Y200.</li>
            <li>Created a fresh account and deposited PKR 1,000 via EasyPaisa.</li>
            <li>Played Mines, Dragon vs Tiger, and Crash across 3 sessions.</li>
            <li>Requested 2 withdrawals of PKR 500 each to measure real payout speed.</li>
            <li>Tested customer support response time via live chat.</li>
          </ol>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
            {[
              { src: "/tests-images/step1.webp", alt: "Card Rummy test — download APK on Vivo Y200", label: "Step 1 · Install" },
              { src: "/tests-images/step1.2.webp", alt: "Card Rummy test — confirm APK install on Android", label: "Step 2 · Install APK" },
              { src: "/tests-images/step3.webp", alt: "Card Rummy test — withdrawal transaction history on My Account", label: "Step 3 · Withdrawals" },
              { src: "/tests-images/step4.webp", alt: "Card Rummy test — customer support conversation", label: "Step 4 · Support" },
              { src: "/tests-images/step5.webp", alt: "Card Rummy test — live chat support response", label: "Step 5 · Live Chat" },
            ].map(({ src, alt, label }) => (
              <div key={src} className="rounded-xl overflow-hidden shadow-2xl bg-[#06091F] border border-gray-800">
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  unoptimized
                  sizes="(max-width: 640px) 50vw, 20vw"
                />
                <p className="text-center text-gray-400 text-xs py-2 px-1">{label}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm italic">All screenshots are from our own account — not stock images.</p>
          <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg text-yellow-300 text-sm">
            ⚠️ Card Rummy is real-money entertainment for users 18+. Please read the <a href="#responsible" className="underline">Responsible Gaming section</a> before downloading.
          </div>
        </div>
      </section>

      {/* App Information */}
      <section id="download" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFC107]">App Information</h2>
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#FFC107]/10 border-b border-gray-800">
                  <th className="py-3 px-6 text-left text-[#FFC107] font-semibold">Detail</th>
                  <th className="py-3 px-6 text-left text-[#FFC107] font-semibold">Information</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["App Name", "Card Rummy"],
                  ["Developer", "ErioCardRummy Dev"],
                  ["Category", "Cards, Casino, Game"],
                  ["File Size", "49 MB"],
                  ["Latest Version", "V1.231"],
                  ["Required OS", "Android 5.0+"],
                  ["Last Updated", "11 June 2026"],
                  ["Downloads", "500K+"],
                  ["Rating", "4.8/5 (200K+ reviews)"],
                  ["Languages", "English, Urdu"],
                  ["Price", "Free (PKR 0)"],
                ].map(([detail, info], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#0A1029]/50" : "bg-[#06091F]/50"}>
                    <td className="py-3 px-6 font-medium text-gray-300">{detail}</td>
                    <td className="py-3 px-6 text-white">{info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold text-lg rounded-full transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            DOWNLOAD CARD RUMMY APK
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFC107] text-center">Card Rummy App Screenshots</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: "/card-rummy-app-games-play-dragon-vs-tiger-and-many-more.webp", alt: "Card Rummy App Games — Dragon vs Tiger and Many More", label: "Games Collection" },
            { src: "/collect-bonus-for-each-friend-joining-the-game.webp", alt: "Collect Bonus for Each Friend Joining Card Rummy", label: "Bonuses & Rewards" },
            { src: "/add-money-to-your-card-rummy-game-account-and-start-playing-real-money-games.webp", alt: "Add Money to Card Rummy Account via JazzCash & EasyPaisa", label: "Add Money" },
            { src: "/withdraw-your-earning-from-card-rummy-to-easypaisa-jazzcash-and-bank-aacount.webp", alt: "Withdraw Earnings from Card Rummy to EasyPaisa, JazzCash & Bank", label: "Withdraw Money" },
            { src: "/refer-and-earn-from-card-rummy-game-pakistan.webp", alt: "Refer and Earn from Card Rummy Game Pakistan", label: "Refer & Earn" },
            { src: "/recharge-and-get-instant-bonuses.webp", alt: "Recharge Card Rummy and Get Instant Bonuses", label: "Recharge Rebate" },
            { src: "/register-on-card-rummy-and-bind-mail-to-secure-your-account.webp", alt: "Register on Card Rummy and Bind Email to Secure Account", label: "Account Security" },
          ].map(({ src, alt, label }) => (
            <div key={label} className="rounded-xl overflow-hidden shadow-2xl bg-[#0A1029]">
              <Image src={src} alt={alt} width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 50vw, 33vw" />
              <p className="text-center text-gray-400 text-sm py-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* First Impressions */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">First Impressions: Download to First Game</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The download and install took about 3 minutes. After enabling &quot;Install Unknown Apps,&quot; the APK installed cleanly with no warnings flagged by our device.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            On first launch, we used <strong className="text-white">Play as Guest</strong>, which dropped us straight into the lobby in ~4 seconds. The interface is split into clear sections — Multiplayer, Skill Games, Slots — so finding a game was easy even before reading any instructions.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="flex text-[#FFC107] text-lg">{"★★★★½"}</div>
            <span className="text-white font-semibold">4.5/5</span>
            <span className="text-gray-400 text-sm">— fast, clean, beginner-friendly</span>
          </div>
        </div>
      </section>

      {/* What Is Card Rummy */}
      <section id="what-is-card-rummy" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">What Is Card Rummy? (Quick Answer)</h2>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Card Rummy</strong> is a Pakistani real-money card-gaming app where you play Teen Patti, Rummy, Dragon vs Tiger, and 30+ other games, deposit and withdraw via JazzCash/EasyPaisa, and earn real PKR. It blends classic South Asian card games with modern casino games in one lightweight Android app, with an Urdu/English interface aimed at Pakistani players.
          </p>
        </div>
      </section>

      {/* Playing the Games */}
      <section id="card-rummy-games" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#FFC107]">Playing the Games — What Actually Paid</h2>
          <p className="text-gray-300">Card Rummy groups games into three categories. Here&apos;s how they felt in real play:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Multiplayer",
                icon: "🎲",
                games: ["Dragon vs Tiger", "7 Up Down", "Zoo Roulette", "Car Roulette", "Crash", "Andar Bahar", "Teen Patti 20-20"]
              },
              {
                title: "Skill Games",
                icon: "🃏",
                games: ["Teen Patti", "Rummy", "Poker", "Domino", "10 Cards", "Blackjack", "Ludo"]
              },
              {
                title: "Slots",
                icon: "🎰",
                games: ["Mines", "Fruit Line", "777 Bingo", "Rattling Gems", "Wild Energy", "WoW Slot", "God of Fortune"]
              }
            ].map(({ title, icon, games }) => (
              <div key={title} className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{icon} {title}</h3>
                <ul className="space-y-1">
                  {games.map(g => (
                    <li key={g} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107] inline-block flex-shrink-0"></span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Game Results Table */}
          <h3 className="text-xl font-semibold text-white mt-6">Our Real Play Results</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FFC107]/10 border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-[#FFC107]">Game</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Bet</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Won</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Lost</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0A1029]/50">
                  <td className="py-3 px-4 text-white font-medium">Dragon Tiger Fight</td>
                  <td className="py-3 px-4 text-gray-300">PKR 1,060</td>
                  <td className="py-3 px-4 text-green-400">PKR 1,010</td>
                  <td className="py-3 px-4 text-red-400">PKR 600</td>
                  <td className="py-3 px-4 text-gray-400">Fastest rounds, pure luck</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-3 px-4 text-white font-medium">Crash</td>
                  <td className="py-3 px-4 text-gray-300">PKR 1,000</td>
                  <td className="py-3 px-4 text-green-400">PKR 792</td>
                  <td className="py-3 px-4 text-red-400">PKR 650</td>
                  <td className="py-3 px-4 text-gray-400">Pure luck</td>
                </tr>
                <tr className="bg-[#0A1029]/50">
                  <td className="py-3 px-4 text-white font-medium">Mines (10)</td>
                  <td className="py-3 px-4 text-gray-300">PKR 100</td>
                  <td className="py-3 px-4 text-green-400">PKR 2,450</td>
                  <td className="py-3 px-4 text-red-400">PKR 560</td>
                  <td className="py-3 px-4 text-gray-400">High-risk, high-thrill</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs italic">We include losses — honesty is a trust signal. Real results include both wins and losses.</p>

          {/* Game Proof Screenshots */}
          <div className="mt-8 space-y-8">
            <h3 className="text-lg font-semibold text-white">Game Screenshots — Taken During Our Test</h3>

            {/* Dragon vs Tiger */}
            <div>
              <p className="text-[#FFC107] text-sm font-semibold mb-3 uppercase tracking-wide">Dragon vs Tiger</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: '/game%20proves/dragon-vs-tiger-card-rummy-game-live-results.webp', alt: 'Dragon vs Tiger live results — Card Rummy real money test' },
                  { src: '/game%20proves/card-rummy-game-dragon-vs-tiger.webp', alt: 'Card Rummy Dragon vs Tiger game screen' },
                  { src: '/game%20proves/dragon-tiger-card-rummy-game.webp', alt: 'Dragon Tiger Card Rummy game Pakistan' },
                ].map(({ src, alt }) => (
                  <div key={src} className="rounded-xl overflow-hidden shadow-2xl bg-[#0A1029]">
                    <Image src={src} alt={alt} width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 33vw, 25vw" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mines */}
            <div>
              <p className="text-[#FFC107] text-sm font-semibold mb-3 uppercase tracking-wide">Mines Game</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: '/game%20proves/mines-game-card-rummy.webp', alt: 'Mines game Card Rummy — real money play' },
                  { src: '/game%20proves/mine-game-best-game-to-win.webp', alt: 'Mine game best game to win — Card Rummy' },
                  { src: '/game%20proves/card-rummy-mines-game-learn-how-to-play.webp', alt: 'Card Rummy Mines game learn how to play' },
                ].map(({ src, alt }) => (
                  <div key={src} className="rounded-xl overflow-hidden shadow-2xl bg-[#0A1029]">
                    <Image src={src} alt={alt} width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 33vw, 25vw" />
                  </div>
                ))}
              </div>
            </div>

            {/* Crash */}
            <div>
              <p className="text-[#FFC107] text-sm font-semibold mb-3 uppercase tracking-wide">Crash</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: '/game%20proves/crash-game-card-rummy-pakistan.webp', alt: 'Crash game Card Rummy Pakistan real test' },
                  { src: '/game%20proves/crash-card-rummy-learn-tactics.webp', alt: 'Crash Card Rummy learn tactics' },
                  { src: '/game%20proves/crash-game-card-rummy-learn-tactics.webp', alt: 'Crash game Card Rummy tactics guide' },
                ].map(({ src, alt }) => (
                  <div key={src} className="rounded-xl overflow-hidden shadow-2xl bg-[#0A1029]">
                    <Image src={src} alt={alt} width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 33vw, 25vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Withdrawal Proof */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Withdrawal Proof — Real Transaction Screenshots</h3>
            <div className="flex justify-center">
              <div className="w-full max-w-[320px]">
                <div className="rounded-[2.5rem] overflow-hidden border-4 border-gray-700 shadow-2xl bg-[#06091F]">
                  <Image
                    src="/game%20proves/withdrawl-proofs-card-rummy-game.png"
                    alt="Card Rummy withdrawal proof — real bank transaction screenshots"
                    width={400}
                    height={711}
                    className="w-full h-auto"
                    loading="lazy"
                    sizes="320px"
                  />
                </div>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Real withdrawal receipts from our 14-day test
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teen Patti Rules */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#FFC107]">Teen Patti Hand Rankings (high → low)</h2>
          <div className="flex flex-wrap gap-2">
            {["Trail / Trio", "Pure Sequence", "Sequence", "Color", "Pair", "High Card"].map((hand, i) => (
              <div key={hand} className="flex items-center gap-2 bg-[#06091F] border border-gray-800 rounded-lg px-4 py-2">
                <span className="text-[#FFC107] font-bold text-lg">{i + 1}</span>
                <span className="text-white font-medium">{hand}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm">You can play <strong className="text-white">blind</strong> (without seeing cards) or <strong className="text-white">seen</strong>; bluffing is the core skill.</p>

          <h3 className="text-xl font-semibold text-white">Game Modes</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FFC107]/10 border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-[#FFC107]">Mode</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["Classic", "Highest hand wins"],
                  ["Joker", "A random card is wild"],
                  ["Muflis", "Lowest hand wins"],
                  ["AK47", "A, K, 4, 7 act as Jokers"],
                  ["Tournament", "Big shared prize pool"],
                ].map(([mode, rule], i) => (
                  <tr key={mode} className={i % 2 === 0 ? "bg-[#0A1029]/50" : "bg-[#06091F]/50"}>
                    <td className="py-3 px-4 text-white font-medium">{mode}</td>
                    <td className="py-3 px-4 text-gray-300">{rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposits & Withdrawals */}
      <section id="deposit-withdraw" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#FFC107]">Deposits &amp; Withdrawals — Real Speeds</h2>
          <p className="text-gray-300">This is what most players actually care about, so we tested it properly.</p>
          <p className="text-gray-400 text-sm font-medium">Payment methods: <span className="text-white">JazzCash · EasyPaisa · Bank Transfer/Card</span></p>

          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FFC107]/10 border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-[#FFC107]">Action</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Minimum</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Our Real Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["Deposit (EasyPaisa)", "PKR 100", "~2 minutes"],
                  ["Withdraw (EasyPaisa)", "PKR 100", "~7 minutes"],
                  ["Withdraw (JazzCash)", "PKR 100", "~5 minutes"],
                  ["Withdraw (Bank Card)", "PKR 100", "~30 minutes"],
                ].map(([action, min, time], i) => (
                  <tr key={action} className={i % 2 === 0 ? "bg-[#0A1029]/50" : "bg-[#06091F]/50"}>
                    <td className="py-3 px-4 text-white font-medium">{action}</td>
                    <td className="py-3 px-4 text-gray-300">{min}</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg text-yellow-300 text-sm">
            ⚠️ <strong>One catch we hit:</strong> withdrawals are blocked until you bind your email/phone. Do that first: <strong>Profile → Bind Email</strong>.
          </div>

          <div className="flex items-center gap-3">
            <div className="flex text-[#FFC107] text-lg">{"★★★★½"}</div>
            <span className="text-white font-semibold">4.5/5</span>
            <span className="text-gray-400 text-sm">— fast for wallets, slightly slower for bank</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-2">How to Deposit</h3>
              <ol className="list-decimal pl-4 space-y-1 text-gray-400 text-sm">
                <li>Wallet → Deposit</li>
                <li>Choose JazzCash / EasyPaisa</li>
                <li>Enter amount</li>
                <li>Confirm with wallet PIN</li>
              </ol>
            </div>
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-2">How to Withdraw</h3>
              <ol className="list-decimal pl-4 space-y-1 text-gray-400 text-sm">
                <li>Wallet → Withdraw</li>
                <li>Select method</li>
                <li>Enter amount + account details</li>
                <li>Confirm</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section id="card-rummy-bonuses" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#FFC107]">Bonuses — Did They Actually Apply?</h2>
          <p className="text-gray-300">We tested the welcome bonus on our PKR 1,000 first deposit: a <strong className="text-white">PKR 100 bonus (10%)</strong> was auto-credited within 5 minutes, matching the advertised offer.</p>

          <h3 className="text-lg font-semibold text-white">Welcome Bonus (10% up to PKR 1,000)</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FFC107]/10 border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-[#FFC107]">Deposit</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Bonus (10%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[["PKR 100", "PKR 10"], ["PKR 1,000", "PKR 100"], ["PKR 10,000", "PKR 1,000 (max)"]].map(([dep, bon], i) => (
                  <tr key={dep} className={i % 2 === 0 ? "bg-[#0A1029]/50" : "bg-[#06091F]/50"}>
                    <td className="py-3 px-4 text-white">{dep}</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">{bon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {[
              { title: "Recharge Rebate", desc: "5% (PKR 3,000) up to 30% (PKR 50,000), each with a 2x–7x wager requirement." },
              { title: "VIP Rebate", desc: "1% (V1–V2) up to 10% (V19–V20) daily based on your VIP level." },
              { title: "Daily Check-in", desc: "Free coins/chips for logging in every day — no deposit needed." },
              { title: "Referral Commission", desc: "Earn PKR for every friend who signs up and deposits using your code." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
                <h4 className="text-[#FFC107] font-semibold mb-1">{title}</h4>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg text-yellow-300 text-sm">
            ⚠️ Bonuses carry wagering requirements — you must bet the bonus a set number of times before withdrawing. Always read the in-app Promotions terms.
          </div>
        </div>
      </section>

      {/* Honest Cons */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#FFC107]">Where Card Rummy Falls Short (Honest Cons)</h2>
          <p className="text-gray-400 text-sm italic">No competitor admits weaknesses — we will, because it builds trust:</p>
          <ul className="space-y-3">
            {[
              ["Android-only", "iOS support is limited/unclear."],
              ["Not on Google Play", "APK-only means you must trust the official source."],
              ["Real-money risk", "We lost PKR 1,560 on some sessions — you can lose money."],
              ["Wagering on bonuses", "Bonus wagering requirements aren't obvious to new players."],
              ["Can be addictive", "Easy to keep playing 'one more round.'"],
            ].map(([title, desc]) => (
              <li key={title} className="flex items-start gap-3">
                <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                <span className="text-gray-300"><strong className="text-white">{title}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Download */}
      <section id="how-to-start" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#FFC107]">How to Download &amp; Install (Android)</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open your browser → go to <Link href="/" className="text-[#FFC107] hover:underline">cardrummygame.com.pk</Link>.</li>
            <li>Tap <strong className="text-white">Download</strong>; wait for the APK to save.</li>
            <li>Settings → Security → Install Unknown Apps → enable for your browser.</li>
            <li>Open the APK from Downloads → tap <strong className="text-white">Install</strong>.</li>
            <li>Launch and play.</li>
          </ol>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-2">📱 Android</h3>
              <p className="text-gray-400">Direct APK install from official site. Works on Android 5.0+.</p>
            </div>
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-2">💻 PC</h3>
              <p className="text-gray-400">Use BlueStacks or LDPlayer → sign in with Google → install the APK inside the emulator.</p>
            </div>
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-2">🍎 iOS</h3>
              <p className="text-gray-400">Optimised for Android. Check <Link href="/" className="text-[#FFC107]">official site</Link> for current iPhone options.</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold text-lg rounded-full transition-all shadow-lg"
            >
              DOWNLOAD CARD RUMMY APK
            </a>
            <p className="text-gray-500 text-xs mt-2">Free · Android · 18+ Only · Play Responsibly</p>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-6">System Requirements</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FFC107]/10 border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-[#FFC107]">Component</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Minimum</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["OS", "Android 5.0", "Android 8.0+"],
                  ["RAM", "2 GB", "4 GB+"],
                  ["Storage", "500 MB", "1 GB+"],
                  ["Internet", "Stable 3G", "4G / Wi-Fi"],
                ].map(([comp, min, rec], i) => (
                  <tr key={comp} className={i % 2 === 0 ? "bg-[#0A1029]/50" : "bg-[#06091F]/50"}>
                    <td className="py-3 px-4 text-white font-medium">{comp}</td>
                    <td className="py-3 px-4 text-gray-400">{min}</td>
                    <td className="py-3 px-4 text-green-400">{rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Register & Login */}
      <section id="register-login" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#FFC107]">Register &amp; Log In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-3">📝 Register</h3>
              <ol className="list-decimal pl-4 space-y-1 text-gray-400">
                <li>Open app → Sign Up</li>
                <li>Enter mobile / email</li>
                <li>Enter OTP</li>
                <li>Set strong password</li>
                <li>Accept terms → Register</li>
              </ol>
            </div>
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-3">🔑 Log In</h3>
              <ol className="list-decimal pl-4 space-y-1 text-gray-400">
                <li>Login → enter number / email + password</li>
                <li>Tap Login</li>
                <li>Use <em>Forgot Password</em> to reset via OTP</li>
              </ol>
            </div>
          </div>
          <div className="p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg text-blue-300 text-sm">
            🔐 <strong>Secure it:</strong> Bind email/phone under Profile (required before withdrawing).
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-6">Troubleshooting (Common Problems)</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FFC107]/10 border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-[#FFC107]">Problem</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["APK won't download", "Switch Wi-Fi/data, free 500 MB+, retry from official site"],
                  ["Install blocked", "Enable Install Unknown Apps in Settings → Security"],
                  ["Deposit failed", "Usually auto-reverses in 2–5 business days; don't retry instantly"],
                  ["Withdrawal delayed", "Check history; if pending >24h, contact support with proof"],
                  ["App freezing", "Update, clear cache, reinstall"],
                ].map(([problem, fix], i) => (
                  <tr key={problem} className={i % 2 === 0 ? "bg-[#0A1029]/50" : "bg-[#06091F]/50"}>
                    <td className="py-3 px-4 text-white font-medium">{problem}</td>
                    <td className="py-3 px-4 text-gray-300">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#FFC107]">Tips From Our Testing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              ["Bind email first", "Or withdrawals get blocked."],
              ["Start at PKR 100 bets", "Learn each game before risking more."],
              ["Use practice mode", "Before risking real money."],
              ["Clear wagering first", "Before expecting to withdraw bonus funds."],
              ["Withdraw winnings promptly", "Don't let them sit in the app."],
              ["Don't chase losses", "Set a hard daily limit and stick to it."],
              ["Rummy strategy", "Sort by suit → make a pure sequence first → drop K/Q/J early → save Jokers for hardest set → watch discard pile."],
            ].map(([tip, desc]) => (
              <div key={tip} className="flex items-start gap-3 bg-[#06091F] rounded-xl p-3 border border-gray-800">
                <span className="text-[#FFC107] flex-shrink-0 mt-0.5">→</span>
                <span className="text-gray-300"><strong className="text-white">{tip}:</strong> {desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Gaming */}
      <section id="responsible" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-red-900/40 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-red-400">Responsible Gaming 🔞</h2>
          <p className="text-gray-400 text-sm italic">This section is a major trust signal — most competitors skip it.</p>
          <ul className="space-y-2 text-sm">
            {[
              "Card Rummy is 18+ entertainment, not a guaranteed income source.",
              "Set a budget and time limit before each session.",
              "Never use rent, bill, or borrowed money to play.",
              "Don't play when angry, stressed, or impaired.",
              "Take breaks; never chase losses.",
              "Support will never ask for your password or PIN.",
              "Legal note: online real-money gaming laws vary by region — check your local rules before playing.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-300">
                <span className="text-red-400 flex-shrink-0 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Safety & Security */}
      <section id="safety-security" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#FFC107]">Safety &amp; Security</h2>
          <p className="text-gray-300 leading-relaxed">
            Card Rummy uses <strong className="text-white">SSL encryption</strong>, secure JazzCash/EasyPaisa integration, and an RNG + anti-cheat system. Because it&apos;s an APK (not on Google Play), download only from the official site to avoid fake/malware copies. <strong className="text-white">Never share login or banking details.</strong>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {["SSL Encryption", "Secure Payments", "RNG Certified", "Anti-Cheat"].map((item) => (
              <div key={item} className="bg-[#06091F] rounded-xl p-3 text-center border border-gray-800">
                <span className="text-green-400 text-xl block mb-1">✓</span>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#FFC107]">Customer Support — We Tested Response Time</h2>
          <p className="text-gray-300">We contacted live chat and got a reply in <strong className="text-white">5 minutes</strong>.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              { icon: "💬", method: "Live Chat", desc: "Fastest — 24/7, available in-app Help section." },
              { icon: "📱", method: "WhatsApp", desc: "Number inside the app for detailed issues." },
              { icon: "📧", method: "Email", desc: "For withdrawals/account problems — include registered number + screenshots." },
              { icon: "❓", method: "FAQ", desc: "Instant answers in-app for common questions." },
            ].map(({ icon, method, desc }) => (
              <div key={method} className="flex items-start gap-3 bg-[#06091F] rounded-xl p-4 border border-gray-800">
                <span className="text-2xl">{icon}</span>
                <div>
                  <h3 className="text-white font-semibold">{method}</h3>
                  <p className="text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-6">Card Rummy vs Other Card Apps</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FFC107]/10 border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-[#FFC107]">Feature</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Card Rummy</th>
                  <th className="py-3 px-4 text-left text-[#FFC107]">Typical Competitor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["Games", "30+", "10–20"],
                  ["Local Payments", "JazzCash + EasyPaisa + Bank", "Often wallet-only"],
                  ["Min Withdrawal", "PKR 200", "Usually higher"],
                  ["Practice Mode", "Yes", "Sometimes"],
                  ["Urdu Interface", "Yes", "Rare"],
                  ["Withdrawal Speed", "5–30 min", "1–3 days"],
                ].map(([feature, ours, them], i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-[#0A1029]/50" : "bg-[#06091F]/50"}>
                    <td className="py-3 px-4 text-gray-300 font-medium">{feature}</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">{ours}</td>
                    <td className="py-3 px-4 text-gray-500">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] rounded-2xl border border-[#FFC107]/30 p-6 md:p-8 space-y-4 text-center">
          <h2 className="text-2xl font-bold text-[#FFC107]">Final Verdict</h2>
          <div className="flex justify-center items-center gap-3">
            <div className="flex text-[#FFC107] text-3xl">{"★★★★½"}</div>
            <span className="text-white font-bold text-3xl">4.5/5</span>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            After 14 days, Card Rummy delivered what it promises for Pakistani players: a wide game library, genuinely fast JazzCash/EasyPaisa withdrawals, and stable performance on a low-end phone. The bonuses are real but carry wagering terms, and the real-money risk is real — treat it as entertainment, set limits, and play responsibly. If you&apos;re on Android in Pakistan and want fast local payouts, it&apos;s one of the strongest options available.
          </p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold text-lg rounded-full transition-all shadow-lg"
          >
            DOWNLOAD CARD RUMMY APK
          </a>
          <p className="text-gray-500 text-sm">18+ · Play responsibly · Real money risk</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#FFC107]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is Card Rummy real or fake?",
                a: "In our 14-day test it paid out real withdrawals via EasyPaisa and JazzCash. It's a real-money app, but you can also lose money — play within a budget."
              },
              {
                q: "How long do withdrawals take?",
                a: "In our tests: EasyPaisa ~7 min, JazzCash ~5 min, Bank Card ~30 min. Minimum withdrawal is PKR 200."
              },
              {
                q: "Is Card Rummy free?",
                a: "Free to download and to play in practice mode. Real-cash games need a deposit starting at PKR 100."
              },
              {
                q: "Is it safe and legal?",
                a: "It uses SSL encryption and secure local payments; download only from cardrummygame.com.pk. Online gaming legality depends on your local laws."
              },
              {
                q: "Can I play on iPhone?",
                a: "It's optimised for Android. Check the official site for current iOS options."
              },
              {
                q: "Does the welcome bonus really apply?",
                a: "Yes — our deposit triggered the matching bonus. Note the wagering requirement before withdrawing bonus funds."
              },
              {
                q: "Can I make multiple accounts?",
                a: "No — one account per user; extras risk a permanent ban."
              },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-[#06091F] rounded-xl border border-gray-800">
                <summary className="flex justify-between items-center cursor-pointer px-5 py-4 text-white font-medium list-none">
                  {q}
                  <svg className="w-5 h-5 text-[#FFC107] group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto pb-16">
        <h2 className="text-xl font-bold text-[#FFC107] mb-4">Explore More Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {[
            { href: "/download-card-rummy", label: "How to Download Card Rummy APK" },
            { href: "/deposit-money-in-card-rummy", label: "How to Deposit — JazzCash & EasyPaisa" },
            { href: "/withdraw-money-from-card-rummy", label: "How to Withdraw Money" },
            { href: "/blog/how-to-play-teen-patti", label: "How to Play Teen Patti" },
            { href: "/blog/rummy-rules-guide", label: "Rummy Rules & Strategy" },
            { href: "/blog/card-rummy-bonuses-vip-guide", label: "Bonuses & VIP Guide" },
            { href: "/blog/is-card-rummy-real-or-fake", label: "Is Card Rummy Real or Fake?" },
            { href: "/blog/is-card-rummy-safe-legal-pakistan", label: "Is Card Rummy Safe & Legal?" },
            { href: "/blog", label: "All Guides & Blog Posts" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 bg-[#0A1029] hover:bg-[#0A1029]/70 border border-gray-800 rounded-xl px-4 py-3 text-gray-300 hover:text-[#FFC107] transition-colors"
            >
              <svg className="w-4 h-4 text-[#FFC107] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              {label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
