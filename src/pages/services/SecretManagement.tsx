import { ServicePageLayout } from "@/components/ServicePageLayout";
import secretManagementImg from "@/assets/services/secret-management.jpg";

const SecretManagement = () => {
  return (
    <ServicePageLayout
      title="Secret Management"
      subtitle="Cybersecurity"
      description="Enterprise secret management solutions to securely store, manage, and rotate credentials, API keys, and certificates. We help organizations eliminate hardcoded secrets and implement centralized secrets governance."
      image={secretManagementImg}
      features={[
        { title: "Secrets Vault", description: "Centralized vault for storing and managing secrets securely." },
        { title: "Credential Rotation", description: "Automated credential rotation to reduce exposure risk." },
        { title: "API Key Management", description: "Secure management of API keys and tokens." },
        { title: "Certificate Management", description: "TLS/SSL certificate lifecycle management." },
        { title: "Dynamic Secrets", description: "On-demand secret generation for short-lived credentials." },
        { title: "Audit & Compliance", description: "Comprehensive audit logging and compliance reporting." }
      ]}
      keyBenefits={["Eliminated hardcoded secrets", "Reduced breach risk", "Automated rotation", "Centralized governance", "Compliance readiness"]}
      relatedServices={[
        { title: "PKI", slug: "pki" },
        { title: "Secure Access", slug: "secure-access" },
        { title: "Data Encryption", slug: "data-encryption" }
      ]}
    />
  );
};

export default SecretManagement;
