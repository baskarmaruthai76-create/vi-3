import { ServicePageLayout } from "@/components/ServicePageLayout";
import aiopsImg from "@/assets/images/aiops.jpg";

const AIOps = () => {
  return (
    <ServicePageLayout
      title="AIOps"
      subtitle="Intelligent IT Operations"
      description="AIOps (Artificial Intelligence for IT Operations) uses AI and machine learning to automate and improve IT operations. We help organizations monitor systems, analyze large volumes of data, detect anomalies, predict issues, and resolve incidents faster."
      image={aiopsImg}
      features={[
        {
          title: "Autonomous Operations",
          description: "AI systems that automatically detect, diagnose, and resolve incidents with minimal human intervention."
        },
        {
          title: "Predictive Intelligence",
          description: "Advanced forecasting to prevent outages, performance degradation, and capacity issues before they occur."
        },
        {
          title: "Full-Stack Observability",
          description: "Unified visibility across infrastructure, applications, networks, cloud, and edge environments."
        },
        {
          title: "Agentic AIOps",
          description: "Intelligent agents that coordinate remediation actions, optimize resources, and manage workflows end to end."
        },
        {
          title: "Context-Aware Root Cause Analysis",
          description: "AI correlates signals, dependencies, and business impact to identify true causes quickly."
        },
        {
          title: "Integrated DevOps & SecOps",
          description: "Seamless collaboration across development, operations, and security for faster resolution."
        }
      ]}
      keyBenefits={[
        "Reduced downtime",
        "Faster incident resolution",
        "Proactive issue prevention",
        "Optimized IT resources",
        "Lower operational costs",
        "Improved system reliability"
      ]}
      additionalSections={[
        {
          title: "Continuous Optimization",
          content: "Real-time cost, performance, and energy optimization driven by AI insights. Our AIOps solutions continuously learn and improve to deliver better outcomes over time."
        },
        {
          title: "Governance & Compliance Automation",
          content: "Built-in policy enforcement, auditability, and risk management ensure your IT operations meet regulatory requirements while maintaining operational excellence."
        }
      ]}
      relatedServices={[
        { title: "DevSecOps", slug: "devsecops" },
        { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" },
        { title: "Managed Services", slug: "managed-services" }
      ]}
    />
  );
};

export default AIOps;
