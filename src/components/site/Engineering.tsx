import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, ShieldCheck, TrendingUp } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Understand the Problem", desc: "Deep workflow audits and stakeholder interviews to find what really matters." },
  { icon: PenTool, title: "Design the Solution", desc: "Architecture, UX, data model and integration plan — validated before a line of code." },
  { icon: Code2, title: "Build the Product", desc: "Senior engineers shipping production-grade code in tight, transparent cycles." },
  { icon: ShieldCheck, title: "Deploy Securely", desc: "Hardened cloud deployment with monitoring, alerting and rollback baked in." },
  { icon: TrendingUp, title: "Optimize & Scale", desc: "Measure, improve, and grow with you — from MVP to enterprise scale." },
];

export function Engineering() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,oklch(0.30_0.14_265/0.4),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="text-[10px] tracking-[0.3em] text-cyan-glow font-medium mb-4">PRODUCT ENGINEERING</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            End-to-end product{" "}
            <span className="text-gradient">design & engineering</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From a rough idea to a scaled, monitored product — one team, one timeline, one accountable partner.
          </p>
        </motion.div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative h-20 w-20 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full bg-crimson/20 blur-xl" />
                  <div className="relative h-full w-full rounded-full glass-strong grid place-items-center border border-cyan-glow/30">
                    <s.icon className="h-7 w-7 text-cyan-glow" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-crimson-grad grid place-items-center text-[11px] font-bold text-white glow-crimson">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-center text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-center text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
