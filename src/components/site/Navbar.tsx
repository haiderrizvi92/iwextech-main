import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/iwex-logo.jpg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#technologies", label: "Technologies" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 rounded-xl bg-white grid place-items-center overflow-hidden ring-1 ring-white/20 glow-crimson">
              <img src={logo} alt="IWEX Technicity" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wider text-foreground">IWEX</div>
              <div className="text-[10px] tracking-[0.25em] text-muted-foreground -mt-0.5">TECHNICITY</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-crimson-grad px-5 py-2.5 text-sm font-medium text-white glow-crimson hover:scale-[1.03] transition-transform"
            >
              Book a Call
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full bg-crimson-grad px-5 py-3 text-sm font-medium text-white"
            >
              Book a Call
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
