import { motion } from "framer-motion";
import {
  AlertTriangle, FileSpreadsheet, MessagesSquare, Clock, Repeat,
  LayoutGrid, PhoneOff, EyeOff, UserMinus,
} from "lucide-react";

const problems = [
  { icon: FileSpreadsheet, title: "Excel dependency", desc: "Critical data trapped in scattered spreadsheets." },
  { icon: MessagesSquare, title: "WhatsApp approvals", desc: "Decisions lost in chats with no audit trail." },
  { icon: Clock, title: "Delayed reporting", desc: "Weekly reports built manually, always late." },
  { icon: Repeat, title: "Manual repetitive work", desc: "Hours wasted on tasks software should do." },
  { icon: LayoutGrid, title: "No central dashboard", desc: "Each team flies blind in their own tool." },
  { icon: PhoneOff, title: "Slow customer response", desc: "Tickets bounce between people for days." },
  { icon: EyeOff, title: "No analytics visibility", desc: "Decisions made on gut, not data." },
  { icon: UserMinus, title: "Employee dependency", desc: "Knowledge leaves when people do." },
];

export function Problems() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.08_0.03_260),oklch(0.10_0.04_265))]" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-5">
            <AlertTriangle className="h-3.5 w-3.5 text-crimson" />
            The real problem
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Businesses don't need more software.{" "}
            <span className="text-gradient-crimson">They need smarter operations.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Most companies aren't held back by missing tools — they're held back by manual,
            disconnected, invisible workflows that quietly bleed time and revenue.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl glass p-5 hover-lift"
            >
              <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] text-crimson">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
                LEGACY
              </div>
              <div className="h-10 w-10 rounded-lg bg-crimson/10 border border-crimson/30 grid place-items-center mb-4">
                <p.icon className="h-5 w-5 text-crimson-glow" />
              </div>
              <div className="text-sm font-semibold">{p.title}</div>
              <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-crimson to-cyan-glow" />
            <div className="text-sm tracking-[0.3em] text-cyan-glow font-medium">
              AI-POWERED TRANSFORMATION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
