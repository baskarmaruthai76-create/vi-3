import { ServicePageLayout } from "@/components/ServicePageLayout";
import architectureImg from "@/assets/images/architecture.jpg";

const Architecture = () => {
  return (
    <ServicePageLayout
      title="Architecture & Engineering"
      subtitle="System Design Excellence"
      description="System architecture is the structured design of a system that defines its components, their relationships, and how they interact. We design architectures that support scalability, resilience, intelligence, and rapid change in modern digital systems."
      image={architectureImg}
      features={[
        {
          title: "Cloud-Native & Hybrid Architectures",
          description: "Microservices, containers, and Kubernetes enabling flexible deployment across cloud, edge, and on-premise environments."
        },
        {
          title: "Event-Driven & Serverless Design",
          description: "Highly responsive systems that scale automatically based on real-time events."
        },
        {
          title: "Distributed & Edge Architectures",
          description: "Processing closer to users and devices to reduce latency and support IoT, 5G, and real-time applications."
        },
        {
          title: "AI-Enabled Architecture",
          description: "Embedded AI for decision-making, optimization, monitoring, and autonomous operations."
        },
        {
          title: "Composable & Modular Systems",
          description: "Loosely coupled components that can be independently developed, replaced, or scaled."
        },
        {
          title: "Security-First & Zero Trust Design",
          description: "Built-in security, identity-based access, and continuous verification at every layer."
        }
      ]}
      keyBenefits={[
        "Scalable system design",
        "Reduced technical debt",
        "Faster time to market",
        "Improved system reliability",
        "Future-proof technology",
        "Lower maintenance costs"
      ]}
      additionalSections={[
        {
          title: "Model-Based Systems Engineering (MBSE)",
          content: "Digital models replace static documents to design, analyze, and validate systems throughout their lifecycle. AI supports requirements analysis, design optimization, risk prediction, and decision-making."
        },
        {
          title: "Digital Twins",
          content: "Real-time virtual replicas of systems enable simulation, monitoring, and predictive maintenance. Cross-domain integration ensures seamless coordination of software, hardware, networks, and data in complex systems."
        }
      ]}
      relatedServices={[
        { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" },
        { title: "DevSecOps", slug: "devsecops" },
        { title: "IT Infrastructure", slug: "it-infrastructure" }
      ]}
    />
  );
};

export default Architecture;
