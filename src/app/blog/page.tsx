import Link from 'next/link';
import { Metadata } from 'next';
import { safeJsonLd } from '@/lib/safeJsonLd';

const BASE = 'https://cardrummygame.com.pk';

export const metadata: Metadata = {
  title: 'Card Rummy Blog — Guides, Tips, Strategies & Reviews 2026',
  description: 'Complete Card Rummy blog: game guides (Teen Patti, Rummy, Dragon vs Tiger), how-to tutorials, bonus guides, payment help, safety reviews, and tips for Pakistani players.',
  keywords: [
    'Card Rummy blog', 'Card Rummy guide', 'teen patti guide', 'rummy rules',
    'card rummy tips', 'card rummy bonuses', 'card rummy safe', 'card rummy pakistan 2026'
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://cardrummygame.com.pk/blog' },
  openGraph: {
    title: 'Card Rummy Blog — Guides, Tips & Reviews 2026',
    description: 'All Card Rummy guides, tutorials, strategies and safety tips for Pakistani players.',
    url: 'https://cardrummygame.com.pk/blog',
    siteName: 'Card Rummy Game',
    images: [{ url: 'https://cardrummygame.com.pk/card-rummy-game-win-real-money-2026.webp', width: 1200, height: 630 }],
  },
};

const categories = [
  {
    id: 'game-guides',
    label: 'Game Guides',
    color: '#FFC107',
    badge: 'Highest Priority',
    desc: 'Master every game on Card Rummy — rules, hand rankings, and proven strategies.',
    posts: [
      { slug: 'how-to-play-teen-patti', title: 'How to Play Teen Patti — Rules, Hand Rankings & Tips', date: 'Jun 2026', read: '8 min' },
      { slug: 'rummy-rules-guide', title: 'Rummy Rules — Sequences, Sets & How to Win', date: 'Jun 2026', read: '9 min' },
      { slug: 'dragon-vs-tiger-strategy', title: 'Dragon vs Tiger Strategy — Tips & Tricks to Win', date: 'Jun 2026', read: '7 min' },
      { slug: '7-up-down-game-guide', title: '7 Up Down Game Guide — Rules, Strategy & Tips', date: 'Jun 2026', read: '6 min' },
      { slug: 'andar-bahar-rules-tricks', title: 'Andar Bahar Rules & Tricks — How to Win', date: 'Jun 2026', read: '7 min' },
      { slug: 'mines-game-strategy', title: 'Mines Game Strategy — How to Win & Cash Out Smart', date: 'Jun 2026', read: '6 min' },
      { slug: 'teen-patti-variations', title: 'Teen Patti Variations — Joker, Muflis, AK47 & More Explained', date: 'Jun 2026', read: '8 min' },
    ],
  },
  {
    id: 'how-to',
    label: 'How-To Tutorials',
    color: '#34d399',
    badge: 'High Intent',
    desc: 'Step-by-step guides for everything from download to withdrawal.',
    posts: [
      { slug: 'how-to-register-bind-email-card-rummy', title: 'How to Register & Bind Email on Card Rummy', date: 'Jun 2026', read: '5 min' },
      { slug: 'card-rummy-login-problems-fixes', title: 'Card Rummy Login Problems & Fixes — Complete Guide', date: 'Jun 2026', read: '7 min' },
      { slug: 'how-to-get-card-rummy-welcome-bonus', title: 'How to Get the Card Rummy Welcome Bonus', date: 'Jun 2026', read: '4 min' },
    ],
  },
  {
    id: 'bonuses',
    label: 'Bonus & Promo',
    color: '#a78bfa',
    badge: 'Money Keywords',
    desc: 'Every bonus, promo, and reward Card Rummy offers — fully explained.',
    posts: [
      { slug: 'card-rummy-bonus-code-2026', title: 'Card Rummy Bonus Code 2026 — Latest Working Offers', date: 'Jun 2026', read: '5 min' },
      { slug: 'card-rummy-welcome-bonus', title: 'Card Rummy Welcome Bonus Explained — How to Claim PKR 1,000 Free', date: 'Jun 2026', read: '5 min' },
      { slug: 'card-rummy-referral-program', title: 'Card Rummy Referral Program — How to Earn PKR 50+ Per Friend', date: 'Jun 2026', read: '6 min' },
      { slug: 'card-rummy-vip-levels', title: 'Card Rummy VIP Levels & Rebates — Bronze to Diamond Explained', date: 'Jun 2026', read: '7 min' },
      { slug: 'card-rummy-free-chips-daily-rewards', title: 'Card Rummy Free Chips & Daily Rewards Guide', date: 'Jun 2026', read: '5 min' },
    ],
  },
  {
    id: 'payments',
    label: 'Payment Pages',
    color: '#60a5fa',
    badge: 'Pakistan-Specific',
    desc: 'JazzCash, EasyPaisa, bank transfers — all payment guides for Pakistani players.',
    posts: [
      { slug: 'card-rummy-jazzcash-withdrawal', title: 'Card Rummy JazzCash Withdrawal Guide — How to Withdraw', date: 'Jun 2026', read: '6 min' },
      { slug: 'card-rummy-easypaisa-deposit-withdraw', title: 'Card Rummy EasyPaisa Deposit & Withdrawal Guide', date: 'Jun 2026', read: '6 min' },
      { slug: 'card-rummy-bank-transfer-withdrawal', title: 'Card Rummy Bank Transfer Withdrawal Guide', date: 'Jun 2026', read: '5 min' },
      { slug: 'card-rummy-withdrawal-limits', title: 'Card Rummy Withdrawal Limits — Min, Max & Daily Limits', date: 'Jun 2026', read: '4 min' },
      { slug: 'card-rummy-payment-problems', title: 'Card Rummy Payment Problems & Solutions — Complete Fix Guide', date: 'Jun 2026', read: '7 min' },
    ],
  },
  {
    id: 'comparison',
    label: 'Comparison & Best Of',
    color: '#f87171',
    badge: 'Link Magnets',
    desc: 'How Card Rummy stacks up against every competitor — ranked honestly.',
    posts: [
      { slug: 'card-rummy-vs-competitors', title: 'Card Rummy vs Other Card Apps — Which Is Best in Pakistan?', date: 'Jun 2026', read: '10 min' },
      { slug: 'best-teen-patti-apps-pakistan-2026', title: 'Best Teen Patti Apps in Pakistan 2026 — Real Money Rankings', date: 'Jun 2026', read: '9 min' },
      { slug: 'best-real-money-card-games-pakistan', title: 'Best Real Money Card Games in Pakistan 2026 — Ranked & Reviewed', date: 'Jun 2026', read: '8 min' },
      { slug: 'top-earning-apps-pakistan-2026', title: 'Top 5 Earning Apps in Pakistan 2026 (With Card Rummy)', date: 'Jun 2026', read: '7 min' },
      { slug: 'card-rummy-alternatives', title: 'Card Rummy Alternatives in Pakistan 2026 — Honest Comparison', date: 'Jun 2026', read: '8 min' },
    ],
  },
  {
    id: 'trust',
    label: 'Trust & Safety',
    color: '#4ade80',
    badge: 'E-E-A-T Critical',
    desc: 'Is Card Rummy safe and legal? Everything about security, scams, and responsible gaming.',
    posts: [
      { slug: 'is-card-rummy-safe-legal-pakistan', title: 'Is Card Rummy Safe & Legal in Pakistan? Honest Answer', date: 'Jun 2026', read: '10 min' },
      { slug: 'card-rummy-real-or-fake', title: 'Card Rummy Real or Fake? — We Tested It for 14 Days', date: 'Jun 2026', read: '8 min' },
      { slug: 'responsible-gaming-guide', title: 'Responsible Gaming Guide — Play Safe & Avoid Addiction', date: 'Jun 2026', read: '9 min' },
      { slug: 'how-to-spot-fake-card-rummy-apps', title: 'How to Spot Fake Card Rummy Apps — 8 Warning Signs', date: 'Jun 2026', read: '6 min' },
      { slug: 'card-rummy-customer-support', title: 'Card Rummy Customer Support — All Contact Methods & Response Times', date: 'Jun 2026', read: '5 min' },
    ],
  },
  {
    id: 'versions',
    label: 'Version & Updates',
    color: '#fb923c',
    badge: 'Freshness Signal',
    desc: 'Latest version info, update guide, and version history archive.',
    posts: [
      { slug: 'card-rummy-latest-version-v1230', title: 'Card Rummy Latest Version V1.231 — What\'s New in 2026', date: 'Jun 2026', read: '6 min' },
      { slug: 'card-rummy-old-versions-archive', title: 'Card Rummy Old Versions — Version History & Archive', date: 'Jun 2026', read: '5 min' },
      { slug: 'card-rummy-update-guide', title: 'How to Update Card Rummy to the Latest Version — Step-by-Step', date: 'Jun 2026', read: '4 min' },
    ],
  },
  {
    id: 'informational',
    label: 'Tips & Informational',
    color: '#e879f9',
    badge: 'Top-of-Funnel',
    desc: 'Strategy deep-dives, beginner primers, and expert knowledge for every level.',
    posts: [
      { slug: 'card-rummy-tips-tricks-to-win', title: 'Card Rummy Tips & Tricks to Win More — 12 Proven Strategies', date: 'Jun 2026', read: '10 min' },
      { slug: 'beginners-guide-online-card-games-pakistan', title: 'Beginner\'s Guide to Online Card Games in Pakistan — Start Here', date: 'Jun 2026', read: '8 min' },
      { slug: 'teen-patti-hand-rankings', title: 'Teen Patti Hand Rankings — Complete Cheat Sheet', date: 'Jun 2026', read: '5 min' },
      { slug: 'bankroll-management-card-games', title: 'How to Manage Your Bankroll in Card Games — Pakistan Guide', date: 'Jun 2026', read: '7 min' },
      { slug: 'common-mistakes-card-rummy-players', title: '8 Common Mistakes New Card Rummy Players Make (And How to Fix Them)', date: 'Jun 2026', read: '8 min' },
    ],
  },
];

export default function Blog() {
  const allPosts = categories.flatMap((cat) => cat.posts);
  const guideCount = allPosts.length;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE}/blog#webpage`,
        name: 'Card Rummy Blog — Guides, Tips, Strategies & Reviews 2026',
        description: 'Complete Card Rummy blog: game guides, how-to tutorials, bonus guides, payment help, safety reviews, and tips for Pakistani players.',
        url: `${BASE}/blog`,
        isPartOf: { '@type': 'WebSite', '@id': `${BASE}#website`, name: 'Card Rummy', url: BASE },
      },
      {
        '@type': 'ItemList',
        '@id': `${BASE}/blog#itemlist`,
        name: 'Card Rummy Blog Posts',
        numberOfItems: allPosts.length,
        itemListElement: allPosts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: post.title,
          url: `${BASE}/blog/${post.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(blogSchema) }}
      />
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-14">
          <div className="inline-block bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-full px-4 py-1 text-[#FFC107] text-sm font-medium mb-4">
            {guideCount} Guides · Updated June 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Card Rummy Blog</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Honest guides based on 14 days of real-money testing. Game rules, payment help, bonuses, safety — everything you need to play smart.
          </p>
        </div>

        {/* Quick Jump */}
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {categories.map(cat => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors hover:text-white"
              style={{ borderColor: cat.color + '50', color: cat.color, backgroundColor: cat.color + '10' }}
            >
              {cat.label}
            </a>
          ))}
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map(cat => (
            <section key={cat.id} id={cat.id}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gray-800" />
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: cat.color + '15', color: cat.color, border: `1px solid ${cat.color}40` }}
                  >
                    {cat.badge}
                  </span>
                  <h2 className="text-2xl font-bold text-white">{cat.label}</h2>
                </div>
                <div className="h-px flex-1 bg-gray-800" />
              </div>
              <p className="text-gray-400 text-sm mb-6 text-center">{cat.desc}</p>

              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.posts.map(post => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-[#0A1029] border border-gray-800 rounded-2xl p-6 hover:border-[#FFC107]/40 transition-all duration-200 hover:shadow-lg hover:shadow-[#FFC107]/5 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: cat.color + '15', color: cat.color }}
                      >
                        {cat.label}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-[#FFC107] transition-colors flex-1">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto pt-3 border-t border-gray-800">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.read} read</span>
                      <span className="ml-auto text-[#FFC107] group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}
