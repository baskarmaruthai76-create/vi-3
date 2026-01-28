import { ServicePageLayout } from "@/components/ServicePageLayout";
import itomImg from "@/assets/services/itom.jpg";

const ITOM = () => {
  return (
    <ServicePageLayout
      title="IT Operations Management"
      subtitle="Management Services"
      description="Intelligent IT operations management with AIOps, automated remediation, and unified observability across your infrastructure."
      image={itomImg}
      features={[
        { title: "Unified Monitoring", description: "Consolidated monitoring across infrastructure, applications, and cloud." },
        { title: "AIOps Integration", description: "AI-powered anomaly detection and predictive analytics." },
        { title: "Automated Remediation", description: "Self-healing systems with automated runbook execution." },
        { title: "Configuration Management", description: "CMDB and asset discovery with relationship mapping." },
        { title: "Event Correlation", description: "Intelligent event correlation and noise reduction." },
        { title: "Capacity Optimization", description: "Resource optimization and right-sizing recommendations." }
      ]}
      keyBenefits={["Reduced MTTR", "Proactive operations", "Unified visibility", "Cost efficiency", "Scalable monitoring"]}
      relatedServices={[
        { title: "AIOps", slug: "aiops" },
        { title: "APM", slug: "apm" },
        { title: "Enterprise Operation", slug: "enterprise-operation" }
      ]}
    />
  );
};

export default ITOM;
