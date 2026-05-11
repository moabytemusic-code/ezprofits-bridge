import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Star,
  DollarSign,
  Loader2,
} from "lucide-react";

const BREVO_API_KEY =
  "REVOKED_API_KEY";
const BREVO_LIST_ID = 70;

const CaptureGate = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const errs: { name?: string; email?: string } = {};
    if (!name.trim()) errs.name = "Please enter your name";
    if (!email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setApiError("");

    try {
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: email.trim(),
          attributes: {
            FIRSTNAME: name.trim(),
          },
          listIds: [BREVO_LIST_ID],
          updateEnabled: true,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to subscribe");
      }

      navigate("/bridge");
    } catch (err) {
      setApiError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9ff] flex flex-col">
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
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <Lock className="w-3.5 h-3.5" />
            Secure Access
          </div>
        </div>
      </nav>

      {/* ─── MAIN CONTENT ────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Value proposition */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-sm font-medium text-purple-700">
                Free Access — Limited Time
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-5">
              Enter Your Details to{" "}
              <span className="text-gradient">Unlock Access</span>
            </h1>

            <p className="text-gray-500 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Fill in your name and email below to get instant access to the
              EzProfits platform and start earning commissions today.
            </p>

            {/* Mini benefits */}
            <div className="space-y-3 max-w-sm mx-auto lg:mx-0">
              {[
                { icon: CheckCircle2, text: "100% free to join — no credit card" },
                { icon: CheckCircle2, text: "Free starter traffic included" },
                { icon: CheckCircle2, text: "Up to 100% commissions on every sale" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <item.icon className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-gray-400 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                10,000+ members
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                4.8 / 5 rating
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#7c3aed]" />
                $2.4M+ paid out
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="max-w-md w-full mx-auto lg:mx-0">
            <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-100/50 p-8 sm:p-10">
              <div className="text-center mb-7">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Unlock Your Free Account
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Takes less than 10 seconds
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    First Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                    }}
                    placeholder="Enter your first name"
                    className={`w-full h-12 px-4 rounded-xl border-2 bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-colors outline-none ${
                      errors.name
                        ? "border-red-300 focus:border-red-400"
                        : "border-gray-200 focus:border-[#7c3aed]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1.5 ml-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                    }}
                    placeholder="Enter your best email"
                    className={`w-full h-12 px-4 rounded-xl border-2 bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-colors outline-none ${
                      errors.email
                        ? "border-red-300 focus:border-red-400"
                        : "border-gray-200 focus:border-[#7c3aed]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5 ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full inline-flex items-center justify-center gap-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] disabled:bg-[#a78bfa] text-white font-bold h-14 rounded-2xl text-base transition-all duration-200 shadow-glow hover:shadow-xl hover:-translate-y-0.5"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Securing Access...
                    </>
                  ) : (
                    <>
                      Get Instant Access
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {apiError && (
                  <p className="text-red-500 text-sm text-center mt-3">
                    {apiError}
                  </p>
                )}
              </form>

              <p className="text-xs text-gray-400 text-center mt-5 leading-relaxed">
                <Lock className="w-3 h-3 inline mr-1" />
                Your information is secure and will never be shared. By
                continuing you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── FOOTER ──────────────────────────────── */}
      <footer className="py-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} EzProfits. This is an independent
            affiliate page. Results may vary.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaptureGate;
