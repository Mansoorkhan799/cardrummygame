import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { CARD_RUMMY_FACTS } from '@/lib/cardRummyFacts';

export const metadata: Metadata = {
  title: 'Card Rummy Login — Register, OTP & Account Help 2026',
  description: 'Card Rummy login and registration guide for Pakistan. Fix OTP issues, bind email, recover account, and secure your profile step by step.',
  keywords: ['card rummy login', 'card rummy register', 'card rummy account', 'card rummy otp problem'],
  alternates: { canonical: 'https://cardrummygame.com.pk/card-rummy-login' },
  robots: { index: true, follow: true },
};

export default function CardRummyLoginPage() {
  const pageUrl = 'https://cardrummygame.com.pk/card-rummy-login';

  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <Script
        id="login-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              { '@type': 'WebPage', name: 'Card Rummy Login Guide', url: pageUrl },
              {
                '@type': 'HowTo',
                name: 'How to Login to Card Rummy',
                step: [
                  { '@type': 'HowToStep', name: 'Open the app', text: 'Launch Card Rummy V1.231 on your Android phone.' },
                  { '@type': 'HowToStep', name: 'Enter mobile number', text: 'Tap Login and enter your registered Pakistani mobile number.' },
                  { '@type': 'HowToStep', name: 'Verify OTP', text: 'Enter the SMS OTP code. If OTP fails, wait 60 seconds and retry or switch network.' },
                  { '@type': 'HowToStep', name: 'Bind email', text: 'Go to Profile → Bind Email to secure your account for recovery.' },
                ],
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-[#FFC107]">Home</Link>
          <span> / </span>
          <span className="text-gray-300">Card Rummy Login</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Card Rummy Login & Registration</h1>
        <p className="text-gray-300 leading-relaxed mb-8">
          Need to log in or create a Card Rummy account? This page covers login, registration, OTP fixes, and email binding for Pakistani players on {CARD_RUMMY_FACTS.version}.
        </p>

        <section className="bg-[#0A1029] rounded-2xl border border-gray-800 p-6 mb-6 space-y-4">
          <h2 className="text-xl font-bold text-[#FFC107]">Quick Login Steps</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
            <li>Open Card Rummy → tap <strong className="text-white">Login</strong></li>
            <li>Enter your Pakistani mobile number → receive OTP via SMS</li>
            <li>Enter OTP → you are logged in</li>
            <li>New user? Tap <strong className="text-white">Register</strong> instead, then bind email in Profile</li>
          </ol>
        </section>

        <section className="grid sm:grid-cols-2 gap-4 mb-8">
          <Link href="/blog/how-to-register-bind-email-card-rummy" className="block p-5 rounded-xl bg-[#0A1029] border border-gray-800 hover:border-[#FFC107]/40 transition-colors">
            <h2 className="text-[#FFC107] font-semibold mb-2">Register & Bind Email →</h2>
            <p className="text-gray-400 text-sm">Full registration walkthrough with screenshots.</p>
          </Link>
          <Link href="/blog/card-rummy-login-problems-fixes" className="block p-5 rounded-xl bg-[#0A1029] border border-gray-800 hover:border-[#FFC107]/40 transition-colors">
            <h2 className="text-[#FFC107] font-semibold mb-2">Login Problems & Fixes →</h2>
            <p className="text-gray-400 text-sm">OTP not received, IP exceed, and account locked solutions.</p>
          </Link>
        </section>

        <div className="text-center">
          <Link href="/download-card-rummy" className="inline-block bg-[#FFC107] text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors">
            Download Card Rummy APK First
          </Link>
        </div>
      </div>
    </article>
  );
}
