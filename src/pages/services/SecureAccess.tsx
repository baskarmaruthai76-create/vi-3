import { ServicePageLayout } from "@/components/ServicePageLayout";
import secureAccessImg from "@/assets/services/secure-access.jpg";

const SecureAccess = () => {
  return (
    <ServicePageLayout
      title="Secure Access"
      subtitle="Cybersecurity"
      description="Zero Trust secure access solutions to protect enterprise resources and enable secure remote work. We implement modern access controls that verify every user, device, and connection."
      image={secureAccessImg}
      features={[
        { title: "Zero Trust Architecture", description: "Never trust, always verify approach to access control." },
        { title: "ZTNA Implementation", description: "Zero Trust Network Access for secure application access." },
        { title: "Conditional Access", description: "Context-aware access policies based on risk signals." },
        { title: "MFA Integration", description: "Multi-factor authentication across all access points." },
        { title: "SSO Deployment", description: "Single Sign-On for seamless and secure user experience." },
        { title: "Access Governance", description: "Access reviews, certifications, and compliance reporting." }
      ]}
      keyBenefits={["Enhanced security posture", "Reduced attack surface", "Improved user experience", "Compliance readiness", "Secure remote access"]}
      relatedServices={[
        { title: "Digital Identity", slug: "digital-identity" },
        { title: "VPN Services", slug: "vpn-services" },
        { title: "Enterprise Security", slug: "enterprise-security" }
      ]}
    />
  );
};

export default SecureAccess;
