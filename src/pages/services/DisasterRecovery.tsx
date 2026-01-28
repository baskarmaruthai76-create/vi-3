import { ServicePageLayout } from "@/components/ServicePageLayout";
import disasterRecoveryImg from "@/assets/services/disaster-recovery-service.jpg";

const DisasterRecovery = () => {
  return (
    <ServicePageLayout
      title="Disaster Recovery"
      subtitle="IT Infrastructure"
      description="Disaster recovery planning, implementation, and testing for business resilience."
      image={disasterRecoveryImg}
      features={[
        { title: "DR Planning", description: "Disaster recovery strategy and planning." },
        { title: "DR Implementation", description: "DR site and infrastructure setup." },
        { title: "DR Testing", description: "Regular DR drills and testing programs." },
        { title: "Failover Solutions", description: "Automated failover and switchover mechanisms." },
        { title: "Cloud DR", description: "Cloud-based disaster recovery solutions." },
        { title: "Business Continuity", description: "Integrated BCP and DR programs." }
      ]}
      keyBenefits={["Business resilience", "Minimal downtime", "Data protection", "Regulatory compliance", "Recovery confidence"]}
      relatedServices={[
        { title: "Backup & Restore", slug: "backup-restore" },
        { title: "Data Center", slug: "data-center" },
        { title: "Cloud Operations", slug: "cloud-operations" }
      ]}
    />
  );
};

export default DisasterRecovery;
