import { ServicePageLayout } from "@/components/ServicePageLayout";
import itInfrastructureImg from "@/assets/images/it-infrastructure.jpg";

const ITInfrastructure = () => {
  return (
    <ServicePageLayout
      title="IT Infrastructure Management"
      subtitle="Enterprise Infrastructure"
      description="IT Infrastructure Management involves the planning, operation, and maintenance of an organization's core IT systems. We design, implement, and manage on-premise IT infrastructure tailored to business needs, ensuring performance, reliability, compliance, and seamless integration with cloud and hybrid environments."
      image={itInfrastructureImg}
      features={[
        {
          title: "AI-Driven Monitoring & Analytics",
          description: "Predictive insights for performance optimization, capacity planning, and issue resolution."
        },
        {
          title: "Autonomous Infrastructure Management",
          description: "Self-healing systems, automated patching, scaling, and failover for maximum uptime."
        },
        {
          title: "Hybrid & Multi-Cloud Orchestration",
          description: "Seamless management of on-premise, private cloud, and public cloud resources."
        },
        {
          title: "Edge & Distributed Infrastructure",
          description: "Real-time monitoring and control across geographically dispersed systems."
        },
        {
          title: "Security-First Approach",
          description: "Integrated cybersecurity, compliance, and threat detection within infrastructure management."
        },
        {
          title: "Software-Defined Infrastructure",
          description: "Dynamic allocation of compute, storage, and network resources through automation."
        }
      ]}
      keyBenefits={[
        "Minimized downtime",
        "Optimized performance",
        "Reduced operational costs",
        "Enhanced security posture",
        "Scalable infrastructure",
        "Sustainability & energy optimization"
      ]}
      additionalSections={[
        {
          title: "Sustainability & Energy Optimization",
          content: "Efficient resource utilization and reduced environmental impact through intelligent infrastructure management that balances performance with environmental responsibility."
        },
        {
          title: "Legacy System Modernization",
          content: "We help modernize aging infrastructure using Software-Defined Networking (SDN) and Hyper-Converged Infrastructure (HCI) for cloud-like agility on-site while preserving your existing investments."
        }
      ]}
      relatedServices={[
        { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" },
        { title: "Managed Services", slug: "managed-services" },
        { title: "AIOps", slug: "aiops" }
      ]}
    />
  );
};

export default ITInfrastructure;
