/** All live blog post slugs — single source of truth for sitemap & internal links. */
export const BLOG_SLUGS = [
  // Game guides
  "how-to-play-teen-patti",
  "rummy-rules-guide",
  "dragon-vs-tiger-strategy",
  "7-up-down-game-guide",
  "andar-bahar-rules-tricks",
  "mines-game-strategy",
  "teen-patti-variations",
  // How-to
  "how-to-download-card-rummy-apk",
  "how-to-withdraw-money-card-rummy",
  "how-to-deposit-card-rummy",
  "how-to-register-bind-email-card-rummy",
  "card-rummy-login-problems-fixes",
  "how-to-get-card-rummy-welcome-bonus",
  // Bonus & promo
  "card-rummy-bonus-code-2026",
  "card-rummy-welcome-bonus",
  "card-rummy-referral-program",
  "card-rummy-vip-levels",
  "card-rummy-free-chips-daily-rewards",
  // Payment
  "card-rummy-jazzcash-withdrawal",
  "card-rummy-easypaisa-deposit-withdraw",
  "card-rummy-bank-transfer-withdrawal",
  "card-rummy-withdrawal-limits",
  "card-rummy-payment-problems",
  // Comparison
  "card-rummy-vs-competitors",
  "best-teen-patti-apps-pakistan-2026",
  "best-real-money-card-games-pakistan",
  "top-earning-apps-pakistan-2026",
  "card-rummy-alternatives",
  // Trust & safety
  "is-card-rummy-safe-legal-pakistan",
  "card-rummy-real-or-fake",
  "responsible-gaming-guide",
  "how-to-spot-fake-card-rummy-apps",
  "card-rummy-customer-support",
  // Version
  "card-rummy-latest-version-v1230",
  "card-rummy-old-versions-archive",
  "card-rummy-update-guide",
  // Informational
  "card-rummy-tips-tricks-to-win",
  "beginners-guide-online-card-games-pakistan",
  "teen-patti-hand-rankings",
  "bankroll-management-card-games",
  "common-mistakes-card-rummy-players",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

/** High-priority slugs for robots.txt hints */
export const PRIORITY_BLOG_SLUGS: BlogSlug[] = [
  "how-to-play-teen-patti",
  "rummy-rules-guide",
  "dragon-vs-tiger-strategy",
  "how-to-download-card-rummy-apk",
  "how-to-withdraw-money-card-rummy",
  "how-to-deposit-card-rummy",
  "card-rummy-welcome-bonus",
  "card-rummy-jazzcash-withdrawal",
  "card-rummy-easypaisa-deposit-withdraw",
  "best-teen-patti-apps-pakistan-2026",
  "is-card-rummy-safe-legal-pakistan",
  "card-rummy-real-or-fake",
  "card-rummy-latest-version-v1230",
];
