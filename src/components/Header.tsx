import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";
import  { categoryIdMap, searchServices } from "@/config/serviceConfig";
import { useEffect, useRef, useState } from "react";
// import { sub } from "date-fns";

const submenu = Object.entries(categoryIdMap).map(
  ([name, slug]) => ({
    label: name,
    href: `/services#${slug}`
  })
);

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "What We Do",
    href: "/services",
    submenu: submenu,
  },
  { label: "Who We Are", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState("/");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const isLightHeaderPage = currentPath.startsWith("/resources");

  const navTextClass = (isActive: boolean) => {
    if (isActive) return "text-primary !font-extrabold !text-2xl";
    if (isScrolled || isLightHeaderPage) {
      return "text-black hover:text-primary";
    }
    return "text-white hover:text-primary";
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchServices(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

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
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    } else if (url.hash) {
      sessionStorage.setItem('scrollToSection', url.hash);
    }
  };

  useEffect(() => {
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    if (scrollToSection) {
      sessionStorage.removeItem('scrollToSection');
      setTimeout(() => {
        const targetId = scrollToSection.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isLightHeaderPage ? "glass shadow-lg" : "glass-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Vi-3 Technology" className="w-16 h-16" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.href !== "#" && currentPath === item.href;
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-1 text-xl font-semibold hover:scale-105 transition-colors ${navTextClass(isActive)}`}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {/* Submenu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-4 w-64"
                        >
                          <div className="bg-gradient-to-r from-secondary/90 to-secondary p-2 rounded-xl shadow-2xl">
                            {item.submenu.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                onClick={(e) => handleNavClick(e, subItem.href)}
                                className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/15 rounded-lg transition-all duration-200"
                              >
                                {subItem.label} services
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Search & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <SearchIcon className={`w-5 h-5 ${isScrolled? 'text-black': 'text-white'}` } />
              </button>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-96 bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4">
                      <Input
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                        autoFocus
                      />
                    </div>

                    {searchResults.length > 0 && (
                      <div className="max-h-96 overflow-y-auto border-t border-border">
                        {searchResults.map((service) => (
                          <a
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="block p-4 hover:bg-primary/5 transition-colors border-b border-border last:border-0"
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                                <service.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-sm text-foreground mb-1">
                                  {service.title}
                                </h4>
                                <p className="text-xs text-muted-foreground line-clamp-2">
                                  {service.description}
                                </p>
                                <span className="text-xs text-primary mt-1 inline-block">
                                  {service.category}
                                </span>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}

                    {searchQuery && searchResults.length === 0 && (
                      <div className="p-8 text-center text-muted-foreground">
                        <SearchIcon className="w-12 h-12 mx-auto mb-2 opacity-20" />
                        <p className="text-sm">No services found</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/contact">
              <Button
                variant="default"
                size="lg"
                className="gradient-primary text-primary-foreground font-semibold px-6 glow-primary"
              >
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-secondary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
           initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.25 }}
  className="
    lg:hidden 
    bg-white 
    border-t 
    border-border
    max-h-[calc(100vh-5rem)]
    overflow-y-auto
  "  >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {/* Mobile Search */}
              <div className="pb-4 border-b border-border">
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
                {searchResults.length > 0 && (
                  <div className="mt-2 max-h-64 overflow-y-auto space-y-2">
                    {searchResults.map((service) => (
                      <a
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setSearchQuery("");
                        }}
                        className="block p-2 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="font-medium text-sm">{service.title}</div>
                        <div className="text-xs text-muted-foreground">{service.category}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block py-2 font-medium transition-colors ${
                      currentPath === item.href
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="/contact" className="gradient-primary text-primary-foreground font-semibold mt-4 text-center py-3 rounded-lg">
                Contact Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};