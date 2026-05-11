import { motion } from "framer-motion";

const techs = [
  "Azure", "AWS", "Python", "React", "Node.js", "Power BI",
  "Docker", "Kubernetes", "OpenAI", "PostgreSQL", "MongoDB", "Next.js",
  "TypeScript", "Terraform", "GitHub Actions", "Redis",
];

export function Technologies() {
  return (
    <section id="technologies" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.10_0.04_265),oklch(0.08_0.03_260))]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.22_22/0.2),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-[10px] tracking-[0.3em] text-cyan-glow font-medium mb-4">TECHNOLOGIES</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Built on a{" "}
            <span className="text-gradient-crimson">modern, battle-tested</span>{" "}
            stack
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We choose technologies for outcomes, not trends. Every tool here ships in production.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {techs.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-square rounded-2xl glass grid place-items-center text-center p-3 hover:border-crimson/40 transition-colors"
              style={{ animation: `float-slow ${5 + (i % 4)}s ease-in-out ${i * 0.2}s infinite` }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,oklch(0.62_0.22_22/0.25),transparent_70%)]" />
              <div className="relative">
                <div className="text-sm font-semibold text-foreground/90 group-hover:text-gradient transition-all">
                  {t}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
