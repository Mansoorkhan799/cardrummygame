import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "Andar Bahar Rules & Tricks — How to Win in 2026",
  description: "Complete Andar Bahar guide: rules, payout structure, house edge breakdown, side bets explained, and 5 tricks to win on Card Rummy app Pakistan in 2026.",
  keywords: ["andar bahar game", "andar bahar trick", "andar bahar rules", "andar bahar how to win", "andar bahar strategy pakistan 2026"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/andar-bahar-rules-tricks" },
  openGraph: {
    title: "Andar Bahar Rules & Tricks — How to Win in 2026",
    description: "Complete Andar Bahar guide: rules, house edge breakdown, side bets, and winning tricks for Card Rummy players in Pakistan.",
    url: "https://cardrummygame.com.pk/blog/andar-bahar-rules-tricks",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "Andar Bahar Rules and Tricks Card Rummy 2026" }]
  },
  twitter: { card: "summary_large_image", title: "Andar Bahar Rules & Tricks — How to Win in 2026", description: "Andar Bahar rules, house edge, side bets, and 5 tricks to win on Card Rummy app in Pakistan." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

export default function AndarBaharRulesTricks() {
  return (
    <>
      <BlogPostSchema
        title="Andar Bahar Rules & Tricks — How to Win in 2026"
        description="Complete Andar Bahar guide: rules, payout structure, house edge breakdown, side bets explained, and 5 tricks to win on Card Rummy app Pakistan in 2026."
        slug="andar-bahar-rules-tricks"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="Andar Bahar is a traditional Indian and Pakistani card game available on Card Rummy. The dealer draws a joker card face-up, then deals cards alternately to the Andar (inside) and Bahar (outside) piles until a card matching the joker's rank appears. Players bet on which pile the matching card will land on. If the first card dealt after the joker is on your side, you win 0.9:1; otherwise you win 1:1. The house edge is approximately 2.5% for Andar and 3% for Bahar, making Andar the statistically better bet."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">Andar Bahar Rules & Tricks</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Game Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Andar Bahar Rules &amp; Tricks — How to Win in 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 7 min read</p>
        </header>

        {/* What is Andar Bahar */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">What is Andar Bahar?</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Andar Bahar (also called Katti) is one of the oldest and most beloved card games in the Indian subcontinent. <strong className="text-white">Andar</strong> means "inside" and <strong className="text-white">Bahar</strong> means "outside" in Urdu — a reference to the two piles where cards are dealt during the game.
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            The premise is beautifully simple: the dealer draws a single card face-up (called the <em>joker card</em> or <em>game card</em>). Players then bet on whether a matching card (same rank) will appear on the Andar pile or the Bahar pile. Cards are dealt alternately to each pile until a match is found. First correct prediction wins.
          </p>
          <p className="text-gray-300 leading-relaxed">
            On <strong className="text-white">Card Rummy V1.231</strong>, Andar Bahar is available around the clock with real PKR stakes and instant payouts via JazzCash and EasyPaisa.
          </p>
        </section>

        {/* How a Round Works */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">How a Round Works — Step by Step</h2>
          <ol className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">1.</span><span><strong className="text-white">Joker Card Drawn:</strong> The dealer (or RNG system) draws a single card face-up and places it in the centre. This is the target rank for the round. Example: 7♦ is drawn.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">2.</span><span><strong className="text-white">Players Bet:</strong> Before any cards are dealt to the piles, all players choose: Andar or Bahar. You must place your bet before the dealing begins.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">3.</span><span><strong className="text-white">Cards Dealt Alternately:</strong> Cards are dealt one at a time, alternating between Andar and Bahar piles. The first card goes to Andar, the second to Bahar, and so on.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">4.</span><span><strong className="text-white">Match Found:</strong> Dealing stops the instant a card matching the joker&apos;s rank appears (in this example, any 7 — 7♠, 7♥, or 7♣). The pile it landed on wins.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">5.</span><span><strong className="text-white">Payouts:</strong> Winning bets are paid according to the payout rules below. A new round begins immediately.</span></li>
          </ol>
        </section>

        {/* Payout Structure */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Payout Structure & House Edge</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Scenario</th>
                  <th className="text-left py-2 px-3">Payout</th>
                  <th className="text-left py-2 px-3">House Edge</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bet Andar — Andar wins on 1st card dealt", "0.9:1 (90% of stake)", "~2.5%"],
                  ["Bet Andar — Andar wins after 1st card", "1:1", "~2.5%"],
                  ["Bet Bahar — Bahar wins", "1:1", "~3%"],
                  ["Your side loses", "Lose stake", "—"],
                ].map(([scenario, payout, edge], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 text-gray-300">{scenario}</td>
                    <td className="py-2 px-3 font-medium text-green-400">{payout}</td>
                    <td className="py-2 px-3 text-gray-400">{edge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-4">
            <h3 className="text-blue-400 font-semibold mb-2">Why Andar Has a Lower House Edge</h3>
            <p className="text-gray-300 text-sm">
              The first card in every round is always dealt to Andar. This gives Andar a very slight probability advantage — it sees one card before Bahar. If Andar wins on the very first card, the casino reduces the payout to 0.9:1 to compensate for this advantage. The net result is that Andar&apos;s house edge (~2.5%) remains marginally lower than Bahar&apos;s (~3%). Always prefer Andar when choosing between the two sides.
            </p>
          </div>
        </section>

        {/* Side Bets */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Side Bets — How Many Cards Until Match?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Card Rummy also offers optional side bets on how many total cards will be dealt before the match appears. These pay higher odds but carry significantly higher house edges.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Side Bet</th>
                  <th className="text-left py-2 px-3">Cards Until Match</th>
                  <th className="text-left py-2 px-3">Approx. Payout</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["First Card", "1 card only", "~3:1"],
                  ["Low Range", "2–5 cards", "~2:1"],
                  ["Mid Range", "6–10 cards", "~2.5:1"],
                  ["High Range", "11–15 cards", "~4:1"],
                  ["Very Long", "16+ cards", "~5:1"],
                ].map(([bet, cards, payout], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 font-semibold text-white">{bet}</td>
                    <td className="py-2 px-3 text-gray-300">{cards}</td>
                    <td className="py-2 px-3 text-[#FFC107]">{payout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-3">Side bets are best avoided by beginners. The house edge on side bets is considerably higher than the main Andar/Bahar bet. Stick to the main bet until you are very comfortable with the game.</p>
        </section>

        {/* 5 Tricks */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">5 Tricks to Win at Andar Bahar</h2>
          <div className="space-y-4">
            {[
              ["Always Start with Andar", "The mathematics are clear: Andar has a ~2.5% house edge vs Bahar&apos;s ~3%. Over 100 bets of PKR 100 each, this difference saves you roughly PKR 50. Small per-round, but significant over a long session."],
              ["Avoid Side Bets Entirely", "Side bets on card count carry house edges much higher than the main bet. They feel exciting but are mathematically unsound. Your bankroll will last significantly longer if you only place the main Andar or Bahar bet."],
              ["Use Flat Betting", "Bet the same amount every round regardless of results. Never double a bet after a loss hoping to &apos;recover&apos; — this Martingale approach can wipe your entire balance in a short losing streak."],
              ["Stop After 5 Consecutive Losses", "If you lose 5 hands in a row, take a break and return fresh. Emotional betting after losses leads to poor decisions and larger bets, which magnifies losses rather than recovering them."],
              ["Set a Session Budget in Advance", "Decide your maximum loss for the session before opening the app. If you reach it, close the game. Andar Bahar rounds are very fast — you can burn through PKR 1,000 in under 10 minutes without discipline."],
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

        {/* How to Play on Card Rummy */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">How to Play Andar Bahar on Card Rummy App</h2>
          <ol className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">1.</span><span>Download Card Rummy V1.231 from <strong className="text-white">cardrummygame.com.pk</strong>. The APK is 49 MB and Android-only.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">2.</span><span>Create an account, bind your email for account security, and deposit via JazzCash or EasyPaisa (minimum PKR 100).</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">3.</span><span>From the lobby, tap <strong className="text-white">Andar Bahar</strong> in the card games section.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">4.</span><span>When the joker card is drawn, choose <strong className="text-white">Andar</strong> or <strong className="text-white">Bahar</strong>, set your bet amount, and confirm before the timer runs out.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">5.</span><span>Watch the cards deal. Winnings are credited instantly. Withdraw any time from PKR 200 up to PKR 50,000/day.</span></li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ["Is Andar or Bahar the better bet?", "Andar has a marginally lower house edge (~2.5% vs ~3% for Bahar). Always bet Andar when in doubt, as the math slightly favours it over thousands of rounds."],
              ["How long does an Andar Bahar round last?", "On Card Rummy, a round typically takes 10-30 seconds depending on how many cards are dealt before the match. Fast matches end in seconds; long matches can take around a minute."],
              ["Can I play Andar Bahar for free first?", "Card Rummy may offer practice chips for new players. Check the lobby for a demo or practice mode. Starting with lower stakes is recommended before increasing your bet size."],
              ["What is the maximum payout in Andar Bahar?", "The main bet pays 1:1 (or 0.9:1 if Andar wins on the first card). Side bets can pay up to 5:1 or more depending on the card count range. Maximum daily withdrawal is PKR 50,000."],
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
          <h2 className="text-2xl font-bold text-white mb-3">Play Andar Bahar on Card Rummy</h2>
          <p className="text-gray-300 mb-6">Experience Pakistan&apos;s favourite card game with real PKR stakes. Download Card Rummy V1.231 today.</p>
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
              { href: '/blog/7-up-down-game-guide', title: '7 Up Down Game Guide — Rules & Strategy' },
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
