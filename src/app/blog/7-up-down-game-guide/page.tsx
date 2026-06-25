import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "7 Up Down Game Guide — Rules, Strategy & Tips 2026",
  description: "Complete 7 Up Down game guide: rules, payout table, probability breakdown, why Lucky 7 is a trap, and 4 strategies to win on Card Rummy app in 2026.",
  keywords: ["7 up down game", "7 up down rules", "7 up down strategy", "seven up down card game", "7 up down tips pakistan"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/7-up-down-game-guide" },
  openGraph: {
    title: "7 Up Down Game Guide — Rules, Strategy & Tips 2026",
    description: "Complete 7 Up Down rules, payout table, probability breakdown, and strategies to win on Card Rummy app.",
    url: "https://cardrummygame.com.pk/blog/7-up-down-game-guide",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "7 Up Down Game Guide Card Rummy 2026" }]
  },
  twitter: { card: "summary_large_image", title: "7 Up Down Game Guide — Rules, Strategy & Tips 2026", description: "7 Up Down rules, payout tables, probability breakdown, and winning strategies for Card Rummy players." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

export default function SevenUpDownGameGuide() {
  return (
    <>
      <BlogPostSchema
        title="7 Up Down Game Guide — Rules, Strategy & Tips 2026"
        description="Complete 7 Up Down game guide: rules, payout table, probability breakdown, why Lucky 7 is a trap, and 4 strategies to win on Card Rummy app in 2026."
        slug="7-up-down-game-guide"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="7 Up Down is a dice-based game where players bet on whether the sum of two dice will be above 7, below 7, or exactly 7. Bets on Under or Over pay 1:1, while a Lucky 7 bet pays 4:1. The probability is 15/36 for under, 15/36 for over, and 6/36 for exactly 7. Despite the attractive 4:1 payout, the Lucky 7 bet carries a house edge of approximately 16.7%. Smart players stick to Up or Down bets with flat betting discipline and short sessions."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">7 Up Down Game Guide</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Game Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            7 Up Down Game Guide — Rules, Strategy &amp; Tips 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 6 min read</p>
        </header>

        {/* What is 7 Up Down */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">What is 7 Up Down?</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            7 Up Down is a dice-based betting game available on Card Rummy. The mechanic is beautifully simple: two dice are rolled, and you bet on whether their combined total will be <strong className="text-white">above 7 (Up)</strong>, <strong className="text-white">below 7 (Down)</strong>, or <strong className="text-white">exactly 7 (Lucky 7)</strong>. Place your bet, watch the dice roll, and collect your winnings instantly.
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            The game is available 24/7 on Card Rummy V1.231 and is one of the fastest-paced games in the app. Each round takes under 20 seconds, making it ideal for players who want quick action between other games.
          </p>
          <p className="text-gray-300 leading-relaxed">
            While luck drives outcomes, understanding the probabilities and avoiding the Lucky 7 trap gives you a mathematically sounder approach than most casual players take.
          </p>
        </section>

        {/* Probability Breakdown */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Probability Breakdown</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Two dice can produce 36 possible combinations (6 × 6). Here&apos;s how those combinations distribute across the three bet types:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Bet</th>
                  <th className="text-left py-2 px-3">Outcomes</th>
                  <th className="text-left py-2 px-3">Count / 36</th>
                  <th className="text-left py-2 px-3">Probability</th>
                  <th className="text-left py-2 px-3">Payout</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Under 7 (Down)", "2,3,4,5,6", "15/36", "41.7%", "1:1"],
                  ["Over 7 (Up)", "8,9,10,11,12", "15/36", "41.7%", "1:1"],
                  ["Exactly 7 (Lucky 7)", "7 only", "6/36", "16.7%", "4:1"],
                ].map(([bet, outcomes, count, prob, payout], i) => (
                  <tr key={i} className={`border-b border-gray-800 hover:bg-[#0d1535] ${i === 2 ? 'bg-red-900/10' : 'bg-[#06091F]'}`}>
                    <td className="py-2 px-3 font-semibold text-white">{bet}</td>
                    <td className="py-2 px-3 text-gray-300">{outcomes}</td>
                    <td className="py-2 px-3 text-[#FFC107]">{count}</td>
                    <td className="py-2 px-3 text-gray-300">{prob}</td>
                    <td className={`py-2 px-3 font-medium ${i === 2 ? 'text-red-400' : 'text-green-400'}`}>{payout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-red-900/20 border border-red-800 rounded-xl p-4">
            <h3 className="text-red-400 font-semibold mb-2">Why Lucky 7 is a Trap</h3>
            <p className="text-gray-300 text-sm">
              Lucky 7 occurs in 6 out of 36 rolls (16.7%). For a 4:1 payout to be fair, it would need to occur at least 1 in 5 times (20%). Since it only occurs 16.7% of the time, the house keeps the difference — a house edge of approximately <strong className="text-white">16.7%</strong>. By comparison, Up/Down bets have a house edge of about <strong className="text-white">2.78%</strong>. The smart play is always Up or Down.
            </p>
          </div>
        </section>

        {/* Payout Table */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">House Edge Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Bet Type</th>
                  <th className="text-left py-2 px-3">True Odds</th>
                  <th className="text-left py-2 px-3">Payout</th>
                  <th className="text-left py-2 px-3">House Edge</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Under 7", "15/36 = 41.7%", "1:1", "~2.78%"],
                  ["Over 7", "15/36 = 41.7%", "1:1", "~2.78%"],
                  ["Lucky 7", "6/36 = 16.7%", "4:1", "~16.7%"],
                ].map(([bet, odds, payout, edge], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 font-semibold text-white">{bet}</td>
                    <td className="py-2 px-3 text-gray-300">{odds}</td>
                    <td className="py-2 px-3 text-gray-300">{payout}</td>
                    <td className={`py-2 px-3 font-medium ${i === 2 ? 'text-red-400' : 'text-green-400'}`}>{edge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4 Strategies */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">4 Strategies for 7 Up Down</h2>
          <div className="space-y-4">
            {[
              ["Stick to Up/Down Bets Only", "The 2.78% house edge on Up and Down bets is much lower than Lucky 7's 16.7%. Over 100 rounds, this difference is enormous. Pick a side and stay disciplined. Never place a Lucky 7 bet."],
              ["Flat Betting Discipline", "Choose a fixed bet amount (e.g., PKR 50 per round) and never deviate regardless of wins or losses. Increasing bets after a loss (the Martingale trap) will eventually blow your bankroll when a losing streak hits."],
              ["Apply a Hard Stop-Loss Rule", "Decide before your session: if you lose X amount (e.g., PKR 500), you stop for the day. Fast games like 7 Up Down can drain a bankroll in minutes without a stop-loss. Write it down and honour it."],
              ["Keep Sessions Short — 20 Minutes Max", "The house edge is always working against you. The longer you play, the more likely you are to give back profits. Set a timer: 20 minutes or your win target — whichever comes first."],
            ].map(([title, body], i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[#FFC107] font-bold text-lg min-w-[1.8rem]">{i + 1}.</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison to Dragon vs Tiger */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">7 Up Down vs Dragon vs Tiger</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Feature</th>
                  <th className="text-left py-2 px-3">7 Up Down</th>
                  <th className="text-left py-2 px-3">Dragon vs Tiger</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Game Type", "Dice", "Cards"],
                  ["Bet Options", "Under / Over / Lucky 7", "Dragon / Tiger / Tie"],
                  ["Main Bet House Edge", "~2.78%", "~3.7%"],
                  ["Worst Bet", "Lucky 7 (~16.7%)", "Tie (~34%)"],
                  ["Speed", "~15 sec/round", "~20 sec/round"],
                  ["Complexity", "Very simple", "Very simple"],
                  ["Best For", "Quick dice action", "Card enthusiasts"],
                ].map(([feature, up7, dvt], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 font-semibold text-[#FFC107]">{feature}</td>
                    <td className="py-2 px-3 text-gray-300">{up7}</td>
                    <td className="py-2 px-3 text-gray-300">{dvt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-3">Both games are excellent for short, fast sessions. 7 Up Down&apos;s main bet has a slightly lower house edge, making it marginally better from a pure math perspective.</p>
        </section>

        {/* How to Play */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">How to Find & Play 7 Up Down on Card Rummy</h2>
          <ol className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">1.</span><span>Download and install <strong className="text-white">Card Rummy V1.231</strong> (49 MB). The APK is available at cardrummygame.com.pk — not on the Play Store.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">2.</span><span>Register, bind your email, and deposit a minimum of <strong className="text-white">PKR 100</strong> via JazzCash, EasyPaisa, or bank transfer.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">3.</span><span>From the main lobby, scroll to the <strong className="text-white">Mini Games</strong> or <strong className="text-white">Dice Games</strong> section and tap <strong className="text-white">7 Up Down</strong>.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">4.</span><span>Select your bet amount, choose Under, Over, or (don&apos;t) Lucky 7, and tap <strong className="text-white">Bet</strong>. The dice roll and results appear within seconds.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">5.</span><span>Withdraw winnings any time — minimum withdrawal is <strong className="text-white">PKR 200</strong>, maximum PKR 50,000/day.</span></li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ["Is 7 Up Down rigged?", "No. Card Rummy uses a certified random number generator (RNG) for all dice and card games. The outcomes are provably random. The house edge is the built-in mathematical advantage, not manipulation."],
              ["What is the safest bet in 7 Up Down?", "Under 7 and Over 7 are the safest bets with approximately 2.78% house edge each. Lucky 7 at 16.7% house edge should always be avoided."],
              ["Can I win money playing 7 Up Down in Pakistan?", "Yes. Real PKR winnings are paid out via JazzCash, EasyPaisa, or bank transfer. Minimum withdrawal is PKR 200 and maximum is PKR 50,000 per day."],
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
          <h2 className="text-2xl font-bold text-white mb-3">Play 7 Up Down on Card Rummy</h2>
          <p className="text-gray-300 mb-6">Fast dice action with real PKR payouts. Download Card Rummy V1.231 and try 7 Up Down with just PKR 100.</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC107] text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Download Card Rummy — Free
          </a>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
            <Link href="/download-card-rummy" className="hover:text-[#FFC107]">Download Guide</Link>
            <Link href="/" className="hover:text-[#FFC107]">Full App Review</Link>
            <Link href="/blog" className="hover:text-[#FFC107]">More Guides</Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/dragon-vs-tiger-strategy', title: 'Dragon vs Tiger Strategy & Tips' },
              { href: '/blog/andar-bahar-rules-tricks', title: 'Andar Bahar Rules & Tricks' },
              { href: '/blog/mines-game-strategy', title: 'Mines Game Strategy — Cash Out Smart' },
              { href: '/blog/card-rummy-tips-tricks-to-win', title: '12 Proven Tips to Win More on Card Rummy' },
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
