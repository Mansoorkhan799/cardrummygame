import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { CARD_RUMMY_FACTS } from '@/lib/cardRummyFacts';

export const metadata: Metadata = {
  title: 'Card Rummy APK Download Pakistan — Free V1.231 (49 MB) 2026',
  description: 'Download Card Rummy APK free for Android in Pakistan. Official V1.231, 49 MB, JazzCash/EasyPaisa supported. Safe install guide included.',
  keywords: ['card rummy apk', 'card rummy apk download', 'download card rummy pakistan', 'card rummy apk free'],
  alternates: { canonical: 'https://cardrummygame.com.pk/card-rummy-apk' },
  robots: { index: true, follow: true },
};

export default function CardRummyApkPage() {
  const pageUrl = 'https://cardrummygame.com.pk/card-rummy-apk';

  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <Script
        id="apk-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Card Rummy',
            operatingSystem: 'Android 5.0+',
            applicationCategory: 'GameApplication',
            softwareVersion: CARD_RUMMY_FACTS.version,
            fileSize: CARD_RUMMY_FACTS.apkSizeSchema,
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
            downloadUrl: CARD_RUMMY_FACTS.downloadUrl,
          }),
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Card Rummy APK Download</h1>
        <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
          Official Card Rummy APK for Pakistan — {CARD_RUMMY_FACTS.version}, {CARD_RUMMY_FACTS.apkSize}, Android only. Not on Google Play; download safely from cardrummygame.com.pk.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
          <span className="px-4 py-2 rounded-full bg-[#0A1029] border border-gray-700 text-[#FFC107]">{CARD_RUMMY_FACTS.version}</span>
          <span className="px-4 py-2 rounded-full bg-[#0A1029] border border-gray-700 text-gray-300">{CARD_RUMMY_FACTS.apkSize}</span>
          <span className="px-4 py-2 rounded-full bg-[#0A1029] border border-gray-700 text-gray-300">Android 5.0+</span>
          <span className="px-4 py-2 rounded-full bg-[#0A1029] border border-gray-700 text-gray-300">18+ Only</span>
        </div>

        <a
          href={CARD_RUMMY_FACTS.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FFC107] text-black font-bold px-10 py-4 rounded-full hover:bg-yellow-400 transition-colors mb-8"
        >
          Download Card Rummy APK — Free
        </a>

        <div className="grid sm:grid-cols-3 gap-4 text-left">
          <Link href="/download-card-rummy" className="p-4 rounded-xl bg-[#0A1029] border border-gray-800 hover:border-[#FFC107]/40 text-[#FFC107] text-sm font-medium">
            Full Install Guide →
          </Link>
          <Link href="/minimum-requirements-for-card-rummy" className="p-4 rounded-xl bg-[#0A1029] border border-gray-800 hover:border-[#FFC107]/40 text-[#FFC107] text-sm font-medium">
            System Requirements →
          </Link>
          <Link href="/blog/how-to-spot-fake-card-rummy-apps" className="p-4 rounded-xl bg-[#0A1029] border border-gray-800 hover:border-[#FFC107]/40 text-[#FFC107] text-sm font-medium">
            Avoid Fake APKs →
          </Link>
        </div>
      </div>
    </article>
  );
}
