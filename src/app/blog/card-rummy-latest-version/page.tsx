import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';

export const metadata: Metadata = {
  title: "Card Rummy Latest Version V1.231 — What's New in 2026",
  description: "Card Rummy V1.231 is the latest version as of June 2026. See what's new: faster JazzCash withdrawals, 7 Up Down game added, UI refresh, and security patches.",
  keywords: ["card rummy latest version", "card rummy v1.231", "card rummy new version 2026", "card rummy update 2026", "card rummy apk latest"],
  alternates: { canonical: "https://cardrummygame.com.pk/blog/card-rummy-latest-version" },
  openGraph: {
    title: "Card Rummy Latest Version V1.231 — What's New in 2026",
    description: "Card Rummy V1.231 is the latest version as of June 2026. Faster withdrawals, new games, and security patches.",
    url: "https://cardrummygame.com.pk/blog/card-rummy-latest-version",
    images: [{ url: "https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp", width: 1200, height: 630, alt: "Card Rummy Latest Version V1.231 2026" }]
  },
  twitter: { card: "summary_large_image", title: "Card Rummy Latest Version V1.231 — What's New in 2026", description: "Everything new in Card Rummy V1.231: faster payouts, 7 Up Down added, UI refresh, bug fixes, and security patches." },
  robots: { index: true, follow: true }
};

const DOWNLOAD_URL = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

export default function CardRummyLatestVersion() {
  return (
    <>
      <BlogPostSchema
        title="Card Rummy Latest Version V1.231 — What's New in 2026"
        description="Card Rummy V1.231 is the latest version as of June 2026. See what's new: faster JazzCash withdrawals, 7 Up Down game added, UI refresh, and security patches."
        slug="card-rummy-latest-version"
        datePublished="2026-06-11"
        dateModified="2026-06-11"
        articleBody="Card Rummy V1.231 is the latest version of the popular real-money card game app in Pakistan, released in June 2026. This update brings significantly improved payout processing — JazzCash withdrawals now complete in 5-15 minutes versus the 30+ minutes in earlier versions. The 7 Up Down game has been added to the main lobby, giving players six real-money games. The UI has received a dark mode refresh with smoother lobby animations. V1.231 also patches an OTP delivery bug affecting some Telenor users and includes an SSL security enhancement for payment transactions. App loading speed is 30% faster on Android 10 and above. The APK is approximately 49 MB and requires Android 5.0 or higher, 2 GB RAM, and 500 MB of free storage."
      />
      <article className="py-8 px-4 md:px-8 max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#FFC107]">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">Card Rummy Latest Version V1.231</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Version Update</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Card Rummy Latest Version V1.231 — What&apos;s New in 2026
          </h1>
          <p className="text-gray-400 text-sm">By Card Rummy Team &nbsp;·&nbsp; Updated June 2026 &nbsp;·&nbsp; 6 min read</p>
        </header>

        {/* Current Version Overview */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Current Version: V1.231 (June 2026)</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              ["Version", "V1.231"],
              ["File Size", "49 MB APK"],
              ["Platform", "Android 5.0+"],
            ].map(([label, val]) => (
              <div key={label} className="bg-[#06091F] rounded-xl p-4 border border-gray-800 text-center">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{label}</p>
                <p className="text-white font-bold text-lg">{val}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed">
            V1.231 is the current stable release of Card Rummy, available exclusively as an Android APK download from <strong className="text-white">cardrummygame.com.pk</strong>. The app is not available on the Google Play Store, so you must download it directly. This version launched in June 2026 and addresses several pain points players reported in V1.225, most notably slow withdrawal processing times.
          </p>
        </section>

        {/* What's New */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">What&apos;s New in V1.231</h2>
          <div className="space-y-4">
            {[
              ["Faster JazzCash Withdrawals", "The most requested improvement. JazzCash withdrawals now process in 5–15 minutes compared to 30+ minutes in V1.225. EasyPaisa and bank transfers also saw marginal improvements. This change was made on the backend payment gateway and is reflected in the app's updated status polling logic."],
              ["7 Up Down Added to Lobby", "The popular dice-prediction game 7 Up Down has been officially added to the main game lobby in V1.231. Previously only available on certain server instances, it is now a permanent fixture alongside Teen Patti, Rummy, Dragon vs Tiger, Andar Bahar, and Mines."],
              ["UI Refresh & Dark Mode Improvements", "The lobby has received smoother animations when switching between game categories. Dark mode contrast has been improved — several screens that previously had poor readability on AMOLED displays now render correctly. The VIP progress bar has been redesigned to show percentage completion."],
              ["Bug Fix: Telenor OTP Delays", "Some Telenor users on SIM-based OTP authentication experienced delays of up to 5 minutes for login codes. This has been resolved. The fix routes Telenor OTPs through a secondary SMS gateway when the primary gateway times out."],
              ["Security Patch: Enhanced SSL", "Payment transaction pages now use an updated SSL certificate with stronger cipher suites. This patch protects against downgrade attacks on older Android versions. Users on Android 5.0–7.0 benefit most from this change."],
              ["30% Faster App Loading on Android 10+", "Internal profiling showed that the app's startup sequence was loading unused assets on newer Android versions. V1.231 defers these assets to an on-demand load, resulting in approximately 30% faster time-to-lobby on Android 10 and higher."],
            ].map(([title, body], i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[#FFC107] font-bold text-lg min-w-[1.8rem] mt-0.5">{i + 1}.</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Version History Table */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Version History Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-[#FFC107] border-b border-gray-700">
                  <th className="text-left py-2 px-3">Version</th>
                  <th className="text-left py-2 px-3">Release Date</th>
                  <th className="text-left py-2 px-3">Key Changes</th>
                  <th className="text-left py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["V1.220", "Jan 2026", "Initial 2026 build; Mines game added; new referral commission tracking", "Deprecated"],
                  ["V1.225", "Mar 2026", "VIP system overhaul; EasyPaisa withdrawal support added; lobby redesign", "Deprecated"],
                  ["V1.231", "Jun 2026", "7 Up Down added; faster withdrawals; Telenor OTP fix; SSL patch; 30% faster load", "Active ✓"],
                ].map(([ver, date, changes, status], i) => (
                  <tr key={i} className="bg-[#06091F] border-b border-gray-800 hover:bg-[#0d1535]">
                    <td className="py-2 px-3 font-semibold text-white">{ver}</td>
                    <td className="py-2 px-3 text-gray-300">{date}</td>
                    <td className="py-2 px-3 text-gray-300">{changes}</td>
                    <td className={`py-2 px-3 font-medium ${status.includes('Active') ? 'text-green-400' : 'text-red-400'}`}>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Check & Update */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">How to Check Your Version & Update</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            To verify which version you are currently running: open Card Rummy → tap your profile icon → select <strong className="text-white">Settings</strong> → scroll to <strong className="text-white">About</strong>. The version number is displayed at the bottom of the About screen.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you are not on V1.231, here is how to update:
          </p>
          <ol className="space-y-2 text-gray-300 leading-relaxed">
            {[
              "Visit cardrummygame.com.pk/download-card-rummy on your Android device.",
              "Tap the Download V1.231 button to download the APK file (49 MB).",
              "Open your notification bar and tap the downloaded file.",
              "Android will show an \"Update\" prompt (not Install) since you already have the app. Tap Update.",
              "Allow any permission requests if prompted. The update takes 30–60 seconds.",
              "Open the app — verify the version in Settings → About shows V1.231.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[#FFC107] font-bold min-w-[1.5rem]">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-4 bg-green-900/20 border border-green-800 rounded-xl p-4">
            <p className="text-green-300 text-sm"><strong>Your account data is safe.</strong> All account information, balance, VIP progress, and referral records are stored server-side. Updating the APK does not affect your account in any way.</p>
          </div>
        </section>

        {/* System Requirements */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">System Requirements for V1.231</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["Android Version", "Android 5.0 (Lollipop) or higher"],
              ["RAM", "2 GB minimum (3 GB recommended)"],
              ["Storage", "500 MB free space required"],
              ["Internet", "Stable 3G/4G/WiFi connection"],
              ["APK Size", "49 MB download"],
              ["Play Store", "Not available — APK only"],
            ].map(([req, val]) => (
              <div key={req} className="flex justify-between items-center bg-[#06091F] rounded-xl px-4 py-3 border border-gray-800">
                <span className="text-gray-400 text-sm">{req}</span>
                <span className="text-white font-medium text-sm">{val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ["Does updating to V1.231 delete my account data?", "No. Your balance, VIP level, referral earnings, and game history are all stored on Card Rummy's servers. Installing or updating the APK only updates the app interface and client-side code — your account is untouched."],
              ["How often does Card Rummy release updates?", "Approximately every 4–6 weeks. Major updates (new games, major UI changes) come less frequently — roughly every 2–3 months. Minor patches for bug fixes can arrive more quickly when urgent issues are reported."],
              ["Can I use V1.225 instead of V1.231?", "Technically possible, but not recommended. V1.225 does not have the Telenor OTP fix, the improved withdrawal speed, or the SSL security patch. Some users on V1.225 report longer withdrawal times. We strongly recommend upgrading."],
              ["Where do I get V1.231?", "Only from cardrummygame.com.pk. Do not download Card Rummy APKs from third-party websites — there are fake versions in circulation that steal deposit funds."],
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
          <h2 className="text-2xl font-bold text-white mb-3">Download Card Rummy V1.231</h2>
          <p className="text-gray-300 mb-6">Get the latest version with faster withdrawals, 7 Up Down, and all security patches. Free to download for Android.</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC107] text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Download V1.231 — Free
          </a>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
            <Link href="/download-card-rummy" className="hover:text-[#FFC107]">Full Download Guide</Link>
            <Link href="/blog/card-rummy-update-guide" className="hover:text-[#FFC107]">Update Guide</Link>
            <Link href="/blog" className="hover:text-[#FFC107]">More Guides</Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/card-rummy-old-versions-archive', title: 'Card Rummy Old Versions — Version History Archive' },
              { href: '/blog/card-rummy-update-guide', title: 'How to Update Card Rummy — Step-by-Step' },
              { href: '/blog/how-to-download-card-rummy-apk', title: 'How to Download Card Rummy APK (V1.231)' },
              { href: '/blog/is-card-rummy-safe-legal-pakistan', title: 'Is Card Rummy Safe & Legal in Pakistan?' },
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
