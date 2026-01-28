import { ServicePageLayout } from "@/components/ServicePageLayout";
import dataProtectionImg from "@/assets/images/services/data-protection.jpg";

const DataProtection = () => {
  return (
    <ServicePageLayout
      title="Privacy & Data Protection"
      subtitle="Cybersecurity"
      description="Data privacy compliance and protection strategies. We help organizations implement comprehensive data protection programs that ensure privacy compliance and data security."
      image={dataProtectionImg}
      features={[
        { title: "Privacy Assessment", description: "Data privacy impact assessments and gap analysis." },
        { title: "GDPR Compliance", description: "GDPR implementation and compliance programs." },
        { title: "Data Classification", description: "Data discovery, classification, and labeling." },
        { title: "DLP Implementation", description: "Data Loss Prevention solution deployment." },
        { title: "Encryption Services", description: "Data encryption at rest and in transit." },
        { title: "Privacy by Design", description: "Privacy-first approach to system design." }
      ]}
      keyBenefits={["Privacy compliance", "Data security", "Reduced breach risk", "Customer trust", "Regulatory alignment"]}
      relatedServices={[
        { title: "GRC", slug: "grc" },
        { title: "Enterprise Security", slug: "enterprise-security" },
        { title: "PKI", slug: "pki" }
      ]}
    />
  );
};

export default DataProtection;
