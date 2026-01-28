import { ServicePageLayout } from "@/components/ServicePageLayout";
import EnterpriseSecurityImg from "@/assets/services/enterprise-security-service.jpg";

const EnterpriseSecurity = () => {
  return (
    <ServicePageLayout
      title="Enterprise Security"
      subtitle="Cybersecurity"
      description="Comprehensive enterprise security architecture and implementation. We design and deploy defense-in-depth security strategies that protect your organization from evolving threats."
      image={EnterpriseSecurityImg}
      features={[
        { title: "Security Architecture", description: "Enterprise security architecture design and assessment." },
        { title: "Zero Trust Implementation", description: "Zero Trust security model implementation across the organization." },
        { title: "Endpoint Security", description: "Advanced endpoint protection and detection solutions." },
        { title: "Network Security", description: "Next-generation firewall and network security implementation." },
        { title: "Security Operations", description: "SOC design, implementation, and managed services." },
        { title: "Security Awareness", description: "Security awareness training and phishing simulation programs." }
      ]}
      keyBenefits={["Comprehensive protection", "Reduced attack surface", "Threat resilience", "Compliance readiness", "Expert guidance"]}
      relatedServices={[
        { title: "Threat Detection", slug: "threat-detection" },
        { title: "GRC", slug: "grc" },
        { title: "Digital Identity", slug: "digital-identity" }
      ]}
    />
  );
};

export default EnterpriseSecurity;
