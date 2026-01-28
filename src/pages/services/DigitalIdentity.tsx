import { ServicePageLayout } from "@/components/ServicePageLayout";
import digitalIdentityImg from "@/assets/services/digital-identity-service.jpg";  

const DigitalIdentity = () => {
  return (
    <ServicePageLayout
      title="Digital Identity Management"
      subtitle="Cybersecurity"
      description="IAM solutions, SSO, and identity governance frameworks. We implement comprehensive identity management solutions that enable secure access while improving user experience."
      image={digitalIdentityImg}
      features={[
        { title: "Identity & Access Management", description: "Enterprise IAM platform implementation and optimization." },
        { title: "Single Sign-On", description: "SSO implementation for seamless user experience." },
        { title: "Multi-Factor Authentication", description: "MFA deployment for enhanced security." },
        { title: "Privileged Access Management", description: "PAM solutions for privileged account security." },
        { title: "Identity Governance", description: "IGA for access certifications and compliance." },
        { title: "Directory Services", description: "Active Directory and LDAP management." }
      ]}
      keyBenefits={["Enhanced security", "Improved compliance", "Better user experience", "Reduced risk", "Streamlined access"]}
      relatedServices={[
        { title: "Enterprise Security", slug: "enterprise-security" },
        { title: "GRC", slug: "grc" },
        { title: "PKI", slug: "pki" }
      ]}
    />
  );
};

export default DigitalIdentity;
