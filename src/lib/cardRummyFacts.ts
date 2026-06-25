/** Single source of truth for Card Rummy facts — use across pages to avoid YMYL inconsistencies. */
export const CARD_RUMMY_FACTS = {
  version: 'V1.231',
  apkSize: '49 MB',
  apkSizeSchema: '49MB',
  minDeposit: 'PKR 100',
  minWithdrawal: 'PKR 200',
  welcomeBonus: '10% up to PKR 1,000',
  welcomeBonusRate: '10%',
  welcomeBonusMax: 'PKR 1,000',
  featuredGames: 6,
  totalGames: '30+',
  testDevice: 'Vivo Y200',
  testDays: 14,
  testDeposit: 'PKR 1,000',
  testWithdrawals: '2× PKR 500',
  jazzCashWithdrawMins: '~5 minutes',
  easypaisaWithdrawMins: '~7 minutes',
  lastUpdated: '11 June 2026',
  domain: 'cardrummygame.com.pk',
  downloadUrl: 'https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272',
} as const;

export const TEST_SUMMARY = {
  device: CARD_RUMMY_FACTS.testDevice,
  duration: `${CARD_RUMMY_FACTS.testDays} days`,
  totalDeposited: CARD_RUMMY_FACTS.testDeposit,
  gamesTested: 'Mines, Dragon vs Tiger, and Crash',
  withdrawals: [
    { amount: 'PKR 500', method: 'JazzCash', duration: '5 minutes' },
    { amount: 'PKR 500', method: 'EasyPaisa', duration: '7 minutes' },
  ],
} as const;
