import { ServicePageLayout } from "@/components/ServicePageLayout";
import cloudSecurityImg from "@/assets/services/cloud-security-service.jpg";

const CloudSecurity = () => {
  return (
    <ServicePageLayout
      title="Cloud Security"
      subtitle="Cloud Services"
      description="Comprehensive cloud security posture management and protection. We implement defense-in-depth security strategies to protect your cloud workloads and data."
      image={cloudSecurityImg}
      features={[
        { title: "CSPM Implementation", description: "Cloud Security Posture Management for continuous compliance." },
        { title: "CWPP Deployment", description: "Cloud Workload Protection Platform for runtime security." },
        { title: "Identity Security", description: "Cloud identity and access management implementation." },
        { title: "Data Protection", description: "Encryption, DLP, and data security controls." },
        { title: "Network Security", description: "Cloud network security architecture and controls." },
        { title: "Compliance Automation", description: "Automated compliance monitoring and remediation." }
      ]}
      keyBenefits={["Enhanced security posture", "Compliance assurance", "Risk reduction", "Data protection", "Threat prevention"]}
      relatedServices={[
        { title: "Enterprise Security", slug: "enterprise-security" },
        { title: "Secure Cloud Transformation", slug: "secure-cloud" },
        { title: "Threat Detection", slug: "threat-detection" }
      ]}
    />
  );
};

export default CloudSecurity;
