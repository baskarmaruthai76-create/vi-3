import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";
import { FadeInUp, StaggerContainer } from "@/components/ui/motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Shield,
  Brain,
  Clock,
  Cloud,
  Lightbulb,
} from "lucide-react";

import aboutTeam from "@/assets/about-team.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import { Team } from "@/components/Teams";
import { Founders } from "@/components/Founders";
import { KeyStrengths } from "@/components/KeyStrengths";
import CorePillars from "@/components/CorePillars";
import { WhatSetsusApart } from "@/components/WhatSetsusApart";

/* ---------- UPDATED STATS ---------- */
const stats = [
  { value: 30, suffix: "+", label: "Years Combined", sublabel: "Leadership Experience" },
  { value: 24, suffix: "/7", label: "Managed Services", sublabel: "Always-On Support" },
  { value: 100, suffix: "%", label: "Security-First", sublabel: "DNA Approach" },
  { value: 22, suffix: "+", label: "Industries", sublabel: "Served Globally" },
];

/* ---------- CORE PILLARS ---------- */
const corePillars = [
  {
    icon: Shield,
    title: "Security-First DNA",
    description:
      "We believe security is not an add-on; it is the foundation. Every line of code and every server migration starts with a defense-in-depth strategy.",
  },
  {
    icon: Brain,
    title: "Intelligent Scalability",
    description:
      "We don’t just build for today. We design AI-driven, containerized systems that scale with business growth.",
  },
  {
    icon: Clock,
    title: "Unwavering Support",
    description:
      "With 24/7 monitoring and proactive optimization, we ensure your systems stay resilient and always available.",
  },
  {
    icon: Cloud,
    title: "Hybrid Agility",
    description:
      "We combine on-prem control with cloud elasticity to deliver pragmatic, future-ready modernization.",
  },
];

/* ---------- OPERATIONAL MODEL ---------- */
const operationalModel = [
  {
    phase: "01",
    title: "Audit & Discover",
    action: "Deep dive into existing infrastructure and security gaps.",
    outcome: "Clear technical roadmap with ROI visibility.",
  },
  {
    phase: "02",
    title: "Architecture",
    action: "Design secure, scalable, and cost-optimized systems.",
    outcome: "Future-proof enterprise architecture.",
  },
  {
    phase: "03",
    title: "Engineering",
    action: "Hands-on migration, deployment, and AI integration.",
    outcome: "Production-ready modern tech stack.",
  },
  {
    phase: "04",
    title: "Sustain (24/7)",
    action: "Monitoring, patching, and continuous optimization.",
    outcome: "Zero downtime and continuous compliance.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(16,23,42,.8), rgba(16,23,42,.95)), url(${aboutMission})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              About Vi-3 Technology
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Engineering Secure,
              <br />
              Intelligent Enterprises
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              We help organizations modernize with confidence through security-first,
              scalable, and always-on technology solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ---------- STORY ---------- */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building the Future of Enterprise Technology
            </h2>
            <p className="text-muted-foreground mb-4">
             Vi-3 Technologies Private Limited is a next-generation IT solutions and Startup company. We specialize in helping businesses thrive in the digital era through secure, scalable, and intelligent technology. We bridge the gap between legacy infrastructure and the future of AI and Quantum Computing, all while maintaining a relentless focus on Cybersecurity and Operational Excellence.    </p>
            <p className="text-muted-foreground">
            At our core, we are problem solvers who believe that complex technology transformation should be innovative, secure, scalable and – above all – simple for our clients to navigate.  </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <img src={aboutTeam} alt="Vi-3 Team" className="rounded-2xl shadow-2xl" />
          </FadeIn>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="py-8 bg-hero">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">
                  <CountUp target={s.value} suffix={s.suffix} duration={2} />
                </p>
                <p className="text-hero-foreground/80">{s.label}</p>
                <p className="text-xs text-hero-foreground/50">{s.sublabel}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
<WhatSetsusApart/>
<CorePillars/>
<KeyStrengths/>
     <Founders/>

      {/* ---------- GLOBAL ---------- */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h3 className="text-3xl font-bold mb-4">Global Presence</h3>
            <p className="text-muted-foreground mb-6">
              Delivering enterprise-grade solutions across regions with local context
              and global best practices.
            </p>
            <div className="flex flex-wrap gap-3">
              {["India", "USA", "UK", "Singapore", "Australia"].map((l) => (
                <span
                  key={l}
                  className="px-4 py-2 rounded-full bg-card border border-border flex items-center gap-2"
                >
                  <Globe size={16} className="text-primary" />
                  {l}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {["AWS", "Azure", "GCP", "ISO 27001"].map((c) => (
                <div key={c} className="bg-card p-6 rounded-xl border border-border">
                  <Award className="text-primary mb-3" />
                  <p className="font-bold">{c}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <Founders/>
        <KeyStrengths/>
      </section> */}

      <Footer />
    </div>
  );
};

export default About;
