import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.floor(v).toLocaleString() + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { v: 87, suffix: "%", label: "Faster reporting cycles" },
  { v: 65, suffix: "%", label: "Reduction in manual work" },
  { v: 4, suffix: "x", label: "Better decision velocity" },
  { v: 120, suffix: "+", label: "AI workflows deployed" },
  { v: 99, suffix: "%", label: "Centralised visibility" },
  { v: 40, suffix: "+", label: "Enterprise clients served" },
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
            Outcomes our clients <span className="text-gradient-crimson">actually measure</span>
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
                  <Counter to={s.v} suffix={s.suffix} />
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
