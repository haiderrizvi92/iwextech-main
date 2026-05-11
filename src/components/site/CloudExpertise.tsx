import { motion } from "framer-motion";
import { Cloud, Shield, GitMerge, Activity, Server, Zap, Check } from "lucide-react";

const features = [
  { icon: Cloud, text: "Azure & AWS expert architecture" },
  { icon: Server, text: "High-availability multi-region deploys" },
  { icon: Shield, text: "Security hardening & compliance" },
  { icon: GitMerge, text: "CI/CD & infrastructure as code" },
  { icon: Activity, text: "Observability, alerts, SLOs" },
  { icon: Zap, text: "Cost optimization built-in" },
];

export function CloudExpertise() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,oklch(0.30_0.14_265/0.5),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative h-[480px]"
        >
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative h-full w-full max-w-md">
              {/* Orbiting rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-glow/20" />
              <div className="absolute inset-8 rounded-full border border-crimson/20" />
              <div className="absolute inset-16 rounded-full border border-cyan-glow/10" />

              {/* Center cloud */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-32 w-32 rounded-full bg-crimson-grad grid place-items-center glow-crimson">
                  <Cloud className="h-14 w-14 text-white" />
                  <div className="absolute inset-0 rounded-full ring-1 ring-white/30 animate-pulse-glow" />
                </div>
              </div>

              {/* Nodes */}
              {[
                { top: "5%", left: "45%", label: "API" },
                { top: "30%", left: "82%", label: "DB" },
                { top: "70%", left: "82%", label: "Cache" },
                { top: "92%", left: "45%", label: "CDN" },
                { top: "70%", left: "8%", label: "Queue" },
                { top: "30%", left: "8%", label: "Auth" },
              ].map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: n.top, left: n.left }}
                >
                  <div className="glass-strong rounded-xl px-3 py-2 text-xs font-medium border border-cyan-glow/30 animate-float">
                    {n.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="text-[10px] tracking-[0.3em] text-cyan-glow font-medium mb-4">CLOUD & AI EXPERTISE</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Scalable, secure, cost-optimized{" "}
            <span className="text-gradient">cloud infrastructure</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We deploy and operate the systems your business runs on — built to scale on day one,
            and optimized to cost less every month.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <li key={f.text} className="flex items-center gap-3 rounded-xl glass px-4 py-3">
                <span className="h-8 w-8 rounded-lg bg-cyan-glow/10 border border-cyan-glow/30 grid place-items-center">
                  <f.icon className="h-4 w-4 text-cyan-glow" />
                </span>
                <span className="text-sm">{f.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
