import { ServicePageLayout } from "@/components/ServicePageLayout";
import cloudOperationImg from "@/assets/services/cloud-operations-service.jpg";

const CloudOperations = () => {
  return (
    <ServicePageLayout
      title="Cloud Operations"
      subtitle="Cloud Services"
      description="24/7 cloud operations, monitoring, and management services. We provide comprehensive managed cloud services to ensure optimal performance, availability, and security."
      image={cloudOperationImg}
      features={[
        { title: "24/7 Monitoring", description: "Round-the-clock cloud infrastructure monitoring and alerting." },
        { title: "Incident Management", description: "Rapid incident response and resolution with defined SLAs." },
        { title: "Performance Optimization", description: "Continuous performance tuning and optimization." },
        { title: "Patch Management", description: "Automated patching and vulnerability management." },
        { title: "Backup Management", description: "Cloud backup management and disaster recovery." },
        { title: "Change Management", description: "Controlled change management with approval workflows." }
      ]}
      keyBenefits={["24/7 availability", "Reduced downtime", "Proactive management", "Expert support", "Cost efficiency"]}
      relatedServices={[
        { title: "Managed Services", slug: "managed-services" },
        { title: "Cloud Cost Optimization", slug: "cloud-cost-optimization" },
        { title: "AIOps", slug: "aiops" }
      ]}
    />
  );
};

export default CloudOperations;
