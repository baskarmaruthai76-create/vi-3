import { ServicePageLayout } from "@/components/ServicePageLayout";
import dataEncryptionImg from "@/assets/services/data-encryption.jpg";

const DataEncryption = () => {
  return (
    <ServicePageLayout
      title="Data Encryption"
      subtitle="Data & Analytics"
      description="Enterprise-grade data encryption services to protect sensitive information at rest and in transit. We implement comprehensive encryption strategies that ensure data security while maintaining operational efficiency."
      image={dataEncryptionImg}
      features={[
        { title: "Encryption at Rest", description: "Secure storage encryption for databases, files, and backups." },
        { title: "Encryption in Transit", description: "TLS/SSL implementation for secure data transmission." },
        { title: "Key Management", description: "Centralized encryption key management and rotation policies." },
        { title: "Database Encryption", description: "Transparent database encryption for sensitive data protection." },
        { title: "Application Encryption", description: "Application-level encryption for end-to-end data security." },
        { title: "Compliance Alignment", description: "Encryption strategies aligned with regulatory requirements." }
      ]}
      keyBenefits={["Data breach prevention", "Regulatory compliance", "Customer trust", "Secure data sharing", "Reduced risk exposure"]}
      relatedServices={[
        { title: "Data Protection", slug: "data-protection" },
        { title: "PKI", slug: "pki" },
        { title: "Secret Management", slug: "secret-management" }
      ]}
    />
  );
};

export default DataEncryption;
