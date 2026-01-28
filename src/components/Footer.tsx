import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,

  ArrowUp,
} from "lucide-react";
import { servicesConfig, categoriesConfig, categoryIdMap } from "@/config/serviceConfig";
import logo from "@/assets/logo.png";

// Get featured services for footer (first 8 from Core category)
const footerServices = servicesConfig
  .filter(s => s.category === "Core")
  .slice(0, 8)
  .map(s => ({ label: s.title, href: `/services/${s.slug}` }));

// Get quick links from categories
const quickLinks = Object.entries(categoryIdMap).slice(0,9).map(
  ([name, slug]) => ({
    label: name,
    href: `/services#${slug}`
  })
);

const footerLinks = {
  services: footerServices,
  quickLinks: quickLinks,
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Our Services", href: "/services" },
    { label: "Industries", href: "/#industries" },
    { label: "Team", href: "/#founders" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Security Policy", href: "/security-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "GDPR Compliance", href: "/gdpr" },
    { label: "Data Protection Policy", href: "/data-protection" }
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const url = new URL(href, window.location.origin);
    
    if (url.pathname === window.location.pathname && url.hash) {
      e.preventDefault();
      const targetId = url.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else if (url.hash) {
      sessionStorage.setItem('scrollToSection', url.hash);
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110 shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center  mb-6">
               <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Vi-3 Technology" className="w-12 h-12" />
          </a>
              <span className="text-xl font-bold text-foreground">
                <span className="text-primary -ml-2">-3 Technology</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Next-generation IT solutions company helping businesses thrive in the digital era through secure, scalable, and intelligent technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 text-base">Core Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 text-base">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 text-base">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} Vi-3 Technologies Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};