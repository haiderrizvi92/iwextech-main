import { motion } from "framer-motion";
import { ShieldCheck, Award, Building2, Rocket } from "lucide-react";

const cards = [
  { icon: Building2, title: "SECP registered", desc: "Officially registered company under the Securities & Exchange Commission of Pakistan." },
  { icon: ShieldCheck, title: "Security-first", desc: "Engineered with enterprise-grade security, compliance and access controls from day one." },
  { icon: Award, title: "Certified engineers", desc: "Cloud, AI and DevOps certified team across Azure, AWS, OpenAI and Kubernetes." },
  { icon: Rocket, title: "Enterprise approach", desc: "120+ deployments delivered with full handover, documentation and SLAs." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,oklch(0.55_0.22_22/0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] tracking-[0.3em] text-cyan-glow font-medium mb-4">ABOUT IWEX TECHNICITY</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            An elite engineering partner for{" "}
            <span className="text-gradient">serious businesses</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            IWEX Technicity is an AI Automation, Cloud Solutions and Product Engineering company.
            We work with mid-market and enterprise teams that have outgrown spreadsheets, manual
            workflows and disconnected tools — and need a partner that can design, build and
            operate the intelligent systems that replace them.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We're senior-only, outcome-driven, and judged by what we ship — not what we promise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl glass-strong p-6 hover-lift"
            >
              <div className="h-10 w-10 rounded-lg bg-crimson/10 border border-crimson/30 grid place-items-center mb-4">
                <c.icon className="h-5 w-5 text-crimson-glow" />
              </div>
              <div className="font-semibold mb-1.5">{c.title}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
