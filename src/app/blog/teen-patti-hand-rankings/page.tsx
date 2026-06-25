import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "Teen Patti Hand Rankings — Complete Cheat Sheet 2026",
  description: "Complete Teen Patti hand rankings with probabilities, examples, and tiebreaker rules. Trail to High Card — every hand explained with Muflis and Joker variations.",
  keywords: ["teen patti hand rankings", "teen patti hands", "teen patti card combinations", "teen patti hand chart", "teen patti rules pakistan 2026"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/teen-patti-hand-rankings" },
  openGraph: {
    title: "Teen Patti Hand Rankings — Complete Cheat Sheet 2026",
    description: "All 6 Teen Patti hands ranked with examples, probabilities, and tiebreaker rules. Plus Muflis and Joker variation rules.",
    url: "https://cardrummygame.com.pk/blog/teen-patti-hand-rankings",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "Teen Patti Hand Rankings Cheat Sheet 2026" }]
  },
  twitter: { card: "summary_large_image", title: "Teen Patti Hand Rankings — Complete Cheat Sheet 2026", description: "Complete Teen Patti hand rankings: Trail, Pure Sequence, Sequence, Color, Pair, High Card — with examples and probabilities." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

export default function TeenPattiHandRankings() {
  return (
    <>
      <BlogPostSchema
        title="Teen Patti Hand Rankings — Complete Cheat Sheet 2026"
        description="Complete Teen Patti hand rankings with probabilities, examples, and tiebreaker rules. Trail to High Card — every hand explained with Muflis and Joker variations."
        slug="teen-patti-hand-rankings"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="Teen Patti uses six hand rankings. From best to worst: Trail (three of a kind, 0.24% probability) is the highest hand. Pure Sequence or Straight Flush (three consecutive cards of the same suit, 0.22%) ranks second. Sequence or Run (three consecutive cards of different suits, 3.26%) is third. Color or Flush (three same-suit cards not in sequence, 4.96%) ranks fourth. Pair (two cards of the same rank, 16.94%) is fifth. High Card (none of the above, 74.39%) is the lowest hand. When two players hold the same hand type, the higher rank wins. Ace plays high in standard sequences (A-K-Q and A-2-3 are both valid). In Muflis variation, hand rankings are reversed and High Card beats Trail. Joker variation allows a designated joker card to substitute for any card."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">Teen Patti Hand Rankings</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Game Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Teen Patti Hand Rankings — Complete Cheat Sheet 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 7 min read</p>
          <div className="mt-3 inline-flex items-center gap-2 bg-[#06091F] border border-gray-700 rounded-xl px-4 py-2 text-sm text-gray-300">
            <span className="text-[#FFC107]">★</span>
            Bookmark this page — use it as a quick reference while playing
          </div>
        </header>

        {/* Quick Reference */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Quick Reference: All 6 Hands Ranked</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Rank</th>
                  <th className="text-left py-2 px-3">Hand Name</th>
                  <th className="text-left py-2 px-3">Also Called</th>
                  <th className="text-left py-2 px-3">Example</th>
                  <th className="text-right py-2 px-3">Probability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1 (Best)", "Trail", "Trio / Three of a Kind", "A♠ A♥ A♦", "0.24%"],
                  ["2", "Pure Sequence", "Straight Flush", "A♠ K♠ Q♠", "0.22%"],
                  ["3", "Sequence", "Run / Straight", "9♠ 8♥ 7♦", "3.26%"],
                  ["4", "Color", "Flush", "K♠ 9♠ 5♠", "4.96%"],
                  ["5", "Pair", "Two of a Kind", "Q♥ Q♦ 7♠", "16.94%"],
                  ["6 (Lowest)", "High Card", "No Pair", "A♠ K♥ 9♦", "74.39%"],
                ].map(([rank, name, alias, example, prob], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 font-bold text-[#FFC107]">{rank}</td>
                    <td className="py-2 px-3 font-semibold text-white">{name}</td>
                    <td className="py-2 px-3 text-gray-400 text-xs">{alias}</td>
                    <td className="py-2 px-3 font-mono text-gray-300">{example}</td>
                    <td className="py-2 px-3 text-right text-gray-300">{prob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-3">Probabilities based on a standard 52-card deck, 3 cards dealt. Note that Pure Sequence (0.22%) is rarer than Trail (0.24%) yet ranks lower — this is a traditional Teen Patti rule, not an error.</p>
        </section>

        {/* Each Hand Explained */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-5">Each Hand Explained in Detail</h2>
          <div className="space-y-6">
            {[
              {
                rank: "1",
                name: "Trail (Trio / Three of a Kind)",
                example: "A♠ A♥ A♦ &nbsp;|&nbsp; K♣ K♥ K♦ &nbsp;|&nbsp; 2♠ 2♥ 2♦",
                desc: "Three cards of the same rank. The highest possible hand in Teen Patti. Trail of Aces is the absolute best hand, followed by Trail of Kings, Queens, and so on down to Trail of Twos. Because a Trail requires three of the same rank from a 52-card deck, it is extremely rare — you will see it roughly once in every 400 hands.",
                tiebreak: "Higher rank wins. Trail of Kings beats Trail of Jacks."
              },
              {
                rank: "2",
                name: "Pure Sequence (Straight Flush)",
                example: "A♠ K♠ Q♠ &nbsp;|&nbsp; 5♥ 6♥ 7♥ &nbsp;|&nbsp; A♦ 2♦ 3♦",
                desc: "Three consecutive cards all of the same suit. Note that Ace can be used high (A-K-Q) or low (A-2-3) — both are valid pure sequences. Interestingly, Pure Sequence is statistically rarer than Trail yet ranks below it in traditional Teen Patti rules. This is a long-standing convention of the game.",
                tiebreak: "Higher top card wins. A-K-Q beats J-Q-K. If all three top cards are equal (impossible with a single deck in standard play), the pot is split."
              },
              {
                rank: "3",
                name: "Sequence (Run / Straight)",
                example: "9♠ 8♥ 7♦ &nbsp;|&nbsp; A♣ K♠ Q♥ &nbsp;|&nbsp; 3♦ 4♠ 5♥",
                desc: "Three consecutive cards of different suits (if they were all the same suit, it would be a Pure Sequence). This is the third-ranked hand and appears with roughly 3.26% probability — about 1 in 30 hands. Like Pure Sequence, Ace plays both high and low.",
                tiebreak: "Higher top card wins. A-K-Q beats Q-J-10 in sequence hands."
              },
              {
                rank: "4",
                name: "Color (Flush)",
                example: "K♠ 9♠ 5♠ &nbsp;|&nbsp; A♥ 7♥ 3♥ &nbsp;|&nbsp; Q♦ 10♦ 4♦",
                desc: "Three cards of the same suit that are not in consecutive sequence. Color is the fourth-ranked hand and appears about 5% of the time. Suit itself has no ranking between hands — a Color in Spades does not outrank a Color in Hearts.",
                tiebreak: "Compare highest card first, then second, then third. K♠ 9♠ 5♠ beats K♥ 8♥ 5♥ because 9 > 8 on the second card."
              },
              {
                rank: "5",
                name: "Pair",
                example: "Q♥ Q♦ 7♠ &nbsp;|&nbsp; A♠ A♣ 2♥ &nbsp;|&nbsp; 5♦ 5♥ K♣",
                desc: "Two cards of the same rank plus one different card (the kicker). Pair of Aces is the highest pair, pair of Twos is the lowest. Pairs are the most strategically interesting hands in Teen Patti because they appear ~17% of the time — common enough to build betting strategy around.",
                tiebreak: "Higher pair rank wins first (A-A beats K-K). If pair rank is equal (impossible in a standard game without jokers), compare the kicker card."
              },
              {
                rank: "6",
                name: "High Card",
                example: "A♠ K♥ 9♦ &nbsp;|&nbsp; J♣ 8♠ 3♥ &nbsp;|&nbsp; Q♦ 7♠ 2♣",
                desc: "None of the above combinations. The hand is simply evaluated by its highest card. This is by far the most common outcome — nearly 3 out of every 4 hands dealt will be High Card. When two players both have High Card, the one with the highest individual card wins.",
                tiebreak: "Compare cards highest-to-lowest: first card, then second, then third. A-K-9 beats A-K-8 because 9 > 8 on the third card."
              },
            ].map(({ rank, name, example, desc, tiebreak }) => (
              <div key={rank} className="border-b border-gray-800 pb-5 last:border-0 last:pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full bg-[#FFC107] text-black font-bold text-sm flex items-center justify-center flex-shrink-0">{rank}</span>
                  <h3 className="text-white font-semibold">{name}</h3>
                </div>
                <p className="font-mono text-[#FFC107] text-sm mb-2 pl-10" dangerouslySetInnerHTML={{ __html: example }} />
                <p className="text-gray-300 text-sm leading-relaxed pl-10 mb-2">{desc}</p>
                <div className="pl-10">
                  <span className="text-gray-400 text-xs"><strong className="text-gray-300">Tiebreaker:</strong> {tiebreak}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Showdown Rules */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Showdown Rules</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            A showdown occurs when all but two players have folded and the remaining player calls (seen) or one player demands a show from another seen player. Key showdown rules:
          </p>
          <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
            <li className="flex gap-2"><span className="text-[#FFC107] mt-0.5">→</span><span>A blind player can never demand a showdown — they must become a seen player first.</span></li>
            <li className="flex gap-2"><span className="text-[#FFC107] mt-0.5">→</span><span>A seen player paying for a show pays the current stake. The blind player pays half the current stake.</span></li>
            <li className="flex gap-2"><span className="text-[#FFC107] mt-0.5">→</span><span>In a tie (identical hands), the player who did <strong className="text-white">not</strong> demand the show wins the pot.</span></li>
            <li className="flex gap-2"><span className="text-[#FFC107] mt-0.5">→</span><span>On Card Rummy, showdowns are automated — the system compares hands and awards the pot instantly.</span></li>
          </ul>
        </section>

        {/* Special Ace Rules */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Special Rules: Ace Position</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            In Teen Patti, Ace is uniquely flexible:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-2">Ace as High</h3>
              <p className="text-gray-300 text-sm">A-K-Q is a valid Pure Sequence and the highest possible Sequence/Pure Sequence hand. In High Card and Pair hands, Ace is always the highest card (above King).</p>
            </div>
            <div className="bg-[#06091F] rounded-xl p-4 border border-gray-800">
              <h3 className="text-white font-semibold mb-2">Ace as Low</h3>
              <p className="text-gray-300 text-sm">A-2-3 is a valid Sequence and Pure Sequence. This is the lowest possible sequence, ranking below 2-3-4. Ace&apos;s low position only applies in sequences — in all other contexts, Ace is high.</p>
            </div>
          </div>
        </section>

        {/* Variations */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Variation Rules</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Muflis (Lowball) Variation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">In Muflis, hand rankings are completely reversed. High Card becomes the best hand and Trail becomes the worst. A player holding 2-7-9 (High Card) beats a player holding A-A-K (Pair). This variation is available on Card Rummy and requires a complete mental inversion of normal Teen Patti strategy.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Joker Variation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">One or more cards are designated as wild jokers at the start of the game (e.g., all 8s are jokers). A joker can substitute for any card to complete a hand. If a joker is used in a Pure Sequence, it becomes a regular Sequence (the hand loses its Pure status since the joker breaks the same-suit requirement). Joker rules vary by table on Card Rummy — check the table rules before joining.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ["What beats what in Teen Patti?", "From best to worst: Trail > Pure Sequence > Sequence > Color > Pair > High Card. Any hand of a higher rank beats any hand of a lower rank, regardless of the specific cards."],
              ["Is Trail better than Royal Flush?", "Teen Patti does not have a 'Royal Flush' — that terminology is from poker. The Teen Patti equivalent is Pure Sequence (A-K-Q of same suit). Trail outranks Pure Sequence in Teen Patti, even though Pure Sequence is statistically rarer."],
              ["Why is Pure Sequence rarer but ranked below Trail?", "Pure Sequence (0.22%) is mathematically rarer than Trail (0.24%), but Trail has historically ranked higher in traditional South Asian card game rules. This is a convention of Teen Patti, not a mathematical argument. On Card Rummy, all standard Teen Patti tables use this traditional ranking."],
              ["What happens if two players have the same hand?", "Compare using tiebreaker rules for that hand type (see above). If hands are completely identical, the pot is split equally between the tied players."],
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
          <h2 className="text-2xl font-bold text-white mb-3">Play Teen Patti on Card Rummy</h2>
          <p className="text-gray-300 mb-6">Apply your hand knowledge in real money Teen Patti. Multiple table stakes available starting from PKR 5 per round.</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC107] text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Download Card Rummy — Free
          </a>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
            <Link href="/blog/how-to-play-teen-patti" className="hover:text-[#FFC107]">How to Play Teen Patti</Link>
            <Link href="/blog/card-rummy-tips-tricks-to-win" className="hover:text-[#FFC107]">Tips & Tricks</Link>
            <Link href="/blog" className="hover:text-[#FFC107]">All Guides</Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/how-to-play-teen-patti', title: 'How to Play Teen Patti — Rules & Hand Rankings' },
              { href: '/blog/teen-patti-variations', title: 'Teen Patti Variations — Joker, Muflis, AK47' },
              { href: '/blog/rummy-rules-guide', title: 'Rummy Rules — Sequences, Sets & How to Win' },
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
