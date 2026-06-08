import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

// ─────────────────────────────────────────────
// EASING — typed as tuple to satisfy Framer Motion's strict types
// ─────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ─────────────────────────────────────────────
// PREMIUM ICONS
// ─────────────────────────────────────────────
const Icons = {
  Eye: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  EyeOff: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ),
  ArrowLeft: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  ),
  Mail: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Lock: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  User: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Phone: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>
    </svg>
  ),
  Building: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01"/>
    </svg>
  ),
  Info: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  ),
  Google: () => (
    <svg width="17" height="17" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  Apple: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.77M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  ),
};

// ─────────────────────────────────────────────
// ANIMATION VARIANTS
// All ease arrays typed as [n,n,n,n] tuples — fixes TS2322
// ─────────────────────────────────────────────
const fadeUp: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.3, ease: EASE } },
};

const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.06 } },
};

const itemFade: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

// ─────────────────────────────────────────────
// FIELD
// ─────────────────────────────────────────────
const Field = ({
  label, type = "text", placeholder, id, required = true, hint, icon,
}: {
  label: string; type?: string; placeholder: string; id: string;
  required?: boolean; hint?: string; icon?: React.ReactNode;
}) => {
  const [show, setShow]       = useState(false);
  const [focused, setFocused] = useState(false);
  const isPassword = type === "password";

  return (
    <motion.div variants={itemFade} className="flex flex-col gap-1.5">
      <label htmlFor={id}
        className="text-[12.5px] font-semibold tracking-wide uppercase"
        style={{ color: "#064423", opacity: 0.5, letterSpacing: "0.07em" }}>
        {label} {required && <span style={{ color: "#2BA735" }}>*</span>}
      </label>
      <div className="relative" style={{ display: "flex", alignItems: "center" }}>
        {icon && (
          <div className="absolute left-3.5" style={{
            color: focused ? "#2BA735" : "#064423",
            opacity: focused ? 1 : 0.3,
            transition: "all 0.2s ease",
            pointerEvents: "none",
            display: "flex",
          }}>
            {icon}
          </div>
        )}
        <input
          id={id}
          type={isPassword ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full text-[13.5px] font-light outline-none"
          style={{
            padding: "12px 14px",
            paddingLeft: icon ? 42 : 14,
            paddingRight: isPassword ? 44 : 14,
            borderRadius: 14,
            border: `1.5px solid ${focused ? "rgba(43,167,53,0.5)" : "rgba(0,78,9,0.09)"}`,
            background: focused ? "#fff" : "#FAFCFA",
            color: "#064423",
            fontFamily: '"Manrope", sans-serif',
            transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
            boxShadow: focused ? "0 0 0 4px rgba(43,167,53,0.08)" : "none",
          }}
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(s => !s)}
            className="absolute right-3 flex items-center justify-center"
            style={{ color: "#064423", opacity: 0.3, background: "none", border: "none", cursor: "pointer", padding: 4, transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.3")}
          >
            {show ? <Icons.EyeOff /> : <Icons.Eye />}
          </button>
        )}
      </div>
      {hint && <p className="text-[11.5px] font-light" style={{ color: "#064423", opacity: 0.38 }}>{hint}</p>}
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// SOCIAL BUTTON
// ─────────────────────────────────────────────
const SocialBtn = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <motion.button
    type="button"
    whileHover={{ scale: 1.01, y: -1 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center justify-center gap-2.5 w-full text-[13px] font-medium"
    style={{
      padding: "11.5px 16px",
      borderRadius: 14,
      border: "1.5px solid rgba(0,78,9,0.09)",
      background: "#fff",
      color: "#064423",
      fontFamily: '"Manrope", sans-serif',
      cursor: "pointer",
      transition: "border-color 0.2s, box-shadow 0.2s",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "rgba(43,167,53,0.35)";
      e.currentTarget.style.boxShadow   = "0 4px 16px rgba(0,78,9,0.06)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "rgba(0,78,9,0.09)";
      e.currentTarget.style.boxShadow   = "none";
    }}
  >
    {icon}
    <span>{label}</span>
  </motion.button>
);

// ─────────────────────────────────────────────
// SUBMIT BUTTON
// ─────────────────────────────────────────────
const SubmitBtn = ({ label }: { label: string }) => (
  <motion.button
    type="submit"
    variants={itemFade}
    whileHover={{ scale: 1.01, y: -1 }}
    whileTap={{ scale: 0.97 }}
    className="w-full text-white text-[14px] font-semibold tracking-wide"
    style={{
      padding: "14px",
      borderRadius: "50px",
      background: "#004E09",
      border: "none",
      cursor: "pointer",
      fontFamily: '"Manrope", sans-serif',
      marginTop: 8,
      boxShadow: "0 8px 24px rgba(0,78,9,0.25)",
      transition: "box-shadow 0.3s, background 0.3s",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background  = "#2BA735";
      e.currentTarget.style.boxShadow   = "0 12px 32px rgba(43,167,53,0.35)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background  = "#004E09";
      e.currentTarget.style.boxShadow   = "0 8px 24px rgba(0,78,9,0.25)";
    }}
  >
    {label}
  </motion.button>
);

// ─────────────────────────────────────────────
// DIVIDER
// ─────────────────────────────────────────────
const Divider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex-1 h-px" style={{ background: "rgba(0,78,9,0.07)" }} />
    <span className="text-[11.5px] font-medium" style={{ color: "#064423", opacity: 0.35, whiteSpace: "nowrap" }}>{label}</span>
    <div className="flex-1 h-px" style={{ background: "rgba(0,78,9,0.07)" }} />
  </div>
);

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type AuthView = "login" | "signup" | "forgot";

// ─────────────────────────────────────────────
// LOGIN FORM
// ─────────────────────────────────────────────
const LoginForm = ({ onSwitch }: { onSwitch: (v: AuthView) => void }) => (
  <motion.div key="login" variants={fadeUp} initial="initial" animate="animate" exit="exit">
    <motion.div variants={stagger} initial="initial" animate="animate" className="flex flex-col gap-5">
      <motion.div variants={itemFade} className="mb-2">
        <h1 className="font-semibold tracking-tight" style={{ fontSize: "1.65rem", color: "#064423", marginBottom: 4 }}>
          Welcome back
        </h1>
        <p className="text-[13.5px] font-light" style={{ color: "#064423", opacity: 0.45 }}>
          Sign in to your ZAJEL account to continue
        </p>
      </motion.div>

      <motion.div variants={itemFade} className="flex flex-col gap-2.5">
        <SocialBtn label="Continue with Google" icon={<Icons.Google />} />
        <SocialBtn label="Continue with Apple"  icon={<Icons.Apple />} />
      </motion.div>

      <motion.div variants={itemFade}><Divider label="or continue with email" /></motion.div>

      <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
        <Field id="email"    label="Email address" type="email"    placeholder="you@example.com"    icon={<Icons.Mail />} />
        <Field id="password" label="Password"      type="password" placeholder="Enter your password" icon={<Icons.Lock />} />

        <motion.div variants={itemFade} className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" style={{ accentColor: "#2BA735" }} id="remember" />
            <span className="text-[12.5px] font-light" style={{ color: "#064423", opacity: 0.6 }}>Remember me</span>
          </label>
          <button type="button" onClick={() => onSwitch("forgot")}
            className="text-[12.5px] font-semibold"
            style={{ color: "#2BA735", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            Forgot password?
          </button>
        </motion.div>

        <SubmitBtn label="Sign In →" />
      </form>

      <motion.p variants={itemFade} className="text-center text-[13px] font-light" style={{ color: "#064423", opacity: 0.55 }}>
        No account yet?{" "}
        <button type="button" onClick={() => onSwitch("signup")}
          className="font-semibold" style={{ color: "#2BA735", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          Create one free
        </button>
      </motion.p>
    </motion.div>
  </motion.div>
);

// ─────────────────────────────────────────────
// SIGNUP FORM
// ─────────────────────────────────────────────
const SignupForm = ({ onSwitch }: { onSwitch: (v: AuthView) => void }) => (
  <motion.div key="signup" variants={fadeUp} initial="initial" animate="animate" exit="exit">
    <motion.div variants={stagger} initial="initial" animate="animate" className="flex flex-col gap-5">
      <motion.div variants={itemFade} className="mb-2">
        <h1 className="font-semibold tracking-tight" style={{ fontSize: "1.65rem", color: "#064423", marginBottom: 4 }}>
          Create your account
        </h1>
        <p className="text-[13.5px] font-light" style={{ color: "#064423", opacity: 0.45 }}>
          Join thousands of businesses on ZAJEL
        </p>
      </motion.div>

      <motion.div variants={itemFade} className="flex flex-col gap-2.5">
        <SocialBtn label="Sign up with Google" icon={<Icons.Google />} />
        <SocialBtn label="Sign up with Apple"  icon={<Icons.Apple />} />
      </motion.div>

      <motion.div variants={itemFade}><Divider label="or sign up with email" /></motion.div>

      <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-3">
          <Field id="firstName" label="First name" placeholder="John" icon={<Icons.User />} />
          <Field id="lastName"  label="Last name"  placeholder="Doe"  icon={<Icons.User />} />
        </div>
        <Field id="signupEmail" label="Email address" type="email" placeholder="you@example.com"    icon={<Icons.Mail />} />
        <Field id="phone"       label="Phone number"  type="tel"   placeholder="+971 XX XXX XXXX"  required={false} icon={<Icons.Phone />} />
        <Field id="signupPw"    label="Password"      type="password" placeholder="Min. 8 characters" icon={<Icons.Lock />} hint="Uppercase, number & symbol required" />
        <Field id="confirmPw"   label="Confirm password" type="password" placeholder="Repeat your password" icon={<Icons.Lock />} />

        {/* Account type */}
        <motion.div variants={itemFade} className="flex flex-col gap-1.5">
          <span className="text-[12.5px] font-semibold uppercase tracking-wide" style={{ color: "#064423", opacity: 0.5, letterSpacing: "0.07em" }}>
            Account type <span style={{ color: "#2BA735" }}>*</span>
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { label: "Individual", icon: <Icons.User /> },
              { label: "Business",   icon: <Icons.Building /> },
            ].map(({ label, icon }) => (
              <label key={label}
                className="flex items-center gap-2.5 cursor-pointer transition-all"
                style={{ padding: "11px 14px", borderRadius: 14, border: "1.5px solid rgba(0,78,9,0.09)", background: "#FAFCFA" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(43,167,53,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(0,78,9,0.09)")}
              >
                <input type="radio" name="acctType" value={label.toLowerCase()} defaultChecked={label === "Individual"} style={{ accentColor: "#2BA735" }} />
                <span style={{ color: "#064423", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: "#2BA735", opacity: 0.7, display: "flex" }}>{icon}</span>
                  <span className="text-[13px] font-medium">{label}</span>
                </span>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Terms */}
        <motion.label variants={itemFade} className="flex items-start gap-2.5 cursor-pointer">
          <input type="checkbox" required style={{ accentColor: "#2BA735", marginTop: 2 }} />
          <span className="text-[12px] font-light leading-relaxed" style={{ color: "#064423", opacity: 0.6 }}>
            I agree to ZAJEL's{" "}
            <a href="/terms"   style={{ color: "#2BA735", textDecoration: "none", fontWeight: 600 }}>Terms of Service</a>
            {" "}and{" "}
            <a href="/privacy" style={{ color: "#2BA735", textDecoration: "none", fontWeight: 600 }}>Privacy Policy</a>
          </span>
        </motion.label>

        <SubmitBtn label="Create Account →" />
      </form>

      <motion.p variants={itemFade} className="text-center text-[13px] font-light" style={{ color: "#064423", opacity: 0.55 }}>
        Already have an account?{" "}
        <button type="button" onClick={() => onSwitch("login")}
          className="font-semibold" style={{ color: "#2BA735", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          Sign in
        </button>
      </motion.p>
    </motion.div>
  </motion.div>
);

// ─────────────────────────────────────────────
// FORGOT PASSWORD
// ─────────────────────────────────────────────
const ForgotForm = ({ onSwitch }: { onSwitch: (v: AuthView) => void }) => (
  <motion.div key="forgot" variants={fadeUp} initial="initial" animate="animate" exit="exit">
    <motion.div variants={stagger} initial="initial" animate="animate" className="flex flex-col gap-5">
      <motion.button variants={itemFade} type="button" onClick={() => onSwitch("login")}
        className="flex items-center gap-1.5 text-[12.5px] font-medium w-fit"
        style={{ color: "#064423", opacity: 0.45, background: "none", border: "none", cursor: "pointer", padding: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <Icons.ArrowLeft /> Back to sign in
      </motion.button>

      <motion.div variants={itemFade} className="mb-2">
        <h1 className="font-semibold tracking-tight" style={{ fontSize: "1.65rem", color: "#064423", marginBottom: 4 }}>
          Reset your password
        </h1>
        <p className="text-[13.5px] font-light leading-relaxed" style={{ color: "#064423", opacity: 0.45 }}>
          We'll send a secure reset link to your registered email address.
        </p>
      </motion.div>

      <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
        <Field id="resetEmail" label="Email address" type="email" placeholder="you@example.com" icon={<Icons.Mail />} />
        <SubmitBtn label="Send Reset Link →" />
      </form>

      <motion.div variants={itemFade}
        className="flex items-start gap-3 p-4 rounded-2xl"
        style={{ background: "#F0FAF0", border: "1px solid rgba(43,167,53,0.15)" }}>
        <span style={{ color: "#2BA735", flexShrink: 0, marginTop: 1 }}><Icons.Info /></span>
        <p className="text-[12px] font-light leading-relaxed" style={{ color: "#064423", opacity: 0.65 }}>
          Check your spam folder if you don't see the email within a few minutes. The link expires in 30 minutes.
        </p>
      </motion.div>
    </motion.div>
  </motion.div>
);

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function LoginPage() {
  const [view, setView] = useState<AuthView>("login");

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <div
        className="w-full min-h-screen flex flex-col items-center justify-center"
        style={{
          fontFamily: '"Manrope", sans-serif',
          background: "#FDFDFD",
          padding: "32px 16px",
          paddingTop: "calc(76px + 32px)",
        }}
      >
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="w-full"
          style={{
            maxWidth: 460,
            background: "#fff",
            borderRadius: 28,
            padding: "clamp(28px, 5vw, 48px)",
            boxShadow: "0 4px 6px rgba(0,78,9,0.03), 0 24px 64px rgba(0,78,9,0.08)",
            border: "1px solid rgba(0,78,9,0.06)",
          }}
        >
          {/* Tab switcher */}
          <AnimatePresence>
            {view !== "forgot" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex mb-8 p-1 rounded-full w-fit"
                style={{ background: "rgba(0,78,9,0.05)" }}
              >
                {(["login", "signup"] as AuthView[]).map(v => (
                  <motion.button
                    key={v}
                    onClick={() => setView(v)}
                    layout
                    className="text-[13px] font-semibold capitalize"
                    style={{
                      padding: "8px 24px",
                      borderRadius: "50px",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: '"Manrope", sans-serif',
                      background: view === v ? "#004E09" : "transparent",
                      color: view === v ? "#fff" : "#064423",
                      opacity: view === v ? 1 : 0.4,
                      transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    {v === "login" ? "Sign In" : "Sign Up"}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated form */}
          <AnimatePresence mode="wait">
            {view === "login"  && <LoginForm  key="login"  onSwitch={setView} />}
            {view === "signup" && <SignupForm key="signup" onSwitch={setView} />}
            {view === "forgot" && <ForgotForm key="forgot" onSwitch={setView} />}
          </AnimatePresence>
        </motion.div>

        {/* Back to site */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6"
        >
          <Link to="/"
            className="text-[12px] font-light transition-opacity"
            style={{ color: "#064423", opacity: 0.3, textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.65")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.3")}
          >
            ← Return to zajel.ae
          </Link>
        </motion.div>
      </div>
    </>
  );
}