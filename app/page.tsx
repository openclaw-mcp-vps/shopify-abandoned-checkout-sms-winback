export default function Page() {
  const faqs = [
    {
      q: "How does it connect to my Shopify store?",
      a: "After subscribing, you install our app via a Shopify webhook URL. Setup takes under 5 minutes — no coding required."
    },
    {
      q: "When are SMS messages sent after abandonment?",
      a: "We send the first SMS 1 hour after abandonment, with an optional follow-up at 24 hours. Timing is fully configurable in your dashboard."
    },
    {
      q: "Is there a free trial?",
      a: "Yes — your first 14 days are free. No credit card required to start. Cancel anytime from your dashboard."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Shopify SMS Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Recover Abandoned Checkouts<br className="hidden sm:block" /> with Personalized SMS
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically message customers who leave without buying. Smart timing, unique discount codes, and Twilio-powered delivery — all in one $19/mo tool.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Free 14-Day Trial
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">No credit card required &middot; Cancel anytime</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: "~15%", label: "Average checkout recovery rate" },
            { stat: "< 5 min", label: "Setup time with Shopify" },
            { stat: "2x", label: "ROI vs email recovery alone" }
          ].map(({ stat, label }) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to recover lost revenue</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited abandoned checkout detection",
              "Personalized SMS via Twilio",
              "Auto-generated discount codes",
              "Smart send timing (1hr & 24hr)",
              "Campaign analytics dashboard",
              "Shopify webhook integration",
              "14-day free trial"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">&#10003;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#8b949e] mt-12">
          &copy; {new Date().getFullYear()} SMS Winback &middot; Built for Shopify stores doing $10K+/mo
        </p>
      </section>
    </main>
  );
}
