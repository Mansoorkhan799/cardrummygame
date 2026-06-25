import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "How to Play Teen Patti — Rules, Hand Rankings & Tips 2026",
  description: "Learn Teen Patti rules, hand rankings, blind vs seen strategy, and how to play on Card Rummy app. Complete guide for Pakistani players in 2026.",
  keywords: ["teen patti rules", "teen patti kaise khelein", "teen patti hand rankings", "how to play teen patti", "teen patti guide pakistan 2026"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/how-to-play-teen-patti" },
  openGraph: {
    title: "How to Play Teen Patti — Rules, Hand Rankings & Tips 2026",
    description: "Learn Teen Patti rules, hand rankings, blind vs seen strategy, and how to play on Card Rummy app. Complete guide for Pakistani players in 2026.",
    url: "https://cardrummygame.com.pk/blog/how-to-play-teen-patti",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "How to Play Teen Patti on Card Rummy 2026" }]
  },
  twitter: { card: "summary_large_image", title: "How to Play Teen Patti — Rules, Hand Rankings & Tips 2026", description: "Complete Teen Patti rules, hand rankings, blind vs seen strategy, and tips to win on Card Rummy app." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

export default function HowToPlayTeenPatti() {
  return (
    <>
      <BlogPostSchema
        title="How to Play Teen Patti — Rules, Hand Rankings & Tips 2026"
        description="Learn Teen Patti rules, hand rankings, blind vs seen strategy, and how to play on Card Rummy app. Complete guide for Pakistani players in 2026."
        slug="how-to-play-teen-patti"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="Teen Patti is a 3-card poker variant and the flagship game on Card Rummy. Players are dealt three cards and bet against each other through rounds of blind and seen play. Hand rankings from highest to lowest are: Trail/Trio, Pure Sequence, Sequence, Color/Flush, Pair, and High Card. Blind players bet half the current stake while seen players bet the full stake. The game ends in a showdown where the highest-ranked hand wins the pot."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">How to Play Teen Patti</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Game Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            How to Play Teen Patti — Rules, Hand Rankings &amp; Tips 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 8 min read</p>
        </header>

        {/* What is Teen Patti */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">What is Teen Patti?</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Teen Patti (literally "three cards" in Urdu/Hindi) is a 3-card poker variant that originated on the Indian subcontinent and has become one of the most popular card games in Pakistan. Think of it as a simplified version of poker — each player receives three cards, and betting happens over several rounds before a showdown determines the winner.
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            On <strong className="text-white">Card Rummy</strong> (Version V1.231), Teen Patti is the flagship game. You can play against real players from across Pakistan at stakes ranging from micro-tables (PKR 10 ante) up to high-roller rooms. The game runs 24/7 and tables fill within seconds.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Unlike casino slots, Teen Patti rewards skill, psychology, and bankroll management — a skilled player will consistently outperform a lucky beginner over time.
          </p>
        </section>

        {/* Hand Rankings */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Teen Patti Hand Rankings (Highest to Lowest)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Memorising these six hand ranks is the single most important step before you sit at a table.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Rank</th>
                  <th className="text-left py-2 px-3">Hand Name</th>
                  <th className="text-left py-2 px-3">Description</th>
                  <th className="text-left py-2 px-3">Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1 (Best)", "Trail / Trio", "Three cards of the same rank", "A♠ A♥ A♦"],
                  ["2", "Pure Sequence", "Three consecutive same-suit cards", "J♣ Q♣ K♣"],
                  ["3", "Sequence (Run)", "Three consecutive cards, mixed suits", "9♠ 10♥ J♦"],
                  ["4", "Color / Flush", "Three same-suit cards, not in sequence", "2♥ 7♥ K♥"],
                  ["5", "Pair", "Two cards of the same rank", "8♠ 8♦ 3♣"],
                  ["6 (Worst)", "High Card", "None of the above — best single card wins", "A♠ 6♥ 3♦"],
                ].map(([rank, name, desc, ex], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 text-gray-400">{rank}</td>
                    <td className="py-2 px-3 font-semibold text-white">{name}</td>
                    <td className="py-2 px-3 text-gray-300">{desc}</td>
                    <td className="py-2 px-3 font-mono text-[#FFC107]">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-3">When two players have the same hand type, the higher card values win (A-K-Q Trail beats 2-2-2 Trail).</p>
        </section>

        {/* How a Round Works */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">How a Round Works</h2>
          <ol className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">1.</span><span><strong className="text-white">Ante (Boot):</strong> Every player puts a mandatory bet (the "boot" or "ante") into the pot before cards are dealt. This is set by the table stakes.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">2.</span><span><strong className="text-white">Deal:</strong> Three cards are dealt face-down to each player. Nobody reveals their hand until the showdown.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">3.</span><span><strong className="text-white">Blind or Seen:</strong> Each player decides whether to play <em>blind</em> (without looking at their cards) or <em>seen</em> (after looking). Blind is riskier but costs less per betting round.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">4.</span><span><strong className="text-white">Betting Rounds:</strong> Players bet clockwise. Each round you must call, raise, or fold. The game continues until all but one player folds, or two players reach showdown.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">5.</span><span><strong className="text-white">Showdown:</strong> The last two players reveal their cards. The higher-ranked hand wins the entire pot.</span></li>
          </ol>
        </section>

        {/* Blind vs Seen */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Blind vs Seen — Key Rules</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-2">Blind Player</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Has not looked at their cards</li>
                <li>• Bets the current stake (e.g. PKR 10)</li>
                <li>• Seen players must bet <strong>2× the blind stake</strong></li>
                <li>• Can &quot;pack&quot; (fold) or &quot;chaal&quot; (call) at any time</li>
                <li>• Psychological advantage — opponents don&apos;t know your confidence</li>
              </ul>
            </div>
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-2">Seen Player</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Has looked at their cards</li>
                <li>• Must bet <strong>2× the current stake</strong></li>
                <li>• Can request a <strong>sideshow</strong> vs another seen player</li>
                <li>• Can raise to put pressure on others</li>
                <li>• Knows the hand strength — can make informed decisions</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Sideshow (Compromise):</strong> A seen player can request a sideshow with the previous seen player. Both players compare cards privately — the weaker hand must fold. The player before you can accept or reject the sideshow request.
          </p>
        </section>

        {/* How to Play on Card Rummy */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">How to Play Teen Patti on Card Rummy App</h2>
          <ol className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">1.</span><span><strong className="text-white">Download the APK:</strong> Visit the download page and install Card Rummy V1.231 (49 MB). Enable &quot;Unknown Sources&quot; in Android settings first.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">2.</span><span><strong className="text-white">Register &amp; Deposit:</strong> Create an account and add funds via JazzCash or EasyPaisa. Minimum deposit is <strong>PKR 100</strong>.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">3.</span><span><strong className="text-white">Open the App:</strong> From the lobby, tap the <strong>Teen Patti</strong> tile.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">4.</span><span><strong className="text-white">Choose Table Stakes:</strong> Select a table whose minimum bet fits your bankroll (start small — PKR 10–50 ante for beginners).</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">5.</span><span><strong className="text-white">Play &amp; Withdraw:</strong> Once you&apos;ve built your balance, withdraw via EasyPaisa/JazzCash. Minimum withdrawal: <strong>PKR 200</strong>.</span></li>
          </ol>
        </section>

        {/* Strategy Tips */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">5 Strategy Tips to Win at Teen Patti</h2>
          <div className="space-y-4">
            {[
              ["Start Blind — Always", "Playing blind costs half as much per round and applies psychological pressure. Start blind for the first 1-2 rounds on any hand, then decide whether to look based on the action at the table."],
              ["Fold Immediately on High Card", "High Card is the weakest hand. Unless the pot is huge and blinds are tiny, fold High Card hands early. Don&apos;t chase — the math almost never favours it."],
              ["Bluff Sparingly & Credibly", "Bluffing works best when you&apos;ve shown strength in previous hands. Don&apos;t bluff more than 20% of the time. Consistent bluffing at micro-stakes makes you predictable."],
              ["Bankroll Management is Everything", "Never put more than 5% of your session budget on a single hand. If you lose 3 hands in a row, drop down to a lower-stakes table and rebuild."],
              ["Use Demo Tables First", "Card Rummy offers practice tables. Spend 20-30 minutes on demo before betting real money — get comfortable with the betting UI and timing."],
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

        {/* FAQ */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ["Can I play Teen Patti for free on Card Rummy?", "Yes. Card Rummy has practice/demo tables where you play with virtual chips. You only need real money for cash tables. This is a great way to learn without financial risk."],
              ["What is the best starting hand in Teen Patti?", "A-A-A (three Aces) is the absolute best hand. Any Trail (three of a kind) is very strong. Pure Sequence A-K-Q is the second-best hand overall."],
              ["What happens if two players have the same hand rank?", "The higher card value wins. For example, K-K-K beats Q-Q-Q. For Pure Sequences and Sequences, A-K-Q beats K-Q-J. For High Card, compare the highest card first, then the second, then the third."],
              ["Is Teen Patti available 24/7 on Card Rummy?", "Yes. Tables run around the clock. Player volume is highest in the evenings (7 PM – midnight Pakistan Standard Time)."],
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Play Teen Patti?</h2>
          <p className="text-gray-300 mb-6">Download Card Rummy V1.231, deposit from PKR 100, and join thousands of Pakistani players at the tables right now.</p>
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
              { href: '/blog/teen-patti-variations', title: 'Teen Patti Variations — Joker, Muflis, AK47 Explained' },
              { href: '/blog/teen-patti-hand-rankings', title: 'Teen Patti Hand Rankings — Complete Cheat Sheet' },
              { href: '/blog/rummy-rules-guide', title: 'Rummy Rules — Sequences, Sets & How to Win' },
              { href: '/blog/card-rummy-tips-tricks-to-win', title: 'Card Rummy Tips & Tricks to Win More' },
              { href: '/blog/beginners-guide-online-card-games-pakistan', title: "Beginner's Guide to Online Card Games in Pakistan" },
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
