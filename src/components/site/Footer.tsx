import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/iwex-logo.jpg";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[oklch(0.07_0.03_260)] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-white grid place-items-center overflow-hidden ring-1 ring-white/20 glow-crimson">
                <img src={logo} alt="IWEX Technicity" className="h-full w-full object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-wider">IWEX</div>
                <div className="text-[10px] tracking-[0.25em] text-muted-foreground -mt-0.5">TECHNICITY</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI Automation, Cloud Solutions and Product Engineering for serious businesses.
            </p>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-lg glass grid place-items-center hover:border-crimson/40 transition-colors">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Services", items: ["AI Internal Tools", "Dashboards & Reporting", "CRM & Workflows", "Cloud Deployment", "DevOps"] },
            { title: "Company", items: ["About", "Solutions", "Technologies", "Careers", "Contact"] },
            { title: "Contact", items: ["hello@iwextechnicity.com", "+92 300 0000000", "Karachi, Pakistan", "SECP Registered"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} IWEX Technicity. All rights reserved.
          </div>
          <div className="text-xs text-muted-foreground">
            Built for businesses that take operations seriously.
          </div>
        </div>
      </div>
    </footer>
  );
}
