import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problems } from "@/components/site/Problems";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Services } from "@/components/site/Services";
import { Engineering } from "@/components/site/Engineering";
import { Technologies } from "@/components/site/Technologies";
import { CloudExpertise } from "@/components/site/CloudExpertise";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IWEX Technicity — AI Automation, Cloud & Product Engineering" },
      {
        name: "description",
        content:
          "IWEX Technicity builds intelligent digital systems for serious businesses — AI automation, scalable cloud infrastructure, and end-to-end product engineering.",
      },
      { property: "og:title", content: "IWEX Technicity — Intelligent Systems for Modern Business" },
      { property: "og:description", content: "AI automation, cloud solutions, and product engineering that scales operations." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <BeforeAfter />
        <Services />
        <Engineering />
        <Technologies />
        <CloudExpertise />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
