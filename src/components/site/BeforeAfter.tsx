import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";

const before = [
  "Manual Excel reporting",
  "Human-compiled reports",
  "WhatsApp approvals",
  "No tracking of work",
  "Slow, reactive operations",
  "Knowledge in people's heads",
];
const after = [
  "Live business dashboards",
  "AI-generated reports",
  "Automated approval workflows",
  "Real-time analytics & alerts",
  "Predictive, proactive systems",
  "Centralised, queryable knowledge",
];

export function BeforeAfter() {
  return (
    <section id="solutions" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.20_0.10_265/0.4),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            From <span className="text-crimson-glow">manual chaos</span> to{" "}
            <span className="text-gradient">intelligent operations</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            See exactly what changes when AI and automation replace your legacy workflows.
          </p>
        </motion.div>

        <div className="relative grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/5 bg-[oklch(0.14_0.02_260/0.6)] p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground">CURRENT PROCESS</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <h3 className="text-2xl font-bold text-muted-foreground mb-6">The way it's always been done</h3>
            <ul className="space-y-3">
              {before.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.02] border border-white/5 px-4 py-3"
                >
                  <span className="h-7 w-7 rounded-lg bg-crimson/10 border border-crimson/30 grid place-items-center">
                    <X className="h-4 w-4 text-crimson" />
                  </span>
                  <span className="text-sm text-muted-foreground line-through">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }} transition={{ type: "spring", delay: 0.3 }}
              className="h-14 w-14 rounded-full bg-crimson-grad grid place-items-center glow-crimson"
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </motion.div>
          </div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-br from-crimson/60 via-cyan-glow/40 to-transparent"
          >
            <div className="rounded-3xl bg-[oklch(0.13_0.05_260/0.85)] backdrop-blur-xl p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[10px] tracking-[0.3em] text-cyan-glow">IWEX AI SOLUTION</span>
                <span className="h-px flex-1 bg-cyan-glow/30" />
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-6">The intelligent way forward</h3>
              <ul className="space-y-3">
                {after.map((a, i) => (
                  <motion.li
                    key={a}
                    initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 rounded-xl bg-cyan-glow/[0.05] border border-cyan-glow/20 px-4 py-3 hover:border-cyan-glow/40 transition-colors"
                  >
                    <span className="h-7 w-7 rounded-lg bg-cyan-glow/10 border border-cyan-glow/40 grid place-items-center">
                      <Check className="h-4 w-4 text-cyan-glow" />
                    </span>
                    <span className="text-sm text-foreground font-medium">{a}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
