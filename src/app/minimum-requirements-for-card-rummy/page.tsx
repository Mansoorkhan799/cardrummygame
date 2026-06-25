import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Minimum Requirements for Card Rummy APK — Android Specs 2026',
  description: 'Minimum requirements for Card Rummy on Android: OS, RAM, storage, internet, and device compatibility. Check if your phone can run Card Rummy V1.231 before downloading.',
  keywords: ['minimum requirements card rummy', 'card rummy system requirements', 'card rummy android requirements', 'card rummy phone requirements'],
  alternates: { canonical: 'https://cardrummygame.com.pk/minimum-requirements-for-card-rummy' },
  openGraph: {
    title: 'Minimum Requirements for Card Rummy APK',
    description: 'Android minimum and recommended specs for Card Rummy V1.231 in Pakistan.',
    url: 'https://cardrummygame.com.pk/minimum-requirements-for-card-rummy',
  },
  robots: { index: true, follow: true },
};

const DOWNLOAD_URL = 'https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272';

export default function MinimumRequirementsPage() {
  const pageUrl = 'https://cardrummygame.com.pk/minimum-requirements-for-card-rummy';

  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <Script
        id="min-requirements-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': pageUrl,
                name: 'Minimum Requirements for Card Rummy',
                description: 'Minimum and recommended Android requirements for Card Rummy APK V1.231.',
                url: pageUrl,
                isPartOf: { '@type': 'WebSite', name: 'Card Rummy', url: 'https://cardrummygame.com.pk' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cardrummygame.com.pk' },
                  { '@type': 'ListItem', position: 2, name: 'Minimum Requirements for Card Rummy', item: pageUrl },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is the minimum Android version for Card Rummy?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Android 5.0 (Lollipop) or higher. Android 8.0+ is recommended for best performance.' },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much RAM do I need for Card Rummy?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Minimum 2 GB RAM. 4 GB or more is recommended for smooth gameplay.' },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much storage does Card Rummy need?',
                    acceptedAnswer: { '@type': 'Answer', text: 'The APK is 49 MB. Allow at least 500 MB free storage for install and updates.' },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <span className="text-gray-300">Minimum Requirements for Card Rummy</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Minimum Requirements for Card Rummy
        </h1>
        <p className="text-gray-300 leading-relaxed mb-8">
          Before you <Link href="/download-card-rummy" className="text-[#FFC107] hover:underline">download Card Rummy APK</Link> V1.231, check that your Android phone meets these minimum requirements. We tested on a <strong className="text-white">Vivo Y200</strong> — any phone meeting the specs below should run the app smoothly.
        </p>

        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 overflow-hidden mb-8">
          <h2 className="text-xl font-bold text-[#FFC107] px-6 py-4 border-b border-gray-800">System Requirements Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FFC107]/10 border-b border-gray-800">
                  <th className="py-3 px-6 text-left text-[#FFC107]">Component</th>
                  <th className="py-3 px-6 text-left text-[#FFC107]">Minimum</th>
                  <th className="py-3 px-6 text-left text-[#FFC107]">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ['Operating System', 'Android 5.0 (Lollipop)', 'Android 8.0+ (Oreo)'],
                  ['RAM', '2 GB', '4 GB+'],
                  ['Storage', '500 MB free', '1 GB+ free'],
                  ['APK Download Size', '49 MB', '—'],
                  ['Internet', 'Stable 3G', '4G / Wi-Fi'],
                  ['Processor', 'Quad-core 1.2 GHz', 'Octa-core 1.8 GHz+'],
                  ['Screen', '4.5 inch', '5.5 inch+'],
                  ['SIM / Region', 'Pakistani SIM recommended', '—'],
                ].map(([comp, min, rec], i) => (
                  <tr key={comp} className={i % 2 === 0 ? 'bg-[#0A1029]/50' : 'bg-[#06091F]/50'}>
                    <td className="py-3 px-6 text-white font-medium">{comp}</td>
                    <td className="py-3 px-6 text-gray-300">{min}</td>
                    <td className="py-3 px-6 text-green-400">{rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-8 space-y-4">
          <h2 className="text-xl font-bold text-[#FFC107]">Compatible Phone Brands (Pakistan)</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Card Rummy runs on Samsung, Vivo, Oppo, Xiaomi, Infinix, Tecno, Realme, and Huawei devices that meet the specs above. iPhone and iPad are <strong className="text-white">not supported</strong> — Card Rummy is Android-only.
          </p>
        </section>

        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-8">
          <h2 className="text-xl font-bold text-[#FFC107] mb-4">Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/how-to-play-and-earn-on-card-rummy" className="block p-4 rounded-xl border border-gray-700 hover:border-[#FFC107]/40 text-[#FFC107] font-medium text-sm transition-colors">
              → How to Play and Earn on Card Rummy
            </Link>
            <Link href="/download-card-rummy" className="block p-4 rounded-xl border border-gray-700 hover:border-[#FFC107]/40 text-[#FFC107] font-medium text-sm transition-colors">
              → Download Card Rummy APK
            </Link>
          </div>
        </section>

        <div className="text-center">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC107] text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Download Card Rummy APK — Free
          </a>
          <p className="text-gray-500 text-xs mt-3">18+ only · Android · V1.231 · Play responsibly</p>
        </div>
      </div>
    </article>
  );
}
