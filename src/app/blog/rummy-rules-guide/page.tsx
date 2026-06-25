import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "Rummy Rules — Sequences, Sets & How to Win 2026",
  description: "Complete Rummy rules guide: pure sequences, impure sequences, sets, joker rules, scoring, and how to play on Card Rummy app. Win at 13-card Rummy in 2026.",
  keywords: ["rummy rules", "how to play rummy", "rummy sequences", "rummy sets", "13 card rummy rules pakistan", "rummy guide 2026"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/rummy-rules-guide" },
  openGraph: {
    title: "Rummy Rules — Sequences, Sets & How to Win 2026",
    description: "Complete Rummy rules: pure sequences, impure sequences, sets, joker rules, scoring, and how to play on Card Rummy app.",
    url: "https://cardrummygame.com.pk/blog/rummy-rules-guide",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "Rummy Rules Guide Card Rummy 2026" }]
  },
  twitter: { card: "summary_large_image", title: "Rummy Rules — Sequences, Sets & How to Win 2026", description: "Complete 13-card Rummy rules, sequences, sets, joker usage, and winning strategy for Pakistani players." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

export default function RummyRulesGuide() {
  return (
    <>
      <BlogPostSchema
        title="Rummy Rules — Sequences, Sets & How to Win 2026"
        description="Complete Rummy rules guide: pure sequences, impure sequences, sets, joker rules, scoring, and how to play on Card Rummy app. Win at 13-card Rummy in 2026."
        slug="rummy-rules-guide"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="Rummy is a 13-card draw-and-discard game where the objective is to arrange all cards into valid melds — sequences and sets — before your opponents. A pure sequence requires three or more consecutive cards of the same suit with no joker. An impure sequence can use a joker as a substitute. A set consists of three or four cards of the same rank but different suits. Every valid declaration requires at least two sequences, one of which must be pure. Unmelded cards count against the losing player at face value."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">Rummy Rules Guide</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Game Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Rummy Rules — Sequences, Sets &amp; How to Win 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 9 min read</p>
        </header>

        {/* What is Rummy */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">What is Rummy?</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Rummy is a 13-card draw-and-discard game where skill, memory, and strategy matter more than luck. The objective is simple: arrange all 13 cards in your hand into valid <strong className="text-white">sequences</strong> and <strong className="text-white">sets</strong> (called "melds") before your opponents do, then declare.
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            On <strong className="text-white">Card Rummy V1.231</strong>, you play against real players from across Pakistan. Tables range from low-stakes practice games to high-stakes competitive matches. The app supports 2-player and 6-player formats.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Unlike Teen Patti where you bet blindly, Rummy rewards players who understand which cards to keep, which to discard, and how to read opponents&apos; discards to deduce their hand.
          </p>
        </section>

        {/* Key Terms */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Key Terms You Must Know</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Term</th>
                  <th className="text-left py-2 px-3">Definition</th>
                  <th className="text-left py-2 px-3">Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pure Sequence", "3+ consecutive cards, same suit, NO joker", "4♥ 5♥ 6♥"],
                  ["Impure Sequence", "3+ consecutive cards with a joker substituting", "4♠ Joker 6♠"],
                  ["Set / Triplet", "3-4 cards of the same rank, different suits", "K♠ K♥ K♦"],
                  ["Wild Joker", "A randomly selected card rank that acts as joker", "All 7s if 7♣ is drawn"],
                  ["Printed Joker", "The standard joker card in the deck", "☆ Joker card"],
                  ["Declaration", "Announcing that all 13 cards are melded validly", "Tap the Declare button"],
                  ["Drop", "Exiting a hand voluntarily (costs penalty points)", "First drop = 20 pts"],
                ].map(([term, def, ex], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 font-semibold text-white">{term}</td>
                    <td className="py-2 px-3 text-gray-300">{def}</td>
                    <td className="py-2 px-3 font-mono text-[#FFC107]">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sequences */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Pure vs Impure Sequences</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#06091F] rounded-xl p-4 border border-green-900">
              <h3 className="text-green-400 font-semibold mb-2">Pure Sequence ✓</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Minimum 3 consecutive cards</li>
                <li>• All must be the same suit</li>
                <li>• <strong>No joker allowed</strong></li>
                <li>• Examples: A♠ 2♠ 3♠ &nbsp;|&nbsp; 9♦ 10♦ J♦ Q♦</li>
                <li className="text-green-400 font-medium">• At least ONE pure sequence is mandatory in every valid declaration</li>
              </ul>
            </div>
            <div className="bg-[#06091F] rounded-xl p-4 border border-yellow-900">
              <h3 className="text-yellow-400 font-semibold mb-2">Impure Sequence ✓</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• 3+ consecutive cards of the same suit</li>
                <li>• <strong>One joker can substitute</strong> a missing card</li>
                <li>• Examples: 5♣ Joker 7♣ &nbsp;|&nbsp; Q♥ K♥ Joker</li>
                <li>• You can use both wild and printed jokers</li>
                <li className="text-yellow-400 font-medium">• Valid for declaration but cannot replace the mandatory pure sequence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sets and Jokers */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Sets and Joker Rules</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            <strong className="text-white">Sets (Triplets):</strong> A set is 3 or 4 cards of the same rank but different suits. For example: A♠ A♥ A♦ or 7♣ 7♦ 7♥ 7♠. You cannot use two cards of the same suit in a set (e.g., K♠ K♠ K♥ is invalid).
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            <strong className="text-white">Joker Rules:</strong> There are two types of jokers in Rummy. The <em>Printed Joker</em> is always wild. The <em>Wild Joker</em> is a card rank randomly drawn at the start of the game — every card of that rank in all four suits becomes a joker for that round.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Jokers can substitute any card in an impure sequence or a set. However, you cannot use a joker to complete a pure sequence — a pure sequence must use only natural cards of the same suit in consecutive order.
          </p>
        </section>

        {/* Scoring */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Scoring & Penalties</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Card</th>
                  <th className="text-left py-2 px-3">Point Value</th>
                  <th className="text-left py-2 px-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["A", "10 points", "Ace is high-value — discard it early if not in a sequence"],
                  ["K, Q, J", "10 points each", "Face cards are costly if unmelded at declaration"],
                  ["10", "10 points", ""],
                  ["2 – 9", "Face value", "e.g., 5 of any suit = 5 points"],
                  ["Joker", "0 points", "Joker cards carry zero penalty points"],
                ].map(([card, pts, note], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 font-semibold text-white">{card}</td>
                    <td className="py-2 px-3 text-[#FFC107]">{pts}</td>
                    <td className="py-2 px-3 text-gray-400 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-red-900/20 border border-red-800 rounded-xl p-4">
            <h3 className="text-red-400 font-semibold mb-2">Wrong Declaration Penalty</h3>
            <p className="text-gray-300 text-sm">If you declare with an invalid hand (e.g., missing a pure sequence), you receive a <strong className="text-white">penalty of 80 points</strong> and all other players&apos; unmelded card counts are zeroed. Always double-check before declaring.</p>
          </div>
        </section>

        {/* How to Play on Card Rummy */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">How to Play Rummy on Card Rummy App</h2>
          <ol className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">1.</span><span>Download and install Card Rummy V1.231 (Android APK, 49 MB). Not available on Play Store — download directly from cardrummygame.com.pk.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">2.</span><span>Register an account, bind your email for security, then deposit via JazzCash or EasyPaisa (min. PKR 100).</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">3.</span><span>From the lobby, tap <strong className="text-white">Rummy</strong>. Choose between 2-player (Heads Up) or 6-player tables.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">4.</span><span>Select a table stake that suits your bankroll. Beginners should start at the lowest available stakes.</span></li>
            <li className="flex gap-3"><span className="text-[#FFC107] font-bold min-w-[1.5rem]">5.</span><span>Draw from the open or closed pile each turn, discard one card, and work towards a valid declaration. When ready, tap <strong className="text-white">Declare</strong>.</span></li>
          </ol>
        </section>

        {/* Tips */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">5 Tips to Win at Rummy</h2>
          <div className="space-y-4">
            {[
              ["Form Your Pure Sequence First", "Your absolute first priority every hand. Without a pure sequence, a declaration is invalid. Focus all early draws on completing one before doing anything else."],
              ["Discard High-Value Cards Early", "Ace, King, Queen, Jack are worth 10 penalty points each. If they don&apos;t fit into a sequence within 3-4 turns, discard them to minimise your score if you lose."],
              ["Watch the Discard Pile", "Every card your opponents pick up reveals what they&apos;re building. If Player 2 picks up a 9♦, they likely have 8♦ and 10♦ — don&apos;t discard 7♦ or J♦ for them."],
              ["Use Jokers for Sets, Not Pure Sequences", "Since jokers cannot complete a pure sequence, save them for sets or impure sequences. Using a joker to &apos;extend&apos; a sequence from 3 to 4 cards wastes its value."],
              ["Drop Early When the Hand is Hopeless", "A first drop costs 20 points; a middle drop costs 40. If you have no sequence potential and only high cards, an early drop beats playing out and conceding 80+ points."],
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
              ["Do I need two sequences or just one?", "You need at least two sequences, and at least one must be a pure sequence. The second can be impure (using a joker). Beyond that, remaining melds can be sequences or sets."],
              ["Can I use the same joker in two different melds?", "No. Each joker card can only be used in one meld. If you have two jokers, they can each contribute to a separate meld."],
              ["What is the maximum penalty in Rummy?", "The maximum penalty is 80 points, which applies to a wrong declaration. In normal play, your penalty equals the sum of all unmelded card values in your hand."],
              ["Can I pick up a card from the discard pile instead of the closed deck?", "Yes. On your turn you may draw the top card from either the closed (face-down) deck or the open (face-up) discard pile. This is a core strategic choice every turn."],
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
          <h2 className="text-2xl font-bold text-white mb-3">Start Playing Rummy for Real Money</h2>
          <p className="text-gray-300 mb-6">Download Card Rummy V1.231 and play 13-card Rummy against real opponents. Deposit from PKR 100, withdraw from PKR 200.</p>
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
              { href: '/blog/how-to-play-teen-patti', title: 'How to Play Teen Patti — Rules & Hand Rankings' },
              { href: '/blog/teen-patti-hand-rankings', title: 'Teen Patti Hand Rankings — Complete Cheat Sheet' },
              { href: '/blog/card-rummy-tips-tricks-to-win', title: 'Card Rummy Tips & Tricks to Win More' },
              { href: '/blog/bankroll-management-card-games', title: 'Bankroll Management Guide for Card Games' },
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
