import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { CARD_RUMMY_FACTS } from '@/lib/cardRummyFacts';

export const metadata: Metadata = {
  title: 'Card Rummy JazzCash — Deposit & Withdraw Guide Pakistan 2026',
  description: 'Use JazzCash with Card Rummy: deposit from PKR 100, withdraw from PKR 200. Step-by-step JazzCash payment guide with tested payout speeds.',
  keywords: ['card rummy jazzcash', 'card rummy jazzcash withdrawal', 'card rummy jazzcash deposit'],
  alternates: { canonical: 'https://cardrummygame.com.pk/card-rummy-jazzcash' },
  robots: { index: true, follow: true },
};

export default function CardRummyJazzcashPage() {
  const pageUrl = 'https://cardrummygame.com.pk/card-rummy-jazzcash';

  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <Script
        id="jazzcash-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Card Rummy JazzCash Guide',
            url: pageUrl,
            description: 'JazzCash deposit and withdrawal guide for Card Rummy in Pakistan.',
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span> / </span>
          <span className="text-gray-300">Card Rummy JazzCash</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Card Rummy JazzCash — Deposit & Withdraw</h1>
        <p className="text-gray-300 leading-relaxed mb-6">
          JazzCash is the fastest withdrawal method we tested on Card Rummy — our PKR 500 JazzCash withdrawal cleared in {CARD_RUMMY_FACTS.jazzCashWithdrawMins}. Deposits from {CARD_RUMMY_FACTS.minDeposit} are instant.
        </p>

        <div className="overflow-hidden rounded-2xl border border-gray-800 mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#FFC107]/10 border-b border-gray-800">
                <th className="py-3 px-4 text-left text-[#FFC107]">Detail</th>
                <th className="py-3 px-4 text-left text-[#FFC107]">JazzCash on Card Rummy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                ['Min Deposit', CARD_RUMMY_FACTS.minDeposit],
                ['Min Withdrawal', CARD_RUMMY_FACTS.minWithdrawal],
                ['Deposit Speed', 'Instant'],
                ['Withdrawal Speed (our test)', CARD_RUMMY_FACTS.jazzCashWithdrawMins],
                ['Daily Withdraw Limit', 'Up to PKR 50,000'],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? 'bg-[#0A1029]/50' : 'bg-[#06091F]/50'}>
                  <td className="py-3 px-4 text-gray-300">{label}</td>
                  <td className="py-3 px-4 text-white font-medium">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="grid sm:grid-cols-2 gap-4 mb-8">
          <Link href="/deposit-money-in-card-rummy" className="block p-5 rounded-xl bg-[#0A1029] border border-gray-800 hover:border-[#FFC107]/40 transition-colors">
            <h2 className="text-[#FFC107] font-semibold mb-2">Deposit via JazzCash →</h2>
            <p className="text-gray-400 text-sm">Step-by-step deposit guide for all methods.</p>
          </Link>
          <Link href="/blog/card-rummy-jazzcash-withdrawal" className="block p-5 rounded-xl bg-[#0A1029] border border-gray-800 hover:border-[#FFC107]/40 transition-colors">
            <h2 className="text-[#FFC107] font-semibold mb-2">JazzCash Withdrawal Guide →</h2>
            <p className="text-gray-400 text-sm">Limits, timing, and troubleshooting.</p>
          </Link>
        </section>

        <div className="text-center">
          <a
            href={CARD_RUMMY_FACTS.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC107] text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Download Card Rummy & Use JazzCash
          </a>
        </div>
      </div>
    </article>
  );
}
