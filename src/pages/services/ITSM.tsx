import { ServicePageLayout } from "@/components/ServicePageLayout";
import itsmImg from "@/assets/services/itsm.jpg";

const ITSM = () => {
  return (
    <ServicePageLayout
      title="IT Service Management"
      subtitle="Management Services"
      description="Comprehensive ITSM solutions with ITIL best practices, service desk automation, and continuous service improvement."
      image={itsmImg}
      features={[
        { title: "Service Desk", description: "Multi-channel IT service desk with AI-powered ticket routing and resolution." },
        { title: "Incident Management", description: "Rapid incident detection, classification, and resolution workflows." },
        { title: "Problem Management", description: "Root cause analysis and permanent fix implementation." },
        { title: "Request Fulfillment", description: "Self-service portals and automated request processing." },
        { title: "Service Catalog", description: "Comprehensive IT service catalog with SLA management." },
        { title: "Knowledge Management", description: "Centralized knowledge base for faster resolution times." }
      ]}
      keyBenefits={["Improved user satisfaction", "Faster resolution times", "ITIL compliance", "Reduced operational costs", "Enhanced visibility"]}
      relatedServices={[
        { title: "Service Desk", slug: "service-desk" },
        { title: "Enterprise Operation", slug: "enterprise-operation" },
        { title: "ITOM", slug: "itom" }
      ]}
    />
  );
};

export default ITSM;
