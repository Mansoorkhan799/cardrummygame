import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "Card Rummy Old Versions — Version History & Archive 2026",
  description: "Complete Card Rummy version history from V1.200 to V1.231. Learn why old versions are risky, what changed in each release, and why V1.231 is the only safe version to use.",
  keywords: ["card rummy old version", "card rummy previous version", "card rummy version history", "card rummy apk old", "card rummy version archive 2026"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/card-rummy-old-versions-archive" },
  openGraph: {
    title: "Card Rummy Old Versions — Version History & Archive 2026",
    description: "Complete version history from V1.200 to V1.231. Why older versions are risky and why you should always use the latest.",
    url: "https://cardrummygame.com.pk/blog/card-rummy-old-versions-archive",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "Card Rummy Version History Archive 2026" }]
  },
  twitter: { card: "summary_large_image", title: "Card Rummy Old Versions — Version History & Archive 2026", description: "Card Rummy version history: V1.200 through V1.231. What changed, what broke, and what was fixed in each release." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

export default function CardRummyOldVersionsArchive() {
  return (
    <>
      <BlogPostSchema
        title="Card Rummy Old Versions — Version History & Archive 2026"
        description="Complete Card Rummy version history from V1.200 to V1.231. Learn why old versions are risky, what changed in each release, and why V1.231 is the only safe version to use."
        slug="card-rummy-old-versions-archive"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="This page documents the complete version history of Card Rummy from V1.200 through V1.231. While some users search for older APK versions to downgrade, this practice carries real risks. Deprecated versions contain unpatched security vulnerabilities, may fail to connect to active payment servers, and could prevent successful withdrawals. V1.200 introduced the initial Pakistan market features. V1.210 added JazzCash integration. V1.215 brought stability fixes. V1.220 added the Mines game. V1.225 overhauled the VIP system. V1.231 is the current active version with improved payout speed and enhanced security. We do not link to old APK downloads."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">Card Rummy Old Versions Archive</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Version History</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Card Rummy Old Versions — Version History &amp; Archive 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 7 min read</p>
        </header>

        {/* Why People Search for Old Versions */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Why Do Players Look for Older Versions?</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            It happens more than you might expect. A player updates to a new version and finds that a game room they liked has been removed, a UI layout they were comfortable with has changed, or — in some cases — a bet size they preferred is no longer available. The instinct is to find and reinstall the previous APK.
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            Others simply receive a recommendation from a friend who is still running an older version and assume that version must still be obtainable.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We understand the reasoning. But before you pursue an older APK, you need to understand the serious risks involved.
          </p>
        </section>

        {/* Warning Box */}
        <section className="bg-red-900/20 border border-red-700 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-red-400 mb-3">Important Warning About Old Versions</h2>
          <div className="space-y-2 text-gray-300 text-sm leading-relaxed">
            {[
              "Security vulnerabilities: versions before V1.231 contain an unpatched SSL weakness on payment screens. On older versions, network-level attackers could potentially intercept payment data on public WiFi.",
              "Server disconnection: Card Rummy has deprecated API endpoints used by V1.200 and V1.210. These versions will fail to connect to payment servers entirely, meaning deposits and withdrawals become impossible.",
              "OTP failures: V1.220 and V1.225 have the known Telenor OTP delay bug. Some users were unable to log in for 10+ minutes.",
              "Fake APKs: third-party sites hosting old APK files frequently inject malware. Several reported cases involved players losing deposits to fake versions that visually replicated Card Rummy but routed transactions to fraudulent accounts.",
            ].map((warning, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-red-400 font-bold mt-0.5">⚠</span>
                <span>{warning}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Version History Table */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Complete Version History Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Version</th>
                  <th className="text-left py-2 px-3">Release</th>
                  <th className="text-left py-2 px-3">Key Features</th>
                  <th className="text-left py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["V1.200", "Aug 2025", "Initial Pakistan market release; Teen Patti, Rummy, Dragon vs Tiger; JazzCash deposits", "Deprecated"],
                  ["V1.210", "Oct 2025", "JazzCash withdrawal support; Andar Bahar added; referral system launched", "Deprecated"],
                  ["V1.215", "Nov 2025", "Crash fixes for Android 12+; improved login flow; faster lobby loading", "Deprecated"],
                  ["V1.220", "Jan 2026", "Mines game added; new referral commission tracking dashboard; EasyPaisa deposits", "Deprecated"],
                  ["V1.225", "Mar 2026", "VIP system overhaul (6 tiers); EasyPaisa withdrawals; lobby redesign", "Deprecated"],
                  ["V1.231", "Jun 2026", "7 Up Down added; 5–15 min withdrawals; Telenor OTP fix; SSL patch; 30% faster load", "Active ✓"],
                ].map(([ver, date, features, status], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 font-semibold text-white">{ver}</td>
                    <td className="py-2 px-3 text-gray-300">{date}</td>
                    <td className="py-2 px-3 text-gray-300">{features}</td>
                    <td className={`py-2 px-3 font-medium ${status.includes('Active') ? 'text-green-400' : 'text-red-400'}`}>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What Changed Between Versions */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">What Changed Between Major Versions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-white font-semibold mb-1">V1.200 → V1.210: Payment Expansion</h3>
              <p className="text-gray-300 leading-relaxed text-sm">The jump from V1.200 to V1.210 was primarily about making Card Rummy usable for Pakistani players at scale. JazzCash withdrawal support (not just deposits) was the headline feature. Andar Bahar was also introduced, expanding the game library from three to four titles.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">V1.210 → V1.215: Stability Work</h3>
              <p className="text-gray-300 leading-relaxed text-sm">V1.215 was largely a maintenance release. The app was crashing on Android 12 and 13 devices during lobby transitions, a bug introduced by a dependency update in V1.210. This was patched, and the login flow was streamlined to reduce dropped OTP sessions.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">V1.215 → V1.220: New Game & Referrals</h3>
              <p className="text-gray-300 leading-relaxed text-sm">Mines arrived in V1.220 — a risk/reward game where players reveal tiles and cash out before hitting a mine. The referral tracking dashboard was also introduced, giving players a live view of their referred friends' deposit activity and commission earned.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">V1.220 → V1.225: VIP Overhaul</h3>
              <p className="text-gray-300 leading-relaxed text-sm">The biggest structural change before V1.231. The VIP system was expanded to six tiers with clearer rebate percentages. EasyPaisa withdrawals were enabled for the first time. The lobby was visually redesigned with category tabs.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">V1.225 → V1.231: Performance & Security</h3>
              <p className="text-gray-300 leading-relaxed text-sm">V1.231 focused on fixing the most painful player complaints: slow withdrawals and Telenor login issues. 7 Up Down was added as the sixth game. The SSL security patch and app startup improvements were the most significant under-the-hood changes.</p>
            </div>
          </div>
        </section>

        {/* Why We Don't Link Old APKs */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Why We Don&apos;t Link to Old APK Downloads</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            We are frequently asked whether we can share links to V1.225 or V1.220. We do not — and will not — for the following reasons:
          </p>
          <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
            <li className="flex gap-2"><span className="text-[#FFC107] font-bold mt-0.5">→</span><span><strong className="text-white">Payment server compatibility:</strong> V1.200 and V1.210 can no longer reach Card Rummy&apos;s active payment API. Users on these versions report that withdrawal requests disappear without processing.</span></li>
            <li className="flex gap-2"><span className="text-[#FFC107] font-bold mt-0.5">→</span><span><strong className="text-white">Security risk to users:</strong> We have a responsibility not to distribute software with known security vulnerabilities. The unpatched SSL issue in pre-V1.231 versions is a real attack surface.</span></li>
            <li className="flex gap-2"><span className="text-[#FFC107] font-bold mt-0.5">→</span><span><strong className="text-white">Fake APK proliferation:</strong> Every "old version" site we have investigated hosts modified APKs, not original files. We cannot verify the integrity of any third-party hosted file.</span></li>
          </ul>
        </section>

        {/* Migration Guide */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">How to Migrate from Any Old Version to V1.231</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The good news: there is no complicated migration process. Your account is 100% server-side. All of your balance, VIP level, game history, and referral earnings are stored on Card Rummy&apos;s servers — not on your phone. Here is all you need to do:
          </p>
          <ol className="space-y-2 text-gray-300 text-sm leading-relaxed">
            {[
              "Note your login credentials (phone number + password). You do not need to export or back up any data.",
              "Visit cardrummygame.com.pk/download-card-rummy and download V1.231.",
              "Install the new APK. If prompted to replace or update the existing app, allow it.",
              "Log in with your existing credentials. Your account appears exactly as you left it.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[#FFC107] font-bold min-w-[1.5rem]">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ["Can I go back to an old version if I dislike V1.231?", "You can uninstall V1.231 and install an older APK, but we strongly advise against it. Pre-V1.231 versions have security issues and V1.200/V1.210 can no longer process payments. If there is something specific you dislike about V1.231, we recommend checking Card Rummy support — some UI preferences can be adjusted in-app settings."],
              ["Will my account still work on an old version?", "Your login may work on V1.215 and V1.225 since the authentication API is still active for those versions. However, withdrawal processing on pre-V1.231 versions is unreliable, and V1.200/V1.210 cannot connect to payment servers at all."],
              ["Is the version shown in the app reliable?", "Yes. Open the app → Profile → Settings → About. The version displayed is pulled from the APK manifest and cannot be spoofed by a legitimate Card Rummy APK. If a version number looks unusual or does not match one in the table above, delete the app immediately — it is likely a fake."],
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
          <h2 className="text-2xl font-bold text-white mb-3">Get the Latest Version — V1.231</h2>
          <p className="text-gray-300 mb-6">Skip the risks of old versions. Download V1.231 — the only fully supported, secure, and payment-compatible version of Card Rummy.</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC107] text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Download Card Rummy V1.231
          </a>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
            <Link href="/download-card-rummy" className="hover:text-[#FFC107]">Download Guide</Link>
            <Link href="/blog/card-rummy-latest-version-v1230" className="hover:text-[#FFC107]">What&apos;s New in V1.231</Link>
            <Link href="/blog" className="hover:text-[#FFC107]">More Guides</Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/card-rummy-latest-version-v1230', title: "Card Rummy Latest Version V1.231 — What's New" },
              { href: '/blog/card-rummy-update-guide', title: 'How to Update Card Rummy — Step-by-Step' },
              { href: '/blog/how-to-download-card-rummy-apk', title: 'How to Download Card Rummy APK (V1.231)' },
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
