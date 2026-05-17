import { motion } from "framer-motion";

const stats = [
  { v: "3+", label: "Years Combined AI Experience" },
  { v: "100%", label: "Client Satisfaction" },
  { v: "48hr", label: "Rapid Deployment" },
  { v: "24/7", label: "System Uptime" },
  { v: "Full Stack", label: "AI + Cloud Expertise" },
  { v: "SECP", label: "Registered Company" },
];

export function WhyUs() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.08_0.03_260),oklch(0.10_0.04_265))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-[10px] tracking-[0.3em] text-cyan-glow font-medium mb-4">WHY IWEX</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            What we <span className="text-gradient-crimson">deliver on every project</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl glass p-7 hover-lift overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-crimson/20 blur-3xl" />
              <div className="relative">
                <div className="text-5xl font-bold text-gradient mb-2 font-display">
                  {s.v}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}