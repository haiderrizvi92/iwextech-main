import { motion } from "framer-motion";
import {
  Brain, BarChart3, Users, Wallet, FileBarChart, MessageSquare,
  Cog, CloudCog, GitBranch, Activity, Briefcase, Globe2,
} from "lucide-react";

const services = [
  { icon: Brain, title: "AI Internal Tools", desc: "Custom AI agents that read, write, decide and act inside your business systems." },
  { icon: BarChart3, title: "Dashboards & Reporting", desc: "Real-time, drill-down dashboards built on the metrics that move your business." },
  { icon: Users, title: "CRM & Workflow Systems", desc: "Tailored CRMs and approval flows that match how your teams actually work." },
  { icon: Wallet, title: "Financial Applications", desc: "Secure financial tools, ledgers, reconciliation and reporting at scale." },
  { icon: FileBarChart, title: "Reporting Automation", desc: "Auto-generated executive reports, delivered before your team starts the day." },
  { icon: MessageSquare, title: "AI Chatbots & Assistants", desc: "Internal copilots and customer assistants powered by your private data." },
  { icon: Cog, title: "Process Automation", desc: "Replace manual repetitive workflows with reliable, observable automations." },
  { icon: CloudCog, title: "Azure & AWS Deployment", desc: "Production-grade architecture on the world's leading cloud platforms." },
  { icon: GitBranch, title: "DevOps Infrastructure", desc: "CI/CD, IaC, container orchestration — engineered for velocity and safety." },
  { icon: Activity, title: "Cloud Monitoring", desc: "Cost optimization, observability and SLOs that actually mean something." },
  { icon: Briefcase, title: "Internal Business Tools", desc: "Bespoke tools for HR, Ops, Finance — built around your processes, not against them." },
  { icon: Globe2, title: "Web & Product Engineering", desc: "End-to-end product engineering from idea to scaled, monitored deployment." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.10_0.04_265),oklch(0.08_0.03_260))]" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[10px] tracking-[0.3em] text-cyan-glow font-medium mb-4">SERVICES</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            A complete engineering team —{" "}
            <span className="text-gradient-crimson">on demand</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From AI to cloud to custom internal tooling. One partner, every layer of your stack.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-2xl glass p-6 hover-lift overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,0),oklch(0.62_0.22_22/0.18),transparent_60%)]" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-crimson/20 to-cyan-glow/10 border border-white/10 grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-5.5 w-5.5 text-cyan-glow" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
