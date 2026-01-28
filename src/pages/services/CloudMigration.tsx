import { ServicePageLayout } from "@/components/ServicePageLayout";
import cloudSecureImg from "@/assets/services/cloud-migration-service.jpg";

const CloudMigration = () => {
  return (
    <ServicePageLayout
      title="Cloud Migration"
      subtitle="Cloud Services"
      description="Secure and seamless migration to cloud platforms with zero downtime. We execute comprehensive migration programs that minimize risk and maximize value realization."
      image={cloudSecureImg}
      features={[
        { title: "Migration Assessment", description: "Comprehensive application and infrastructure assessment for migration planning." },
        { title: "Lift & Shift", description: "Rapid rehosting of applications to cloud with minimal changes." },
        { title: "Re-platforming", description: "Application optimization during migration for cloud-native benefits." },
        { title: "Database Migration", description: "Secure database migration with minimal downtime and data integrity." },
        { title: "Cutover Planning", description: "Detailed cutover planning and execution for zero-downtime migration." },
        { title: "Post-Migration Support", description: "Hypercare support and optimization after migration completion." }
      ]}
      keyBenefits={["Zero downtime migration", "Data integrity assurance", "Risk mitigation", "Cost optimization", "Accelerated timelines"]}
      relatedServices={[
        { title: "Cloud Modernization", slug: "cloud-modernization" },
        { title: "Cloud Adoption", slug: "cloud-adoption" },
        { title: "Disaster Recovery", slug: "disaster-recovery" }
      ]}
    />
  );
};

export default CloudMigration;
