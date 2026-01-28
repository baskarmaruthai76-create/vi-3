import { ServicePageLayout } from "@/components/ServicePageLayout";
import deploymentMigrationImg from "@/assets/services/deployment-migration-service.jpg";

const DeploymentMigration = () => {
  return (
    <ServicePageLayout
      title="Deployment, Upgradation & Migration"
      subtitle="IT Infrastructure"
      description="Infrastructure deployment, system upgrades, and migration services for seamless transformation."
      image={deploymentMigrationImg}
      features={[
        { title: "Infrastructure Deployment", description: "New infrastructure rollout and setup." },
        { title: "System Upgrades", description: "OS, firmware, and software upgrades." },
        { title: "Platform Migration", description: "Cross-platform infrastructure migrations." },
        { title: "Cutover Management", description: "Zero-downtime cutover planning and execution." },
        { title: "Validation Testing", description: "Post-deployment testing and validation." },
        { title: "Project Management", description: "End-to-end migration project management." }
      ]}
      keyBenefits={["Minimal disruption", "Risk mitigation", "Modern infrastructure", "Validated results", "Expert execution"]}
      relatedServices={[
        { title: "Cloud Migration", slug: "cloud-migration" },
        { title: "Data Center Consolidation", slug: "datacenter-consolidation" },
        { title: "IT Infrastructure", slug: "it-infrastructure" }
      ]}
    />
  );
};

export default DeploymentMigration;
