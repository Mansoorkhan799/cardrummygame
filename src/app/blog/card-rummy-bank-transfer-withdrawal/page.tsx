import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "Card Rummy Bank Transfer Withdrawal Guide 2026",
  description: "Withdraw Card Rummy winnings directly to your Pakistani bank account. Supports HBL, MCB, UBL, Meezan, Bank Alfalah & more. 1–2 business day processing. Full IBAN guide.",
  keywords: ["card rummy bank withdrawal", "card rummy bank transfer", "card rummy withdraw to bank account pakistan", "card rummy IBAN withdrawal 2026", "card rummy bank transfer guide"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/card-rummy-bank-transfer-withdrawal" },
  openGraph: {
    title: "Card Rummy Bank Transfer Withdrawal Guide 2026",
    description: "How to withdraw from Card Rummy to any Pakistani bank. Min PKR 200, max PKR 50,000/day, 1–2 business days. Full IBAN guide with common errors & fixes.",
    url: "https://cardrummygame.com.pk/blog/card-rummy-bank-transfer-withdrawal",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "Card Rummy Bank Transfer Withdrawal Guide 2026" }]
  },
  twitter: { card: "summary_large_image", title: "Card Rummy Bank Transfer Withdrawal Guide 2026", description: "Withdraw to HBL, MCB, UBL, Meezan & more. Full guide with IBAN instructions." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

const SUPPORTED_BANKS = [
  "HBL (Habib Bank Limited)",
  "MCB (Muslim Commercial Bank)",
  "UBL (United Bank Limited)",
  "Allied Bank",
  "Bank Alfalah",
  "Meezan Bank",
  "Faysal Bank",
  "Standard Chartered Pakistan",
  "Bank of Punjab (BOP)",
  "Askari Bank",
];

export default function CardRummyBankTransferWithdrawal() {
  return (
    <>
      <BlogPostSchema
        title="Card Rummy Bank Transfer Withdrawal Guide 2026"
        description="Withdraw Card Rummy winnings directly to your Pakistani bank account. Supports HBL, MCB, UBL, Meezan, Bank Alfalah & more. 1–2 business day processing. Full IBAN guide."
        slug="card-rummy-bank-transfer-withdrawal"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="Card Rummy supports direct bank transfer withdrawals to all major Pakistani banks including HBL, MCB, UBL, Allied Bank, Bank Alfalah, Meezan Bank, and more. Bank transfers take 1–2 business days to process, longer than mobile wallets but ideal for larger amounts. The minimum withdrawal is PKR 200 and the daily maximum is PKR 50,000. You need your bank account IBAN, which starts with PK followed by 22 digits. To withdraw, go to Wallet, tap Withdraw, select Bank Transfer, enter your IBAN and account name exactly as it appears on your bank records, and submit."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">Bank Transfer Withdrawal</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-full text-[#FFC107] text-xs px-3 py-1 uppercase tracking-wide mb-4">Payment Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Card Rummy Bank Transfer Withdrawal Guide 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 8 min read</p>
        </header>

        {/* Overview */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Bank Transfer Withdrawal — Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Bank transfer is ideal when you want to withdraw <strong className="text-white">large amounts directly into your bank account</strong>. While it takes longer than JazzCash or EasyPaisa (1–2 business days vs. 5–30 minutes), bank transfers integrate your winnings directly into your main financial account and are preferred by players withdrawing PKR 25,000 or more at a time.
          </p>
          <div className="grid md:grid-cols-4 gap-3">
            {[
              { label: "Minimum", value: "PKR 200" },
              { label: "Daily Maximum", value: "PKR 50,000" },
              { label: "Processing Time", value: "1–2 business days" },
              { label: "Best For", value: "Large amounts" },
            ].map((item) => (
              <div key={item.label} className="bg-[#06091F] rounded-xl p-3 border border-gray-800 text-center">
                <div className="text-[#FFC107] font-bold text-sm mb-1">{item.value}</div>
                <div className="text-gray-400 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Banks */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Supported Pakistani Banks</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Card Rummy supports withdrawals to all major Pakistani commercial banks, including:</p>
          <div className="grid md:grid-cols-2 gap-2">
            {SUPPORTED_BANKS.map((bank) => (
              <div key={bank} className="flex items-center gap-2 bg-[#06091F] rounded-lg p-3 border border-gray-800">
                <span className="text-[#FFC107] text-xs">✓</span>
                <span className="text-gray-300 text-sm">{bank}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-3">If your bank is not listed here, contact Card Rummy support via <strong className="text-white">support@pkcardrummy.com</strong> to confirm compatibility.</p>
        </section>

        {/* Step by Step */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">7 Steps to Withdraw via Bank Transfer</h2>
          <ol className="space-y-4 text-gray-300 leading-relaxed">
            {[
              ["Open Card Rummy Wallet", "Launch the app and navigate to the Wallet section using the bottom navigation or top-right icon."],
              ["Tap Withdraw", "On the Wallet screen, tap the Withdraw tab to see all available withdrawal methods."],
              ["Select Bank Transfer", "Tap Bank Transfer from the list. A bank withdrawal form will appear."],
              ["Enter Your IBAN", "Enter your full Pakistani IBAN (format: PK + 22 digits). This must be the IBAN of your personal bank account. Do not use another person's IBAN."],
              ["Enter Account Holder Name", "Type your name exactly as it appears on your bank account records. A mismatch between the name and IBAN is the most common cause of bank transfer failures."],
              ["Enter Withdrawal Amount", "Type the amount (min PKR 200). Your available withdrawable balance is displayed on screen."],
              ["Review & Confirm", "Double-check all details — especially the IBAN. Tap Confirm and complete any in-app security verification. You will receive a confirmation notification within minutes."],
            ].map(([title, body], i) => (
              <li key={i} className="flex gap-3">
                <span className="bg-[#FFC107] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <div><strong className="text-white">{title}:</strong> {body}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* IBAN Guide */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Pakistani IBAN Format — How to Find Yours</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A Pakistani IBAN always starts with <strong className="text-white">PK</strong> followed by exactly <strong className="text-white">22 digits</strong>. The total length is 24 characters. Example format: <code className="bg-[#06091F] px-2 py-0.5 rounded text-[#FFC107] text-sm">PK36SCBL0000001123456702</code>
          </p>
          <h3 className="text-white font-semibold mb-3">How to Find Your IBAN</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { method: "Mobile Banking App", steps: "Log in → Settings or Profile → Account Details → IBAN is listed" },
              { method: "Bank Statement", steps: "Your IBAN appears on every bank statement in the account information section" },
              { method: "Bank Branch / ATM", steps: "Visit your branch or use ATM services → request account details printout" },
            ].map((item) => (
              <div key={item.method} className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
                <h4 className="text-[#FFC107] font-medium text-sm mb-2">{item.method}</h4>
                <p className="text-gray-300 text-xs">{item.steps}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Errors */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Common Bank Transfer Errors & Fixes</h2>
          <div className="space-y-4">
            {[
              {
                error: "Wrong IBAN Format",
                cause: "IBAN entered without the PK prefix, or with spaces/dashes.",
                fix: "Enter the IBAN as a single unbroken string: PK followed by 22 digits, no spaces. Example: PK36SCBL0000001123456702",
              },
              {
                error: "Account Name Mismatch",
                cause: "The name entered does not exactly match the account holder name on the bank's records.",
                fix: "Check your bank statement or mobile banking app for the exact registered account name (including middle names or initials as registered).",
              },
              {
                error: "Weekend / Holiday Delays",
                cause: "Bank transfers initiated on Friday evening, Saturday, or Sunday, or on public holidays process on the next business day.",
                fix: "This is expected. Wait until the next business day morning. If still not received by end of next business day, contact Card Rummy support.",
              },
              {
                error: "Transfer Returned by Bank",
                cause: "Incorrect IBAN or account closed.",
                fix: "Verify the IBAN with your bank directly. Contact Card Rummy support — returned funds are credited back to your Card Rummy wallet, from where you can request a new withdrawal with the correct details.",
              },
            ].map((item) => (
              <div key={item.error} className="bg-[#06091F] rounded-xl p-4 border border-red-900/30">
                <h3 className="text-red-400 font-semibold text-sm mb-1">Error: {item.error}</h3>
                <p className="text-gray-400 text-xs mb-2"><strong className="text-gray-300">Cause:</strong> {item.cause}</p>
                <p className="text-gray-300 text-sm"><strong className="text-[#FFC107]">Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When to Use Bank vs Mobile Wallet */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Bank Transfer vs JazzCash / EasyPaisa</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Feature</th>
                  <th className="text-left py-2 px-3">Bank Transfer</th>
                  <th className="text-left py-2 px-3">JazzCash / EasyPaisa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Processing Time", "1–2 business days", "5–30 minutes"],
                  ["Max per Transaction", "PKR 50,000", "PKR 25,000"],
                  ["Daily Limit", "PKR 50,000", "PKR 50,000"],
                  ["Weekend Processing?", "No (business days only)", "Yes (24/7)"],
                  ["Best For", "Large amounts (PKR 25,000+)", "Quick withdrawals"],
                  ["Complexity", "Requires IBAN", "Just a phone number"],
                ].map(([feat, bank, wallet], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 text-gray-400">{feat}</td>
                    <td className="py-2 px-3 text-white">{bank}</td>
                    <td className="py-2 px-3 text-white">{wallet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#06091F] rounded-xl p-4 border border-[#FFC107]/20 mt-4">
            <p className="text-[#FFC107] text-sm font-medium">Recommendation: Use JazzCash or EasyPaisa for daily withdrawals up to PKR 25,000. Use Bank Transfer for larger amounts or when you prefer funds in your bank account directly.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ["How long does a Card Rummy bank transfer take?", "Typically 1–2 business days. Transfers submitted on working days (Monday–Thursday) before 3 PM PKT usually arrive within 24 hours. Transfers on Friday, weekends, or public holidays process on the next working day."],
              ["Can I withdraw to someone else's bank account?", "No. Card Rummy requires the bank account to belong to the same individual who owns the Card Rummy account. Third-party withdrawals are not permitted and may result in account suspension."],
              ["What if my bank transfer has been pending for more than 2 business days?", "Contact Card Rummy support via in-app chat or at support@pkcardrummy.com. Provide your withdrawal ID, IBAN (first/last 4 digits only for security), and the date of the request. Support will trace and resolve the transfer."],
              ["Is there a minimum IBAN length?", "Pakistani IBANs are always exactly 24 characters: PK (2 letters) + 22 alphanumeric characters. If your IBAN is longer or shorter, verify it with your bank before submitting."],
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
          <h2 className="text-2xl font-bold text-white mb-3">Withdraw Your Card Rummy Winnings</h2>
          <p className="text-gray-300 mb-6">Download Card Rummy V1.231, build your balance, and withdraw directly to your Pakistani bank account. Minimum withdrawal PKR 200.</p>
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
            <Link href="/blog/card-rummy-withdrawal-limits" className="hover:text-[#FFC107]">Withdrawal Limits</Link>
            <Link href="/blog/card-rummy-jazzcash-withdrawal" className="hover:text-[#FFC107]">JazzCash Guide</Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/card-rummy-jazzcash-withdrawal', title: 'Card Rummy JazzCash Withdrawal Guide' },
              { href: '/blog/card-rummy-easypaisa-deposit-withdraw', title: 'Card Rummy EasyPaisa Deposit & Withdrawal' },
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
