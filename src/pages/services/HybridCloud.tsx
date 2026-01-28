import { ServicePageLayout } from "@/components/ServicePageLayout";
import hybridCloudImg from "@/assets/services/hybrid-cloud-service.jpg";

const HybridCloud = () => {
  return (
    <ServicePageLayout
      title="Hybrid Cloud"
      subtitle="Cloud Services"
      description="Hybrid cloud architecture connecting on-premise and cloud environments. We design and implement hybrid solutions that provide the flexibility of public cloud with the control of private infrastructure."
      image={hybridCloudImg}
      features={[
        { title: "Hybrid Architecture", description: "Design seamless hybrid cloud architectures for your workloads." },
        { title: "Connectivity Solutions", description: "Secure connectivity between on-premise and cloud environments." },
        { title: "Workload Placement", description: "Optimal workload placement across hybrid infrastructure." },
        { title: "Unified Management", description: "Single pane of glass management for hybrid environments." },
        { title: "Data Integration", description: "Seamless data integration across hybrid platforms." },
        { title: "Disaster Recovery", description: "Hybrid DR strategies leveraging both environments." }
      ]}
      keyBenefits={["Best of both worlds", "Flexibility", "Cost optimization", "Data residency", "Gradual migration"]}
      relatedServices={[
        { title: "Private Cloud", slug: "private-cloud" },
        { title: "Cloud Migration", slug: "cloud-migration" },
        { title: "Cloud Orchestration", slug: "cloud-orchestration" }
      ]}
    />
  );
};

export default HybridCloud;
