import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Terms of Service — Card Rummy Game Pakistan',
  description: 'Terms of Service for cardrummygame.com.pk. Editorial policy, age requirements, affiliate disclosure, and user responsibilities for our Card Rummy review site.',
  alternates: { canonical: 'https://cardrummygame.com.pk/terms' },
  openGraph: {
    title: 'Terms of Service — Card Rummy Game Pakistan',
    url: 'https://cardrummygame.com.pk/terms',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const pageUrl = 'https://cardrummygame.com.pk/terms';

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': pageUrl,
                name: 'Terms of Service',
                url: pageUrl,
                isPartOf: { '@type': 'WebSite', name: 'Card Rummy Game Pakistan', url: 'https://cardrummygame.com.pk' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cardrummygame.com.pk' },
                  { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: pageUrl },
                ],
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Terms of Service</h1>
        <p className="text-center text-gray-400 mb-10">Last updated: 11 June 2026</p>

        <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">1. About This Website</h2>
            <p className="leading-relaxed">
              <Link href="/" className="text-accent hover:underline">cardrummygame.com.pk</Link> is an independent review and information website about the Card Rummy Android app. We publish guides, comparisons, and test results for Pakistani players. We do not operate the Card Rummy gaming platform itself.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">2. Age Requirement (18+)</h2>
            <p className="leading-relaxed">
              This website discusses real-money gaming. You must be <strong className="text-white">18 years or older</strong> to use this site and to download or play Card Rummy. By using this website, you confirm you meet the minimum age requirement in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">3. Editorial Independence & Affiliate Disclosure</h2>
            <p className="leading-relaxed mb-3">
              Our reviews are based on hands-on testing by our editorial team (see <Link href="/about-us" className="text-accent hover:underline">About Us</Link>). We may earn a commission when you download Card Rummy through links on this site. This does not increase your cost and does not influence our factual test results or withdrawal verification claims.
            </p>
            <p className="leading-relaxed">
              All test figures published on this site (e.g. PKR 1,000 deposit, 2× PKR 500 withdrawals, Vivo Y200 device) refer to our documented 14-day review unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">4. Not Financial or Legal Advice</h2>
            <p className="leading-relaxed">
              Content on this site is for informational and entertainment purposes only. It is not financial, legal, or gambling advice. Online gaming laws vary by region in Pakistan. Consult local regulations before playing with real money. See our <Link href="/disclaimer" className="text-accent hover:underline">Disclaimer</Link> and <Link href="/blog/is-card-rummy-safe-legal-pakistan" className="text-accent hover:underline">Safety & Legal guide</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">5. Accuracy of Information</h2>
            <p className="leading-relaxed">
              We strive to keep app version (currently V1.231), APK size (49 MB), bonus terms (10% up to PKR 1,000), and payment limits accurate. App features and limits may change without notice. Always verify current terms inside the Card Rummy app before depositing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">6. Third-Party Links & Downloads</h2>
            <p className="leading-relaxed">
              Download links may redirect to third-party servers operated by the app developer. We are not responsible for third-party app behaviour, account issues, or financial losses. Download only from official links on this domain to avoid fake APKs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">7. Responsible Gaming</h2>
            <p className="leading-relaxed">
              Real-money gaming involves risk of loss. Never deposit money you cannot afford to lose. Read our <Link href="/blog/responsible-gaming-guide" className="text-accent hover:underline">Responsible Gaming Guide</Link>. If you need help, contact support@cardrummygame.com.pk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">8. Intellectual Property</h2>
            <p className="leading-relaxed">
              Original text, screenshots, and test images on this site are owned by cardrummygame.com.pk unless credited otherwise. Card Rummy app name and logos are trademarks of their respective owners. You may not reproduce our content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">9. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, cardrummygame.com.pk and its authors shall not be liable for any direct, indirect, or consequential damages arising from use of this website or the Card Rummy app, including financial losses from gameplay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">10. Changes & Contact</h2>
            <p className="leading-relaxed">
              We may update these Terms at any time. Continued use of the site constitutes acceptance. Questions: <a href="mailto:support@cardrummygame.com.pk" className="text-accent hover:underline">support@cardrummygame.com.pk</a> or <Link href="/contact-us" className="text-accent hover:underline">Contact Us</Link>. See also our <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
