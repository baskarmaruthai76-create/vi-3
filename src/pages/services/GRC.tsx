import { ServicePageLayout } from "@/components/ServicePageLayout";
import grcImg from "@/assets/services/grc-service.jpg";

const GRC = () => {
  return (
    <ServicePageLayout
      title="GRC"
      subtitle="Cybersecurity"
      description="Governance, Risk, and Compliance management solutions. We help organizations establish robust GRC frameworks that ensure regulatory compliance and effective risk management."
      image={grcImg}
      features={[
        { title: "Governance Framework", description: "IT governance framework design and implementation." },
        { title: "Risk Management", description: "Enterprise risk assessment and management programs." },
        { title: "Compliance Management", description: "Regulatory compliance monitoring and reporting." },
        { title: "Policy Management", description: "Security policy development and lifecycle management." },
        { title: "Audit Support", description: "Internal and external audit preparation and support." },
        { title: "Third-Party Risk", description: "Vendor and third-party risk management programs." }
      ]}
      keyBenefits={["Regulatory compliance", "Risk visibility", "Audit readiness", "Policy alignment", "Stakeholder confidence"]}
      relatedServices={[
        { title: "Enterprise Security", slug: "enterprise-security" },
        { title: "Data Protection", slug: "data-protection" },
        { title: "Service Assurance", slug: "service-assurance" }
      ]}
    />
  );
};

export default GRC;
