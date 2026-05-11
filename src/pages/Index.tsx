import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Users,
  ShieldCheck,
  Star,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Globe,
  MousePointerClick,
} from "lucide-react";

const OFFER_URL = "https://ezprofits.app/go/hdylakgffc";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#faf9ff]">
      {/* ─── NAV ─────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900 tracking-tight">
              Ez<span className="text-[#7c3aed]">Profits</span>
            </span>
          </div>
          <a
            href={OFFER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 shadow-glow hover:shadow-lg"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-sm font-medium text-purple-700">
                Free spots available — limited time
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              Turn Any Link Into{" "}
              <span className="text-gradient">Daily Commissions</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              Paste a link, share it, and get paid. EzProfits handles everything
              — from free traffic to 100% commissions. No experience needed.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <a
                href={OFFER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-200 shadow-glow hover:shadow-xl hover:-translate-y-0.5"
              >
                Claim Your Free Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-sm text-gray-400 font-medium">
                No credit card required
              </span>
            </div>

            {/* Social proof row */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                Trusted by 10,000+ users
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                4.8 / 5 average rating
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#7c3aed]" />
                $2.4M+ paid out
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#7c3aed] uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Three Simple Steps to Get Paid
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              No complicated funnels. No tech skills. Just three steps from zero
              to commissions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MousePointerClick,
                color: "bg-purple-100 text-[#7c3aed]",
                step: "Step 1",
                title: "Paste Any Link",
                desc: "Copy and paste any affiliate link or offer URL into the EzProfits dashboard. It takes less than 10 seconds.",
              },
              {
                icon: Globe,
                color: "bg-teal-100 text-[#0d9488]",
                step: "Step 2",
                title: "Get Free Traffic",
                desc: "EzProfits sends targeted visitors to your link automatically. No ads, no SEO, no social media required.",
              },
              {
                icon: DollarSign,
                color: "bg-amber-100 text-[#d97706]",
                step: "Step 3",
                title: "Earn Commissions",
                desc: "Watch commissions roll in. Earn up to 100% on every sale. Cash out anytime with instant payouts.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#7c3aed] uppercase tracking-wider">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#0d9488] uppercase tracking-widest">
              Why EzProfits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Built for beginners and pros alike. All the tools, none of the
              headache.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Instant Setup",
                desc: "Get your first campaign running in under 60 seconds. No downloads, no installations.",
              },
              {
                icon: TrendingUp,
                title: "Up to 100% Commissions",
                desc: "Keep the lion's share of every sale. Some offers pay out the full 100%.",
              },
              {
                icon: Users,
                title: "Free Starter Traffic",
                desc: "Get free visitors to test the system. See results before spending a dime.",
              },
              {
                icon: ShieldCheck,
                title: "Private Platform",
                desc: "Invite-only access keeps competition low and opportunity high.",
              },
              {
                icon: Globe,
                title: "Works Worldwide",
                desc: "Available in 180+ countries. Earn from anywhere with an internet connection.",
              },
              {
                icon: DollarSign,
                title: "Fast Payouts",
                desc: "Multiple payout methods. Get paid daily, weekly, or monthly — your choice.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white/80 backdrop-blur rounded-2xl p-6 border border-white hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-[#7c3aed]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#f59e0b] uppercase tracking-widest">
              Real Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              What Our Members Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Stay-at-home mom",
                quote:
                  "I made $487 in my first 24 hours using just the free traffic. I couldn't believe it was real until the money hit my account.",
                avatar: "SM",
                color: "bg-purple-100 text-purple-700",
              },
              {
                name: "James K.",
                role: "Former teacher",
                quote:
                  "I've tried dozens of online money-making systems. This is the only one that actually delivered without asking for more money.",
                avatar: "JK",
                color: "bg-teal-100 text-teal-700",
              },
              {
                name: "Lisa R.",
                role: "Digital marketer",
                quote:
                  "The 100% commission offers are a game changer. I'm now making a full-time income with just a few hours of work per week.",
                avatar: "LR",
                color: "bg-amber-100 text-amber-700",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center font-bold text-sm`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────── */}
      <section className="py-16 bg-[#7c3aed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Active Members" },
              { value: "$2.4M+", label: "Commissions Paid" },
              { value: "180+", label: "Countries" },
              { value: "98.7%", label: "Uptime" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-purple-200 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#7c3aed] uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Got Questions? We've Got Answers
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Is EzProfits really free to join?",
                a: "Yes! You can create a free account and start using the platform immediately. There are optional upgrades, but the free tier includes everything you need to start earning.",
              },
              {
                q: "How quickly can I see results?",
                a: "Most members see their first commissions within 24-48 hours of setting up their first campaign. The free starter traffic helps you get results fast.",
              },
              {
                q: "Do I need any technical skills?",
                a: "Not at all. If you can copy and paste a link, you can use EzProfits. The platform is designed to be completely beginner-friendly.",
              },
              {
                q: "How do I get paid?",
                a: "EzProfits offers multiple payout options including PayPal, bank transfer, and cryptocurrency. You can cash out daily, weekly, or monthly.",
              },
              {
                q: "Is this available worldwide?",
                a: "Yes! EzProfits works in over 180 countries. As long as you have an internet connection, you can participate.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[#7c3aed] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-500 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-purple-200 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
            <span className="text-sm font-medium text-purple-700">
              Limited spots available
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6">
            Ready to Start Earning{" "}
            <span className="text-gradient">Today?</span>
          </h2>

          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Join thousands of members already earning daily commissions. Your
            free account is waiting.
          </p>

          <a
            href={OFFER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all duration-200 shadow-glow hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Instant Access Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-6 text-sm text-gray-400">
            No credit card required • 60-second setup • Free traffic included
          </p>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────── */}
      <footer className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 tracking-tight">
              Ez<span className="text-[#7c3aed]">Profits</span>
            </span>
          </div>
          <p className="text-sm text-gray-400">
            This is an independent affiliate bridge page. Results may vary.
            <br />
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
