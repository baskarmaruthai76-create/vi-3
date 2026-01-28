import { ServicePageLayout } from "@/components/ServicePageLayout";
import secureCloudImg from "@/assets/services/secure-cloud-service.jpg";

const SecureCloud = () => {
  return (
    <ServicePageLayout
      title="Secure Cloud Transformation"
      subtitle="Migrate. Modernize. Secure."
      description="Enable secure, compliant, and scalable cloud adoption with a security-first transformation strategy across infrastructure, applications, and data."
      image={secureCloudImg}
      features={[
        {
          title: "Cloud Security Architecture",
          description: "Design secure cloud foundations aligned with industry best practices."
        },
        {
          title: "Zero Trust Implementation",
          description: "Adopt identity-centric zero-trust security models."
        },
        {
          title: "Secure Cloud Migration",
          description: "Risk-managed migration of workloads and data to the cloud."
        },
        {
          title: "Compliance & Governance",
          description: "Ensure regulatory compliance and cloud governance controls."
        },
        {
          title: "Cloud Threat Protection",
          description: "Detect and mitigate cloud-native security threats."
        },
        {
          title: "Continuous Security Monitoring",
          description: "Real-time visibility and cloud security posture management."
        }
      ]}
      keyBenefits={[
        "Reduced cloud security risks",
        "Regulatory and compliance alignment",
        "Secure and scalable cloud architecture",
        "Improved visibility and control",
        "Faster and safer cloud adoption",
        "Stronger data and identity protection"
      ]}
      relatedServices={[
        { title: "Cloud Strategy", slug: "cloud-strategy" },
        { title: "Enterprise Security", slug: "enterprise-security" },
        { title: "DevSecOps", slug: "devsecops" }
      ]}
    />
  );
};

export default SecureCloud;
