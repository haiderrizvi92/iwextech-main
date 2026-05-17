import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState, useRef } from "react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw9CR3vfEyG0bDK1Wj0x6hXubPStfar4mG2L0XP5DXU6AnK-McG9-Mtat_K4DlWxMMDiQ/exec";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("sent");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,oklch(0.55_0.22_22/0.25),transparent_60%)]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.22_22/0.25),transparent_70%)] blur-3xl animate-pulse-glow" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-[10px] tracking-[0.3em] text-cyan-glow font-medium mb-4">LET'S TALK</div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            Let's build{" "}
            <span className="text-gradient-crimson">smarter systems</span>{" "}
            for your business
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            We analyze your workflows, identify inefficiencies, and design intelligent technology
            solutions tailored to your operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="rounded-2xl glass-strong p-6">
              <div className="text-sm font-semibold mb-4">Reach us directly</div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-cyan-glow mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm">info@iwextech.com</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-cyan-glow mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-sm">+92 305 5455983</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-cyan-glow mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground">Office</div>
                    <div className="text-sm">Bahria Town, Phase 4, Islamabad, Pakistan</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-crimson-grad p-6 glow-crimson">
              <div className="text-sm font-semibold text-white mb-2">Talk to an expert</div>
              <p className="text-xs text-white/80 mb-4">Free 30-minute consultation with a senior engineer — no sales calls.</p>
              <a href="https://calendly.com/saadfarooqi4797/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white">
                Schedule now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl glass-strong p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Full Name" required />
              <Field label="Company" name="company" placeholder="Company Name" />
            </div>
            <Field label="Email" name="email" type="email" placeholder="Your Email" required />
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Describe your problem</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your project or problem..."
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition-all"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex items-center gap-2 rounded-full bg-crimson-grad px-6 py-3 text-sm font-medium text-white glow-crimson hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent ✓"}
                {status === "idle" && (<>Schedule Consultation <ArrowRight className="h-4 w-4" /></>)}
                {status === "error" && (<>Try Again <ArrowRight className="h-4 w-4" /></>)}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground mb-1.5 block">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/30 transition-all"
      />
    </div>
  );
}