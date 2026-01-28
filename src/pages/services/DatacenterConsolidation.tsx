import { ServicePageLayout } from "@/components/ServicePageLayout";
import datacenterConsolidationImg from "@/assets/services/datacenter-consolidation-service.jpg";

const DatacenterConsolidation = () => {
  return (
    <ServicePageLayout
      title="Data Center Consolidation"
      subtitle="IT Infrastructure"
      description="Data center optimization, consolidation, and modernization strategies for efficiency."
      image={datacenterConsolidationImg}
      features={[
        { title: "Assessment", description: "Current state analysis and consolidation opportunities." },
        { title: "Consolidation Strategy", description: "Facility and infrastructure consolidation planning." },
        { title: "Workload Migration", description: "Application and workload relocation." },
        { title: "Infrastructure Right-sizing", description: "Resource optimization and decommissioning." },
        { title: "Power Optimization", description: "PUE improvement and power efficiency." },
        { title: "Project Execution", description: "End-to-end consolidation project management." }
      ]}
      keyBenefits={["Reduced footprint", "Cost savings", "Improved efficiency", "Simplified operations", "Environmental impact"]}
      relatedServices={[
        { title: "Data Center", slug: "data-center" },
        { title: "Cloud Migration", slug: "cloud-migration" },
        { title: "IT Infrastructure", slug: "it-infrastructure" }
      ]}
    />
  );
};

export default DatacenterConsolidation;
