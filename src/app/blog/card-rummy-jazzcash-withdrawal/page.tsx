import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "Card Rummy JazzCash Withdrawal Guide — How to Withdraw in 2026",
  description: "Step-by-step JazzCash withdrawal guide for Card Rummy. Min PKR 200, max PKR 25,000 per transaction, processed in 5–30 minutes. Fix common JazzCash errors here.",
  keywords: ["card rummy jazzcash withdrawal", "card rummy jazzcash withdraw", "card rummy withdraw jazzcash pakistan", "card rummy jazzcash 2026", "jazzcash withdrawal card rummy"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/card-rummy-jazzcash-withdrawal" },
  openGraph: {
    title: "Card Rummy JazzCash Withdrawal Guide 2026",
    description: "How to withdraw from Card Rummy to JazzCash in 5–30 minutes. Minimum PKR 200, step-by-step guide, common errors & fixes for Pakistani players.",
    url: "https://cardrummygame.com.pk/blog/card-rummy-jazzcash-withdrawal",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "Card Rummy JazzCash Withdrawal Guide 2026" }]
  },
  twitter: { card: "summary_large_image", title: "Card Rummy JazzCash Withdrawal Guide 2026", description: "Withdraw Card Rummy winnings to JazzCash in minutes. Full step-by-step guide inside." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

export default function CardRummyJazzCashWithdrawal() {
  return (
    <>
      <BlogPostSchema
        title="Card Rummy JazzCash Withdrawal Guide — How to Withdraw in 2026"
        description="Step-by-step JazzCash withdrawal guide for Card Rummy. Min PKR 200, max PKR 25,000 per transaction, processed in 5–30 minutes. Fix common JazzCash errors here."
        slug="card-rummy-jazzcash-withdrawal"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="JazzCash is the most popular withdrawal method on Card Rummy and the fastest way to get your winnings in Pakistan. Withdrawals are processed in 5 to 30 minutes, with most arriving within 15 minutes. The minimum withdrawal amount is PKR 200 and the maximum per transaction is PKR 25,000, with a daily limit of PKR 50,000. To withdraw, go to Wallet in the Card Rummy app, tap Withdraw, select JazzCash, enter your JazzCash account number and the amount, then confirm. Your JazzCash account must be active and verified, and the number should match the SIM used for Card Rummy registration."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">JazzCash Withdrawal Guide</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-full text-[#FFC107] text-xs px-3 py-1 uppercase tracking-wide mb-4">Payment Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Card Rummy JazzCash Withdrawal Guide — How to Withdraw in 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 7 min read</p>
        </header>

        {/* Overview */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Why JazzCash Is the Best Withdrawal Method</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            JazzCash is Pakistan&apos;s most widely used mobile payment platform, operated by Jazz (formerly Mobilink). On Card Rummy, it is the <strong className="text-white">fastest and most reliable withdrawal method</strong> — funds typically arrive within 5 to 15 minutes, 24 hours a day, 7 days a week, including weekends and public holidays.
          </p>
          <div className="grid md:grid-cols-4 gap-3">
            {[
              { label: "Minimum Withdrawal", value: "PKR 200" },
              { label: "Max per Transaction", value: "PKR 25,000" },
              { label: "Daily Maximum", value: "PKR 50,000" },
              { label: "Processing Time", value: "5–30 min" },
            ].map((item) => (
              <div key={item.label} className="bg-[#06091F] rounded-xl p-3 border border-gray-800 text-center">
                <div className="text-[#FFC107] text-lg font-bold">{item.value}</div>
                <div className="text-gray-400 text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Step-by-Step JazzCash Withdrawal</h2>
          <ol className="space-y-4 text-gray-300 leading-relaxed">
            {[
              ["Open Card Rummy & Go to Wallet", "Launch the app and tap the Wallet icon (bottom navigation or top-right corner of the lobby)."],
              ["Tap 'Withdraw'", "On the Wallet screen, select the Withdraw tab. You will see a list of available withdrawal methods."],
              ["Select JazzCash", "Tap JazzCash from the payment method list. A withdrawal form will appear."],
              ["Enter Your JazzCash Number", "Type your JazzCash mobile number carefully. Double-check every digit — an incorrect number will send money to the wrong account."],
              ["Enter Withdrawal Amount", "Type the amount you want to withdraw (minimum PKR 200, maximum PKR 25,000 per transaction). Your available balance is shown on screen."],
              ["Confirm & Submit", "Review the details and tap Confirm. You may be asked to enter your PIN or complete an in-app verification step for security."],
              ["Wait for Processing", "Most JazzCash withdrawals complete within 5–15 minutes. You will receive an in-app notification and a JazzCash SMS when the transfer arrives."],
            ].map(([title, body], i) => (
              <li key={i} className="flex gap-3">
                <span className="bg-[#FFC107] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <div><strong className="text-white">{title}:</strong> {body}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* Requirements */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Requirements for JazzCash Withdrawal</h2>
          <ul className="space-y-2 text-gray-300 leading-relaxed text-sm">
            <li className="flex gap-3"><span className="text-[#FFC107]">✓</span><span><strong className="text-white">Active JazzCash account</strong> — your JazzCash mobile wallet must be active and not suspended.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107]">✓</span><span><strong className="text-white">Verified JazzCash account</strong> — complete biometric CNIC verification in the JazzCash app if you haven&apos;t already (required for transactions above PKR 25,000/month).</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107]">✓</span><span><strong className="text-white">Pakistani SIM</strong> — the JazzCash number should ideally be the same number used to register on Card Rummy.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107]">✓</span><span><strong className="text-white">Minimum balance met</strong> — your Card Rummy wallet must have at least PKR 200 in withdrawable (real money) balance.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107]">✓</span><span><strong className="text-white">Wagering completed</strong> — if you have bonus balance, ensure the 1× wagering requirement is met before the bonus appears as withdrawable.</span></li>
          </ul>
        </section>

        {/* Common Errors */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Common JazzCash Errors & Fixes</h2>
          <div className="space-y-4">
            {[
              {
                error: "Account not verified",
                cause: "Your JazzCash account has not completed biometric CNIC verification.",
                fix: "Open the JazzCash app → go to Settings → complete CNIC/biometric verification. This unlocks full transaction limits.",
              },
              {
                error: "Transaction limit exceeded",
                cause: "You have reached JazzCash's daily or monthly receiving limit for your account level.",
                fix: "Upgrade your JazzCash account (Level 1 → Level 2) by visiting a JazzCash agent with your CNIC. Level 2 accounts have higher limits.",
              },
              {
                error: "Wrong account number",
                cause: "The JazzCash number entered in Card Rummy does not match an active account.",
                fix: "Double-check the JazzCash number. Contact Card Rummy support immediately if you submitted a wrong number — do not submit another request until the issue is resolved.",
              },
              {
                error: "Withdrawal pending over 1 hour",
                cause: "Temporary processing delay on Card Rummy's payment system.",
                fix: "Wait until the 1-hour mark. If still pending, take a screenshot of the pending transaction and contact Card Rummy support via in-app chat.",
              },
            ].map((item) => (
              <div key={item.error} className="bg-[#06091F] rounded-xl p-4 border border-red-900/30">
                <h3 className="text-red-400 font-semibold text-sm mb-1">Error: &quot;{item.error}&quot;</h3>
                <p className="text-gray-400 text-xs mb-2"><strong className="text-gray-300">Cause:</strong> {item.cause}</p>
                <p className="text-gray-300 text-sm"><strong className="text-[#FFC107]">Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JazzCash vs EasyPaisa */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">JazzCash vs EasyPaisa — Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Feature</th>
                  <th className="text-left py-2 px-3">JazzCash</th>
                  <th className="text-left py-2 px-3">EasyPaisa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Network", "Jazz (Mobilink)", "Telenor"],
                  ["Processing Time", "5–30 min", "5–30 min"],
                  ["Min Withdrawal", "PKR 200", "PKR 200"],
                  ["Max per Transaction", "PKR 25,000", "PKR 25,000"],
                  ["Daily Limit", "PKR 50,000", "PKR 50,000"],
                  ["Works on any SIM?", "Jazz SIM preferred", "Telenor SIM preferred"],
                  ["24/7 Available?", "Yes", "Yes"],
                ].map(([feature, jazz, easy], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 text-gray-400">{feature}</td>
                    <td className="py-2 px-3 text-white">{jazz}</td>
                    <td className="py-2 px-3 text-white">{easy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-3">Both methods are equally fast and reliable. Use whichever is linked to your primary SIM card for the smoothest experience.</p>
        </section>

        {/* FAQ */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ["Can I withdraw to a JazzCash number different from my registered SIM?", "Yes, you can enter any valid JazzCash number. However, for the smoothest experience and to avoid verification issues, use the JazzCash number linked to the same SIM you registered with on Card Rummy."],
              ["What if my JazzCash withdrawal is still pending after 1 hour?", "Contact Card Rummy in-app support with a screenshot of the pending withdrawal. The support team can trace the transaction and either complete it or issue a reversal within a few hours."],
              ["Is there a fee for JazzCash withdrawal?", "Card Rummy does not charge an explicit withdrawal fee. However, JazzCash may apply standard wallet-to-wallet transfer fees on their end, depending on your account level."],
              ["Can I withdraw multiple times per day?", "Yes, as long as each transaction is within the per-transaction limit (PKR 25,000) and your total daily withdrawals do not exceed PKR 50,000."],
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Withdraw Your Winnings?</h2>
          <p className="text-gray-300 mb-6">Download Card Rummy V1.231, play your favourite games, and withdraw to JazzCash in as little as 5 minutes.</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC107] text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Download Card Rummy — Free
          </a>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400 flex-wrap">
            <Link href="/withdraw-money-from-card-rummy" className="hover:text-[#FFC107]">Full Withdrawal Guide</Link>
            <Link href="/blog/card-rummy-withdrawal-limits" className="hover:text-[#FFC107]">Withdrawal Limits</Link>
            <Link href="/blog/card-rummy-easypaisa-deposit-withdraw" className="hover:text-[#FFC107]">EasyPaisa Guide</Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/card-rummy-easypaisa-deposit-withdraw', title: 'Card Rummy EasyPaisa Deposit & Withdrawal' },
              { href: '/blog/card-rummy-bank-transfer-withdrawal', title: 'Card Rummy Bank Transfer Withdrawal Guide' },
              { href: '/blog/card-rummy-withdrawal-limits', title: 'Card Rummy Withdrawal Limits — Min, Max & Daily' },
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
