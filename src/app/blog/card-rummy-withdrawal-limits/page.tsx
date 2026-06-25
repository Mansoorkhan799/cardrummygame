import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "Card Rummy Withdrawal Limits — Min, Max & Daily Limits 2026",
  description: "Complete Card Rummy withdrawal limits guide. JazzCash & EasyPaisa: min PKR 200, max PKR 25,000/transaction. Bank transfer: min PKR 200, max PKR 50,000/day. All limits in one place.",
  keywords: ["card rummy withdrawal limit", "card rummy minimum withdrawal", "card rummy maximum withdrawal", "card rummy daily withdrawal limit 2026", "card rummy withdrawal limits pakistan"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/card-rummy-withdrawal-limits" },
  openGraph: {
    title: "Card Rummy Withdrawal Limits — Min, Max & Daily Limits 2026",
    description: "JazzCash min PKR 200 / max PKR 25,000. EasyPaisa same. Bank transfer up to PKR 50,000/day. Complete withdrawal limits for all payment methods on Card Rummy.",
    url: "https://cardrummygame.com.pk/blog/card-rummy-withdrawal-limits",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "Card Rummy Withdrawal Limits 2026" }]
  },
  twitter: { card: "summary_large_image", title: "Card Rummy Withdrawal Limits 2026", description: "Min, max & daily withdrawal limits for JazzCash, EasyPaisa & bank transfer. Full guide." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

export default function CardRummyWithdrawalLimits() {
  return (
    <>
      <BlogPostSchema
        title="Card Rummy Withdrawal Limits — Min, Max & Daily Limits 2026"
        description="Complete Card Rummy withdrawal limits guide. JazzCash & EasyPaisa: min PKR 200, max PKR 25,000/transaction. Bank transfer: min PKR 200, max PKR 50,000/day. All limits in one place."
        slug="card-rummy-withdrawal-limits"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="Card Rummy has a minimum withdrawal of PKR 200 across all payment methods. For JazzCash and EasyPaisa, the maximum per transaction is PKR 25,000 with a daily limit of PKR 50,000 and processing time of 5–30 minutes. For bank transfers, the maximum is PKR 50,000 per day with 1–2 business day processing. Diamond VIP users receive priority processing. Bonus balances require 1× wagering turnover before they can be withdrawn. The daily limit resets at midnight Pakistan Standard Time."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">Withdrawal Limits</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-full text-[#FFC107] text-xs px-3 py-1 uppercase tracking-wide mb-4">Withdrawals</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Card Rummy Withdrawal Limits — Min, Max &amp; Daily Limits 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 6 min read</p>
        </header>

        {/* Quick Reference */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Quick Reference — All Withdrawal Limits</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-3 px-3">Method</th>
                  <th className="text-left py-3 px-3">Minimum</th>
                  <th className="text-left py-3 px-3">Max / Transaction</th>
                  <th className="text-left py-3 px-3">Daily Limit</th>
                  <th className="text-left py-3 px-3">Processing Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["JazzCash", "PKR 200", "PKR 25,000", "PKR 50,000", "5–30 minutes"],
                  ["EasyPaisa", "PKR 200", "PKR 25,000", "PKR 50,000", "5–30 minutes"],
                  ["Bank Transfer", "PKR 200", "PKR 50,000", "PKR 50,000", "1–2 business days"],
                ].map(([method, min, maxTxn, daily, time], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-3 px-3 font-semibold text-white">{method}</td>
                    <td className="py-3 px-3 text-gray-300">{min}</td>
                    <td className="py-3 px-3 text-gray-300">{maxTxn}</td>
                    <td className="py-3 px-3 text-[#FFC107] font-medium">{daily}</td>
                    <td className="py-3 px-3 text-gray-300">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-3">Daily limits reset at midnight Pakistan Standard Time (PKT) every day.</p>
        </section>

        {/* Detailed Method Breakdown */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Per-Method Limit Details</h2>
          <div className="space-y-5">

            <div className="bg-[#06091F] rounded-xl p-5 border border-gray-800">
              <h3 className="text-white font-bold text-lg mb-3">JazzCash</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">JazzCash is the fastest withdrawal method with same-day processing 24/7. Each transaction is capped at PKR 25,000, meaning you can make two separate withdrawals to reach the PKR 50,000 daily limit.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {[["Minimum", "PKR 200"], ["Per Transaction", "PKR 25,000"], ["Daily Cap", "PKR 50,000"], ["Speed", "5–30 min"]].map(([k, v]) => (
                  <div key={k} className="bg-[#0A1029] rounded-lg p-2 text-center border border-gray-800">
                    <div className="text-[#FFC107] font-bold">{v}</div>
                    <div className="text-gray-500 mt-0.5">{k}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#06091F] rounded-xl p-5 border border-gray-800">
              <h3 className="text-white font-bold text-lg mb-3">EasyPaisa</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">EasyPaisa has identical limits to JazzCash. It is equally fast and reliable. Choose based on which mobile wallet you primarily use — Telenor users often prefer EasyPaisa.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {[["Minimum", "PKR 200"], ["Per Transaction", "PKR 25,000"], ["Daily Cap", "PKR 50,000"], ["Speed", "5–30 min"]].map(([k, v]) => (
                  <div key={k} className="bg-[#0A1029] rounded-lg p-2 text-center border border-gray-800">
                    <div className="text-[#FFC107] font-bold">{v}</div>
                    <div className="text-gray-500 mt-0.5">{k}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#06091F] rounded-xl p-5 border border-gray-800">
              <h3 className="text-white font-bold text-lg mb-3">Bank Transfer</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">Bank transfer allows the highest per-transaction amount (up to PKR 50,000), making it the best choice for large single withdrawals. Processing takes 1–2 business days and does not work on weekends or Pakistani public holidays.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {[["Minimum", "PKR 200"], ["Per Transaction", "PKR 50,000"], ["Daily Cap", "PKR 50,000"], ["Speed", "1–2 days"]].map(([k, v]) => (
                  <div key={k} className="bg-[#0A1029] rounded-lg p-2 text-center border border-gray-800">
                    <div className="text-[#FFC107] font-bold">{v}</div>
                    <div className="text-gray-500 mt-0.5">{k}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* VIP Impact */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">VIP Level Impact on Withdrawals</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            While the withdrawal amount limits are the same across all VIP levels, your VIP tier directly affects <strong className="text-white">how quickly your withdrawal is processed</strong>:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">VIP Level</th>
                  <th className="text-left py-2 px-3">JazzCash / EasyPaisa</th>
                  <th className="text-left py-2 px-3">Bank Transfer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bronze", "Standard queue (5–30 min)", "Standard (1–2 days)"],
                  ["Silver", "Standard queue (5–30 min)", "Standard (1–2 days)"],
                  ["Gold", "Faster processing (5–20 min)", "Faster (within 1 business day)"],
                  ["Platinum", "Priority queue (5–15 min)", "Priority (same business day)"],
                  ["Diamond", "Instant / <10 min", "Expedited (<1 business day)"],
                ].map(([level, jc, bank], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 font-semibold text-white">{level}</td>
                    <td className="py-2 px-3 text-gray-300">{jc}</td>
                    <td className="py-2 px-3 text-gray-300">{bank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wagering & Turnover */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Wagering Requirement & What Counts</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Bonus balance (welcome bonus, rebates) requires a <strong className="text-white">1× turnover wagering requirement</strong> before it can be withdrawn. This means you must wager the bonus amount at least once in any game.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-[#FFC107] font-semibold mb-2 text-sm">What COUNTS Toward Turnover</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ Real money bets in any game</li>
                <li>✓ Bonus balance bets in any game</li>
                <li>✓ Winning and losing bets (total wagered)</li>
                <li>✓ All game types: Teen Patti, Rummy, Dragon vs Tiger, etc.</li>
              </ul>
            </div>
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-red-400 font-semibold mb-2 text-sm">What does NOT Count</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✗ Practice / demo table play</li>
                <li>✗ Cancelled bets</li>
                <li>✗ Bets voided due to technical issues</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-3">Real money deposits have no wagering requirement — you can withdraw your deposited funds at any time (subject to the minimum withdrawal amount).</p>
        </section>

        {/* Tips for Large Withdrawals */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Tips for Withdrawing Large Amounts</h2>
          <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
            {[
              ["Splitting Over Multiple Days", "If you want to withdraw more than PKR 50,000 total, split across consecutive days. The daily limit resets at midnight PKT. Example: PKR 50,000 today + PKR 50,000 tomorrow = PKR 100,000 total."],
              ["Use Bank Transfer for Single Large Withdrawals", "Bank transfer allows a single transaction up to PKR 50,000 (vs. PKR 25,000 for JazzCash/EasyPaisa). If you want to move PKR 40,000 at once, bank transfer is the only option."],
              ["Reach Diamond VIP for Fastest Processing", "At Diamond VIP, withdrawals are processed in under 10 minutes for mobile wallets. If speed is important, focus on reaching Diamond through consistent play."],
              ["Tax Is Your Responsibility", "Card Rummy does not deduct taxes from withdrawals. In Pakistan, income from online gaming may be subject to tax. Consult a financial advisor or FBR guidelines for your specific situation."],
            ].map(([title, body], i) => (
              <div key={i} className="flex gap-3 bg-[#06091F] rounded-xl p-4 border border-gray-800">
                <span className="text-[#FFC107] font-bold min-w-[1.5rem]">{i + 1}.</span>
                <div><strong className="text-white">{title}:</strong> {body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ["Can I increase my withdrawal limit above PKR 50,000/day?", "The PKR 50,000 daily limit is a platform-wide policy. It cannot currently be increased through VIP status or special request. For large withdrawals, split over multiple days."],
              ["Why is my withdrawal stuck at 'Pending'?", "Withdrawals show as Pending while being processed. JazzCash/EasyPaisa should clear within 30 minutes; bank transfers within 2 business days. If yours exceeds these times, contact support via in-app chat."],
              ["When does the daily withdrawal limit reset?", "Daily limits reset at exactly midnight Pakistan Standard Time (PKT). You can submit a new withdrawal request immediately after midnight if you hit your daily limit."],
              ["Is there a minimum balance I must keep in my Card Rummy wallet?", "No. You can withdraw your entire balance as long as each transaction meets the minimum PKR 200 threshold."],
            ].map(([q, a], i) => (
              <div key={i}>
                <h3 className="text-white font-semibold mb-1">Q: {q}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">A: {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#0A1029] to-[#1a2040] rounded-2xl border border-[#FFC107]/30 p-8 mb-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Play & Withdraw?</h2>
          <p className="text-gray-300 mb-6">Download Card Rummy V1.231, win big, and withdraw up to PKR 50,000 per day via JazzCash, EasyPaisa, or bank transfer.</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC107] text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Download Card Rummy — Free
          </a>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400 flex-wrap">
            <Link href="/withdraw-money-from-card-rummy" className="hover:text-[#FFC107]">Withdrawal Guide</Link>
            <Link href="/blog/card-rummy-jazzcash-withdrawal" className="hover:text-[#FFC107]">JazzCash Guide</Link>
            <Link href="/blog/card-rummy-bank-transfer-withdrawal" className="hover:text-[#FFC107]">Bank Transfer Guide</Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/card-rummy-jazzcash-withdrawal', title: 'Card Rummy JazzCash Withdrawal Guide' },
              { href: '/blog/card-rummy-easypaisa-deposit-withdraw', title: 'Card Rummy EasyPaisa Deposit & Withdrawal' },
              { href: '/blog/card-rummy-bank-transfer-withdrawal', title: 'Card Rummy Bank Transfer Withdrawal Guide' },
              { href: '/blog/card-rummy-payment-problems', title: 'Card Rummy Payment Problems & Solutions' },
              { href: '/', title: 'Card Rummy Full Review — 14-Day Real Money Test' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-[#FFC107] hover:underline text-sm font-medium">
                <span className="flex-shrink-0">→</span>
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
