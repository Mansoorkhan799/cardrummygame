import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "Card Rummy Payment Problems & Solutions — Complete Fix Guide 2026",
  description: "Card Rummy payment problem? Deposit not received, withdrawal stuck, wrong account number? Get exact fixes for top 10 payment issues. Contact support@pkcardrummy.com for help.",
  keywords: ["card rummy payment problem", "card rummy deposit not received", "card rummy withdrawal stuck", "card rummy payment issue fix 2026", "card rummy withdrawal pending"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/card-rummy-payment-problems" },
  openGraph: {
    title: "Card Rummy Payment Problems & Solutions 2026",
    description: "Deposit not credited? Withdrawal stuck? Wrong number entered? Top 10 Card Rummy payment problems with exact step-by-step fixes for Pakistani players.",
    url: "https://cardrummygame.com.pk/blog/card-rummy-payment-problems",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "Card Rummy Payment Problems Fix Guide 2026" }]
  },
  twitter: { card: "summary_large_image", title: "Card Rummy Payment Problems Fix Guide 2026", description: "Fix Card Rummy deposit, withdrawal and payment issues fast. Top 10 problems with exact solutions." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

const PROBLEMS = [
  {
    num: 1,
    title: "Deposit Not Credited",
    symptom: "You paid via JazzCash/EasyPaisa but Card Rummy wallet balance hasn't updated.",
    cause: "Payment gateway delay, network timeout, or a temporary processing issue.",
    steps: [
      "Take a screenshot of your JazzCash/EasyPaisa transaction confirmation showing the amount, timestamp, and reference ID.",
      "Wait 30 minutes — most deposits credit within 5 minutes, but delays can occur.",
      "If still not credited after 30 minutes, open in-app chat support.",
      "Share the screenshot, your Card Rummy username, and the transaction reference ID.",
      "Support will manually verify and credit the deposit, typically within 1–2 hours.",
    ],
    severity: "Medium",
  },
  {
    num: 2,
    title: "Withdrawal Pending Over 1 Hour",
    symptom: "JazzCash or EasyPaisa withdrawal showing 'Pending' for more than 60 minutes.",
    cause: "Payment gateway queue congestion or a public holiday bank processing delay.",
    steps: [
      "Check whether today is a Pakistani public holiday — bank holidays affect some payment channels.",
      "Verify the account number you entered is correct in the withdrawal history.",
      "Wait the full 1 hour before contacting support.",
      "Contact in-app chat support with your withdrawal transaction ID and the amount.",
      "Support can trace and expedite the pending withdrawal.",
    ],
    severity: "Medium",
  },
  {
    num: 3,
    title: "'Insufficient Balance' During Deposit",
    symptom: "Deposit fails with an 'Insufficient Balance' or 'Payment Failed' error.",
    cause: "Your JazzCash or EasyPaisa wallet does not have enough funds, or your bank account has insufficient balance.",
    steps: [
      "Open your JazzCash or EasyPaisa app and check your wallet balance.",
      "If balance is too low, top up your mobile wallet via over-the-counter at an agent, ATM, or bank transfer.",
      "Retry the deposit in Card Rummy with the corrected balance.",
      "If the balance is sufficient but still failing, check if your account's daily spending limit has been reached.",
    ],
    severity: "Low",
  },
  {
    num: 4,
    title: "Wrong Account Number Entered for Withdrawal",
    symptom: "You submitted a withdrawal request with an incorrect JazzCash/EasyPaisa/IBAN number.",
    cause: "Typographical error during form entry.",
    steps: [
      "Do NOT submit another withdrawal request — wait for the first to process or be rejected.",
      "Immediately contact Card Rummy in-app chat support. Mention 'wrong account number' and your withdrawal transaction ID.",
      "Provide the correct account number to support.",
      "If the withdrawal already processed to the wrong number, support will investigate but recovery is not always guaranteed — act as fast as possible.",
    ],
    severity: "High — Act Immediately",
  },
  {
    num: 5,
    title: "'Turnover Not Met' Withdrawal Block",
    symptom: "Withdrawal button shows 'Turnover not met' or 'Complete wagering requirement first'.",
    cause: "Your wallet contains bonus balance that has not yet met the 1× wagering requirement.",
    steps: [
      "Go to Wallet → Bonus Tab to see your current bonus balance and wagering progress.",
      "Play in any game using your bonus balance — each bet counts toward the turnover.",
      "Once you have wagered an amount equal to the bonus (1× turnover), the bonus converts to withdrawable balance.",
      "Retry the withdrawal after wagering is complete.",
    ],
    severity: "Low",
  },
  {
    num: 6,
    title: "Daily Limit Exceeded",
    symptom: "'Daily withdrawal limit reached' error or withdrawal button greyed out.",
    cause: "You have already withdrawn PKR 50,000 today, which is the maximum daily limit.",
    steps: [
      "Wait until midnight Pakistan Standard Time (PKT) — the daily limit resets at exactly 12:00 AM PKT.",
      "After midnight, you can submit a fresh withdrawal request for up to PKR 50,000.",
      "For amounts above PKR 50,000, plan withdrawals across two consecutive days.",
    ],
    severity: "Low",
  },
  {
    num: 7,
    title: "Bank Transfer Failed",
    symptom: "Bank transfer withdrawal rejected or returned after 1–2 business days.",
    cause: "IBAN format incorrect, account name mismatch, or account closed.",
    steps: [
      "Verify your IBAN format: Pakistan IBANs start with PK followed by exactly 22 alphanumeric characters (24 total).",
      "Check that the account holder name matches your bank records exactly.",
      "If the transfer was returned, the funds are credited back to your Card Rummy wallet automatically.",
      "Correct the IBAN details and submit a new withdrawal request.",
      "Contact your bank to confirm your IBAN if uncertain.",
    ],
    severity: "Medium",
  },
  {
    num: 8,
    title: "EasyPaisa Transaction Declined",
    symptom: "EasyPaisa withdrawal or deposit shows 'Declined' or 'Transaction Not Allowed'.",
    cause: "EasyPaisa account spending limit reached — basic (Level 0) accounts have low monthly limits.",
    steps: [
      "Check your EasyPaisa transaction history to confirm whether you've hit your monthly or daily limit.",
      "Upgrade your EasyPaisa account from Level 0 to Level 1 by visiting any EasyPaisa agent with your CNIC.",
      "Level 1 accounts have a monthly limit of PKR 200,000+ which is sufficient for most players.",
      "After upgrading, retry the transaction.",
    ],
    severity: "Medium",
  },
  {
    num: 9,
    title: "JazzCash Account Not Verified Error",
    symptom: "'Account not verified' error when attempting JazzCash withdrawal.",
    cause: "Your JazzCash account has not completed CNIC biometric verification.",
    steps: [
      "Open the JazzCash app and go to Profile / Settings.",
      "Look for 'Upgrade Account' or 'Complete Verification'.",
      "Complete biometric CNIC verification within the app or at a Jazz franchise.",
      "Once verified, your JazzCash account will support higher transaction limits.",
      "Retry the Card Rummy withdrawal after verification is complete (may take a few hours).",
    ],
    severity: "Medium",
  },
  {
    num: 10,
    title: "Deposit Double-Deducted",
    symptom: "Your JazzCash/EasyPaisa balance was deducted twice for a single deposit, but Card Rummy only shows one credit.",
    cause: "Network timeout caused a duplicate payment submission.",
    steps: [
      "Screenshot both transactions from your JazzCash/EasyPaisa transaction history, clearly showing two separate deductions with timestamps.",
      "Contact Card Rummy support immediately via in-app chat.",
      "Provide both transaction reference IDs and your Card Rummy username.",
      "Support will verify with the payment provider and refund the duplicate deduction, typically within 24 hours.",
    ],
    severity: "High — Screenshot Evidence Required",
  },
];

export default function CardRummyPaymentProblems() {
  return (
    <>
      <BlogPostSchema
        title="Card Rummy Payment Problems & Solutions — Complete Fix Guide 2026"
        description="Card Rummy payment problem? Deposit not received, withdrawal stuck, wrong account number? Get exact fixes for top 10 payment issues. Contact support@pkcardrummy.com for help."
        slug="card-rummy-payment-problems"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="The most common Card Rummy payment problems and their solutions include: deposit not credited (wait 30 minutes and contact support with a transaction screenshot), withdrawal pending over 1 hour (contact in-app chat with the withdrawal ID), insufficient balance errors (top up your JazzCash or EasyPaisa wallet first), wrong account number entered (contact support immediately before the transfer completes), turnover not met errors (complete 1x wagering of bonus amount), daily limit exceeded (wait until midnight for reset), bank transfer failed (check IBAN format — PK + 22 digits), EasyPaisa transaction declined (upgrade to Level 1 account), JazzCash not verified (complete biometric verification), and double-deducted deposit (screenshot both transactions and contact support). The fastest support channel is in-app chat; email support is at support@pkcardrummy.com."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">Payment Problems & Solutions</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-full text-[#FFC107] text-xs px-3 py-1 uppercase tracking-wide mb-4">Troubleshooting</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Card Rummy Payment Problems &amp; Solutions — Complete Fix Guide 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 10 min read</p>
        </header>

        {/* Quick Contact Banner */}
        <section className="bg-[#06091F] rounded-2xl border border-[#FFC107]/30 p-5 mb-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div>
              <h2 className="text-[#FFC107] font-bold text-lg mb-1">Need Immediate Help?</h2>
              <p className="text-gray-300 text-sm">For urgent payment issues, always use in-app chat first — it&apos;s the fastest way to reach the Card Rummy support team.</p>
            </div>
            <div className="text-right text-sm">
              <div className="text-white font-medium">Email Support</div>
              <a href="mailto:support@pkcardrummy.com" className="text-[#FFC107] hover:underline">support@pkcardrummy.com</a>
            </div>
          </div>
        </section>

        {/* What to Screenshot Before Contacting Support */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Before Contacting Support — Screenshots to Gather</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">Having the right screenshots ready speeds up resolution significantly. Take these screenshots <em>before</em> contacting support:</p>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "JazzCash/EasyPaisa transaction confirmation (showing amount, timestamp, reference ID)",
              "Card Rummy wallet balance screen (showing current balance)",
              "Card Rummy withdrawal/deposit history screen (showing the pending or failed transaction)",
              "Any error message shown on screen (full screenshot, not cropped)",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#FFC107]">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Top 10 Problems */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-6">Top 10 Payment Problems & Exact Fixes</h2>
          <div className="space-y-5">
            {PROBLEMS.map((p) => {
              const severityColor =
                p.severity.startsWith("High")
                  ? "text-red-400 border-red-900/40 bg-red-900/10"
                  : p.severity === "Medium"
                  ? "text-yellow-400 border-yellow-900/40 bg-yellow-900/10"
                  : "text-green-400 border-green-900/40 bg-green-900/10";

              return (
                <div key={p.num} className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="bg-[#FFC107] text-black text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {p.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-white font-bold text-lg">{p.title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${severityColor}`}>
                          {p.severity}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm"><strong className="text-gray-300">Symptom:</strong> {p.symptom}</p>
                      <p className="text-gray-400 text-sm mt-1"><strong className="text-gray-300">Cause:</strong> {p.cause}</p>
                    </div>
                  </div>
                  <div className="ml-12">
                    <h4 className="text-[#FFC107] font-semibold text-sm mb-2">Step-by-Step Fix</h4>
                    <ol className="space-y-1 text-gray-300 text-sm">
                      {p.steps.map((step, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#FFC107] font-medium min-w-[1.2rem]">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How to Contact Support */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">How to Contact Support for Payment Issues</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#06091F] rounded-xl p-4 border border-[#FFC107]/20">
              <h3 className="text-[#FFC107] font-semibold mb-2">In-App Chat (Fastest)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Open Card Rummy → Settings or Help → Live Chat. This connects you to a support agent in real-time, typically within 2–5 minutes during business hours (9 AM – 11 PM PKT).</p>
              <p className="text-gray-400 text-xs mt-2">Response time: 2–15 minutes</p>
            </div>
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-700">
              <h3 className="text-white font-semibold mb-2">Email Support (Backup)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Send an email to <a href="mailto:support@pkcardrummy.com" className="text-[#FFC107] hover:underline">support@pkcardrummy.com</a>. Include your username, transaction ID, amount, date/time, and attach screenshots.</p>
              <p className="text-gray-400 text-xs mt-2">Response time: 4–24 hours</p>
            </div>
          </div>
          <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800 mt-4">
            <h3 className="text-white font-semibold mb-2 text-sm">What to Include in Your Support Message</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Your Card Rummy username / registered phone number</li>
              <li>• The problem: deposit not credited / withdrawal stuck / wrong number, etc.</li>
              <li>• Transaction reference ID from JazzCash/EasyPaisa</li>
              <li>• Date, time, and exact amount of the transaction</li>
              <li>• Screenshots (attach or share via chat)</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ["How long does it take for support to fix a payment issue?", "In-app chat issues are typically resolved within 1–4 hours during operating hours. Email responses may take up to 24 hours. Complex issues like double-deductions may take 24–48 hours to fully resolve."],
              ["My deposit was deducted but Card Rummy shows 'Payment Failed' — what happened?", "This is usually a network timeout — the payment processed on the JazzCash/EasyPaisa side but the confirmation didn't reach Card Rummy. Take a screenshot of your mobile wallet showing the deduction and contact support. Your funds will be credited manually."],
              ["Can I cancel a pending withdrawal?", "Withdrawals cannot be cancelled once submitted while in 'Pending' status. Contact support immediately if you submitted wrong details. If the transfer has not yet been processed on the payment side, support may be able to intercept it."],
              ["What if Card Rummy support doesn't respond?", "During peak hours (evenings PKT), response times may be slightly longer. Try the email fallback at support@pkcardrummy.com. Most payment issues are resolved within the same business day."],
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
          <h2 className="text-2xl font-bold text-white mb-3">Experience Smooth Payments on Card Rummy</h2>
          <p className="text-gray-300 mb-6">Download Card Rummy V1.231 and enjoy fast deposits and withdrawals via JazzCash, EasyPaisa, and bank transfer in Pakistan.</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC107] text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Download Card Rummy — Free
          </a>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400 flex-wrap">
            <Link href="/blog/card-rummy-withdrawal-limits" className="hover:text-[#FFC107]">Withdrawal Limits</Link>
            <Link href="/blog/card-rummy-jazzcash-withdrawal" className="hover:text-[#FFC107]">JazzCash Guide</Link>
            <Link href="/blog/card-rummy-easypaisa-deposit-withdraw" className="hover:text-[#FFC107]">EasyPaisa Guide</Link>
            <Link href="/contact-us" className="hover:text-[#FFC107]">Contact Us</Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/card-rummy-jazzcash-withdrawal', title: 'Card Rummy JazzCash Withdrawal Guide' },
              { href: '/blog/card-rummy-easypaisa-deposit-withdraw', title: 'Card Rummy EasyPaisa Deposit & Withdrawal' },
              { href: '/blog/card-rummy-customer-support', title: 'Card Rummy Customer Support — All Contact Methods' },
              { href: '/blog/card-rummy-withdrawal-limits', title: 'Card Rummy Withdrawal Limits — Min, Max & Daily' },
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
