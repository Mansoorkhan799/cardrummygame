import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'How to Play and Earn on Card Rummy — Step-by-Step Guide 2026',
  description: 'Learn how to play and earn on Card Rummy in Pakistan: download, register, deposit via JazzCash/EasyPaisa, play Teen Patti & Rummy, and withdraw winnings.',
  keywords: ['how to play and earn card rummy', 'card rummy earn money', 'play card rummy pakistan', 'card rummy tutorial'],
  alternates: { canonical: 'https://cardrummygame.com.pk/how-to-play-and-earn-on-card-rummy' },
  openGraph: {
    title: 'How to Play and Earn on Card Rummy',
    description: 'Complete guide to play and earn real money on Card Rummy in Pakistan.',
    url: 'https://cardrummygame.com.pk/how-to-play-and-earn-on-card-rummy',
  },
  robots: { index: true, follow: true },
};

const DOWNLOAD_URL = 'https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272';

export default function HowToPlayAndEarnPage() {
  const pageUrl = 'https://cardrummygame.com.pk/how-to-play-and-earn-on-card-rummy';

  const steps = [
    { name: 'Download Card Rummy APK', text: 'Visit cardrummygame.com.pk and download Card Rummy V1.231 for Android. Enable Install Unknown Apps in settings.' },
    { name: 'Register Your Account', text: 'Open the app, tap Register, enter your Pakistani mobile number, verify OTP, and bind your email for account security.' },
    { name: 'Make Your First Deposit', text: 'Deposit from PKR 100 via JazzCash or EasyPaisa. New users receive a welcome bonus on first deposit.' },
    { name: 'Choose a Game', text: 'Start with Dragon vs Tiger or 7 Up Down if you are new. Move to Teen Patti and Rummy as you learn the rules.' },
    { name: 'Play and Win', text: 'Join cash tables, set a session budget, and play responsibly. Track wins and losses in your transaction history.' },
    { name: 'Withdraw Earnings', text: 'Go to Withdraw in the app, choose JazzCash or EasyPaisa, enter PKR 200 minimum, and receive payout in 5–30 minutes.' },
  ];

  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <Script
        id="play-earn-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': pageUrl,
                name: 'How to Play and Earn on Card Rummy',
                description: 'Step-by-step guide to play and earn real money on Card Rummy in Pakistan.',
                url: pageUrl,
                isPartOf: { '@type': 'WebSite', name: 'Card Rummy', url: 'https://cardrummygame.com.pk' },
              },
              {
                '@type': 'HowTo',
                '@id': `${pageUrl}#howto`,
                name: 'How to Play and Earn on Card Rummy',
                description: 'Download, register, deposit, play games, and withdraw earnings on Card Rummy.',
                totalTime: 'PT30M',
                step: steps.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cardrummygame.com.pk' },
                  { '@type': 'ListItem', position: 2, name: 'How to Play and Earn on Card Rummy', item: pageUrl },
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
          <span className="text-gray-300">How to Play and Earn on Card Rummy</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How to Play and Earn on Card Rummy
        </h1>
        <p className="text-gray-300 leading-relaxed mb-8">
          This guide shows exactly how to go from zero to your first withdrawal on <Link href="/" className="text-[#FFC107] hover:underline">Card Rummy</Link>. We followed these steps during our 14-day real-money test on a Vivo Y200 — deposits, gameplay, and withdrawals all verified.
        </p>

        <section className="space-y-5 mb-10">
          {steps.map((step, i) => (
            <div key={step.name} className="flex gap-4 bg-[#0A1029] rounded-2xl border border-gray-800 p-6">
              <div className="w-10 h-10 rounded-full bg-[#FFC107] flex items-center justify-center text-black font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <h2 className="text-white font-semibold text-lg mb-2">{step.name}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-8">
          <h2 className="text-xl font-bold text-[#FFC107] mb-4">Best Games to Start Earning</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/blog/dragon-vs-tiger-strategy" className="text-[#FFC107] hover:underline">Dragon vs Tiger</Link> — simplest rules, fast rounds</li>
            <li><Link href="/blog/how-to-play-teen-patti" className="text-[#FFC107] hover:underline">Teen Patti</Link> — most popular in Pakistan</li>
            <li><Link href="/blog/rummy-rules-guide" className="text-[#FFC107] hover:underline">Rummy</Link> — skill-based, higher long-term edge</li>
            <li><Link href="/blog/mines-game-strategy" className="text-[#FFC107] hover:underline">Mines</Link> — high risk, cash out early</li>
          </ul>
        </section>

        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-8">
          <h2 className="text-xl font-bold text-[#FFC107] mb-4">Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/minimum-requirements-for-card-rummy" className="block p-4 rounded-xl border border-gray-700 hover:border-[#FFC107]/40 text-[#FFC107] font-medium text-sm transition-colors">
              → Minimum Requirements for Card Rummy
            </Link>
            <Link href="/blog/how-to-withdraw-money-card-rummy" className="block p-4 rounded-xl border border-gray-700 hover:border-[#FFC107]/40 text-[#FFC107] font-medium text-sm transition-colors">
              → How to Withdraw from Card Rummy
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
            Download Card Rummy & Start Playing
          </a>
          <p className="text-gray-500 text-xs mt-3">18+ only · Real money · Play responsibly</p>
        </div>
      </div>
    </article>
  );
}
