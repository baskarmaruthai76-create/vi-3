"use client";

import { ServicePageLayout } from "@/components/ServicePageLayout";
import appImg from "@/assets/services/appimg.jpg";

const ApplicationServices = () => {
  return (
    <ServicePageLayout
      subtitle="Application Services"
      title="Build Applications That Drive Innovation"
      description="From custom development to modernization, we deliver end-to-end application services that transform your digital capabilities."
      image={appImg}
      features={[
        {
          title: "Custom Development",
          description:
            "Build tailored applications that align perfectly with your business workflows and operational goals.",
        },
        {
          title: "Application Modernization",
          description:
            "Upgrade legacy systems into modern, scalable, cloud-native platforms.",
        },
        {
          title: "API Development & Integration",
          description:
            "Design and integrate robust APIs across distributed systems.",
        },
        {
          title: "Mobile App Development",
          description:
            "Cross-platform mobile apps with performance, security, and UX baked in.",
        },
        {
          title: "Web Applications",
          description:
            "High-performance web applications using modern frameworks.",
        },
        {
          title: "Enterprise Applications",
          description:
            "Scalable enterprise-grade solutions built for growth.",
        },
      ]}
      keyBenefits={[
        "Scalable and future-ready architecture",
        "Faster time-to-market with agile delivery",
        "Enterprise-grade security and compliance",
        "Cloud-native, cost-optimized solutions",
      ]}
      additionalSections={[
        {
          title: "Our Development Approach",
          content:
            "We follow an agile, outcome-driven development approach with continuous feedback loops, ensuring faster delivery and measurable business impact.",
        },
      ]}
      relatedServices={[
        { title: "Application Security", slug: "application-security" },
        { title: "Project management", slug: "project-management" },
        { title: "Devops", slug: "devsecops" },
      ]}
    />
  );
};

export default ApplicationServices;
