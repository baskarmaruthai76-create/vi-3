import { ServicePageLayout } from "@/components/ServicePageLayout";
import pkiImg from "@/assets/services/pki-service.jpg";

const PKI = () => {
  return (
    <ServicePageLayout
      title="Public Key Infrastructure (PKI)"
      subtitle="Trust, Identity & Encryption at Scale"
      description="Design, implement, and manage enterprise-grade PKI solutions to enable secure identities, encrypted communications, and digital trust."
      image={pkiImg}
      features={[
        {
          title: "PKI Architecture Design",
          description: "Scalable PKI architecture tailored to enterprise environments."
        },
        {
          title: "Certificate Lifecycle Management",
          description: "Automated issuance, renewal, and revocation of certificates."
        },
        {
          title: "Digital Identity Enablement",
          description: "Secure identities for users, devices, and applications."
        },
        {
          title: "Encryption & Key Management",
          description: "Protect sensitive data using strong cryptographic controls."
        },
        {
          title: "Compliance & Policy Enforcement",
          description: "Meet regulatory and security compliance requirements."
        },
        {
          title: "PKI Operations & Support",
          description: "Ongoing monitoring, management, and support."
        }
      ]}
      keyBenefits={[
        "Enterprise-grade digital trust",
        "Secure encrypted communications",
        "Strong identity and access protection",
        "Automated certificate lifecycle management",
        "Regulatory and compliance readiness",
        "Reduced security and operational risks"
      ]}
      relatedServices={[
        { title: "Digital Identity Management", slug: "digital-identity" },
        { title: "Enterprise Security", slug: "enterprise-security" },
        { title: "Security Consulting", slug: "security-consulting" }
      ]}
    />
  );
};

export default PKI;
