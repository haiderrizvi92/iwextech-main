import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Bot, BarChart3, Cloud, Workflow } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden noise">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 grid-bg" />
      {/* Glow orbs */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.22_22/0.35),transparent_70%)] blur-3xl animate-drift" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.45_0.18_265/0.45),transparent_70%)] blur-3xl animate-drift" />
      {/* Particles */}
      <Particles />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-crimson" />
            AI Automation · Cloud · Product Engineering
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            We Build{" "}
            <span className="text-gradient-crimson">Intelligent</span>{" "}
            Digital Systems That{" "}
            <span className="text-gradient">Scale Businesses</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            We help companies automate operations, deploy scalable cloud infrastructure,
            build AI-powered tools, and eliminate manual workflows.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-crimson-grad px-7 py-3.5 text-sm font-medium text-white glow-crimson hover:scale-[1.03] transition-transform"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium text-foreground hover:bg-white/10 transition-colors"
            >
              Explore Solutions
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "120+", l: "Deployments" },
              { v: "40+", l: "Enterprise Clients" },
              { v: "99.99%", l: "Uptime" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — floating dashboards */}
        <div className="relative h-[560px] hidden lg:block">
          <FloatingCards />
        </div>
      </div>
    </section>
  );
}

function Particles() {
  const dots = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => {
        const left = (i * 173) % 100;
        const top = (i * 97) % 100;
        const delay = (i % 10) * 0.4;
        return (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-glow/60 animate-pulse-glow"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              boxShadow: "0 0 10px oklch(0.78 0.14 220 / 0.7)",
            }}
          />
        );
      })}
    </div>
  );
}

function FloatingCards() {
  return (
    <>
      {/* Big dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute top-4 right-0 w-[420px] glass-strong rounded-2xl p-5 shadow-[0_30px_80px_-20px_oklch(0_0_0/0.7)] animate-float"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-crimson-grad grid place-items-center">
              <BarChart3 className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold">Operations Analytics</div>
              <div className="text-[10px] text-muted-foreground">Live · last 24h</div>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-muted-foreground">Live</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { l: "Throughput", v: "12.4k", c: "text-cyan-glow" },
            { l: "Errors", v: "0.02%", c: "text-emerald-400" },
            { l: "Saved Hrs", v: "318", c: "text-crimson-glow" },
          ].map((m) => (
            <div key={m.l} className="rounded-lg bg-white/5 p-2.5">
              <div className="text-[10px] text-muted-foreground">{m.l}</div>
              <div className={`text-base font-bold ${m.c}`}>{m.v}</div>
            </div>
          ))}
        </div>
        <MiniChart />
      </motion.div>

      {/* AI chat */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="absolute bottom-10 -left-2 w-[300px] glass-strong rounded-2xl p-4 animate-float-slow"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="h-7 w-7 rounded-md bg-navy-grad grid place-items-center ring-1 ring-cyan-glow/40">
            <Bot className="h-4 w-4 text-cyan-glow" />
          </div>
          <div className="text-xs font-semibold">IWEX Assistant</div>
        </div>
        <div className="space-y-2 text-[11px]">
          <div className="rounded-lg bg-white/5 p-2.5 text-muted-foreground">
            Pull yesterday's revenue by region.
          </div>
          <div className="rounded-lg bg-crimson-grad/30 border border-crimson/30 p-2.5 text-foreground">
            <span className="text-crimson-glow font-medium">→</span> APAC up 14%, EMEA flat. Generating report…
          </div>
        </div>
      </motion.div>

      {/* Workflow */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65 }}
        className="absolute top-1/2 -right-6 w-[260px] glass-strong rounded-2xl p-4 animate-float"
      >
        <div className="flex items-center gap-2 mb-3">
          <Workflow className="h-4 w-4 text-cyan-glow" />
          <div className="text-xs font-semibold">CRM Workflow</div>
        </div>
        <div className="space-y-2">
          {["Lead captured", "AI scoring", "Auto-assigned", "Approved"].map((s, i) => (
            <div key={s} className="flex items-center gap-2 text-[11px]">
              <div className={`h-1.5 w-1.5 rounded-full ${i < 3 ? "bg-emerald-400" : "bg-crimson animate-pulse"}`} />
              <span className={i < 3 ? "text-muted-foreground line-through" : "text-foreground"}>{s}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cloud panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.85 }}
        className="absolute bottom-0 right-16 w-[220px] glass-strong rounded-2xl p-4 animate-float-slow"
      >
        <div className="flex items-center gap-2 mb-2">
          <Cloud className="h-4 w-4 text-crimson-glow" />
          <div className="text-xs font-semibold">Cloud Deploy</div>
        </div>
        <div className="text-[10px] text-muted-foreground mb-2">prod · azure-westus</div>
        <div className="flex items-center gap-2">
          <Activity className="h-3 w-3 text-emerald-400" />
          <span className="text-[10px]">Healthy · 12 pods</span>
        </div>
      </motion.div>
    </>
  );
}

function MiniChart() {
  const points = [12, 18, 14, 22, 19, 28, 24, 32, 28, 36, 30, 42];
  const max = Math.max(...points);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * 100} ${50 - (p / max) * 45}`)
    .join(" ");
  return (
    <div className="h-24 w-full">
      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="h-full w-full">
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.22 22)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.62 0.22 22)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${path} L 100 50 L 0 50 Z`} fill="url(#g)" />
        <path d={path} stroke="oklch(0.70 0.24 25)" strokeWidth="1.2" fill="none" />
      </svg>
    </div>
  );
}
